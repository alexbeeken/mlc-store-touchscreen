import { defaults } from '../content/index';

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
    var photoRecord;
    exhibits[index].slides.forEach( (photo) => {
      photoRecord = store.createRecord('photo', {
        year: photo.year,
        levelMeter: photo.levelMeter,
        levelFeet: photo.levelFeet,
        path: photo.path,
        paragraph: photo.paragraph,
        exhibit: exhibitRecords[index].id
      })
      exhibitRecords[index].get('photos').pushObject(photoRecord)
    })
  }
}

export default {
  name: 'init',
  initialize
};
