import Ember from 'ember';

const { inject: { service } } = Ember;

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
    }
  }
});
