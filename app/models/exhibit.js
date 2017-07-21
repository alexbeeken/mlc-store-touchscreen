import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  route: DS.attr('string'),
  linkColor: DS.attr('string'),
  photo: DS.hasMany('photo')
});
