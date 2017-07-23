import Ember from 'ember';

const { inject, run, computed } = Ember;
const { service } = inject;

const slideInterval = 6000;
const switchDelayTime = 4000;

export default Ember.Component.extend({
  slide: null,
});
