import Ember from 'ember';
import { content } from '../content/negit';
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
  })
})
