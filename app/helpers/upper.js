import Ember from 'ember';

const {
  Helper,
  String
} = Ember;

export default Helper.extend({
  compute(params) {
    return params[0].toUpperCase();
  }
});
