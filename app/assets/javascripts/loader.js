$( window ).load(function() {
  var overlay = $('.md-overlay');
  
  $('.loader-wrapper').fadeOut(
      "slow",revealIcons);

   var places = $('.place-link')

  function revealIcons () {
    console.log(places)
    for (var i = 0; i < places.length; i++) {
      scheduleReveal(places[i],i);
    }
  }

  function scheduleReveal (icon,index) {
    var offset = index * 200;
    setTimeout(function(){revealIcon(icon)},offset);
  }

  function revealIcon (icon) {
    $(icon).addClass('reveal');
  }
})