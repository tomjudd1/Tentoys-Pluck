App.Routers.Desktop = Backbone.Router.extend({

  // -------------------------------------------------
  //
  // Global vars/constants
  // 
  // -------------------------------------------------

  currentView: null,


  // -------------------------------------------------
  //
  // Initialize
  // 
  // -------------------------------------------------

  initialize: function() {

    var self = this;

    self.app_state = _.extend({}, Backbone.Events);

    // Set collections we're going to use
    self.collection = new App.Collections.People();

    // Starts things off when all the collections have been 
    self.collection.fetch().done(function() {

      // Options object
      self.options = {
        app_state: self.app_state,
        collection: self.collection,
        router: self
      };

      // Start the app. 
      Backbone.history.start({
        pushState: false
      });

    });

  },

  // -------------------------------------------------
  //
  // Routes
  // 
  // -------------------------------------------------

  routes: {
    '': 'home_index'
  },


  // -------------------------------------------------
  //
  // /
  // 
  // -------------------------------------------------

  home_index: function() {

    var self = this;

    // Set the template
    if (Modernizr.touch) {
      self.options.tmpl = 'home/home_touch';
      self.currentView = new App.Views.HomeIndex(self.options).render();

    } else if (!Modernizr.canvas) {

      self.options.tmpl = 'home/home_not_supported';
      self.currentView = new App.Views.HomeIndex(self.options).render();
    }

  }


});