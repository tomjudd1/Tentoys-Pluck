function randUpAndDown(bottomNo, topNo){
	return Math.round((Math.random() * topNo) + bottomNo)-(topNo/2);
}

function rand(bottomNo, topNo){
	return Math.round((Math.random() * (topNo - bottomNo)) + bottomNo);
}

function round2DP(n){
	return Math.round(n * 100) / 100;
}

function round1DP(n){
	return Math.round(n * 10) / 10;
}

function getDegrees(radians){
	d = radians * (180/Math.PI)
	return d;
}

function getRadians(degrees){
	r = degrees * (Math.PI/180)
	return r;
}

function getVector(source, dist, angle){
	var a = getRadians(angle);
	var x = source.x + Math.sin(a) * dist;
	var y = source.y - Math.cos(a) * dist;
	var v = new createjs.Point(x,y);
	return v;
}

function getDistance(source, target){
	var dx = source.x - target.x;
	dx = dx * dx;

	var dy = source.y - target.y;
	dy = dy * dy;

	return Math.sqrt( dx + dy );
}

function getAngle(source, target){
	var xDif = target.x - source.x;
	var yDif = target.y - source.y;
   	var a = Math.atan2( yDif, xDif );
	a = getDegrees(a) + 90.0;
	if(a < 0) a = 360.0 + a;
	return a;
}
