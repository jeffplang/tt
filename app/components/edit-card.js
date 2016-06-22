import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['edit-card-form'],

  formTitle: computed.oneWay('card.title'),
  formDescription: computed.oneWay('card.description'),

  isConfirmingDelete: false,

  actions: {
    update() {
      let attrs = {
        title: this.get('formTitle'),
        description: this.get('formDescription')
      };

      this.get('update')(attrs);
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
