// TOY LINE CLASS
//= require "animade/usefull"

(function() {

var Hair = function(start, length, lineColor, strokeWidth, skinColor, strength) {
  this.initialize(start, length, lineColor, strokeWidth, skinColor, strength);
}
var p = Hair.prototype = new createjs.Container(); // inherit from Container


// the line shape that uses the line graphic as its DNA
p.lineShape;
// the root shape
p.rootShape;
// the pour shape
p.pourShape;

// the natural length of the hair
p.hairLength;

// global rotation used to adjust gravity
p.gravity;
p.fallSpeed = 70;
p.fallFriction = 0.2;
p.fallVelocity = 0;

// Hair Porperties
p.strength; // amount of force needed to uproot
p.rootSize; // size of the root

// Styling
p.lineColor;
p.strokeWidthOriginal;
p.strokeWidth;

// target positions
p.originalStartX;
p.originalSstartY;
p.startX;
p.startY;

p.originalEndX;
p.originalEndY;
p.endX;
p.endY;


// animating positions
p.currentStartX;
p.currentStartY;

p.currentEndX;
p.currentEndY;

// spring
p.spring = 0.9;
p.friction = 0.7;
p.velocityX = 0;
p.velocityY = 0;


// growing
p.growDelay = 50;

p.dragged = false;
p.twanged = false;
p.plucked = false;
p.dropped = false;
p.destroyed = false;

p.count = 0;

p.Container_initialize = p.initialize;

p.initialize = function(start, length, lineColor, strokeWidth, skinColor, strength) {
	this.Container_initialize();
	
	this.originalStartX = start.x;
	this.originalStartY = start.y;
	this.startX = start.x;
	this.startY = start.y;

	this.originalEndX = start.x;
	this.originalEndY = start.y - length;
	this.endX = this.originalEndX;
	this.endY = this.originalEndY;

	this.strength = strength;

	this.hairLength = length;

	this.lineColor = lineColor;
	this.rootSize = strokeWidth*0.7;
	this.strokeWidthOriginal = strokeWidth;
	this.strokeWidth = strokeWidth;



	this.currentStartX = this.startX;
	this.currentStartY = this.startY;

	this.currentEndX = this.endX;
	this.currentEndY = this.endY;

	// draw root cover
	// Root Cover
	var rootCoverGraphic = new  createjs.Graphics();
	// Set the style of the line
	rootCoverGraphic.f(skinColor);
	rootCoverGraphic.beginLinearGradientFill([skinColor,"#ffbdb8"], [1, 0], 0, 0, 0, 2).dc(this.currentStartX, this.currentStartY + (this.rootSize), this.rootSize*2);
	// draw the line
	rootCoverGraphic.dc(this.currentStartX, this.currentStartY + (this.rootSize), this.rootSize*2.5);
	// creat the root shape

	this.pourShape = new createjs.Shape(rootCoverGraphic);
	// add the root to the stage
	this.addChild(this.pourShape);

	this.drawLine();


	this.on("mousedown", this.clicked);
	this.on("pressmove", this.drag);
	this.on("pressup", this.drop);
	this.on("tick", this.handleTick);

	this.mouseChildren = false;

} 

p.getHairPullAmount = function(){
	var current = new createjs.Point(this.currentEndX, this.currentEndY);
	var target = new createjs.Point(this.startX, this.startY);
	var d = getDistance(current, target) - this.hairLength;
	return d;
}

p.drawLine = function(){

	// work out stretch of Hair - decrease stroke width depending on how far it is being streched
	var d = this.getHairPullAmount();
	this.strokeWidth = this.strokeWidthOriginal - d*0.025;
	if(this.strokeWidth < this.strokeWidthOriginal*0.5)
		this.strokeWidth = this.strokeWidthOriginal*0.5;

	// increase bulge depending on stretch
	if(this.plucked == false){
		// work out the new start vector based on pull direction
		// get the angle
		var source = new createjs.Point(this.originalStartX, this.originalStartY);
		var target = new createjs.Point(this.currentEndX, this.currentEndY);
    	var a = getAngle(source, target);
		// calc the new vector
		var v = getVector(source, d*0.1, a);

		this.currentStartX = v.x;
		this.currentStartY = v.y;

		this.pourShape.scaleX = 1 - d*0.0005;
		this.pourShape.scaleY = 1 + d*0.0095;
		this.pourShape.rotation = a;
	}

	// clear last frame
	this.removeChild(this.lineShape);
	this.removeChild(this.rootShape);

	// Graphic
	var lineGraphic = new createjs.Graphics();
	// clear the graphic
	lineGraphic.clear();
	// Set the style of the line
	lineGraphic.s(this.lineColor).ss(this.strokeWidth,"square")
	// draw the line
	lineGraphic.mt(this.currentStartX, this.currentStartY).lt(this.currentEndX, this.currentEndY);

	// Shape
	// create the shape
	this.lineShape = new createjs.Shape(lineGraphic);
	// add the shape to the stage
	this.addChildAt(this.lineShape,0);
	this.lineShape.alpha = 0.85;


}

p.clicked = function (event) {    
	var target = event.target;
	this.dragged=true;
}

p.drag = function (event) {    
	var target = event.target;
	var point = this.globalToLocal(event.stageX, event.stageY);


	if(this.plucked == true){
		this.hairPlucked();
		this.currentEndX = point.x;
		this.currentEndY = point.y;
		this.twanged = false;
		this.pourShape.scaleX = 1;
		this.pourShape.scaleY = 1;
		this.pourShape.rotation = 0;
		return;
	}

	// dont run this function if the hair has been dropped
	if(!this.dragged){
		return;
	}


	// drop the hair if pulled down
	if(point.y>= this.startY - this.hairLength*0.25){
		this.twanged=true;
		this.dragged=false;
		return;
	}

	// 1 - PLUCKED
	// Pluck the hair if pulled past the hair strength amount
	if(this.getHairPullAmount() >= this.strength){
		console.log("PLUCKED");
		playSFX("pluck"+rand(1,5));
		this.plucked = true;
	}
	
	if(!this.plucked){
	}

	this.currentEndX = point.x;
	this.currentEndY = point.y;
	// set the end of the line to the start of the line
	this.twanged = false;
}

p.drop = function (event) {    
	var target = event.target;
	var point = this.globalToLocal(event.stageX, event.stageY);
	


	// drop the hair if it has been plucked
	if(this.plucked == true){
		this.dropped = true;
		console.log("dropped");
		return;
	}

	// dont run this function if the hair has been dropped
	if(!this.dragged)
		return;



	// set the end of the line to the start of the line
	this.currentEndX = point.x;
	this.currentEndY = point.y;

	this.twanged = true;

} 



p.hairPlucked = function(){


	// set the end of the line to the start of the line
	// create new start point based on gravity angle
	var source = new createjs.Point(this.currentEndX, this.currentEndY);
	var g = getVector(source, this.hairLength, 180 - this.gravity);

	this.startX = g.x;
	this.startY = g.y;

	this.twanged = true;

}

p.springLine = function(tX, tY, cX, cY){

    this.velocityX += (tX - cX) * (this.spring - 0.07);
  	cX += (this.velocityX *= this.friction);
  
	this.velocityY += (tY - cY) * (this.spring - 0.1);
	cY += (this.velocityY *= this.friction);

	return new createjs.Point(cX, cY);
}

p.handleTick = function(event) {

	if(this.destroyed)
		return;

	// if twanged then animate the hair springing back to normal
    if(this.twanged){

    	var c = this.springLine(this.endX, this.endY, this.currentEndX, this.currentEndY);
    	this.currentEndX = c.x;
    	this.currentEndY = c.y;

		// if the current end point has reached the target end point then un toggle HIT
		var current = new createjs.Point(this.currentEndX, this.currentEndY);
		var target = new createjs.Point(this.endX, this.endY);

		if( getDistance(current, target) < 0.2) {
		 	this.twanged = false;
		}

    } 


	// if plucked then animate the hair springing to follow the mouse
    if(this.plucked){

    	var c = this.springLine(this.startX, this.startY, this.currentStartX, this.currentStartY);
    	this.currentStartX = c.x;
    	this.currentStartY = c.y;

    } 

    // if dropped then fall
    if(this.dropped){



    	if(this.lineShape.y > window.innerHeight){
    		this.dropped = false;
    		this.destroyed = true;
    		this.removeChild(this.lineShape);
    		console.log("destroyed");

    	}

    	// work out acceleration and drop amount
    	//var drop = ;
    	if(this.fallVelocity > 1){
        	this.fallVelocity = 1;
      	}else{
        	this.fallVelocity += this.fallFriction;
      	}

    	// work out vector from current position and distance to drop
    	var source = new createjs.Point(this.lineShape.x, this.lineShape.y);
    	var drop = this.fallSpeed * this.fallVelocity;
    	var g = getVector(source, drop, 180 - this.gravity);

    	this.lineShape.y = g.y;
    	this.lineShape.x = g.x;


    	return;

    }


	this.drawLine();

}

p.setGravity = function(r){
	this.gravity = r;
}


window.Hair = Hair;
}());