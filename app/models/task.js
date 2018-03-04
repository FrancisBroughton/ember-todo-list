import DS from 'ember-data';


export default DS.Model.extend({
  todo: DS.attr('string'),
  isDone: DS.attr('boolean', { defaultValue: false })
});
