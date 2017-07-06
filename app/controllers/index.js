import Ember from 'ember';
const { computed } = Ember;
import { content as negitContent } from '../content/negit';
import { content as tufaContent } from '../content/tufa_benchmark';

export default Ember.Controller.extend({
  links: computed( function() {
    return [
      negitContent,
      tufaContent
    ]
  })
})
