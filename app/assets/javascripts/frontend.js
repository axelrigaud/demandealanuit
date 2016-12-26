//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require owl.carousel/dist/owl.carousel.js
//= require app
//= require map
//= require place

$(document).on('ready', function () {
  App.Place.init();
  App.init();
})
