//Copyright 2015 Ryan Lee

'use strict';
/*jslint node:true, indent:2, nomen:true*/

$(document).ready(function () {
  var theme, mute;
  
  theme = new Audio("sound/john_kanaka.wav");
  mute = false;

  theme.addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
  }, false);
  theme.play();

  $('#mute').click(function () {
    mute = !mute;
    if (mute) {
      theme.pause();
    } else {
      theme.play();
    }
  });
});
