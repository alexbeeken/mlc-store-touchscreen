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
  showingSlides: computed('showingSlideIdx', 'currentSlideIdx', function() {
    var idx = this.get('showingSlideIdx')
    return this.get('slides').slice(idx, idx+4)
  }),
  currentSlideIdx: computed( function() {
    this.get('slides')[0]
  }),
  showingSlideIdx: 0,
  referenceIdx: computed('currentSlideIdx', 'showingSlideIdx', function() {
    var currentIdx = this.get('currentSlideIdx')
    var showingIdx = this.get('showingSlideIdx')
    var difference = currentIdx - showingIdx
    if (difference >= 0 && difference <= 3) {
      return difference
    } else {
      return null
    }
  }),
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
            var currentIdx = this.get('currentSlideIdx')
            this.send('switchIdx', (currentIdx + 1) % this.get('slides').length)
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
