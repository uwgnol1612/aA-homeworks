!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/js/",o(o.s=0)}([function(e,t,o){e.exports=o(1)},function(e,t,o){var r=o(2);$(function(){var e=$("#easel");new r(e)})},function(e,t){function o(e){this.$el=e,this.setupEasel()}window._randomColorString=function(){return"#"+Math.random().toString(16).substr(-6)},o.prototype.exercise0=function(){$("li").removeClass("square")},o.prototype.exercise1=function(){$("li.square").addClass("orange")},o.prototype.exercise2=function(){$(".square").remove()},o.prototype.exercise3=function(){const e=$("<h1>").text("I love jQuery");$("#easel").append(e)},o.prototype.exercise4=function(){$(".square:nth-child(even)").text("Long")},o.prototype.exercise5=function(){$(".square").on("click",e=>{const t=e.currentTarget,o=$(t);alert(o.attr("data-pos"))})},o.prototype.exercise6=function(){$(".square").each((e,t)=>{$(t).css("background-color",_randomColorString())})},o.prototype.exercise7=function(){$(".square").on("mouseover",e=>{const t=$(e.currentTarget);console.log(t.css("background-color"))})},o.prototype.setupEasel=function(){const e=$("<button>").html("Add a row");this.$el.append(e),e.on("click",this.addRow.bind(this));for(let e=0;e<=7;e++){const t=$("<button>").html("Exercise "+e);t.on("click",this["exercise"+e]),this.$el.append(t)}for(let e=0;e<20;e++)this.addRow()},o.prototype.addRow=function(){const e=this.$el.find(".row").length,t=$("<ul>").addClass("row").addClass("group");for(let o=0;o<20;o++){const r=$("<li>").addClass("square").attr("data-pos",[e,o]);r.on("mouseenter",e=>{$(e.currentTarget).css("background-color",window._randomColorString())}),t.append(r)}this.$el.append(t)},e.exports=o}]);
//# sourceMappingURL=bundle.js.map