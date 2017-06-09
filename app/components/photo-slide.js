import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  slides: [],
  currentSlideIdx: 0,
  currentSlide: computed('slides', 'currentSlideIdx', function() {
    return this.get('slides')[this.get('currentSlideIdx')]
  }),
  backgroundImage: computed('currentSlide', function() {
    return "background-image: "
      + "url('"
      + this.get('currentSlide.path')
      + "');"
      + "height: "
      + this.get('currentSlide.height') 
      + "px; width: "
      + this.get('currentSlide.width')
      + 'px;'
  }),
  actions: {
    switchIdx: function(idx) {
      this.set('currentSlideIdx', idx);
    }
  }
});
