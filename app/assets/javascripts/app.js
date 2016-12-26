var App = {
  init: function () {
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
        'slow', App.Map.init);
    });
  }
};
