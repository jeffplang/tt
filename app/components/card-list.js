import Ember from 'ember';

const {
  inject: { service },
  computed: { notEmpty }
} = Ember;

export default Ember.Component.extend({
  store: service(),
  editingCard: null,
  isEditingCard: notEmpty('editingCard'),

  actions: {
    save() {
      this.get('list').save()
    },

    addCard() {
      let newCard = this.get('store').createRecord('card', {
        list: this.get('list')
      });
      this.set('editingCard', newCard);
    },

    editCard(card) {
      this.set('editingCard', card);
    },

    hideCardModal() {
      if(this.get('editingCard.isNew')) {
        this.get('editingCard').destroyRecord();
      }

      this.set('editingCard', null);
    }
  }
});
