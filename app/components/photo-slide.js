import Ember from 'ember';

const { computed, inject } = Ember;
const { service } = inject;

const slideInterval = 8000;

export default Ember.Component.extend({
  screen: inject.service(),
  media: inject.service(),
  slides: [],
  currentSlideIdx: 0,
  currentSlide: computed('slides', 'currentSlideIdx', function() {
    return this.get('slides')[this.get('currentSlideIdx')]
  }),
  init: function() {
    this._super();
    this.send('startSwitching');
  },
  actions: {
    switchIdx: function(idx) {
      this.set('currentSlideIdx', idx);
    },
    startSwitching: function(idx = 0) {
      if (!this.get('media.isMobile')) {
        Ember.run.later(this, function() {
            var currentIdx = this.get('currentSlideIdx')
            var newIdx = (currentIdx + 1) % 4
            this.send('switchIdx', (currentIdx + 1) % 4)
            this.send('startSwitching', newIdx)
        }, slideInterval)
      }
    }
  }
});
