import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['edit-card-form'],

  title: computed.oneWay('card.title'),
  description: computed.oneWay('card.description'),

  isConfirmingDelete: false,

  actions: {
    update() {
      let title = this.get('title');
      let description = this.get('description');

      this.get('update')({ title, description });
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
