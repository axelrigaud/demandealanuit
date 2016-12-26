//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require owl.carousel/dist/owl.carousel.js

$(document).ready(function(){

  trackOutboundLink = function(url) {
     ga('send', 'event', 'outbound', 'click', url, {
       'transport': 'beacon',
       'hitCallback': function(){document.location = url;}
     });
  }

  var Map = (function () {

    var places = $('.place-link');

    var _revealIcon = function (icon) {
      $(icon).addClass('reveal');
    };

    var _scheduleReveal = function (icon,index) {
      var offset = index * 150;
      setTimeout(function(){_revealIcon(icon)}, offset);
    };

    return {
      init: function () {
        for (var i = 0; i < places.length; i++) {
          _scheduleReveal(places[i],i);
        }
      }
    }
  })();

  var Place = (function () {

    var _hideModal = function () {
      $('.md-show').removeClass('md-show');
    };

    var _bindUIActions = function () {

      $('.md-overlay, .cross').click(function(){
        _hideModal();
      });

      $('.md-about').click(function(){
        $('html, body').animate({
            scrollTop: $("#about-the-book").offset().top
        }, 'slow');
        _hideModal();
      });

      $('.md-trigger').each(function(index){
        $(this).click(function(e){
          e.preventDefault();

          // delete youtube iframe
          $('iframe').remove();

          // get modal's name
          var target = $(this).data('target');
          var $target = $(target);

          // reveal the modal
          $target.addClass('md-show');

          // get youtube video id
          var play_link = $(this).data('youtube');
          // append the iframe
          var bottom = $target.find('.md-bottom');
          $iframe = $('<iframe width="100%" height="100px" src="https://www.youtube.com/embed/'+play_link+'" frameborder="0" allowfullscreen></iframe>');
          $iframe.insertBefore(bottom);
        });
      });
    }
    return {
      init: function () {
        _bindUIActions();
      }
    }
  })();

  Place.init();

  $('.owl-carousel').owlCarousel({
    items:1,
    margin:1,
    loop:true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000
  });

  $( window ).load(function() {
    $('.loader-wrapper').fadeOut(
      'slow', Map.init);
  });
});
