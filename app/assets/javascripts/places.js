$(document).ready(function(){

  var close = $('.md-close');
  var overlay = $('.md-overlay');

  $('.md-trigger').each(function(index){
    $(this).click(function(e){
      e.preventDefault();
      var target = $(this).data('target');
      $(target).addClass('md-show');
      close.click(function(){
        $(target).removeClass('md-show');
      })
      overlay.click(function(){
        $(target).removeClass('md-show');
      })
    })
  })
  
})