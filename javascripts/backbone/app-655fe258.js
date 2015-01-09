(function(){var e=[].slice;window.HAML=function(){function n(){}return n.escape=function(e){return(""+e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/\//g,"&#47;")},n.cleanValue=function(e){switch(e){case null:case void 0:return"";case!0:case!1:return"\x93"+e;default:return e}},n.extend=function(){var n,t,o,i,r,c,l;for(t=arguments[0],i=2<=arguments.length?e.call(arguments,1):[],c=0,l=i.length;l>c;c++){o=i[c];for(n in o)r=o[n],t[n]=r}return t},n.globals=function(){return{}},n.context=function(e){return this.extend({},n.globals(),e)},n.preserve=function(e){return e.replace(/\n/g,"&#x000A;")},n.findAndPreserve=function(e){var n;return n="textarea,pre".split(",").join("|"),e=e.replace(/\r/g,"").replace(RegExp("<("+n+")>([\\s\\S]*?)</\\1>","g"),function(e,n,t){return"<"+n+">"+window.HAML.preserve(t)+"</"+n+">"})},n.surround=function(e,n,t){var o;return e+(null!=(o=t.call(this))?o.replace(/^\s+|\s+$/g,""):void 0)+n},n.succeed=function(e,n){var t;return(null!=(t=n.call(this))?t.replace(/\s+$/g,""):void 0)+e},n.precede=function(e,n){var t;return e+(null!=(t=n.call(this))?t.replace(/^\s+/g,""):void 0)},n.reference=function(e,n){var t,o,i,r;return o=n?n+"_":"",o+="function"==typeof e.hamlObjectRef?e.hamlObjectRef():((null!=(r=e.constructor)?r.name:void 0)||"object").replace(/\W+/g,"_").replace(/([a-z\d])([A-Z])/g,"$1_$2").toLowerCase(),t="function"==typeof e.to_key?e.to_key():"function"==typeof e.id?e.id():e.id?e.id:e,i="class='"+o+"'",t?i+=" id='"+o+"_"+t+"'":void 0},n}()}).call(this);var App={Models:{},Routers:{},Collections:{},Views:{}};$(document).ready(function(){window.l=function(e){"undefined"!=typeof console&&"true"==localStorage.getItem("debug")&&console.log(e)},new App.Routers.Desktop}),function(){null==window.JST&&(window.JST={}),window.JST["backbone/templates/home/home_not_supported"]=function(e){return function(){var e;return e=[],e.join("\n")}.call(window.HAML.context(e))}}.call(this),function(){null==window.JST&&(window.JST={}),window.JST["backbone/templates/home/home_touch_full"]=function(e){return function(){var e;return e=[],e.join("\n")}.call(window.HAML.context(e))}}.call(this),function(){null==window.JST&&(window.JST={}),window.JST["backbone/templates/home/home_touch"]=function(e){return function(){var e;return e=[],e.join("\n")}.call(window.HAML.context(e))}}.call(this),App.Models.Person=Backbone.Model.extend({idAttribute:"id"}),App.Collections.People=Backbone.Collection.extend({model:App.Models.Person,url:"data/people.json"}),App.Views.Base=Backbone.View.extend({subViews:[],events:{"click .js-internal":"internalLink","click .js-close-mob-promt":"closeMobPromt"},initialize:function(e){var n=this;return n.options=e,$(".js-container").append(n.el),n},closeMobPromt:function(e){e.preventDefault(),$(".home").transit({opacity:0},500,function(){$(".home").remove()})},showCredits:function(e){e.preventDefault();$(e.currentTarget)},internalLink:function(e){var n=this;e.preventDefault();var t=$(e.currentTarget);n.options.router.transition(t.attr("href"))},destroy:function(e){var n=this;$(n.el).transition({opacity:0},500,function(){window.scrollTo(0,0);for(var t=n.subViews.length-1;t>=0;t--)n.subViews[t].unbind(),n.subViews[t].remove();n.unbind(),n.remove(),_.isFunction(e())&&e()})},render:function(e){var n,t=this,o="";return n={collection:t.options.collection,model:t.options.model},o+=JST["backbone/templates/"+t.options.tmpl](n),t.$el.html(o),$("body").append(t.$el),_.isUndefined(e)||_.isFunction(e)&&e(),t}}),App.Views.HomeIndex=App.Views.Base.extend({className:"home"}),App.Routers.Desktop=Backbone.Router.extend({currentView:null,initialize:function(){var e=this;e.app_state=_.extend({},Backbone.Events),e.collection=new App.Collections.People,e.collection.fetch().done(function(){e.options={app_state:e.app_state,collection:e.collection,router:e},Backbone.history.start({pushState:!1})})},routes:{"":"home_index"},home_index:function(){var e=this;Modernizr.touch?(e.options.tmpl="home/home_touch",e.currentView=new App.Views.HomeIndex(e.options).render()):Modernizr.canvas||(e.options.tmpl="home/home_not_supported",e.currentView=new App.Views.HomeIndex(e.options).render())}});