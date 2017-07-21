import { defaults } from '../content/default';

export function initialize(appInstance) {
  let store = appInstance.lookup('service:store')
  var exhibits = defaults.exhibits

  exhibits.forEach( (exhibit) => {
    store.createRecord('exhibit', {
      title: exhibit.title,
      route: exhibit.route,
      linkColor: exhibit.linkColor
    })
  })

  let exhibitRecords = store.peekAll('exhibit').toArray()

  for (var index = 0; index < exhibits.length; index++) {
    console.log(exhibitRecords)
    console.log(exhibitRecords[index])
    exhibits[index].slides.forEach( (photo) => {
      store.createRecord('photo', {
        year: photo.year,
        levelMeter: photo.levelMeter,
        levelFeet: photo.levelFeet,
        path: photo.path,
        exhibit: exhibitRecords[index].id
      })
    })
  }
}

export default {
  name: 'init',
  initialize
};
