import Ember from 'ember';
import { computed } from '@ember/object'
import Controller from '@ember/controller';

export default Controller.extend({
  todoComp: false,

  current: '',

  completed: computed( 'model', 'current', () => {
    const tasks = this.get('model');
    const current = this.get('current');
    const finished = current === 'completeTodo';
    const unfinished = current === 'incompleteTodo';

    if (finished) {
      return tasks.filter((todo) => {
        return todo.get('todoComp') === true;
      });
    }

    if (unfinished) {
      return tasks.filter((todo) => {
        return todo.get('todoComp') === false;
      });
    }
    return todo;
  }),

  actions: {
    showAll() {
      this.set('current', '');
    },
    showCompleted() {
      this.set('current', 'completeTodo');
    },
    showIncomplete() {
      this.set('current', 'incompleteTodo');
    }
  }
});