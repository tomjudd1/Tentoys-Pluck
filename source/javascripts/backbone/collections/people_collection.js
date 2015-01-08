App.Collections.People = Backbone.Collection.extend({
  model: App.Models.Person,
  url: 'data/people.json'
});