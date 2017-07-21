import Ember from 'ember';

const { computed, inject } = Ember;
const { service } = inject;

export default Ember.Component.extend({
  media: service(),
  exhibit: null,
  linkStyle: computed( function() {
    return "background-color: "
      + this.get('exhibit.linkColor')
      + ";"
  }),
});
