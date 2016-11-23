import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  email: DS.attr('string'),
  message: DS.attr('string'),
  isValidEmail:Ember.computed.match('email',/^.+@.+\..+$/),
  isValidMEssage:Ember.computed.gte('message.length',5),
  isValid:Ember.computed.and('isValidEmail','isValidMEssage')
});
