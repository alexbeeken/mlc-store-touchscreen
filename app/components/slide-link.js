import Ember from 'ember'
const { computed } = Ember

export default Ember.Component.extend({
  index: null,
  slide: null,
  selected: false,
  status: computed('selected', function() {
    if (this.get('selected')) {
      return 'selected'
    }
    return 'unselected'
  }),
  actions: {
    switchIdxManually: function(idx) {
      this.sendAction('switchIdxManually', idx);
    }
  }
});
