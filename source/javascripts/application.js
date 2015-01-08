//= require "modernizr/modernizr"
//= require "jquery"
//= require "jquery.transit"
//= require "underscore"
//= require "howler"
//= require "backbone"
//= require backbone/app

$(document).ready(function() {

  if (Modernizr.canvas) {
    $('body').addClass('support');
    $('body').css('opacity', 1);
  } else {
    $('body').addClass('no-support');
    $('body').css('opacity', 1);
  }

  setTimeout(function() {
    $('.text-mid').transit({
      'opacity': '1'
    });
  }, 0);

  $('.info-button').click(function() {
    showCredits();
  });

  if (Modernizr.canvas) {

    setTimeout(function() {
      $('canvas').transit({
        'opacity': '1'
      });

    }, 0);

  }

  function showCredits() {
    if ($('.info-button').hasClass('open')) {

      $('.info-button').removeClass('open');

      $('.credits').transit({
        'opacity': 0
      }, 0, function() {
        $('.credits').css({
          'display': 'none'
        });
      });

      setTimeout(function() {

        $('.small-message').stop().transit({
          'opacity': 1
        }, 00);

      }, 0);

    } else {

      $('.info-button').addClass('open');

      $('.small-message').stop().transit({
        'opacity': 0
      }, 0);

      $('.credits').css({
        'display': 'table'
      });

      setTimeout(function() {
        $('.credits').stop().transit({
          'opacity': 1
        }, 0);
      }, 0);

    }
  };

});