import Ember from 'ember';
import { content } from '../content/tufa_benchmark';
const { computed } = Ember;

export default Ember.Controller.extend({
  slides: computed( function() {
    var photos = []
    content.slides.forEach( (photo) => {
      photos.push(
        this.get('store').createRecord('photo', {
          year: photo.year,
          levelMeter: photo.levelMeter,
          levelFeet: photo.levelFeet,
          path: photo.path
        })
      )
    })
    return photos
  }),
  firstSlide: computed( function() {
    var slides = this.get('slides')
    return slides[0]
  })
})
