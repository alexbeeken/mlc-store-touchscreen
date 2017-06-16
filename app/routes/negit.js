import Ember from 'ember';
import { content } from '../content/negit';
import { defaults } from '../content/default';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    this.controllerFor('application').set('home', true);
    this.controllerFor('application').set('title', content.title);
  },

  resetController(controller, isExiting, transition) {
    this.controllerFor('application').set('home', defaults.home);
    this.controllerFor('application').set('title', defaults.title);
  }
});
