import Ember from 'ember';
import { defaults } from '../content/default';
const { computed } = Ember;

export default Ember.Controller.extend({
  title: defaults.title,
  home: defaults.home
})
