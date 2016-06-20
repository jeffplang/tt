import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const defaultList = this.store.createRecord('list', {
      title: 'Default List'
    });

    const that = this;

    return defaultList.save().then(() => {
      return that.store.findAll('list');
    });
  },

  actions: {
    addList() {
      this.store.createRecord('list');
    }
  }
});
