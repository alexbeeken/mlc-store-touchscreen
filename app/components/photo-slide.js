import Ember from 'ember';

const { computed } = Ember;

const slideInterval = 8000;

export default Ember.Component.extend({
  slides: [],
  currentSlideIdx: 0,
  currentSlide: computed('slides', 'currentSlideIdx', function() {
    return this.get('slides')[this.get('currentSlideIdx')]
  }),
  backgroundImage: computed('currentSlide', function() {
    return "background-image: "
      + "url('"
      + this.get('currentSlide.path')
      + "');"
      + "height: "
      + this.get('currentSlide.height')
      + "px; width: "
      + this.get('currentSlide.width')
      + 'px;'
  }),
  init: function() {
    this._super();
    this.send('startSwitching');
  },
  actions: {
    switchIdx: function(idx) {
      this.set('currentSlideIdx', idx);
    },
    startSwitching: function(idx = 0) {
        Ember.run.later(this, function() {
          var currentIdx = this.get('currentSlideIdx')
          var newIdx = (currentIdx + 1) % 4
          this.send('switchIdx', (currentIdx + 1) % 4)
          this.send('startSwitching', newIdx)
        }, slideInterval)
      }
    }
  });
