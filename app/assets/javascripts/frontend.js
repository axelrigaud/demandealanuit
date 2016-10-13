//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require modals
//= require loader
//= require owl.carousel/dist/owl.carousel.js

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    items:1,
    margin:1,
    loop:true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000
  });
});
