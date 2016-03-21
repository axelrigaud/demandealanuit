$( window ).load(function() {
  var overlay = $('.md-overlay');
  
  $('.loader-wrapper').fadeOut(
      "slow",
      function() {
        var $welcome_modal = $('#welcome')
        var close = $welcome_modal.find('.md-close');
        $welcome_modal.addClass('md-show');
        overlay.click(function(){
          $welcome_modal.removeClass('md-show');
        });
        close.click(function(){
          $welcome_modal.removeClass('md-show');
        });
      }
    );
})