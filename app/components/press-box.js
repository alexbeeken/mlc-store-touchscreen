import Ember from 'ember';

const { computed, inject } = Ember;
const { service } = inject;

export default Ember.Component.extend({
  media: inject.service(),
  backgroundImage: computed('currentSlide', function() {
    return "background-image: "
      + "url('"
      + this.get('imagePath')
      + "');"
  }),
});
