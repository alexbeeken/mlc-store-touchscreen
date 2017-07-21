import { defaults } from '../content/default';

export function initialize(appInstance) {
  let store = appInstance.lookup('service:store')
  var exhibits = defaults.exhibits

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
