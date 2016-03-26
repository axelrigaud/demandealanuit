if (!mobileAndTabletcheck()) {
  
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });

  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    $('.play-track-modal').click(function(){
      var video_id = $(this).data('video-id');
      $('.header__speaker').fadeIn();
      player.loadVideoById(video_id, 5, "large")
    });
    $('.header__speaker').one("click",
        function(){
          pauseVideo();
        });
  }

  function onPlayerStateChange(event) {

  }
  function playVideo() {
    player.playVideo();
  }
  function resumeVideo() {
    player.playVideo();
    $('.header__speaker').one('click',pauseVideo);
  }
  function pauseVideo() {
    player.pauseVideo();
    $('.header__speaker').one('click',resumeVideo);
  }

  $('iframe').css({'display':'none'});
}


