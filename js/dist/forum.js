module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([,function(e,t){e.exports=flarum.core.compat["forum/app"]},function(e,t){e.exports=flarum.core.compat["common/extend"]},function(e,t){e.exports=flarum.core.compat["forum/components/CommentPost"]},function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),u=r(2),a=r(3),i=r.n(a),c=function(){String.prototype.repeat=function(e){return new Array(e+1).join(this)};var e=o.a.forum.attribute("addItemToArray").split(",");if($("p").html((function(t,r){for(t=0;t<e.length;t++){var n=new RegExp("\\b"+e[t]+"\\b","gi"),o="*".repeat(e[t].length);r=r.replace(n,o)}return r})),!0===o.a.forum.attribute("AlsoEmail")){var t=this.$("p"),r=/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;t.each((function(e,t){$(t).html($(t).html().replace(r,"******@*****"))}))}};o.a.initializers.add("justoverclock/flarum-ext-purify",(function(){Object(u.extend)(i.a.prototype,["oncreate","onupdate"],c)}))}]);
//# sourceMappingURL=forum.js.map