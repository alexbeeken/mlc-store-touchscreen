import Ember from 'ember';

const { computed, inject } = Ember;
const { service } = inject;

const slideInterval = 8000;

export default Ember.Component.extend({
  screen: service(),
  media: service(),
  slides: [],
  currentSlideIdx: 0,
  currentSlide: null,
  init: function() {
    this._super();
    this.send('startSwitching');
  },
  actions: {
    switchIdx: function(idx) {
      this.set('currentSlideIdx', idx);
      this.set('currentSlide', this.get('slides')[idx])
    },
    startSwitching: function() {
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
