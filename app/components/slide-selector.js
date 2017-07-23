import Ember from 'ember'

const { inject, run, computed } = Ember
const { service } = inject

const slideInterval = 6000
const switchDelayTime = 4000
const photoCount = 4

export default Ember.Component.extend({
  media: service(),
  currentSlide: computed( function() {
    // initial value, gets overwritten
    return this.get('slides').toArray()[0]
  }),
  currentSlideIdx: computed( function() {
    // initial value, gets overwritten
    this.get('slides')[0]
  }),
  exhibit: null,
  init: function() {
    this._super();
    this.send('switchDelay');
  },
  referenceIdx: computed('currentSlideIdx', 'showingSlideIdx', function() {
    var difference = this.get('currentSlideIdx') - this.get('showingSlideIdx')
    if (difference >= 0 && difference <= (photoCount - 1)) {
      return difference
    }
    return null
  }),
  showBackArrow: computed('showingSlideIdx', function() {
    return this.get('showingSlideIdx') > 0
    && this.get('slides').length > 2
  }),
  showForwardArrow: computed('showingSlideIdx', function() {
    return this.get('showingSlideIdx') < (this.get('slides').length - photoCount)
    && this.get('slides').length > 2
  }),
  showingSlideIdx: 0,
  showingSlides: computed('showingSlideIdx', 'currentSlideIdx', function() {
    var idx = this.get('showingSlideIdx')
    return this.get('slides').slice(idx, idx+photoCount)
  }),
  slides: computed( function() {
    return this.get('exhibit.photos').toArray()
  }),
  switchReturnValue: null,
  switchDelayReturnValue: null,
  actions: {
    switchIdx: function(refIdx) {
      this.set('currentSlideIdx', refIdx)
      var currentSlide = this.get('slides')[refIdx]
      this.set('currentSlide', currentSlide)
    },
    switchIdxManually: function(idx) {
      var showingIdx = this.get('showingSlideIdx')
      this.send('switchIdx', idx+showingIdx)
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
            var currentSlideIdx = this.get('currentSlideIdx')
            this.send('switchIdx', (currentSlideIdx + 1) % this.get('slides').length)
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
