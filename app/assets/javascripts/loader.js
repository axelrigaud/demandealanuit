var places = $('.place-link');
var overlay = $('.md-overlay');

function revealIcons() {
  for (var i = 0; i < places.length; i++) {
    scheduleReveal(places[i],i);
  }
}

function scheduleReveal(icon,index) {
  var offset = index * 150;
  setTimeout(function(){revealIcon(icon)},offset);
}

function revealIcon(icon) {
  $(icon).addClass('reveal');
}

$( window ).load(function() {
  $('.loader-wrapper').fadeOut(
    'slow',revealIcons);
});
