

'use strict';
/*jslint node:true, indent:2, nomen:true*/

var canvas, ctx, ocean;

var initalize = function () {
  canvas = document.getElementById("main-screen");
  ctx = canvas.getContext('2d');
  ocean = new Image();
  ocean.addEventListener("load", function() {
    draw();
  }, false);
  ocean.src = '/img/ocean.png';
};

var y;
var draw = function () {
  if (y === 100) {
    y = 110;
  } else {
    y = 100;
  }
  ctx.drawImage(ocean, 100, y); 
};

/**Main**/
$(document).ready(function () {
  initalize();
  setInterval(function () {
    draw();
  }, 500);
});
