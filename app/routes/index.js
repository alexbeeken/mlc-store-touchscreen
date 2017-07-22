import Ember from 'ember';
import { defaults } from '../content/default';
const { computed, inject } = Ember;
const { service } = inject;

export default Ember.Route.extend({
  store: service(),
  model: function() {
    return this.store.peekAll('exhibit');
  }
});
