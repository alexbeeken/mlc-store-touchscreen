import Ember from 'ember';

const { inject, run, computed } = Ember;
const { service } = inject;

const slideInterval = 6000;
const switchDelayTime = 4000;

export default Ember.Component.extend({
  exhibit: null,
  media: service(),
  slides: computed( function() {
    return this.get('exhibit.photos').toArray()
  }),
  showingSlides: computed('showingSlideIdx', function() {
    var idx = this.get('showingSlideIdx')
    return this.get('slides').slice(idx, idx+4)
  }),
  currentSlideIdx: 0,
  showingSlideIdx: 0,
  currentSlide: computed( function() {
    return this.get('slides').toArray()[0]
  }),
  switchReturnValue: null,
  switchDelayReturnValue: null,
  init: function() {
    this._super();
    this.send('switchDelay');
  },
  showForwardArrow: computed('showingSlideIdx', function() {
    return this.get('showingSlideIdx') < (this.get('slides').length - 4)
    && this.get('slides').length > 2
  }),
  showBackArrow: computed('showingSlideIdx', function() {
    return this.get('showingSlideIdx') > 0
    && this.get('slides').length > 2
  }),
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
    },
    changeShowingIdx: function(change) {
      var idx = this.get('showingSlideIdx')
      var newIdx = idx+change
      this.set('showingSlideIdx', newIdx)
    }
  }
});
