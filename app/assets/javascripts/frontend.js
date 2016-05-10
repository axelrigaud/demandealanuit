// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
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
