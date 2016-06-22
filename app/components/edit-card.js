import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['edit-card-form'],

  title: computed.oneWay('card.title'),
  description: computed.oneWay('card.description'),

  hasTriedSave: false,
  isConfirmingDelete: false,

  invalid: computed.and('hasTriedSave', 'card.invalid'),

  actions: {
    update() {
      let title = this.get('title');
      let description = this.get('description');

      this.get('update')({ title, description });
      this.set('hasTriedSave', true);
    },

    delete() {
      this.set('isConfirmingDelete', true);
    },

    confirmDelete() {
      this.get('delete')();
    },

    cancelDelete() {
      this.set('isConfirmingDelete', false);
    },

    close() {
      this.get('close')();
    }
  }
});
