import DS from 'ember-data';

const { Model } = DS

export default Model.extend({
  year: DS.attr('string'),
  levelMeter: DS.attr('string'),
  levelFeet: DS.attr('string'),
  path: DS.attr('string'),
  exhibit: DS.belongsTo('exhibit')
});
