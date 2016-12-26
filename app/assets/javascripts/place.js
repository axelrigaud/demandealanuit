App.Place = (function () {

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
