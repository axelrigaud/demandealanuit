$(document).ready(function(){

  $('.header__anchor').click(function(e){
    e.preventDefault();
    $('#about-the-book').addClass('md-show');
    overlay.click(function(){
      $('#about-the-book').removeClass('md-show');
    });
  })

  
  var overlay = $('.md-overlay');

  $('.md-trigger').each(function(index){
    $(this).click(function(e){
      e.preventDefault();
      var target = $(this).data('target');
      var close = $(target).find('.md-close');
      $(target).addClass('md-show');

      if (mobileAndTabletcheck()) {
        var play_link = $(target).find('.play-track-modal')
        var video_id = play_link.data('video-id');
        play_link.css({'display':'none'});
        $('<iframe width="100%" height="100px" src="https://www.youtube.com/embed/'+video_id+'" frameborder="0" allowfullscreen></iframe>').insertBefore(close)
      }

      overlay.click(function(){
        $(target).removeClass('md-show');
      })
      close.click(function(){
        $(target).removeClass('md-show');
      })
    })
  })
  
})