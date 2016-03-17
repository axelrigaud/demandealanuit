$(document).ready(function(){

  $('.header__anchor').click(function(e){
    e.preventDefault();
    $('#about-the-book').addClass('md-show');
    overlay.click(function(){
      $('#about-the-book').removeClass('md-show');
    });
  })

  var close = $('.md-close');
  var overlay = $('.md-overlay');

  $('.md-trigger').each(function(index){
    $(this).click(function(e){
      e.preventDefault();
      var target = $(this).data('target');
      $(target).addClass('md-show');
      overlay.click(function(){
        $(target).removeClass('md-show');
      })
      close.click(function(){
        $(target).removeClass('md-show');
      })
    })
  })
  
})