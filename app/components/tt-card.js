import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['tt-card'],
  isEditing: false,
  isConfirmingDelete: false,
  
  shouldShowEditModal: computed('isEditing', 'card.isNew', function() {
    return this.get('isEditing') || this.get('card.isNew');
  }),

  actions: {
    edit() {
      this.set('isEditing', true);
    },

    save() {
      let that = this;

      this.get('card').save().then(() => {
        that.send('hideEditModal');
      });
    },

    delete() {
      this.set('isConfirmingDelete', true);
    },

    confirmDelete() {
      let that = this;

      this.get('card').destroyRecord().then(() => {
        that.set('isConfirmingDelete', false);
      });
    },

    cancelDelete() {
      this.set('isConfirmingDelete', false);
    },

    cancelCreate() {
      this.get('card').destroyRecord();
    },
    
    hideEditModal() {
      let card = this.get('card');

      if (card.get('isNew')) {
        card.deleteRecord();
      }

      this.set('isEditing', false);
    }
  }
});
