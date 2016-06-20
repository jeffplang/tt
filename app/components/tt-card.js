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
      let card = this.get('card');

      this.send('hideEditModal');
      
      card.setProperties(attrs);
      card.save();
    },

    cardDeleted() {
      this.send('hideEditModal');

      this.get('onDelete')(this.get('card'));
    },

    cancelCreate() {
      this.get('card').destroyRecord();
    },
    
    hideEditModal() {
      this.set('isEditing', false);
    }
  }
});
