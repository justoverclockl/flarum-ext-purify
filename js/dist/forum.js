module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=4)}([,function(t,e){t.exports=flarum.core.compat["forum/app"]},function(t,e){t.exports=flarum.core.compat["common/extend"]},function(t,e){t.exports=flarum.core.compat["forum/components/CommentPost"]},function(t,e,r){"use strict";r.r(e);var n=r(1),o=r.n(n),u=r(2),a=r(3),i=r.n(a),f=function(){String.prototype.repeat=function(t){return new Array(t+1).join(this)};var t=o.a.forum.attribute("addItemToArray").split(",");if($("p").html((function(e,r){for(e=0;e<t.length;e++){var n=new RegExp("\\b"+t[e]+"\\b","gi"),o="*".repeat(t[e].length);r=r.replace(n,o)}return r})),!0===o.a.forum.attribute("AlsoEmail")){var e=this.$("p"),r=/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;e.each((function(t,e){$(e).html($(e).html().replace(r,"******@*****"))}))}if(!0===o.a.forum.attribute("CustomRegexp")){var n=this.$("p"),u=new RegExp(""+o.a.forum.attribute("regexcustom"),"gi"),a=o.a.translator.trans("flarum-ext-purify.forum.obscure");n.each((function(t,e){$(e).html($(e).html().replace(u,(function(t){return" "+a})))}))}};o.a.initializers.add("justoverclock/flarum-ext-purify",(function(){Object(u.extend)(i.a.prototype,["oncreate","onupdate"],f)}))}]);
//# sourceMappingURL=forum.js.map