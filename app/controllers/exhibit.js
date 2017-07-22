import Ember from 'ember';
const { computed, inject } = Ember;
const { service } = inject;

export default Ember.Controller.extend({
  store: service(),
  slides: computed('model', function() {
    return this.get('model.photos').toArray()
  }),
  firstSlide: computed( function() {
    return this.get('slides')[0]
  })
})
