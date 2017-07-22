import Ember from 'ember';
import { index } from '../content/index';
const { inject } = Ember;
const { service } = inject;

export default Ember.Route.extend({
  store: service(),
  model: function(params) {
    return this.store.peekRecord('exhibit', params.id);
  },
  setupController(controller, model) {
    this.controllerFor('application').set('home', true);
    controller.set('model', model);
    this.controllerFor('application').set('title', model.get('title'));
  },
  resetController() {
    this.controllerFor('application').set('home', index.home);
    this.controllerFor('application').set('title', index.title);
  }
});
