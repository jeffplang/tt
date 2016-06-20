import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['edit-card-form'],

  title: null,
  description: null,
  isConfirmingDelete: false,

  actions: {
    update() {
      let attrs = {
        title: this.get('title'),
        description: this.get('description')
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
