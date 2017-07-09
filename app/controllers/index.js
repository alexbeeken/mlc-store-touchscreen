import Ember from 'ember';
const { computed, inject } = Ember;
const { service } = inject;
import { content as negitContent } from '../content/negit';
import { content as tufaContent } from '../content/tufa_benchmark';

export default Ember.Controller.extend({
  screen: inject.service(),
  media: inject.service(),
  links: computed( function() {
    return [
      negitContent,
      tufaContent
    ]
  }),
  showForwardArrow: computed( function() {
    return !this.get('media.isMobile') && this.get('links').length > 3
  }),
  showBackArrow: computed( function() {
    return !this.get('media.isMobile') && this.get('links').length > 3
  })
})