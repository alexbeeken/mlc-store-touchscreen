import Ember from 'ember';
import { tufaContent } from '../content/tufa_benchmark';
import { defaults } from '../content/default';

export default Ember.Route.extend({
  setupController: function() {
    this.controllerFor('application').set('home', true);
    this.controllerFor('application').set('title', tufaContent.title);
  },

  resetController() {
    this.controllerFor('application').set('home', defaults.home);
    this.controllerFor('application').set('title', defaults.title);
  }
});
