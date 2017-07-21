import Ember from 'ember';
import { negitContent } from '../content/negit';
import { defaults } from '../content/default';

export default Ember.Route.extend({
  setupController: function() {
    this.controllerFor('application').set('home', true);
    this.controllerFor('application').set('title', negitContent.title);
  },

  resetController() {
    this.controllerFor('application').set('home', defaults.home);
    this.controllerFor('application').set('title', defaults.title);
  }
});
