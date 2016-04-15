$(document).ready(function(){

  function hideModal($target) {
    $target.removeClass('md-show');
  }
  
  var overlay = $('.md-overlay');

  $('.md-trigger').each(function(index){
    $(this).click(function(e){
      e.preventDefault();
      $('iframe').remove();
      var target = $(this).data('target');
      var play_link = $(this).data('youtube')
      var $target = $(target)
      var close = $(target).find('.cross');
      $target.addClass('md-show');

      var aboutLink = $(target).find('.md-about');
      var bottom = $(target).find('.md-bottom');
      aboutLink.click(function() {

          $('html, body').animate({
              scrollTop: $("#about-the-book").offset().top
          }, 'slow');
          hideModal($target);
      });

      if (!$target.find('iframe').length) // no iframe append yet
        $iframe = $('<iframe width="100%" height="100px" src="https://www.youtube.com/embed/'+play_link+'" frameborder="0" allowfullscreen></iframe>');
        $iframe.insertBefore(bottom);

      overlay.click(function(){
        hideModal($target);
      })
      close.click(function(){
        hideModal($target);
      })
    })
  })
  
})