function randUpAndDown(t,i){return Math.round(Math.random()*i+t)-i/2}function rand(t,i){return Math.round(Math.random()*(i-t)+t)}function round2DP(t){return Math.round(100*t)/100}function round1DP(t){return Math.round(10*t)/10}function getDegrees(t){return d=t*(180/Math.PI)}function getRadians(t){return r=t*(Math.PI/180)}function getVector(t,i,r){var e=getRadians(r),n=t.x+Math.sin(e)*i,s=t.y-Math.cos(e)*i,h=new createjs.Point(n,s);return h}function getDistance(t,i){var r=t.x-i.x;r*=r;var e=t.y-i.y;return e*=e,Math.sqrt(r+e)}function getAngle(t,i){var r=i.x-t.x,e=i.y-t.y,n=Math.atan2(e,r);return n=getDegrees(n)+90,0>n&&(n=360+n),n}function isNumber(t){return t===parseFloat(t)}function isEven(t){return isNumber(t)&&t%2==0}function isOdd(t){return isNumber(t)&&Math.abs(t)%2==1}!function(){var t=function(t,i,r,e,n,s){this.initialize(t,i,r,e,n,s)},i=t.prototype=new createjs.Container;i.lineShape,i.rootShape,i.pourShape,i.hairLength,i.gravity,i.fallSpeed=70,i.fallFriction=.2,i.fallVelocity=0,i.strength,i.rootSize,i.lineColor,i.strokeWidthOriginal,i.strokeWidth,i.originalStartX,i.originalSstartY,i.startX,i.startY,i.originalEndX,i.originalEndY,i.endX,i.endY,i.currentStartX,i.currentStartY,i.currentEndX,i.currentEndY,i.spring=.9,i.friction=.7,i.velocityX=0,i.velocityY=0,i.growDelay=50,i.dragged=!1,i.twanged=!1,i.plucked=!1,i.dropped=!1,i.destroyed=!1,i.count=0,i.Container_initialize=i.initialize,i.initialize=function(t,i,r,e,n,s){this.Container_initialize(),this.originalStartX=t.x,this.originalStartY=t.y,this.startX=t.x,this.startY=t.y,this.originalEndX=t.x,this.originalEndY=t.y-i,this.endX=this.originalEndX,this.endY=this.originalEndY,this.strength=s,this.hairLength=i,this.lineColor=r,this.rootSize=.7*e,this.strokeWidthOriginal=e,this.strokeWidth=e,this.currentStartX=this.startX,this.currentStartY=this.startY,this.currentEndX=this.endX,this.currentEndY=this.endY;var h=new createjs.Graphics;h.f(n),h.beginLinearGradientFill([n,"#ffbdb8"],[1,0],0,0,0,2).dc(this.currentStartX,this.currentStartY+this.rootSize,2*this.rootSize),h.dc(this.currentStartX,this.currentStartY+this.rootSize,2.5*this.rootSize),this.pourShape=new createjs.Shape(h),this.addChild(this.pourShape),this.drawLine(),this.on("mousedown",this.clicked),this.on("pressmove",this.drag),this.on("pressup",this.drop),this.on("tick",this.handleTick),this.mouseChildren=!1},i.getHairPullAmount=function(){var t=new createjs.Point(this.currentEndX,this.currentEndY),i=new createjs.Point(this.startX,this.startY),r=getDistance(t,i)-this.hairLength;return r},i.drawLine=function(){var t=this.getHairPullAmount();if(this.strokeWidth=this.strokeWidthOriginal-.025*t,this.strokeWidth<.5*this.strokeWidthOriginal&&(this.strokeWidth=.5*this.strokeWidthOriginal),0==this.plucked){var i=new createjs.Point(this.originalStartX,this.originalStartY),r=new createjs.Point(this.currentEndX,this.currentEndY),e=getAngle(i,r),n=getVector(i,.1*t,e);this.currentStartX=n.x,this.currentStartY=n.y,this.pourShape.scaleX=1-5e-4*t,this.pourShape.scaleY=1+.0095*t,this.pourShape.rotation=e}this.removeChild(this.lineShape),this.removeChild(this.rootShape);var s=new createjs.Graphics;s.clear(),s.s(this.lineColor).ss(this.strokeWidth,"square"),s.mt(this.currentStartX,this.currentStartY).lt(this.currentEndX,this.currentEndY),this.lineShape=new createjs.Shape(s),this.addChildAt(this.lineShape,0),this.lineShape.alpha=.85},i.clicked=function(t){t.target;this.dragged=!0},i.drag=function(t){var i=(t.target,this.globalToLocal(t.stageX,t.stageY));if(1==this.plucked)return this.hairPlucked(),this.currentEndX=i.x,this.currentEndY=i.y,this.twanged=!1,this.pourShape.scaleX=1,this.pourShape.scaleY=1,void(this.pourShape.rotation=0);if(this.dragged){if(i.y>=this.startY-.25*this.hairLength)return this.twanged=!0,void(this.dragged=!1);this.getHairPullAmount()>=this.strength&&(console.log("PLUCKED"),playSFX("pluck"+rand(1,5)),this.plucked=!0),!this.plucked,this.currentEndX=i.x,this.currentEndY=i.y,this.twanged=!1}},i.drop=function(t){var i=(t.target,this.globalToLocal(t.stageX,t.stageY));return 1==this.plucked?(this.dropped=!0,void console.log("dropped")):void(this.dragged&&(this.currentEndX=i.x,this.currentEndY=i.y,this.twanged=!0))},i.hairPlucked=function(){var t=new createjs.Point(this.currentEndX,this.currentEndY),i=getVector(t,this.hairLength,180-this.gravity);this.startX=i.x,this.startY=i.y,this.twanged=!0},i.springLine=function(t,i,r,e){return this.velocityX+=(t-r)*(this.spring-.07),r+=this.velocityX*=this.friction,this.velocityY+=(i-e)*(this.spring-.1),e+=this.velocityY*=this.friction,new createjs.Point(r,e)},i.handleTick=function(){if(!this.destroyed){if(this.twanged){var t=this.springLine(this.endX,this.endY,this.currentEndX,this.currentEndY);this.currentEndX=t.x,this.currentEndY=t.y;var i=new createjs.Point(this.currentEndX,this.currentEndY),r=new createjs.Point(this.endX,this.endY);getDistance(i,r)<.2&&(this.twanged=!1)}if(this.plucked){var t=this.springLine(this.startX,this.startY,this.currentStartX,this.currentStartY);this.currentStartX=t.x,this.currentStartY=t.y}if(this.dropped){this.lineShape.y>window.innerHeight&&(this.dropped=!1,this.destroyed=!0,this.removeChild(this.lineShape),console.log("destroyed")),this.fallVelocity>1?this.fallVelocity=1:this.fallVelocity+=this.fallFriction;var e=new createjs.Point(this.lineShape.x,this.lineShape.y),n=this.fallSpeed*this.fallVelocity,s=getVector(e,n,180-this.gravity);return this.lineShape.y=s.y,void(this.lineShape.x=s.x)}this.drawLine()}},i.setGravity=function(t){this.gravity=t},window.Hair=t}();