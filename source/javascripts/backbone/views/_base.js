// -------------------------------------------------
//
// Base view from which others are extended
// 
// -------------------------------------------------

App.Views.Base = Backbone.View.extend({

  subViews: [],

  events: {
    'click .js-internal': 'internalLink',
    'click .js-close-mob-promt': 'closeMobPromt'
  },


  initialize: function(options) {

    var self = this;
    // Assign options to this view object
    self.options = options;
    // Render html
    $('.js-container').append(self.el);



    // $('.overflow-helper').on('touchstart', function(e) {
    //   e.preventDefault();
    //   e.stoppropagation();

    // });

    return self;

  },

  closeMobPromt: function(event) {

    event.preventDefault();

    $('.home').transit({
      'opacity': 0
    }, 500, function() {
      $('.home').remove();
    });

  },

  showCredits: function(event) {
    var self = this;
    event.preventDefault();
    var $elem = $(event.currentTarget);




  },

  // -------------------------------------------------
  //
  // Internal link clicks 
  // 
  // -------------------------------------------------

  internalLink: function(event) {

    var self = this;

    event.preventDefault();

    var $elem = $(event.currentTarget);

    self.options.router.transition($elem.attr('href'));

  },

  // -------------------------------------------------
  //
  // Destroys a view, used in transition between scenes
  // 
  // -------------------------------------------------

  destroy: function(callback) {

    var self = this;

    $(self.el).transition({
      'opacity': 0
    }, 500, function() {

      // Scroll to top
      window.scrollTo(0, 0);

      // Sub views
      for (var i = self.subViews.length - 1; i >= 0; i--) {
        self.subViews[i].unbind();
        self.subViews[i].remove();
      };

      self.unbind();
      self.remove();

      if (_.isFunction(callback())) {
        callback();
      }

    });

  },

  // -------------------------------------------------
  //
  // Render
  // 
  // -------------------------------------------------

  render: function(callback) {

    var self = this,
      output = '',
      tmpl_content;

    // Assign content to an object which goes to the template
    tmpl_content = {
      collection: self.options.collection,
      model: self.options.model
    };

    // Add the template to the output
    output += JST['backbone/templates/' + self.options.tmpl](tmpl_content);

    // Render to DOM
    self.$el.html(output);


    $('body').append(self.$el);


    // Run a callback if there is one
    if (!_.isUndefined(callback)) {
      if (_.isFunction(callback)) {
        callback();
      }
    }

    return self;

  }


});