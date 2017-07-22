import Ember from 'ember';

const { computed, inject, String } = Ember;
const { service } = inject;
const { htmlSafe } = String;

export default Ember.Component.extend({
  media: service(),
  exhibit: null,
  linkStyle: computed( function() {
    var color = this.get('exhibit.linkColor')
    return htmlSafe("background-color: "
        + color
        + ";")
  }),
});
