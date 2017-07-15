import Ember from 'ember';
import { defaults } from '../content/default';
const { inject } = Ember;
const { service } = inject;

export default Ember.Controller.extend({
  media: service(),
  title: defaults.title,
  home: defaults.home
})
