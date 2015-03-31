// Easel Template
// ©Animade 2015
//
// Designed and developed by @tomjudd1
//
//
//  
//
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

var noHairs = 40;
var padding = 0.3;
var hairOffset = 0.25;


var stage;

var titleCont;

var hairCont;

var scaler = 1;

var hairLength = 45 * scaler;
var hairWidth = 10 * scaler;
var hairColor = "#766b6a";
var skinColor = "#ffc7c0";
var hairStrength = [150,200];
var hairPosRandom = 5;
var hairRotRandom = 5;

var hairs = [];


window.addEventListener('resize', resize, false);



function init() {

  document.body.style.cursor='crosshair';

  createjs.Ticker.setInterval(45);
  createjs.Ticker.setFPS(45);

  // intitiate the stage
  stage = new createjs.Stage("demoCanvas");
  stage.enableMouseOver();
  createjs.Touch.enable(stage);
 

  hairCont = stage.addChild(new createjs.Container());
  hairCont.width = window.innerWidth*(1-padding);
  hairCont.height = window.innerHeight*(1-padding);

  resize();

  var sqrt = Math.round(Math.sqrt(noHairs));
  var xSpace = (hairCont.width) / sqrt;
  var ySpace = (hairCont.height) / sqrt;

  console.log("SQRT = " + sqrt);

  for (var i = 0; i < noHairs; i++) {
      
    var h = new Hair(new createjs.Point(0, 0), hairLength - rand(0,hairLength*0.25) ,  hairColor, hairWidth, skinColor, rand(hairStrength[0],hairStrength[1]));

    var row = Math.floor(i/sqrt);

    console.log(row);
    
    // offset 
    var offset = - xSpace*hairOffset;
    if (isEven(row)) { offset = xSpace*hairOffset };

    h.x = xSpace*0.5 + xSpace*i - ((Math.round(sqrt)*xSpace)*row) - offset + rand(-hairPosRandom,hairPosRandom);
    h.y = ySpace*0.5 + ySpace*row + rand(-hairPosRandom,hairPosRandom);    

    if(row >= sqrt)
        break;

    hairs.push(h)
    hairCont.addChild(hairs[i]);

    // get angle
    var source = new createjs.Point(hairCont.width*0.5, hairCont.height*1.5) ;
    var target = new createjs.Point(h.x, h.y) ;
    //var a = getAngle(source, target);
    var a = 0;

    h.rotation = a + rand(-hairRotRandom,hairRotRandom);
    h.setGravity(h.rotation);

    h.on("mousedown", hairClicked);

  };

  stage.update();

  // On Frame
  createjs.Ticker.addEventListener("tick", tick);

}

function hairClicked(event){
  console.log(hairCont.children.length);
  hairCont.setChildIndex(event.target, hairCont.children.length-1);
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
