import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const defaultList = this.store.createRecord('list', {
      title: 'Default List'
    });

    return [defaultList.save()];
  },

  actions: {
    addList() {
      let newList = this.store.createRecord('list');

      this.get('currentModel').pushObject(newList);
    }
  }
});
