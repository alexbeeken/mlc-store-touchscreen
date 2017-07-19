import Ember from 'ember';

const { inject, run } = Ember;
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
  switchDelayReturnValue: null,
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
      run.cancel(this.get('switchDelayReturnValue'))
      run.cancel(this.get('switchReturnValue'))
      var returnValue = run.later(this, function() {
          this.send('startSwitching')
      }, switchDelayTime)
      this.set('switchDelayReturnValue', returnValue)
    },
    startSwitching: function() {
      if (this.isDestroyed) {
        return;
      }
      if (!this.get('media.isMobile')) {
        var returnValue = run.later(this, function() {
            var currentIdx = this.get('currentSlideIdx')
            this.send('switchIdx', (currentIdx + 1) % 4)
            this.send('startSwitching')
        }, slideInterval)
        this.set('switchReturnValue', returnValue)
      }
    }
  }
});
