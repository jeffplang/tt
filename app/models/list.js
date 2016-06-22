import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
import Ember from 'ember';

const { RSVP, isBlank } = Ember;

export default Model.extend({
  title: attr('string'),
  cards: hasMany('card'),

  invalid: false,

  save() {
    if (this.validate()) {
      return this._super(...arguments);
    } else {
      return RSVP.reject();
    }
  },
  
  validate() {
    if (isBlank(this.get('title'))) {
      this.set('invalid', true);
    } else {
      this.set('invalid', false);
    }

    return !this.get('invalid');
  }
});
