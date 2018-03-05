import DS from 'ember-data';


export default DS.Model.extend({
  todo: DS.attr('string'),
  todoComp: DS.attr('boolean', { defaultValue: false })
});
