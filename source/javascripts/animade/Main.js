// Easel Template
// ©Animade 2015
//
// Designed and developed by @tomjudd1
//
//
//  
//
//= require "modernizr/modernizr"
//= require "howler"

//= require "animade/Hair"
//= require "animade/usefull"

if (Modernizr.canvas) {

  var soundLeval = 0.7;

  function playSFX(name) {
    var sound = new Howl({
      urls: ['data/sfx/' + name + '.mp3', 'data/sfx/' + name + '.ogg'],
      autoplay: true,
      volume: soundLeval
    }).play();
  }

  function changeText(text) {
    $('.js-text-change').html(text);
  }

  // Mute button
  // var $muteButton = $('#mute-button');

  // $muteButton.on("click", function() {

  //   //$muteButton.toggleClass('muted');

  //   if ($muteButton.hasClass('muted')) {
  //     Howler.mute();
  //   } else {
  //     Howler.unmute();
  //   }

  // });

}

var stage;

var titleCont;

var hairCont;

var scaler = 1;

var hairLength = 25 * scaler;
var hairWidth = 10 * scaler;
var hairColor = "#766b6a";
var skinColor = "#ffc7c0";

var noHairs = 425;
var hairs = [];


window.addEventListener('resize', resize, false);



function init() {

  document.body.style.cursor='crosshair';

  createjs.Ticker.setInterval(45);
  createjs.Ticker.setFPS(45);

  // intitiate the stage
  stage = new createjs.Stage("demoCanvas");
  stage.enableMouseOver();

 

  hairCont = stage.addChild(new createjs.Container());
  hairCont.width = window.innerWidth*0.8;
  hairCont.height = window.innerHeight*0.8;

  resize();

  var sqrt = Math.floor(Math.sqrt(noHairs));
  var xSpace = (hairCont.width) / sqrt;
  var ySpace = (hairCont.height) / sqrt;

  for (var i = 0; i < noHairs; i++) {
      
    var h = new Hair(new createjs.Point(0, 0), hairLength - rand(0,hairLength*0.25) ,  hairColor, hairWidth, skinColor, rand(100,200));

    var row = Math.floor(i/sqrt);

    // position on the grid
    h.x = xSpace*0.5 + xSpace*i - (Math.ceil(sqrt)*xSpace)*row + rand(-5,5) ;
    h.y = ySpace*0.7 + ySpace*row + rand(-10,10);    

    hairs.push(h)
    hairCont.addChild(hairs[i]);

    // get angle
    var source = new createjs.Point(hairCont.width*0.5, hairCont.height*1.5);
    var target = new createjs.Point(h.x, h.y);
    //var a = getAngle(source, target);
    var a = 0;

    h.rotation = a + rand(-10,10);
    h.setGravity(h.rotation);

  };

  stage.update();

  // On Frame
  createjs.Ticker.addEventListener("tick", tick);

}


function tick() {
  stage.update();
} 


function resize() { 
  hairCont.x = window.innerWidth*0.5 - hairCont.width*0.5;
  hairCont.y = window.innerHeight*0.5 - hairCont.height*0.5;
  stage.canvas.width = window.innerWidth;
  stage.canvas.height = window.innerHeight;     
}
