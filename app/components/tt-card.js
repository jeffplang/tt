import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['tt-card'],
  isEditing: false,

  actions: {
    edit() {
      this.set('isEditing', true);
    },

    save() {
      this.get('card').save();
    },

    cardUpdated(attrs) {
      this.get('onUpdate')(this.get('card'), attrs)
        .then(() => this.send('hideEditModal'));
    },

    cardDeleted() {
      this.send('hideEditModal');

      this.get('onDelete')(this.get('card'));
    },

    cancelCreate() {
      this.get('onDelete')(this.get('card'));
    },
    
    hideEditModal() {
      this.set('isEditing', false);
    }
  }
});
