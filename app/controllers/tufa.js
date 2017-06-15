import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  slides: function() {
      var xml = $.parseXML('content/tufa_benchmark.xml');
  }
})
