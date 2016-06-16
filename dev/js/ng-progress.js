/*! ngprogress-lite - v1.0.8 (http://labs.voronianski.com/ngprogress-lite.js) */
!function(a,b){"undefined"!=typeof module&&module.exports?module.exports=b(require("angular")):"function"==typeof define&&define.amd?define(["angular"],b):b(a.angular)}(this,function(a,b){"use strict";return a.module("ngProgressLite",[]).provider("ngProgressLite",function(){var b=this.settings={minimum:.08,speed:300,ease:"ease",trickleRate:.02,trickleSpeed:500,template:'<div class="ngProgressLite"><div class="ngProgressLiteBar"><div class="ngProgressLiteBarShadow"></div></div></div>'};this.$get=["$document",function(c){var d;if(b.target){var e=document.getElementsByClassName(b.target);d=a.element(e)}else d=c.find("body");var f,g,h,i={render:function(){return this.isRendered()?f:(d.addClass("ngProgressLite-on"),f=a.element(b.template),d.append(f),h=!1,f)},remove:function(){d.removeClass("ngProgressLite-on"),f.remove(),h=!0},isRendered:function(){return f&&f.children().length>0&&!h},trickle:function(){return j.inc(Math.random()*b.trickleRate)},clamp:function(a,b,c){return b>a?b:a>c?c:a},toBarPercents:function(a){return 100*a},positioning:function(a,b,c){return{width:this.toBarPercents(a)+"%",transition:"all "+b+"ms "+c}}},j={set:function(a){var c=i.render();return a=i.clamp(a,b.minimum,1),g=1===a?null:a,setTimeout(function(){c.children().eq(0).css(i.positioning(a,b.speed,b.ease))},100),1===a&&setTimeout(function(){c.css({transition:"all "+b.speed+"ms linear",opacity:0}),setTimeout(function(){i.remove()},b.speed)},b.speed),j},get:function(){return g},start:function(){g||j.set(0);var a=function(){setTimeout(function(){g&&(i.trickle(),a())},b.trickleSpeed)};return a(),j},inc:function(a){var b=g;return b?("number"!=typeof a&&(a=(1-b)*i.clamp(Math.random()*b,.1,.95)),b=i.clamp(b+a,0,.994),j.set(b)):j.start()},done:function(){g&&j.inc(.3+.5*Math.random()).set(1)}};return j}]}).name});