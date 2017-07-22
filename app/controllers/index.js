import Ember from 'ember';
const { computed, inject } = Ember;
const { service } = inject;

export default Ember.Controller.extend({
  screen: service(),
  media: service(),
  exhibits: computed( function() {
    return this.store.peekAll('exhibit')
  }),
  showForwardArrow: computed( function() {
    return !this.get('media.isMobile') && this.get('exhibits').length > 3
  }),
  showBackArrow: computed( function() {
    return !this.get('media.isMobile') && this.get('exhibits').length > 3
  })
})
