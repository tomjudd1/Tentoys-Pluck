#= require hamlcoffee
#= require_self
#= require_tree ./templates
#= require_tree ./models
#= require_tree ./collections
#= require_tree ./views
#= require_tree ./routers

var App = {
  Models: {},
  Routers: {},
  Collections: {},
  Views: {}
};

$(document).ready(function() {

  // Shorthand console log
  window.l = function(message) {
    if (typeof console != 'undefined') {
      if (localStorage.getItem('debug') == 'true') {
        console.log(message);
      }
    }
  }

  new App.Routers.Desktop();

});