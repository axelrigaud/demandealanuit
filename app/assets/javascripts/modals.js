$(document).ready(function(){

  function hideModal($target) {
    $target.removeClass('md-show');
  }

  var $SlidingTop = $('#SlidingTop');
  var $body = $('body');
  $('.header__anchor').click(function(e){
    e.preventDefault();
    $SlidingTop.addClass('SlidingTop--reveal');
    $body.addClass('body--overflow-y');
    $('html, body').animate({
        scrollTop: 0
    }, 500);
  })
  $('#SlidingTop__close').click(function(e) {
    e.preventDefault();
    $SlidingTop.removeClass('SlidingTop--reveal');
    $body.removeClass('body--overflow-y');
  })

  
  var overlay = $('.md-overlay');

  $('.md-trigger').each(function(index){
    $(this).click(function(e){
      e.preventDefault();
      var target = $(this).data('target');
      var $target = $(target)
      var close = $(target).find('.md-close');
      $target.addClass('md-show');

      if (mobileAndTabletcheck()) {
        var play_link = $target.find('.play-track-modal')
        var video_id = play_link.data('video-id');
        play_link.css({'display':'none'});
        if (!$target.find('iframe').length) // no iframe append yet
          $('<iframe width="100%" height="100px" src="https://www.youtube.com/embed/'+video_id+'" frameborder="0" allowfullscreen></iframe>').insertBefore(close)
      }

      overlay.click(function(){
        hideModal($target);
      })
      close.click(function(){
        hideModal($target);
      })
    })
  })
  
})