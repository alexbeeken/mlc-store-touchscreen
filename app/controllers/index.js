import Ember from 'ember';
const { computed, inject } = Ember;
const { service } = inject;
import { content as negitContent } from '../content/negit';
import { content as tufaContent } from '../content/tufa_benchmark';


export default Ember.Controller.extend({
  media: inject.service(),
  links: computed( function() {
    return [
      negitContent,
      tufaContent,
      negitContent
    ]
  }),
  showForwardArrow: computed( function() {
    return !this.get('media.isMobile')
  }),
  showBackArrow: computed( function() {
    return !this.get('media.isMobile')
  })
})
