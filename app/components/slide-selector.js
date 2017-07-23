import Ember from 'ember'

const { inject, run, computed } = Ember
const { service } = inject
const { alias } = computed

const slideInterval = 6000
const switchDelayTime = 4000
const photoCount = 4

export default Ember.Component.extend({
  media: service(),
  currentSlide: computed( function() {
    // initial value, gets overwritten
    return this.get('slides')[0]
  }),
  currentSlideIdx: 0,
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
    && this.get('slideCount') > 2
  }),
  showForwardArrow: computed('showingSlideIdx', function() {
    return this.get('showingSlideIdx') < (this.get('slideCount') - photoCount)
    && this.get('slideCount') > 2
  }),
  showingSlideIdx: 0,
  showingSlides: computed('showingSlideIdx', 'currentSlideIdx', function() {
    var idx = this.get('showingSlideIdx')
    return this.get('slides').slice(idx, idx+photoCount)
  }),
  slideCount: computed( function() { this.get('slideCount') }),
  slides: computed( function() {
    return this.get('exhibit.photos').toArray()
  }),
  switchReturnValue: null,
  switchDelayReturnValue: null,
  actions: {
    switchIdx: function(idx) {
      this.set('currentSlideIdx', idx)
      var currentSlide = this.get('slides')[idx]
      this.set('currentSlide', currentSlide)
    },
    switchIdxManually: function(refIdx) {
      var showingIdx = this.get('showingSlideIdx')
      this.send('switchIdx', refIdx+showingIdx)
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
            this.send('switchIdx', (currentSlideIdx + 1) % this.get('slideCount'))
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
