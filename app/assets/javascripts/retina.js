function isRetinaDisplay() {
  if (window.matchMedia) {
    var mq = window.matchMedia("only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");
    return (mq && mq.matches || (window.devicePixelRatio > 1)); 
  }
}

// Example
$('document').ready(function() {
  var images = document.getElementsByTagName('img')
  for (i=0; i < images.length; i++) {
    var low_res_path = images[i].getAttribute('src');
    var extension = low_res_path.slice(-3);
    var hi_res_path = low_res_path.slice(0,-4)+'@2x.'+extension;
    console.log(hi_res_path)
    images[i].setAttribute('src',hi_res_path)
  }
});