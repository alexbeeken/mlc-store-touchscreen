import Ember from 'ember';
const { computed, inject } = Ember;
const { service } = inject;
import { content as negitContent } from '../content/negit';
import { content as tufaContent } from '../content/tufa_benchmark';

export default Ember.Controller.extend({
  screen: service(),
  media: service(),
  links: computed( function() {
    var exhibits = []
    var content = [negitContent, tufaContent]
    content.forEach( (content) => {
      exhibits.push(
        this.get('store').createRecord('exhibit', {
          title: content.title,
          route: content.route,
          linkColor: content.linkColor
        })
      )
    })
    return exhibits
  }),
  showForwardArrow: computed( function() {
    return !this.get('media.isMobile') && this.get('links').length > 3
  }),
  showBackArrow: computed( function() {
    return !this.get('media.isMobile') && this.get('links').length > 3
  })
})
