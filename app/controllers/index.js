import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteList(list) {
      list.destroyRecord();
    }
  }
});
