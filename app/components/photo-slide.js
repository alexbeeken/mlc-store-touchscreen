import Ember from 'ember';

const { computed, inject, run } = Ember;
const { service } = inject;

const slideInterval = 6000;
const switchDelayTime = 4000;

export default Ember.Component.extend({
  screen: service(),
  media: service(),
  slides: [],
  currentSlideIdx: 0,
  currentSlide: null,
  switchReturnValue: null,
  init: function() {
    this._super();
    this.send('switchDelay');
  },
  actions: {
    switchIdx: function(idx) {
      this.set('currentSlideIdx', idx)
      this.set('currentSlide', this.get('slides')[idx])
    },
    switchIdxManually: function(idx) {
      this.send('switchIdx', idx)
      this.send('switchDelay')
    },
    switchDelay: function() {
      run.cancel(this.get('switchReturnValue'))
      run.later(this, function() {
          this.send('startSwitching')
      }, switchDelayTime)
    },
    startSwitching: function() {
      if (!this.get('media.isMobile')) {
        var returnValue = run.later(this, function() {
            var currentIdx = this.get('currentSlideIdx')
            var newIdx = (currentIdx + 1) % 4
            this.send('switchIdx', (currentIdx + 1) % 4)
            this.send('startSwitching')
        }, slideInterval)
        this.set('switchReturnValue', returnValue)
      }
    }
  }
});
