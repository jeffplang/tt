import Ember from 'ember';

const { RSVP, inject: { service } } = Ember;

export default Ember.Component.extend({
  classNames: 'card-list',
  store: service(),

  actions: {
    save() {
      this.get('list').save();
    },

    addCard() {
      this.get('store').createRecord('card', {
        list: this.get('list')
      });
    },

    cancel() {
      this.get('list').destroyRecord();
    },

    deleteCard(card) {
      card.destroyRecord();
    },

    updateCard(card, attrs) {
      card.setProperties(attrs);

      return card.save()
        .catch(() => {
          card.rollbackAttributes();

          return RSVP.reject();
        });
    }
  }
});
