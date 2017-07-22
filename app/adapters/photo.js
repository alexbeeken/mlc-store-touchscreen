import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  counter: 0,
  generateIdForRecord: function() {
    var counter = this.get('counter')
    this.set('counter', counter + 1)
    return counter
  }
});
