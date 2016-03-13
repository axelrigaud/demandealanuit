// $('#welcomeModal').modal({ show: false})

$( window ).load(function() {
  $('.loader-wrapper').fadeOut(
      "slow",
      function() {
        $('#welcomeModal').modal('show');
      }
    );
})