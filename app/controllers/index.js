import Ember from 'ember';
const { computed, inject } = Ember;
const { service } = inject;
import { content as negitContent } from '../content/negit';
import { content as tufaContent } from '../content/tufa_benchmark';

export default Ember.Controller.extend({
  screen: service(),
  media: service(),
  exhibits: computed( function() {
    return this.store.peekAll('exhibit')
  }),
  showForwardArrow: computed( function() {
    return !this.get('media.isMobile') && this.get('exhibits').length > 3
  }),
  showBackArrow: computed( function() {
    return !this.get('media.isMobile') && this.get('exhibits').length > 3
  })
})
