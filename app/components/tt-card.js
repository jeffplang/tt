import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
  isEditing: false,
  
  shouldShowModal: computed('isEditing', 'card.isNew', function() {
    return this.get('isEditing') || this.get('card.isNew');
  }),

  actions: {
    edit() {
      this.set('isEditing', true);
    },

    save() {
      let that = this

      this.get('card').save().then(() => that.send('hideModal'));
    },

    hideModal() {
      let card = this.get('card');

      if (card.get('isNew')) {
        card.deleteRecord();
      }

      this.set('isEditing', false);
    }
  }
});
