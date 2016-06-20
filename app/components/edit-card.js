import Ember from 'ember';

export default Ember.Component.extend({
  card: null,

  actions: {
    save() {
      let that = this;
      this.get('card').save().then(_ => that.sendAction('didSave'));
    },

    close() {
      this.sendAction('close');
    }
  }
});
