import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  backgroundImage: computed('currentSlide', function() {
    return "background-image: "
      + "url('"
      + this.get('imagePath')
      + "');"
  }),
});
