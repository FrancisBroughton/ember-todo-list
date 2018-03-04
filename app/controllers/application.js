import Ember from 'ember';

export default Ember.Controller.extend({


actions: {
    allTodo() {
      this.set('', '');
    },
    completeTodo() {
      this.set('', 'complete');
    },
    incompleteTodo() {
      this.set('', 'incomplete');
    },
  }
});