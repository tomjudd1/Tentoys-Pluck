/*!
 * Modernizr v2.8.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
function randUpAndDown(e,t){return Math.round(Math.random()*t+e)-t/2}function rand(e,t){return Math.round(Math.random()*(t-e)+e)}function round2DP(e){return Math.round(100*e)/100}function round1DP(e){return Math.round(10*e)/10}function getDegrees(e){return d=e*(180/Math.PI)}function getRadians(e){return r=e*(Math.PI/180)}function getVector(e,t,n){var r=getRadians(n),o=e.x+Math.sin(r)*t,i=e.y-Math.cos(r)*t,a=new createjs.Point(o,i);return a}function getDistance(e,t){var n=e.x-t.x;n*=n;var r=e.y-t.y;return r*=r,Math.sqrt(n+r)}function getAngle(e,t){var n=t.x-e.x,r=t.y-e.y,o=Math.atan2(r,n);return o=getDegrees(o)+90,0>o&&(o=360+o),o}function isNumber(e){return e===parseFloat(e)}function isEven(e){return isNumber(e)&&e%2==0}function isOdd(e){return isNumber(e)&&Math.abs(e)%2==1}function playSFX(e){new Howl({urls:["data/sfx/"+e+".mp3","data/sfx/"+e+".ogg"],autoplay:!0,volume:soundLeval}).play()}function changeText(e){$(".js-text-change").html(e)}function init(){document.body.style.cursor="crosshair",createjs.Ticker.setInterval(45),createjs.Ticker.setFPS(45),stage=new createjs.Stage("demoCanvas"),stage.enableMouseOver(),hairCont=stage.addChild(new createjs.Container),hairCont.width=window.innerWidth*(1-padding),hairCont.height=window.innerHeight*(1-padding),resize();var e=Math.round(Math.sqrt(noHairs)),t=hairCont.width/e,n=hairCont.height/e;console.log("SQRT = "+e);for(var r=0;noHairs>r;r++){var o=new Hair(new createjs.Point(0,0),hairLength-rand(0,.25*hairLength),hairColor,hairWidth,skinColor,rand(hairStrength[0],hairStrength[1])),i=Math.floor(r/e);console.log(i);var a=-t*hairOffset;if(isEven(i)&&(a=t*hairOffset),o.x=.5*t+t*r-Math.round(e)*t*i-a+rand(-hairPosRandom,hairPosRandom),o.y=.5*n+n*i+rand(-hairPosRandom,hairPosRandom),i>=e)break;hairs.push(o),hairCont.addChild(hairs[r]);var u=(new createjs.Point(.5*hairCont.width,1.5*hairCont.height),new createjs.Point(o.x,o.y),0);o.rotation=u+rand(-hairRotRandom,hairRotRandom),o.setGravity(o.rotation),o.on("mousedown",hairClicked)}stage.update(),createjs.Ticker.addEventListener("tick",tick)}function hairClicked(e){console.log(hairCont.children.length),hairCont.setChildIndex(e.target,hairCont.children.length-1)}function tick(){stage.update()}function resize(){hairCont.x=.5*window.innerWidth-.5*hairCont.width,hairCont.y=.5*window.innerHeight-.5*hairCont.height,stage.canvas.width=window.innerWidth,stage.canvas.height=window.innerHeight}if(window.Modernizr=function(e,t,n){function r(e){_.cssText=e}function o(e,t){return r(E.join(e+";")+(t||""))}function i(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function u(e,t){for(var r in e){var o=e[r];if(!a(o,"-")&&_[o]!==n)return"pfx"==t?o:!0}return!1}function s(e,t,r){for(var o in e){var a=t[e[o]];if(a!==n)return r===!1?e[o]:i(a,"function")?a.bind(r||t):a}return!1}function d(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+x.join(r+" ")+r).split(" ");return i(t,"string")||i(t,"undefined")?u(o,t):(o=(e+" "+k.join(r+" ")+r).split(" "),s(o,t,n))}function c(){p.input=function(n){for(var r=0,o=n.length;o>r;r++)A[n[r]]=!!(n[r]in w);return A.list&&(A.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),A}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),p.inputtypes=function(e){for(var r,o,i,a=0,u=e.length;u>a;a++)w.setAttribute("type",o=e[a]),r="text"!==w.type,r&&(w.value=b,w.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&w.style.WebkitAppearance!==n?(g.appendChild(w),i=t.defaultView,r=i.getComputedStyle&&"textfield"!==i.getComputedStyle(w,null).WebkitAppearance&&0!==w.offsetHeight,g.removeChild(w)):/^(search|tel)$/.test(o)||(r=/^(url|email)$/.test(o)?w.checkValidity&&w.checkValidity()===!1:w.value!=b)),P[e[a]]=!!r;return P}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var l,h,f="2.8.3",p={},v=!0,g=t.documentElement,m="modernizr",y=t.createElement(m),_=y.style,w=t.createElement("input"),b=":)",S={}.toString,E=" -webkit- -moz- -o- -ms- ".split(" "),C="Webkit Moz O ms",x=C.split(" "),k=C.toLowerCase().split(" "),T={svg:"http://www.w3.org/2000/svg"},N={},P={},A={},M=[],X=M.slice,Y=function(e,n,r,o){var i,a,u,s,d=t.createElement("div"),c=t.body,l=c||t.createElement("body");if(parseInt(r,10))for(;r--;)u=t.createElement("div"),u.id=o?o[r]:m+(r+1),d.appendChild(u);return i=["&#173;",'<style id="s',m,'">',e,"</style>"].join(""),d.id=m,(c?d:l).innerHTML+=i,l.appendChild(d),c||(l.style.background="",l.style.overflow="hidden",s=g.style.overflow,g.style.overflow="hidden",g.appendChild(l)),a=n(d,e),c?d.parentNode.removeChild(d):(l.parentNode.removeChild(l),g.style.overflow=s),!!a},L=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var r;return Y("@media "+t+" { #"+m+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},j=function(){function e(e,o){o=o||t.createElement(r[e]||"div"),e="on"+e;var a=e in o;return a||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),a=i(o[e],"function"),i(o[e],"undefined")||(o[e]=n),o.removeAttribute(e))),o=null,a}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),O={}.hasOwnProperty;h=i(O,"undefined")||i(O.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return O.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=X.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(X.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(X.call(arguments)))};return r}),N.flexbox=function(){return d("flexWrap")},N.flexboxlegacy=function(){return d("boxDirection")},N.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},N.canvastext=function(){return!(!p.canvas||!i(t.createElement("canvas").getContext("2d").fillText,"function"))},N.webgl=function(){return!!e.WebGLRenderingContext},N.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:Y(["@media (",E.join("touch-enabled),("),m,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},N.geolocation=function(){return"geolocation"in navigator},N.postmessage=function(){return!!e.postMessage},N.websqldatabase=function(){return!!e.openDatabase},N.indexedDB=function(){return!!d("indexedDB",e)},N.hashchange=function(){return j("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},N.history=function(){return!(!e.history||!history.pushState)},N.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},N.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},N.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),a(_.backgroundColor,"rgba")},N.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),a(_.backgroundColor,"rgba")||a(_.backgroundColor,"hsla")},N.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(_.background)},N.backgroundsize=function(){return d("backgroundSize")},N.borderimage=function(){return d("borderImage")},N.borderradius=function(){return d("borderRadius")},N.boxshadow=function(){return d("boxShadow")},N.textshadow=function(){return""===t.createElement("div").style.textShadow},N.opacity=function(){return o("opacity:.55"),/^0.55$/.test(_.opacity)},N.cssanimations=function(){return d("animationName")},N.csscolumns=function(){return d("columnCount")},N.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+E.join(n+e)).slice(0,-e.length)),a(_.backgroundImage,"gradient")},N.cssreflections=function(){return d("boxReflect")},N.csstransforms=function(){return!!d("transform")},N.csstransforms3d=function(){var e=!!d("perspective");return e&&"webkitPerspective"in g.style&&Y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){e=9===t.offsetLeft&&3===t.offsetHeight}),e},N.csstransitions=function(){return d("transition")},N.fontface=function(){var e;return Y('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),i=o.sheet||o.styleSheet,a=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"";e=/src/i.test(a)&&0===a.indexOf(r.split(" ")[0])}),e},N.generatedcontent=function(){var e;return Y(["#",m,"{font:0/0 a}#",m,':after{content:"',b,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},N.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},N.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},N.localstorage=function(){try{return localStorage.setItem(m,m),localStorage.removeItem(m),!0}catch(e){return!1}},N.sessionstorage=function(){try{return sessionStorage.setItem(m,m),sessionStorage.removeItem(m),!0}catch(e){return!1}},N.webworkers=function(){return!!e.Worker},N.applicationcache=function(){return!!e.applicationCache},N.svg=function(){return!!t.createElementNS&&!!t.createElementNS(T.svg,"svg").createSVGRect},N.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==T.svg},N.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(S.call(t.createElementNS(T.svg,"animate")))},N.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(S.call(t.createElementNS(T.svg,"clipPath")))};for(var H in N)h(N,H)&&(l=H.toLowerCase(),p[l]=N[H](),M.push((p[l]?"":"no-")+l));return p.input||c(),p.addTest=function(e,t){if("object"==typeof e)for(var r in e)h(e,r)&&p.addTest(r,e[r]);else{if(e=e.toLowerCase(),p[e]!==n)return p;t="function"==typeof t?t():t,"undefined"!=typeof v&&v&&(g.className+=" "+(t?"":"no-")+e),p[e]=t}return p},r(""),y=w=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=m[e[v]];return t||(t={},g++,e[v]=g,m[g]=t),t}function i(e,n,r){if(n||(n=t),c)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():p.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||f.test(e)||i.tagUrn?i:r.frag.appendChild(i)}function a(e,n){if(e||(e=t),c)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),a=0,u=r(),s=u.length;s>a;a++)i.createElement(u[a]);return i}function u(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function s(e){e||(e=t);var r=o(e);return!y.shivCSS||d||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),c||u(e,r),e}var d,c,l="3.7.0",h=e.html5||{},f=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,v="_html5shiv",g=0,m={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",d="hidden"in e,c=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){d=!0,c=!0}}();var y={elements:h.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:l,shivCSS:h.shivCSS!==!1,supportsUnknownElements:c,shivMethods:h.shivMethods!==!1,type:"default",shivDocument:s,createElement:i,createDocumentFragment:a};e.html5=y,s(t)}(this,t),p._version=f,p._prefixes=E,p._domPrefixes=k,p._cssomPrefixes=x,p.mq=L,p.hasEvent=j,p.testProp=function(e){return u([e])},p.testAllProps=d,p.testStyles=Y,p.prefixed=function(e,t,n){return t?d(e,t,n):d(e,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(v?" js "+M.join(" "):""),p}(this,this.document),function(){var e={},t=null,n=!0,r=!1;try{"undefined"!=typeof AudioContext?t=new AudioContext:"undefined"!=typeof webkitAudioContext?t=new webkitAudioContext:n=!1}catch(o){n=!1}if(!n)if("undefined"!=typeof Audio)try{new Audio}catch(o){r=!0}else r=!0;if(n){var i="undefined"==typeof t.createGain?t.createGainNode():t.createGain();i.gain.value=1,i.connect(t.destination)}var a=function(e){this._volume=1,this._muted=!1,this.usingWebAudio=n,this.ctx=t,this.noAudio=r,this._howls=[],this._codecs=e,this.iOSAutoEnable=!0};a.prototype={volume:function(e){var t=this;if(e=parseFloat(e),e>=0&&1>=e){t._volume=e,n&&(i.gain.value=e);for(var r in t._howls)if(t._howls.hasOwnProperty(r)&&t._howls[r]._webAudio===!1)for(var o=0;o<t._howls[r]._audioNode.length;o++)t._howls[r]._audioNode[o].volume=t._howls[r]._volume*t._volume;return t}return n?i.gain.value:t._volume},mute:function(){return this._setMuted(!0),this},unmute:function(){return this._setMuted(!1),this},_setMuted:function(e){var t=this;t._muted=e,n&&(i.gain.value=e?0:t._volume);for(var r in t._howls)if(t._howls.hasOwnProperty(r)&&t._howls[r]._webAudio===!1)for(var o=0;o<t._howls[r]._audioNode.length;o++)t._howls[r]._audioNode[o].muted=e},codecs:function(e){return this._codecs[e]},_enableiOSAudio:function(){var e=this;if(!t||!e._iOSEnabled&&/iPhone|iPad|iPod/i.test(navigator.userAgent)){e._iOSEnabled=!1;var n=function(){var r=t.createBuffer(1,1,22050),o=t.createBufferSource();o.buffer=r,o.connect(t.destination),"undefined"==typeof o.start?o.noteOn(0):o.start(0),setTimeout(function(){(o.playbackState===o.PLAYING_STATE||o.playbackState===o.FINISHED_STATE)&&(e._iOSEnabled=!0,e.iOSAutoEnable=!1,window.removeEventListener("touchstart",n,!1))},0)};return window.addEventListener("touchstart",n,!1),e}}};var u=null,s={};r||(u=new Audio,s={mp3:!!u.canPlayType("audio/mpeg;").replace(/^no$/,""),opus:!!u.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!u.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!u.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),aac:!!u.canPlayType("audio/aac;").replace(/^no$/,""),m4a:!!(u.canPlayType("audio/x-m4a;")||u.canPlayType("audio/m4a;")||u.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(u.canPlayType("audio/x-mp4;")||u.canPlayType("audio/mp4;")||u.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!u.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")});var d=new a(s),c=function(e){var r=this;r._autoplay=e.autoplay||!1,r._buffer=e.buffer||!1,r._duration=e.duration||0,r._format=e.format||null,r._loop=e.loop||!1,r._loaded=!1,r._sprite=e.sprite||{},r._src=e.src||"",r._pos3d=e.pos3d||[0,0,-.5],r._volume=void 0!==e.volume?e.volume:1,r._urls=e.urls||[],r._rate=e.rate||1,r._model=e.model||null,r._onload=[e.onload||function(){}],r._onloaderror=[e.onloaderror||function(){}],r._onend=[e.onend||function(){}],r._onpause=[e.onpause||function(){}],r._onplay=[e.onplay||function(){}],r._onendTimer=[],r._webAudio=n&&!r._buffer,r._audioNode=[],r._webAudio&&r._setupAudioNode(),"undefined"!=typeof t&&t&&d.iOSAutoEnable&&d._enableiOSAudio(),d._howls.push(r),r.load()};if(c.prototype={load:function(){var e=this,t=null;if(r)return void e.on("loaderror");for(var n=0;n<e._urls.length;n++){var o,i;if(e._format)o=e._format;else{if(i=e._urls[n],o=/^data:audio\/([^;,]+);/i.exec(i),o||(o=/\.([^.]+)$/.exec(i.split("?",1)[0])),!o)return void e.on("loaderror");o=o[1].toLowerCase()}if(s[o]){t=e._urls[n];break}}if(!t)return void e.on("loaderror");if(e._src=t,e._webAudio)l(e,t);else{var u=new Audio;u.addEventListener("error",function(){u.error&&4===u.error.code&&(a.noAudio=!0),e.on("loaderror",{type:u.error?u.error.code:0})},!1),e._audioNode.push(u),u.src=t,u._pos=0,u.preload="auto",u.volume=d._muted?0:e._volume*d.volume();var c=function(){e._duration=Math.ceil(10*u.duration)/10,0===Object.getOwnPropertyNames(e._sprite).length&&(e._sprite={_default:[0,1e3*e._duration]}),e._loaded||(e._loaded=!0,e.on("load")),e._autoplay&&e.play(),u.removeEventListener("canplaythrough",c,!1)};u.addEventListener("canplaythrough",c,!1),u.load()}return e},urls:function(e){var t=this;return e?(t.stop(),t._urls="string"==typeof e?[e]:e,t._loaded=!1,t.load(),t):t._urls},play:function(e,n){var r=this;return"function"==typeof e&&(n=e),e&&"function"!=typeof e||(e="_default"),r._loaded?r._sprite[e]?(r._inactiveNode(function(o){o._sprite=e;var i=o._pos>0?o._pos:r._sprite[e][0]/1e3,a=0;r._webAudio?(a=r._sprite[e][1]/1e3-o._pos,o._pos>0&&(i=r._sprite[e][0]/1e3+i)):a=r._sprite[e][1]/1e3-(i-r._sprite[e][0]/1e3);var u,s=!(!r._loop&&!r._sprite[e][2]),c="string"==typeof n?n:Math.round(Date.now()*Math.random())+"";if(function(){var t={id:c,sprite:e,loop:s};u=setTimeout(function(){!r._webAudio&&s&&r.stop(t.id).play(e,t.id),r._webAudio&&!s&&(r._nodeById(t.id).paused=!0,r._nodeById(t.id)._pos=0,r._clearEndTimer(t.id)),r._webAudio||s||r.stop(t.id),r.on("end",c)},1e3*a),r._onendTimer.push({timer:u,id:t.id})}(),r._webAudio){var l=r._sprite[e][0]/1e3,h=r._sprite[e][1]/1e3;o.id=c,o.paused=!1,p(r,[s,l,h],c),r._playStart=t.currentTime,o.gain.value=r._volume,"undefined"==typeof o.bufferSource.start?o.bufferSource.noteGrainOn(0,i,a):o.bufferSource.start(0,i,a)}else{if(4!==o.readyState&&(o.readyState||!navigator.isCocoonJS))return r._clearEndTimer(c),function(){var t=r,i=e,a=n,u=o,s=function(){t.play(i,a),u.removeEventListener("canplaythrough",s,!1)};u.addEventListener("canplaythrough",s,!1)}(),r;o.readyState=4,o.id=c,o.currentTime=i,o.muted=d._muted||o.muted,o.volume=r._volume*d.volume(),setTimeout(function(){o.play()},0)}return r.on("play"),"function"==typeof n&&n(c),r}),r):("function"==typeof n&&n(),r):(r.on("load",function(){r.play(e,n)}),r)},pause:function(e){var t=this;if(!t._loaded)return t.on("play",function(){t.pause(e)}),t;t._clearEndTimer(e);var n=e?t._nodeById(e):t._activeNode();if(n)if(n._pos=t.pos(null,e),t._webAudio){if(!n.bufferSource||n.paused)return t;n.paused=!0,"undefined"==typeof n.bufferSource.stop?n.bufferSource.noteOff(0):n.bufferSource.stop(0)}else n.pause();return t.on("pause"),t},stop:function(e){var t=this;if(!t._loaded)return t.on("play",function(){t.stop(e)}),t;t._clearEndTimer(e);var n=e?t._nodeById(e):t._activeNode();if(n)if(n._pos=0,t._webAudio){if(!n.bufferSource||n.paused)return t;n.paused=!0,"undefined"==typeof n.bufferSource.stop?n.bufferSource.noteOff(0):n.bufferSource.stop(0)}else isNaN(n.duration)||(n.pause(),n.currentTime=0);return t},mute:function(e){var t=this;if(!t._loaded)return t.on("play",function(){t.mute(e)}),t;var n=e?t._nodeById(e):t._activeNode();return n&&(t._webAudio?n.gain.value=0:n.muted=!0),t},unmute:function(e){var t=this;if(!t._loaded)return t.on("play",function(){t.unmute(e)}),t;var n=e?t._nodeById(e):t._activeNode();return n&&(t._webAudio?n.gain.value=t._volume:n.muted=!1),t},volume:function(e,t){var n=this;if(e=parseFloat(e),e>=0&&1>=e){if(n._volume=e,!n._loaded)return n.on("play",function(){n.volume(e,t)}),n;var r=t?n._nodeById(t):n._activeNode();return r&&(n._webAudio?r.gain.value=e:r.volume=e*d.volume()),n}return n._volume},loop:function(e){var t=this;return"boolean"==typeof e?(t._loop=e,t):t._loop},sprite:function(e){var t=this;return"object"==typeof e?(t._sprite=e,t):t._sprite},pos:function(e,n){var r=this;if(!r._loaded)return r.on("load",function(){r.pos(e)}),"number"==typeof e?r:r._pos||0;e=parseFloat(e);var o=n?r._nodeById(n):r._activeNode();if(o)return e>=0?(r.pause(n),o._pos=e,r.play(o._sprite,n),r):r._webAudio?o._pos+(t.currentTime-r._playStart):o.currentTime;if(e>=0)return r;for(var i=0;i<r._audioNode.length;i++)if(r._audioNode[i].paused&&4===r._audioNode[i].readyState)return r._webAudio?r._audioNode[i]._pos:r._audioNode[i].currentTime},pos3d:function(e,t,n,r){var o=this;if(t="undefined"!=typeof t&&t?t:0,n="undefined"!=typeof n&&n?n:-.5,!o._loaded)return o.on("play",function(){o.pos3d(e,t,n,r)}),o;if(!(e>=0||0>e))return o._pos3d;if(o._webAudio){var i=r?o._nodeById(r):o._activeNode();i&&(o._pos3d=[e,t,n],i.panner.setPosition(e,t,n),i.panner.panningModel=o._model||"HRTF")}return o},fade:function(e,t,n,r,o){var i=this,a=Math.abs(e-t),u=e>t?"down":"up",s=a/.01,d=n/s;if(!i._loaded)return i.on("load",function(){i.fade(e,t,n,r,o)}),i;i.volume(e,o);for(var c=1;s>=c;c++)!function(){var e=i._volume+("up"===u?.01:-.01)*c,n=Math.round(1e3*e)/1e3,a=t;setTimeout(function(){i.volume(n,o),n===a&&r&&r()},d*c)}()},fadeIn:function(e,t,n){return this.volume(0).play().fade(0,e,t,n)},fadeOut:function(e,t,n,r){var o=this;return o.fade(o._volume,e,t,function(){n&&n(),o.pause(r),o.on("end")},r)},_nodeById:function(e){for(var t=this,n=t._audioNode[0],r=0;r<t._audioNode.length;r++)if(t._audioNode[r].id===e){n=t._audioNode[r];break}return n},_activeNode:function(){for(var e=this,t=null,n=0;n<e._audioNode.length;n++)if(!e._audioNode[n].paused){t=e._audioNode[n];break}return e._drainPool(),t},_inactiveNode:function(e){for(var t=this,n=null,r=0;r<t._audioNode.length;r++)if(t._audioNode[r].paused&&4===t._audioNode[r].readyState){e(t._audioNode[r]),n=!0;break}if(t._drainPool(),!n){var o;if(t._webAudio)o=t._setupAudioNode(),e(o);else{t.load(),o=t._audioNode[t._audioNode.length-1];var i=navigator.isCocoonJS?"canplaythrough":"loadedmetadata",a=function(){o.removeEventListener(i,a,!1),e(o)};o.addEventListener(i,a,!1)}}},_drainPool:function(){var e,t=this,n=0;for(e=0;e<t._audioNode.length;e++)t._audioNode[e].paused&&n++;for(e=t._audioNode.length-1;e>=0&&!(5>=n);e--)t._audioNode[e].paused&&(t._webAudio&&t._audioNode[e].disconnect(0),n--,t._audioNode.splice(e,1))},_clearEndTimer:function(e){for(var t=this,n=0,r=0;r<t._onendTimer.length;r++)if(t._onendTimer[r].id===e){n=r;break}var o=t._onendTimer[n];o&&(clearTimeout(o.timer),t._onendTimer.splice(n,1))},_setupAudioNode:function(){var e=this,n=e._audioNode,r=e._audioNode.length;return n[r]="undefined"==typeof t.createGain?t.createGainNode():t.createGain(),n[r].gain.value=e._volume,n[r].paused=!0,n[r]._pos=0,n[r].readyState=4,n[r].connect(i),n[r].panner=t.createPanner(),n[r].panner.panningModel=e._model||"equalpower",n[r].panner.setPosition(e._pos3d[0],e._pos3d[1],e._pos3d[2]),n[r].panner.connect(n[r]),n[r]},on:function(e,t){var n=this,r=n["_on"+e];if("function"==typeof t)r.push(t);else for(var o=0;o<r.length;o++)t?r[o].call(n,t):r[o].call(n);return n},off:function(e,t){var n=this,r=n["_on"+e],o=t?t.toString():null;if(o){for(var i=0;i<r.length;i++)if(o===r[i].toString()){r.splice(i,1);break}}else n["_on"+e]=[];return n},unload:function(){for(var t=this,n=t._audioNode,r=0;r<t._audioNode.length;r++)n[r].paused||(t.stop(n[r].id),t.on("end",n[r].id)),t._webAudio?n[r].disconnect(0):n[r].src="";for(r=0;r<t._onendTimer.length;r++)clearTimeout(t._onendTimer[r].timer);var o=d._howls.indexOf(t);null!==o&&o>=0&&d._howls.splice(o,1),delete e[t._src],t=null}},n)var l=function(t,n){if(n in e)return t._duration=e[n].duration,void f(t);if(/^data:[^;]+;base64,/.test(n)){for(var r=atob(n.split(",")[1]),o=new Uint8Array(r.length),i=0;i<r.length;++i)o[i]=r.charCodeAt(i);h(o.buffer,t,n)}else{var a=new XMLHttpRequest;a.open("GET",n,!0),a.responseType="arraybuffer",a.onload=function(){h(a.response,t,n)},a.onerror=function(){t._webAudio&&(t._buffer=!0,t._webAudio=!1,t._audioNode=[],delete t._gainNode,delete e[n],t.load())};try{a.send()}catch(u){a.onerror()}}},h=function(n,r,o){t.decodeAudioData(n,function(t){t&&(e[o]=t,f(r,t))},function(){r.on("loaderror")})},f=function(e,t){e._duration=t?t.duration:e._duration,0===Object.getOwnPropertyNames(e._sprite).length&&(e._sprite={_default:[0,1e3*e._duration]}),e._loaded||(e._loaded=!0,e.on("load")),e._autoplay&&e.play()},p=function(n,r,o){var i=n._nodeById(o);i.bufferSource=t.createBufferSource(),i.bufferSource.buffer=e[n._src],i.bufferSource.connect(i.panner),i.bufferSource.loop=r[0],r[0]&&(i.bufferSource.loopStart=r[1],i.bufferSource.loopEnd=r[1]+r[2]),i.bufferSource.playbackRate.value=n._rate};"function"==typeof define&&define.amd&&define(function(){return{Howler:d,Howl:c}}),"undefined"!=typeof exports&&(exports.Howler=d,exports.Howl=c),"undefined"!=typeof window&&(window.Howler=d,window.Howl=c)}(),function(){var e=function(e,t,n,r,o,i){this.initialize(e,t,n,r,o,i)},t=e.prototype=new createjs.Container;t.lineShape,t.rootShape,t.pourShape,t.hairLength,t.gravity,t.fallSpeed=70,t.fallFriction=.2,t.fallVelocity=0,t.strength,t.rootSize,t.lineColor,t.strokeWidthOriginal,t.strokeWidth,t.originalStartX,t.originalSstartY,t.startX,t.startY,t.originalEndX,t.originalEndY,t.endX,t.endY,t.currentStartX,t.currentStartY,t.currentEndX,t.currentEndY,t.spring=.9,t.friction=.7,t.velocityX=0,t.velocityY=0,t.growDelay=50,t.dragged=!1,t.twanged=!1,t.plucked=!1,t.dropped=!1,t.destroyed=!1,t.count=0,t.Container_initialize=t.initialize,t.initialize=function(e,t,n,r,o,i){this.Container_initialize(),this.originalStartX=e.x,this.originalStartY=e.y,this.startX=e.x,this.startY=e.y,this.originalEndX=e.x,this.originalEndY=e.y-t,this.endX=this.originalEndX,this.endY=this.originalEndY,this.strength=i,this.hairLength=t,this.lineColor=n,this.rootSize=.7*r,this.strokeWidthOriginal=r,this.strokeWidth=r,this.currentStartX=this.startX,this.currentStartY=this.startY,this.currentEndX=this.endX,this.currentEndY=this.endY;var a=new createjs.Graphics;a.f(o),a.beginLinearGradientFill([o,"#ffbdb8"],[1,0],0,0,0,2).dc(this.currentStartX,this.currentStartY+this.rootSize,2*this.rootSize),a.dc(this.currentStartX,this.currentStartY+this.rootSize,2.5*this.rootSize),this.pourShape=new createjs.Shape(a),this.addChild(this.pourShape),this.drawLine(),this.on("mousedown",this.clicked),this.on("pressmove",this.drag),this.on("pressup",this.drop),this.on("tick",this.handleTick),this.mouseChildren=!1},t.getHairPullAmount=function(){var e=new createjs.Point(this.currentEndX,this.currentEndY),t=new createjs.Point(this.startX,this.startY),n=getDistance(e,t)-this.hairLength;return n},t.drawLine=function(){var e=this.getHairPullAmount();if(this.strokeWidth=this.strokeWidthOriginal-.025*e,this.strokeWidth<.5*this.strokeWidthOriginal&&(this.strokeWidth=.5*this.strokeWidthOriginal),0==this.plucked){var t=new createjs.Point(this.originalStartX,this.originalStartY),n=new createjs.Point(this.currentEndX,this.currentEndY),r=getAngle(t,n),o=getVector(t,.1*e,r);this.currentStartX=o.x,this.currentStartY=o.y,this.pourShape.scaleX=1-5e-4*e,this.pourShape.scaleY=1+.0095*e,this.pourShape.rotation=r}this.removeChild(this.lineShape),this.removeChild(this.rootShape);var i=new createjs.Graphics;i.clear(),i.s(this.lineColor).ss(this.strokeWidth,"square"),i.mt(this.currentStartX,this.currentStartY).lt(this.currentEndX,this.currentEndY),this.lineShape=new createjs.Shape(i),this.addChildAt(this.lineShape,0),this.lineShape.alpha=.85},t.clicked=function(e){e.target;this.dragged=!0},t.drag=function(e){var t=(e.target,this.globalToLocal(e.stageX,e.stageY));if(1==this.plucked)return this.hairPlucked(),this.currentEndX=t.x,this.currentEndY=t.y,this.twanged=!1,this.pourShape.scaleX=1,this.pourShape.scaleY=1,void(this.pourShape.rotation=0);if(this.dragged){if(t.y>=this.startY-.25*this.hairLength)return this.twanged=!0,void(this.dragged=!1);this.getHairPullAmount()>=this.strength&&(console.log("PLUCKED"),playSFX("pluck"+rand(1,5)),this.plucked=!0),!this.plucked,this.currentEndX=t.x,this.currentEndY=t.y,this.twanged=!1}},t.drop=function(e){var t=(e.target,this.globalToLocal(e.stageX,e.stageY));return 1==this.plucked?(this.dropped=!0,void console.log("dropped")):void(this.dragged&&(this.currentEndX=t.x,this.currentEndY=t.y,this.twanged=!0))},t.hairPlucked=function(){var e=new createjs.Point(this.currentEndX,this.currentEndY),t=getVector(e,this.hairLength,180-this.gravity);this.startX=t.x,this.startY=t.y,this.twanged=!0},t.springLine=function(e,t,n,r){return this.velocityX+=(e-n)*(this.spring-.07),n+=this.velocityX*=this.friction,this.velocityY+=(t-r)*(this.spring-.1),r+=this.velocityY*=this.friction,new createjs.Point(n,r)},t.handleTick=function(){if(!this.destroyed){if(this.twanged){var e=this.springLine(this.endX,this.endY,this.currentEndX,this.currentEndY);this.currentEndX=e.x,this.currentEndY=e.y;var t=new createjs.Point(this.currentEndX,this.currentEndY),n=new createjs.Point(this.endX,this.endY);getDistance(t,n)<.2&&(this.twanged=!1)}if(this.plucked){var e=this.springLine(this.startX,this.startY,this.currentStartX,this.currentStartY);this.currentStartX=e.x,this.currentStartY=e.y}if(this.dropped){this.lineShape.y>window.innerHeight&&(this.dropped=!1,this.destroyed=!0,this.removeChild(this.lineShape),console.log("destroyed")),this.fallVelocity>1?this.fallVelocity=1:this.fallVelocity+=this.fallFriction;var r=new createjs.Point(this.lineShape.x,this.lineShape.y),o=this.fallSpeed*this.fallVelocity,i=getVector(r,o,180-this.gravity);return this.lineShape.y=i.y,void(this.lineShape.x=i.x)}this.drawLine()}},t.setGravity=function(e){this.gravity=e},window.Hair=e}(),Modernizr.canvas)var soundLeval=.7;var noHairs=rand(100,150),padding=.1,hairOffset=.25,stage,titleCont,hairCont,scaler=1,hairLength=25*scaler,hairWidth=10*scaler,hairColor="#766b6a",skinColor="#ffc7c0",hairStrength=[100,200],hairPosRandom=5,hairRotRandom=5,hairs=[];window.addEventListener("resize",resize,!1);