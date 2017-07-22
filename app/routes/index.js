import Ember from 'ember';
const { inject } = Ember;
const { service } = inject;

export default Ember.Route.extend({
  store: service(),
  model: function() {
    return this.store.peekAll('exhibit');
  }
});
