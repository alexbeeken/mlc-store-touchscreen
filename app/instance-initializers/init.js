import { content as negitContent } from '../content/negit';
import { content as tufaContent } from '../content/tufa_benchmark';

export function initialize(appInstance) {
  let store = appInstance.lookup('service:store')
  var exhibits = [
    negitContent,
    tufaContent
  ]
  exhibits.forEach( (exhibit) => {
    exhibit.slides.forEach( (photo) => {
      store.createRecord('photo', {
        year: photo.year,
        levelMeter: photo.levelMeter,
        levelFeet: photo.levelFeet,
        path: photo.path,
        exhibit: exhibit.route
      })
    })
  })

  exhibits.forEach( (exhibit) => {
    store.createRecord('exhibit', {
      title: exhibit.title,
      route: exhibit.route,
      linkColor: exhibit.linkColor
    })
  })
}

export default {
  name: 'init',
  initialize
};
