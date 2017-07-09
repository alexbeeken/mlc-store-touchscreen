import Ember from 'ember';
import { defaults } from '../content/default';
const { computed, inject } = Ember;
const { service } = inject;

export default Ember.Controller.extend({
  media: inject.service(),
  title: defaults.title,
  home: defaults.home
})
