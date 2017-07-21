import Ember from 'ember';
const { computed } = Ember;

export default Ember.Controller.extend({
  slides: computed( function() {
    return this.store.peekAll('photo').filter( (item) => {
      return item.get('exhibit')=='negit';
    })
  }),
  firstSlide: computed( function() {
    var slides = this.get('slides')
    return slides[0]
  })
})
