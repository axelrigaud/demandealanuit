App.Map = (function () {

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
