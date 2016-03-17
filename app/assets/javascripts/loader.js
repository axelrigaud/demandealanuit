// $('#welcomeModal').modal({ show: false})

$( window ).load(function() {
  var overlay = $('.md-overlay');
  var close = $('.md-close');
  $('.loader-wrapper').fadeOut(
      "slow",
      function() {
        $('#welcome').addClass('md-show');
        overlay.click(function(){
          $('#welcome').removeClass('md-show');
        });
        close.click(function(){
          $('#welcome').removeClass('md-show');
        });
      }
    );
})