import Ember from 'ember';
import { defaults } from '../content/default';

export default Ember.Controller.extend({
  title: defaults.title,
  home: defaults.home
})
