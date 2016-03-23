$(document).ready(function(){

  function hideModal($target) {
    $target.removeClass('md-show');
  }

  var $SlidingTop = $('#SlidingTop');
  $('.header__anchor').click(function(e){
    e.preventDefault();
    $SlidingTop.addClass('SlidingTop--reveal');
  })
  $('#SlidingTop__close').click(function(e) {
    e.preventDefault();
    $SlidingTop.removeClass('SlidingTop--reveal');
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
        //$('<iframe width="100%" height="100px" src="https://www.youtube.com/embed/'+video_id+'" frameborder="0" allowfullscreen></iframe>').insertBefore(close)
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