import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
import Ember from 'ember';

const { RSVP, isBlank } = Ember;

export default Model.extend({
  list: belongsTo(),
  title: attr('string'),
  description: attr('string'),

  save() {
    if (this.validate()) {
      return this._super(...arguments);
    } else {
      return RSVP.reject();
    }
  },
  
  validate() {
    this.get('errors').clear();

    if (isBlank(this.get('title'))) {
      this.get('errors').add('title', 'Title is required');
    }

    return this.get('isValid');
  }
});
