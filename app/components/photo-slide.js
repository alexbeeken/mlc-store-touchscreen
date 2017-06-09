import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  slides: [],
  currentSlideIdx: 0,
  currentSlide: computed('slides', 'currentSlideIdx', function() {
    return this.get('slides')[this.get('currentSlideIdx')]
  }),
  actions: {
    switchIdx: function(idx) {
      this.set('currentSlideIdx', idx);
    }
  }
});
