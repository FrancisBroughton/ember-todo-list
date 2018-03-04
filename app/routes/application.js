import Route from '@ember/routing/route';
 
export default Route.extend({

 model() {
     return this.store.findAll('task');
   },

   actions: {
    save(todo) {
      this.get('store').createRecord('task', {
        todo,
      }).save();
    },
  
    delete(todo) {
      todo.deleteRecord();
      todo.save();
    }
  }
})

// actions to delete and save etc
