!function(x){"use strict";function n(n,r,t){return t.a=n,t.f=r,t}function f(t){return n(2,t,function(r){return function(n){return t(r,n)}})}function r(e){return n(3,e,function(t){return function(r){return function(n){return e(t,r,n)}}})}function t(u){return n(4,u,function(e){return function(t){return function(r){return function(n){return u(e,t,r,n)}}}})}function e(o){return n(5,o,function(u){return function(e){return function(t){return function(r){return function(n){return o(u,e,t,r,n)}}}}})}function C(i){return n(6,i,function(o){return function(u){return function(e){return function(t){return function(r){return function(n){return i(o,u,e,t,r,n)}}}}}})}function O(f){n(7,f,function(i){return function(o){return function(u){return function(e){return function(t){return function(r){return function(n){return f(i,o,u,e,t,r,n)}}}}}}})}function T(c){n(8,c,function(f){return function(i){return function(o){return function(u){return function(e){return function(t){return function(r){return function(n){return c(f,i,o,u,e,t,r,n)}}}}}}}})}function D(a){n(9,a,function(c){return function(f){return function(i){return function(o){return function(u){return function(e){return function(t){return function(r){return function(n){return a(c,f,i,o,u,e,t,r,n)}}}}}}}}})}function b(n,r,t){return 2===n.a?n.f(r,t):n(r)(t)}function s(n,r,t,e){return 3===n.a?n.f(r,t,e):n(r)(t)(e)}function l(n,r,t,e,u){return 4===n.a?n.f(r,t,e,u):n(r)(t)(e)(u)}function c(n,r,t,e,u,o){return 5===n.a?n.f(r,t,e,u,o):n(r)(t)(e)(u)(o)}function M(n,r,t,e,u,o,i){return 6===n.a?n.f(r,t,e,u,o,i):n(r)(t)(e)(u)(o)(i)}function F(n,r){for(var t,e=[],u=z(n,r,0,e);u&&(t=e.pop());u=z(t.a,t.b,0,e));return u}function z(n,r,t,e){if(n===r)return!0;if("object"!=typeof n||null===n||null===r)return"function"==typeof n&&g(5),!1;if(100<t)return e.push({$:"#2",a:n,b:r}),!0;for(var u in"Set_elm_builtin"===n.$&&(n=Lr(n),r=Lr(r)),"RBNode_elm_builtin"!==n.$&&"RBEmpty_elm_builtin"!==n.$||(n=jr(n),r=jr(r)),n)if(!z(n[u],r[u],t+1,e))return!1;return!0}function i(n,r,t){if("object"!=typeof n)return n===r?0:n<r?-1:1;var e,u;if(n instanceof String)return(e=n.valueOf())===(u=r.valueOf())?0:e<u?-1:1;if("#"===n.$[0])return(t=i(n.a,r.a))||(t=i(n.b,r.b))?t:i(n.c,r.c);for(;n.b&&r.b&&!(t=i(n.a,r.a));n=n.b,r=r.b);return t||(n.b?1:r.b?-1:0)}console.warn("Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets."),f(F),f(function(n,r){return!F(n,r)}),f(function(n,r){return i(n,r)<0}),f(function(n,r){return i(n,r)<1}),f(function(n,r){return 0<i(n,r)}),f(function(n,r){return 0<=i(n,r)}),f(function(n,r){n=i(n,r);return n<0?Sr:n?Qr:Er});var u={$:"#0"};function J(n,r){var t,e={};for(t in n)e[t]=n[t];for(t in r)e[t]=r[t];return e}function o(n,r){if("string"==typeof n)return n+r;if(!n.b)return r;var t=v(n.a,r);n=n.b;for(var e=t;n.b;n=n.b)e=e.b=v(n.a,r);return t}f(o);var p={$:"[]"};function v(n,r){return{$:"::",a:n,b:r}}var I=f(v);function d(n){for(var r=p,t=n.length;t--;)r=v(n[t],r);return r}function Y(n){for(var r=[];n.b;n=n.b)r.push(n.a);return r}var V=r(function(n,r,t){for(var e=[];r.b&&t.b;r=r.b,t=t.b)e.push(b(n,r.a,t.a));return d(e)}),W=(t(function(n,r,t,e){for(var u=[];r.b&&t.b&&e.b;r=r.b,t=t.b,e=e.b)u.push(s(n,r.a,t.a,e.a));return d(u)}),e(function(n,r,t,e,u){for(var o=[];r.b&&t.b&&e.b&&u.b;r=r.b,t=t.b,e=e.b,u=u.b)o.push(l(n,r.a,t.a,e.a,u.a));return d(o)}),C(function(n,r,t,e,u,o){for(var i=[];r.b&&t.b&&e.b&&u.b&&o.b;r=r.b,t=t.b,e=e.b,u=u.b,o=o.b)i.push(c(n,r.a,t.a,e.a,u.a,o.a));return d(i)}),f(function(t,n){return d(Y(n).sort(function(n,r){return i(t(n),t(r))}))}),f(function(t,n){return d(Y(n).sort(function(n,r){n=b(t,n,r);return n===Er?0:n===Sr?-1:1}))}),r(function(n,r,t){for(var e=Array(n),u=0;u<n;u++)e[u]=t(r+u);return e})),G=f(function(n,r){for(var t=Array(n),e=0;e<n&&r.b;e++)t[e]=r.a,r=r.b;return t.length=e,{$:"#2",a:t,b:r}}),U=f(function(n,r){return r[n]}),X=(r(function(n,r,t){for(var e=t.length,u=Array(e),o=0;o<e;o++)u[o]=t[o];return u[n]=r,u}),f(function(n,r){for(var t=r.length,e=Array(t+1),u=0;u<t;u++)e[u]=r[u];return e[t]=n,e}),r(function(n,r,t){for(var e=t.length,u=0;u<e;u++)r=b(n,t[u],r);return r}),r(function(n,r,t){for(var e=t.length-1;0<=e;e--)r=b(n,t[e],r);return r}));function H(n){return function n(r,t){if("function"==typeof t)return tn(r,"<function>");if("boolean"==typeof t)return h(r,t?"True":"False");if("number"==typeof t)return function(n,r){return n?"[95m"+r+"[0m":r}(r,t+"");if(t instanceof String)return function(n,r){return n?"[92m"+r+"[0m":r}(r,"'"+Z(t,!0)+"'");if("string"==typeof t)return nn(r,'"'+Z(t,!1)+'"');if("object"==typeof t&&"$"in t){var e=t.$;if("number"==typeof e)return tn(r,"<internals>");if("#"===e[0]){var u,o=[];for(u in t)"$"!==u&&o.push(n(r,t[u]));return"("+o.join(",")+")"}if("Set_elm_builtin"===e)return h(r,"Set")+rn(r,".fromList")+" "+n(r,Lr(t));if("RBNode_elm_builtin"===e||"RBEmpty_elm_builtin"===e)return h(r,"Dict")+rn(r,".fromList")+" "+n(r,jr(t));if("Array_elm_builtin"===e)return h(r,"Array")+rn(r,".fromList")+" "+n(r,Or(t));if("::"===e||"[]"===e){for(o="[",t.b&&(o+=n(r,t.a),t=t.b);t.b;t=t.b)o+=","+n(r,t.a);return o+"]"}var i,f,c,o="";for(i in t)"$"!==i&&(f=n(r,t[i]),c="{"===(c=f[0])||"("===c||"["===c||"<"===c||'"'===c||!~f.indexOf(" "),o+=" "+(c?f:"("+f+")"));return h(r,e)+o}if("function"==typeof DataView&&t instanceof DataView)return nn(r,"<"+t.byteLength+" bytes>");if("undefined"!=typeof File&&t instanceof File)return tn(r,"<"+t.name+">");if("object"!=typeof t)return tn(r,"<internals>");var a,o=[];for(a in t){var s="_"===a[0]?a.slice(1):a;o.push(rn(r,s)+" = "+n(r,t[a]))}return 0===o.length?"{}":"{ "+o.join(", ")+" }"}(!1,n)}function Z(n,r){n=n.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/\v/g,"\\v").replace(/\0/g,"\\0");return r?n.replace(/\'/g,"\\'"):n.replace(/\"/g,'\\"')}function h(n,r){return n?"[96m"+r+"[0m":r}function nn(n,r){return n?"[93m"+r+"[0m":r}function rn(n,r){return n?"[37m"+r+"[0m":r}function tn(n,r){return n?"[36m"+r+"[0m":r}function g(n,r,t,e,u){switch(n){case 0:throw Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');case 1:throw Error("Browser.application programs cannot handle URLs like this:\n\n    "+document.location.href+"\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.");case 2:throw Error("Problem with the flags given to your Elm program on initialization.\n\n"+r);case 3:throw Error("There can only be one port named `"+r+"`, but your program has multiple.");case 4:throw Error("Trying to send an unexpected type of value through port `"+r+"`:\n"+t);case 5:throw Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');case 6:throw Error("Your page is loading multiple Elm scripts with a module named "+r+". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!");case 8:var o=e;throw Error("TODO in module `"+r+"` "+en(t)+"\n\n"+o);case 9:throw o=u,Error("TODO in module `"+r+"` from the `case` expression "+en(t)+"\n\nIt received the following value:\n\n    "+H(e).replace("\n","\n    ")+"\n\nBut the branch that handles it says:\n\n    "+o.replace("\n","\n    "));case 10:throw Error("Bug in https://github.com/elm/virtual-dom/issues");case 11:throw Error("Cannot perform mod 0. Division by zero error.")}}function en(n){return n.start.line===n.end.line?"on line "+n.start.line:"on lines "+n.start.line+" through "+n.end.line}f(function(n,r){for(var t=r.length,e=Array(t),u=0;u<t;u++)e[u]=n(r[u]);return e}),r(function(n,r,t){for(var e=t.length,u=Array(e),o=0;o<e;o++)u[o]=b(n,r+o,t[o]);return u}),r(function(n,r,t){return t.slice(n,r)}),r(function(n,r,t){for(var e=r.length,u=n-e,n=e+(u=t.length<u?t.length:u),o=Array(n),i=0;i<e;i++)o[i]=r[i];for(i=0;i<u;i++)o[i+e]=t[i];return o}),f(function(n,r){return r}),f(function(n,r){return console.log(n+": "+H(r)),r}),f(function(n,r){return n+r}),f(function(n,r){return n-r}),f(function(n,r){return n*r}),f(function(n,r){return n/r}),f(function(n,r){return n/r|0}),f(Math.pow),f(function(n,r){return r%n});var un=f(function(n,r){r%=n;return 0===n?g(11):0<r&&n<0||r<0&&0<n?r+n:r}),on=(f(Math.atan2),Math.ceil),fn=Math.floor,cn=Math.log,an=(f(function(n,r){return n&&r}),f(function(n,r){return n||r}),f(function(n,r){return n!==r}),f(function(n,r){return n+r})),sn=(f(function(n,r){return n+r}),f(function(n,r){for(var t=r.length,e=Array(t),u=0;u<t;){var o=r.charCodeAt(u);o<55296||56319<o?(e[u]=n(new String(r[u])),u++):(e[u]=n(new String(r[u]+r[u+1])),u+=2)}return e.join("")}),f(function(n,r){for(var t=[],e=r.length,u=0;u<e;){var o=r[u],i=r.charCodeAt(u);u++,i<55296||56319<i||(o+=r[u],u++),n(new String(o))&&t.push(o)}return t.join("")})),bn=(r(function(n,r,t){for(var e=t.length,u=0;u<e;){var o=t[u],i=t.charCodeAt(u);u++,i<55296||56319<i||(o+=t[u],u++),r=b(n,new String(o),r)}return r}),r(function(n,r,t){for(var e=t.length;e--;){var u=t[e],o=t.charCodeAt(e);o<56320||57343<o||(u=t[--e]+u),r=b(n,new String(u),r)}return r}),f(function(n,r){return r.split(n)})),ln=f(function(n,r){return r.join(n)}),pn=r(function(n,r,t){return t.slice(n,r)}),vn=(f(function(n,r){for(var t=r.length;t--;){var e=r[t],u=r.charCodeAt(t);if(u<56320||57343<u||(e=r[--t]+e),n(new String(e)))return!0}return!1}),f(function(n,r){for(var t=r.length;t--;){var e=r[t],u=r.charCodeAt(t);if(u<56320||57343<u||(e=r[--t]+e),!n(new String(e)))return!1}return!0})),dn=f(function(n,r){return!!~r.indexOf(n)}),hn=(f(function(n,r){return 0==r.indexOf(n)}),f(function(n,r){return n.length<=r.length&&r.lastIndexOf(n)==r.length-n.length}),f(function(n,r){var t=n.length;if(t<1)return p;for(var e=0,u=[];-1<(e=r.indexOf(n,e));)u.push(e),e+=t;return d(u)})),gn=(f(function(n,r){return{$:6,d:n,b:r}}),f(function(n,r){return{$:7,e:n,b:r}}),f(function(n,r){return{$:10,b:r,h:n}}),f(function(n,r){return{$:9,f:n,g:[r]}})),Pn=r(function(n,r,t){return{$:9,f:n,g:[r,t]}}),mn=(t(function(n,r,t,e){return{$:9,f:n,g:[r,t,e]}}),e(function(n,r,t,e,u){return{$:9,f:n,g:[r,t,e,u]}}),C(function(n,r,t,e,u,o){return{$:9,f:n,g:[r,t,e,u,o]}}),O(function(n,r,t,e,u,o,i){return{$:9,f:n,g:[r,t,e,u,o,i]}}),T(function(n,r,t,e,u,o,i,f){return{$:9,f:n,g:[r,t,e,u,o,i,f]}}),D(function(n,r,t,e,u,o,i,f,c){return{$:9,f:n,g:[r,t,e,u,o,i,f,c]}}),f(function(n,r){try{return P(n,JSON.parse(r))}catch(n){return N(b(Tr,"This is not valid JSON! "+n.message,{$:0,a:r}))}}),f(function(n,r){return P(n,r.a)}));function P(n,r){switch(n.$){case 2:return n.b(r);case 5:return null===r?Fr(n.c):m("null",r);case 3:return wn(r)?$n(n.b,r,d):m("a LIST",r);case 4:return wn(r)?$n(n.b,r,kn):m("an ARRAY",r);case 6:var t=n.d;if("object"!=typeof r||null===r||!(t in r))return m("an OBJECT with a field named `"+t+"`",r);var e=P(n.b,r[t]);return Q(e)?e:N(b(Dr,t,e.a));case 7:t=n.e;return wn(r)?t<r.length?(e=P(n.b,r[t]),Q(e)?e:N(b(Mr,t,e.a))):m("a LONGER array. Need index "+t+" but only see "+r.length+" entries",r):m("an ARRAY",r);case 8:if("object"!=typeof r||null===r||wn(r))return m("an OBJECT",r);var u,o=p;for(u in r)if(r.hasOwnProperty(u)){if(e=P(n.b,r[u]),!Q(e))return N(b(Dr,u,e.a));o=v({$:"#2",a:u,b:e.a},o)}return Fr(_(o));case 9:for(var i=n.f,f=n.g,c=0;c<f.length;c++){if(e=P(f[c],r),!Q(e))return e;i=i(e.a)}return Fr(i);case 10:return e=P(n.b,r),Q(e)?P(n.h(e.a),r):e;case 11:for(var a=p,s=n.g;s.b;s=s.b){if(e=P(s.a,r),Q(e))return e;a=v(e.a,a)}return N(zr(_(a)));case 1:return N(b(Tr,n.a,{$:0,a:r}));case 0:return Fr(n.a)}}function $n(n,r,t){for(var e=r.length,u=Array(e),o=0;o<e;o++){var i=P(n,r[o]);if(!Q(i))return N(b(Mr,o,i.a));u[o]=i.a}return Fr(t(u))}function wn(n){return Array.isArray(n)||"undefined"!=typeof FileList&&n instanceof FileList}function kn(r){return b(dt,r.length,function(n){return r[n]})}function m(n,r){return N(b(Tr,"Expecting "+n,{$:0,a:r}))}function a(n,r){if(n===r)return!0;if(n.$!==r.$)return!1;switch(n.$){case 0:case 1:return n.a===r.a;case 2:return n.b===r.b;case 5:return n.c===r.c;case 3:case 4:case 8:return a(n.b,r.b);case 6:return n.d===r.d&&a(n.b,r.b);case 7:return n.e===r.e&&a(n.b,r.b);case 9:return n.f===r.f&&yn(n.g,r.g);case 10:return n.h===r.h&&a(n.b,r.b);case 11:return yn(n.g,r.g)}}function yn(n,r){var t=n.length;if(t!==r.length)return!1;for(var e=0;e<t;e++)if(!a(n[e],r[e]))return!1;return!0}var Nn=f(function(n,r){return JSON.stringify(r.a,null,n)+""});r(function(n,r,t){return t[n]=r.a,t});var An=f(function(n,r){return{$:3,b:n,d:r}}),Bn=(f(function(n,r){return{$:4,b:n,d:r}}),0);function Rn(n){n={$:0,e:Bn++,f:n,g:null,h:[]};return Kn(n),n}function _n(r){return{$:2,b:function(n){n({$:0,a:Rn(r)})},c:null}}function qn(n,r){n.h.push(r),Kn(n)}var En=f(function(r,t){return{$:2,b:function(n){qn(r,t),n({$:0,a:u})},c:null}}),Qn=!1,Sn=[];function Kn(n){if(Sn.push(n),!Qn){for(Qn=!0;n=Sn.shift();)!function(r){for(;r.f;){var n=r.f.$;if(0===n||1===n){for(;r.g&&r.g.$!==n;)r.g=r.g.i;if(!r.g)return;r.f=r.g.b(r.f.a),r.g=r.g.i}else{if(2===n)return r.f.c=r.f.b(function(n){r.f=n,Kn(r)});if(5===n){if(0===r.h.length)return;r.f=r.f.b(r.h.shift())}else r.g={$:3===n?0:1,b:r.f.b,i:r.g},r.f=r.f.d}}}(n);Qn=!1}}function jn(n,r,t,e,u,o){var n=b(mn,n,{$:0,a:r?r.flags:void 0}),i=(Q(n)||g(2,Zr(n.a)),{}),r=t(n.a),f=r.a,c=o(a,f),t=function(n,r){var t,e;for(e in Ln){var c=Ln[e];c.a&&((t=t||{})[e]=c.a(e,r)),n[e]=function(n){var e={g:n,h:void 0},u=c.c,o=c.d,i=c.e,f=c.f;return e.h=Rn(b(An,function n(t){return b(An,n,{$:5,b:function(n){var r=n.a;return 0===n.$?s(o,e,r,t):i&&f?l(u,e,r.i,r.j,t):s(u,e,i?r.i:r.j,t)}})},c.b))}(r)}return t}(i,a);function a(n,r){n=b(e,n,f);c(f=n.a,r),Dn(i,n.b,u(f))}return Dn(i,r.b,u(f)),t?{ports:t}:{}}t(function(n,r,t,e){return jn(r,e,n.init,n.update,n.subscriptions,function(){return function(){}})});var Ln={},xn=f(function(r,t){return{$:2,b:function(n){r.g(t),n({$:0,a:u})},c:null}});f(function(n,r){return b(En,n.h,{$:0,a:r})}),f(function(n,r){return{$:3,n:n,o:r}});var Cn,On=[],Tn=!1;function Dn(n,r,t){if(On.push({p:n,q:r,r:t}),!Tn){Tn=!0;for(var u;u=On.shift();)!function(n,r){var t,e={};for(t in Mn(!0,u.q,e,null),Mn(!1,r,e,null),n)qn(n[t],{$:"fx",a:e[t]||{i:p,j:p}})}(u.p,u.r);Tn=!1}}function Mn(n,e,r,t){switch(e.$){case 1:var u=e.k,o=function(n,r,t){return b(n?Ln[r].e:Ln[r].f,function(n){for(var r=t;r;r=r.t)n=r.s(n);return n},e.l)}(n,u,t);return r[u]=function(n,r,t){return t=t||{i:p,j:p},n?t.i=v(r,t.i):t.j=v(r,t.j),t}(n,o,r[u]);case 2:for(var i=e.m;i.b;i=i.b)Mn(n,i.a,r,t);return;case 3:Mn(n,e.o,r,{s:e.n,t:t})}}f(function(n,r){return r}),f(function(r,t){return function(n){return r(t(n))}});var $="undefined"!=typeof document?document:{};t(function(n,r,t,e){e=e&&e.node?e.node:g(0);return e.parentNode.replaceChild(k(n,function(){}),e),{}});var w=f(function(o,i){return f(function(n,r){for(var t=[],e=0;r.b;r=r.b){var u=r.a;e+=u.b||0,t.push(u)}return e+=t.length,{$:1,c:i,d:Gn(n),e:t,f:o,b:e}})})(void 0),Fn=(f(function(o,i){return f(function(n,r){for(var t=[],e=0;r.b;r=r.b){var u=r.a;e+=u.b.b||0,t.push(u)}return e+=t.length,{$:2,c:i,d:Gn(n),e:t,f:o,b:e}})})(void 0),f(function(n,r){return{$:4,j:n,k:r,b:1+(r.b||0)}}),f(function(n,r){return{$:5,l:[n,r],m:function(){return n(r)},k:void 0}}),r(function(n,r,t){return{$:5,l:[n,r,t],m:function(){return b(n,r,t)},k:void 0}}),t(function(n,r,t,e){return{$:5,l:[n,r,t,e],m:function(){return s(n,r,t,e)},k:void 0}}),e(function(n,r,t,e,u){return{$:5,l:[n,r,t,e,u],m:function(){return l(n,r,t,e,u)},k:void 0}}),C(function(n,r,t,e,u,o){return{$:5,l:[n,r,t,e,u,o],m:function(){return c(n,r,t,e,u,o)},k:void 0}}),O(function(n,r,t,e,u,o,i){return{$:5,l:[n,r,t,e,u,o,i],m:function(){return M(n,r,t,e,u,o,i)},k:void 0}}),T(function(n,r,t,e,u,o,i,f){return{$:5,l:[n,r,t,e,u,o,i,f],m:function(){return function(n,r,t,e,u,o,i,f){return 7===n.a?n.f(r,t,e,u,o,i,f):n(r)(t)(e)(u)(o)(i)(f)}(n,r,t,e,u,o,i,f)},k:void 0}}),D(function(n,r,t,e,u,o,i,f,c){return{$:5,l:[n,r,t,e,u,o,i,f,c],m:function(){return function(n,r,t,e,u,o,i,f,c){return 8===n.a?n.f(r,t,e,u,o,i,f,c):n(r)(t)(e)(u)(o)(i)(f)(c)}(n,r,t,e,u,o,i,f,c)},k:void 0}}),f(function(n,r){return{$:"a0",n:n,o:r}})),zn=(f(function(n,r){return{$:"a1",n:n,o:r}}),f(function(n,r){return{$:"a2",n:n,o:r}})),Jn=f(function(n,r){return{$:"a3",n:n,o:r}});function In(n){return/^\s*(javascript:|data:text\/html)/i.test(n)?'javascript:alert("This is an XSS vector. Please use ports or web components instead.")':n}r(function(n,r,t){return{$:"a4",n:r,o:{f:n,o:t}}}),f(function(n,r){return"a0"===r.$?b(Fn,r.n,function(n,r){var t=mt(r);return{$:r.$,a:t?s(gt,t<3?Vn:Wn,Pt(n),r.a):b(ht,n,r.a)}}(n,r.o)):r});var Yn,Vn=f(function(n,r){return{$:"#2",a:n(r.a),b:r.b}}),Wn=f(function(n,r){return{message:n(r.message),stopPropagation:r.stopPropagation,preventDefault:r.preventDefault}});function Gn(n){for(var r={};n.b;n=n.b){var t,e=n.a,u=e.$,o=e.n,e=e.o;"a2"===u?"className"===o?Un(r,o,e.a):r[o]=e.a:(t=r[u]||(r[u]={}),"a3"===u&&"class"===o?Un(t,o,e):t[o]=e)}return r}function Un(n,r,t){var e=n[r];n[r]=e?e+" "+t:t}function k(n,r){var t=n.$;if(5===t)return k(n.k||(n.k=n.m()),r);if(0===t)return $.createTextNode(n.a);if(4===t){for(var e=n.k,u=n.j;4===e.$;)"object"!=typeof u?u=[u,e.j]:u.push(e.j),e=e.k;var o={j:u,p:r};return(i=k(e,o)).elm_event_node_ref=o,i}if(3===t)return Xn(i=n.h(n.g),r,n.d),i;var i=n.f?$.createElementNS(n.f,n.c):$.createElement(n.c);Cn&&"a"==n.c&&i.addEventListener("click",Cn(i)),Xn(i,r,n.d);for(var f=n.e,c=0;c<f.length;c++)i.appendChild(k(1===t?f[c]:f[c].b,r));return i}function Xn(n,r,t){for(var e in t){var u=t[e];"a1"===e?function(n,r){var t,e=n.style;for(t in r)e[t]=r[t]}(n,u):"a0"===e?function(n,r,t){var e,u=n.elmFs||(n.elmFs={});for(e in t){var o=t[e],i=u[e];if(o){if(i){if(i.q.$===o.$){i.q=o;continue}n.removeEventListener(e,i)}i=function(c){function a(n){var r=a.q,t=P(r.a,n);if(Q(t)){for(var e,r=mt(r),t=t.a,u=r?r<3?t.a:t.message:t,o=1==r?t.b:3==r&&t.stopPropagation,i=(o&&n.stopPropagation(),(2==r?t.b:3==r&&t.preventDefault)&&n.preventDefault(),c);e=i.j;){if("function"==typeof e)u=e(u);else for(var f=e.length;f--;)u=e[f](u);i=i.p}i(u,o)}}return a.q=o,a}(r),n.addEventListener(e,i,Yn&&{passive:mt(o)<2}),u[e]=i}else n.removeEventListener(e,i),u[e]=void 0}}(n,r,u):"a3"===e?function(n,r){for(var t in r){var e=r[t];void 0!==e?n.setAttribute(t,e):n.removeAttribute(t)}}(n,u):"a4"===e?function(n,r){for(var t in r){var e=r[t],u=e.f,e=e.o;void 0!==e?n.setAttributeNS(u,t,e):n.removeAttributeNS(u,t)}}(n,u):("value"!==e&&"checked"!==e||n[e]!==u)&&(n[e]=u)}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Yn=!0}}))}catch(n){}function Hn(n,r){var t=[];return E(n,r,t,0),t}function q(n,r,t,e){r={$:r,r:t,s:e,t:void 0,u:void 0};return n.push(r),r}function E(n,r,t,e){if(n!==r){var u=n.$,o=r.$;if(u!==o){if(1!==u||2!==o)return void q(t,0,e,r);r=function(n){for(var r=n.e,t=r.length,e=Array(t),u=0;u<t;u++)e[u]=r[u].b;return{$:1,c:n.c,d:n.d,e:e,f:n.f,b:n.b}}(r),o=1}switch(o){case 5:for(var i=n.l,f=r.l,c=i.length,a=c===f.length;a&&c--;)a=i[c]===f[c];if(a)return void(r.k=n.k);r.k=r.m();var s=[];return E(n.k,r.k,s,0),void(0<s.length&&q(t,1,e,s));case 4:for(var b=n.j,l=r.j,p=!1,v=n.k;4===v.$;)p=!0,"object"!=typeof b?b=[b,v.j]:b.push(v.j),v=v.k;for(var d=r.k;4===d.$;)p=!0,"object"!=typeof l?l=[l,d.j]:l.push(d.j),d=d.k;return p&&b.length!==l.length?void q(t,0,e,r):((p?function(n,r){for(var t=0;t<n.length;t++)if(n[t]!==r[t])return;return 1}(b,l):b===l)||q(t,2,e,l),void E(v,d,t,e+1));case 0:return void(n.a!==r.a&&q(t,3,e,r.a));case 1:return void Zn(n,r,t,e,rr);case 2:return void Zn(n,r,t,e,tr);case 3:if(n.h!==r.h)return void q(t,0,e,r);s=nr(n.d,r.d),s=(s&&q(t,4,e,s),r.i(n.g,r.g));s&&q(t,5,e,s)}}}function Zn(n,r,t,e,u){var o;n.c!==r.c||n.f!==r.f?q(t,0,e,r):((o=nr(n.d,r.d))&&q(t,4,e,o),u(n,r,t,e))}function nr(n,r,t){var e,u,o,i,f;for(u in n)"a1"===u||"a0"===u||"a3"===u||"a4"===u?(o=nr(n[u],r[u]||{},u))&&((e=e||{})[u]=o):u in r?(o=n[u])===(i=r[u])&&"value"!==u&&"checked"!==u||"a0"===t&&o.$==i.$&&a(o.a,i.a)||((e=e||{})[u]=i):(e=e||{})[u]=t?"a1"===t?"":"a0"===t||"a3"===t?void 0:{f:n[u].f,o:void 0}:"string"==typeof n[u]?"":null;for(f in r)f in n||((e=e||{})[f]=r[f]);return e}function rr(n,r,t,e){var u=n.e,o=r.e,n=u.length,r=o.length;r<n?q(t,6,e,{v:r,i:n-r}):n<r&&q(t,7,e,{v:n,e:o});for(var i=n<r?n:r,f=0;f<i;f++){var c=u[f];E(c,o[f],t,++e),e+=c.b||0}}function tr(n,r,t,e){for(var u=[],o={},i=[],f=n.e,c=r.e,a=f.length,s=c.length,b=0,l=0,p=e;b<a&&l<s;){var v=f[b],d=c[l],h=v.a,g=d.a,P=v.b,m=d.b,$=void 0,w=void 0;if(h===g)E(P,m,u,++p),p+=P.b||0,b++,l++;else{var k,y,N,A,B=f[b+1],R=c[l+1];if(B&&(y=B.b,w=g===(k=B.a)),R&&(A=R.b,$=h===(N=R.a)),$&&w)E(P,A,u,++p),ur(o,u,h,m,l,i),p+=P.b||0,or(o,u,h,y,++p),p+=y.b||0,b+=2,l+=2;else if($)p++,ur(o,u,g,m,l,i),E(P,A,u,p),p+=P.b||0,b+=1,l+=2;else if(w)or(o,u,h,P,++p),p+=P.b||0,E(y,m,u,++p),p+=y.b||0,b+=2,l+=1;else{if(!B||k!==N)break;or(o,u,h,P,++p),ur(o,u,g,m,l,i),p+=P.b||0,E(y,A,u,++p),p+=y.b||0,b+=2,l+=2}}}for(;b<a;)P=(v=f[b]).b,or(o,u,v.a,P,++p),p+=P.b||0,b++;for(;l<s;){var _=_||[];ur(o,u,(d=c[l]).a,d.b,void 0,_),l++}(0<u.length||0<i.length||_)&&q(t,8,e,{w:u,x:i,y:_})}var er="_elmW6BL";function ur(n,r,t,e,u,o){var i,f=n[t];if(f)return 1===f.c?(o.push({r:u,A:f}),f.c=2,E(f.z,e,i=[],f.r),f.r=u,void(f.s.s={w:i,A:f})):void ur(n,r,t+er,e,u,o);o.push({r:u,A:f={c:0,z:e,r:u,s:void 0}}),n[t]=f}function or(n,r,t,e,u){var o,i=n[t];if(i)return 0===i.c?(i.c=2,E(e,i.z,o=[],u),void q(r,9,u,{w:o,A:i})):void or(n,r,t+er,e,u);o=q(r,9,u,void 0),n[t]={c:1,z:e,r:u,s:o}}function ir(n,r,t,e){return 0===t.length?n:(function m(n,r,t,e){!function n(r,t,e,u,o,i,f){for(var c=e[u],a=c.r;a===o;){var s,b=c.$;if(1===b?m(r,t.k,c.s,f):8===b?(c.t=r,c.u=f,0<(s=c.s.w).length&&n(r,t,s,0,o,i,f)):9===b?(c.t=r,c.u=f,(b=c.s)&&(b.A.s=r,0<(s=b.w).length&&n(r,t,s,0,o,i,f))):(c.t=r,c.u=f),!(c=e[++u])||(a=c.r)>i)return u}var l=t.$;if(4===l){for(var p=t.k;4===p.$;)p=p.k;return n(r,p,e,u,o+1,i,r.elm_event_node_ref)}for(var v=t.e,d=r.childNodes,h=0;h<v.length;h++){var g=1===l?v[h]:v[h].b,P=++o+(g.b||0);if(!(a<o||P<a||(c=e[u=n(d[h],g,e,u,o,P,f)])&&(a=c.r)<=i))return u;o=P}return u}(n,r,t,0,0,r.b,e)}(n,r,t,e),function c(n,r){for(var t=0;t<r.length;t++){var e=r[t],u=e.t,e=function(n,r){switch(r.$){case 0:return function(n,r,t){var e=n.parentNode,r=k(r,t);return r.elm_event_node_ref||(r.elm_event_node_ref=n.elm_event_node_ref),e&&r!==n&&e.replaceChild(r,n),r}(n,r.s,r.u);case 4:return Xn(n,r.u,r.s),n;case 3:return n.replaceData(0,n.length,r.s),n;case 1:return c(n,r.s);case 2:return n.elm_event_node_ref?n.elm_event_node_ref.j=r.s:n.elm_event_node_ref={j:r.s,p:r.u},n;case 6:for(var t=r.s,e=0;e<t.i;e++)n.removeChild(n.childNodes[t.v]);return n;case 7:for(var u=(t=r.s).e,e=t.v,o=n.childNodes[e];e<u.length;e++)n.insertBefore(k(u[e],r.u),o);return n;case 9:if(!(t=r.s))return n.parentNode.removeChild(n),n;var i=t.A;return void 0!==i.r&&n.parentNode.removeChild(n),i.s=c(n,t.w),n;case 8:return function(n,r){for(var t=r.s,e=function(n,r){if(n){for(var t=$.createDocumentFragment(),e=0;e<n.length;e++){var u=n[e].A;t.appendChild(2===u.c?u.s:k(u.z,r.u))}return t}}(t.y,r),u=(n=c(n,t.w),t.x),o=0;o<u.length;o++){var i=u[o],f=i.A,f=2===f.c?f.s:k(f.z,r.u);n.insertBefore(f,n.childNodes[i.r])}return e&&n.appendChild(e),n}(n,r);case 5:return r.s(n);default:g(10)}}(u,e);u===n&&(n=e)}return n}(n,t))}function fr(n){if(3===n.nodeType)return{$:0,a:n.textContent};if(1!==n.nodeType)return{$:0,a:""};for(var r=p,t=n.attributes,e=t.length;e--;)var u=t[e],r=v(b(Jn,u.name,u.value),r);for(var o=n.tagName.toLowerCase(),i=p,f=n.childNodes,e=f.length;e--;)i=v(fr(f[e]),i);return s(w,o,r,i)}var cr=t(function(r,n,t,i){return jn(n,i,r.init,r.update,r.subscriptions,function(t,n){var e=r.view,u=i&&i.node?i.node:g(0),o=fr(u);return sr(n,function(n){var n=e(n),r=Hn(o,n);u=ir(u,o,r,t),o=n})})}),ar=(t(function(r,n,t,e){return jn(n,e,r.init,r.update,r.subscriptions,function(e,n){var u=r.setup&&r.setup(e),o=r.view,i=$.title,f=$.body,c=fr(f);return sr(n,function(n){Cn=u;var n=o(n),r=w("body")(p)(n.body),t=Hn(c,r);f=ir(f,c,t,e),c=r,Cn=0,i!==n.title&&($.title=i=n.title)})})}),"undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(n){return setTimeout(n,1e3/60)});function sr(t,e){e(t);var u=0;function o(){u=1===u?0:(ar(o),e(t),1)}return function(n,r){t=n,r?(e(t),2===u&&(u=1)):(0===u&&ar(o),u=2)}}f(function(n,r){return b(Dt,Et,{$:2,b:function(){r&&history.go(r),n()},c:null})}),f(function(n,r){return b(Dt,Et,{$:2,b:function(){history.pushState({},"",r),n()},c:null})}),f(function(n,r){return b(Dt,Et,{$:2,b:function(){history.replaceState({},"",r),n()},c:null})});var br="undefined"!=typeof window?window:{addEventListener:function(){},removeEventListener:function(){}};function lr(t,e){return{$:2,b:function(r){ar(function(){var n=document.getElementById(t);r(n?{$:0,a:e(n)}:{$:1,a:$t(t)})})},c:null}}function pr(n){return b(R,"\n    ",b(Yr,"\n",n))}function vr(n){return s(Vr,f(function(n,r){return r+1}),0,n)}function dr(n){n=Nr(n);return 97<=n&&n<=122}function hr(n){n=Nr(n);return n<=90&&65<=n}function gr(n){return dr(n)||hr(n)||function(n){n=Nr(n);return n<=57&&48<=n}(n)}function Pr(n){return n=b(S,function(n){return b(fe,n,p)},b(Yr,"",b(ae,function(n){return!F(n,new String("/"))},b(se,"",(n=b(Yr," ",n)).b?A(n.a):B)))),s(Kt,ce,p,n)}function mr(n){return K(b(R," ",b(S,Ar,b(pe,Rr,n))))}function $r(n){return b(he,"click",Pt(n))}function wr(n){return b(le,"src",In(n))}function kr(n){return b(Xr,f(function(n,r){return b(Ae,r,n)}),n)}function yr(n){return b(j,d([K("move")]),d([L(n)]))}r(function(t,e,u){return _n({$:2,b:function(n){function r(n){Rn(u(n))}return t.addEventListener(e,r,Yn&&{passive:!0}),function(){t.removeEventListener(e,r)}},c:null})}),f(function(n,r){n=P(n,r);return Q(n)?A(n.a):B}),f(function(r,n){return lr(n,function(n){return n[r](),u})}),f(function(n,r){return t=function(){return br.scroll(n,r),u},{$:2,b:function(n){ar(function(){n({$:0,a:t()})})},c:null};var t}),r(function(n,r,t){return lr(n,function(n){return n.scrollLeft=r,n.scrollTop=t,u})}),f(function(n,r){return n&r}),f(function(n,r){return n|r}),f(function(n,r){return n^r}),f(function(n,r){return r<<n}),f(function(n,r){return r>>n}),f(function(n,r){return r>>>n});function Nr(n){var r=n.charCodeAt(0);return r<55296||56319<r?r:1024*(r-55296)+n.charCodeAt(1)-56320+65536}function Ar(n){return n.a}function Br(n){for(var r=0,t=n.charCodeAt(0),e=43==t||45==t?1:0,u=e;u<n.length;++u){var o=n.charCodeAt(u);if(o<48||57<o)return B;r=10*r+o-48}return u==e?B:A(45==t?-r:r)}function Rr(n){return n.b}function _r(n){return b(j,d([K("icon-container"),$r({$:"ClickedMove",a:n})]),d([L(n)]))}var qr,Er={$:"EQ"},Qr={$:"GT"},Sr={$:"LT"},y=I,Kr=r(function(n,r,t){for(;;){if("RBEmpty_elm_builtin"===t.$)return r;var e=t.d,u=n,o=s(n,t.b,t.c,s(Kr,n,r,t.e));n=u,r=o,t=e}}),jr=function(n){return s(Kr,r(function(n,r,t){return b(y,{$:"#2",a:n,b:r},t)}),p,n)},Lr=function(n){return n=n.a,s(Kr,r(function(n,r,t){return b(y,n,t)}),p,n)},xr=X,Cr=r(function(t,n,r){var e=r.c,r=r.d,u=f(function(n,r){return s(xr,"SubTree"===n.$?u:t,r,n.a)});return s(xr,u,s(xr,t,n,r),e)}),Or=function(n){return s(Cr,y,p,n)},N=function(n){return{$:"Err",a:n}},Tr=f(function(n,r){return{$:"Failure",a:n,b:r}}),Dr=f(function(n,r){return{$:"Field",a:n,b:r}}),Mr=f(function(n,r){return{$:"Index",a:n,b:r}}),Fr=function(n){return{$:"Ok",a:n}},zr=function(n){return{$:"OneOf",a:n}},A=function(n){return{$:"Just",a:n}},B={$:"Nothing"},Jr=vn,Ir=Nn,R=f(function(n,r){return b(ln,n,Y(r))}),Yr=f(function(n,r){return d(b(bn,n,r))}),Vr=r(function(n,r,t){for(;;){if(!t.b)return r;var e=t.b,u=n,o=b(n,t.a,r);n=u,r=o,t=e}}),Wr=V,Gr=r(function(n,r,t){for(;;){if(1<=i(n,r))return t;var e=n,u=r-1,o=b(y,r,t);n=e,r=u,t=o}}),Ur=f(function(n,r){return s(Gr,n,r,p)}),Xr=f(function(n,r){return s(Wr,n,b(Ur,0,vr(r)-1),r)}),_=function(n){return s(Vr,y,p,n)},Hr=f(function(n,r){return"\n\n("+(n+1)+") "+pr(Zr(r))}),Zr=function(n){return b(nt,n,p)},nt=f(function(n,r){for(;;)switch(n.$){case"Field":var t=n.a,e=n.b,u=(f=void 0,"Nothing"!==(u=void 0,u=(i=t).charCodeAt(0),(f=isNaN(u)?B:A(u<55296||56319<u?{$:"#2",a:new String(i[0]),b:i.slice(1)}:{$:"#2",a:new String(i[0]+i[1]),b:i.slice(2)})).$)&&(i=(u=f.a).b,(dr(f=u.a)||hr(f))&&b(Jr,gr,i)));n=e,r=b(y,u?"."+t:"['"+t+"']",r);continue;case"Index":e=n.b,f="["+n.a+"]";n=e,r=b(y,f,r);continue;case"OneOf":i=n.a;if(i.b){if(i.b.b)return o=(r.b?"The Json.Decode.oneOf at json"+b(R,"",_(r)):"Json.Decode.oneOf")+" failed in the following "+vr(i)+" ways:",b(R,"\n\n",b(y,o,b(Xr,Hr,i)));n=e=i.a,r=r;continue}return"Ran into a Json.Decode.oneOf with no possibilities"+(r.b?" at json"+b(R,"",_(r)):"!");default:var o,u=n.a,t=n.b;return(o=r.b?"Problem with the value at json"+b(R,"",_(r))+":\n\n    ":"Problem with the given value:\n\n")+pr(b(Ir,4,t))+"\n\n"+u}var u,i,f}),rt=t(function(n,r,t,e){return{$:"Array_elm_builtin",a:n,b:r,c:t,d:e}}),tt=[],et=on,ut=f(function(n,r){return cn(r)/cn(n)}),ot=et(b(ut,2,32)),it=l(rt,0,ot,tt,tt),ft=W,ct=(f(function(n,r){return n(r)}),f(function(n,r){return r(n)}),fn),at=f(function(n,r){return 0<i(n,r)?n:r}),st=G,bt=f(function(n,r){for(;;){var t=b(st,32,n),e=t.b,t=b(y,{$:"SubTree",a:t.a},r);if(!e.b)return _(t);n=e,r=t}}),lt=f(function(n,r){for(;;){var t=et(r/32);if(1===t)return b(st,32,n).a;n=b(bt,n,p),r=t}}),pt=f(function(n,r){var t,e;return r.nodeListSize?(e=ct(b(ut,32,(t=32*r.nodeListSize)-1)),n=n?_(r.nodeList):r.nodeList,n=b(lt,n,r.nodeListSize),l(rt,r.tail.length+t,b(at,5,e*ot),n,r.tail)):l(rt,r.tail.length,ot,tt,r.tail)}),vt=e(function(n,r,t,e,u){for(;;){if(r<0)return b(pt,!1,{nodeList:e,nodeListSize:t/32|0,tail:u});var o={$:"Leaf",a:s(ft,32,r,n)};r-=32,e=b(y,o,e)}}),dt=f(function(n,r){var t,e;return 0<n?(e=s(ft,t=n%32,n-t,r),c(vt,r,n-t-32,n,p,e)):it}),Q=function(n){return"Ok"===n.$},ht=gn,gt=Pn,Pt=function(n){return{$:0,a:n}},mt=function(n){switch(n.$){case"Normal":return 0;case"MayStopPropagation":return 1;case"MayPreventDefault":return 2;default:return 3}},$t=function(n){return{$:"NotFound",a:n}},wt=C(function(n,r,t,e,u,o){return{fragment:o,host:r,path:e,port_:t,protocol:n,query:u}}),kt=dn,yt=pn,Nt=f(function(n,r){return n<1?r:s(yt,n,r.length,r)}),At=hn,Bt=f(function(n,r){return n<1?"":s(yt,0,n,r)}),Rt=e(function(n,r,t,e,u){var o,i;return""===u||b(kt,"@",u)?B:(o=b(At,":",u)).b?o.b.b||"Nothing"===(i=Br(b(Nt,(o=o.a)+1,u))).$?B:(i=i,A(M(wt,n,b(Bt,o,u),i,r,t,e))):A(M(wt,n,u,B,r,t,e))}),_t=t(function(n,r,t,e){var u;return""===e?B:(u=b(At,"/",e)).b?c(Rt,n,b(Nt,u=u.a,e),r,t,b(Bt,u,e)):c(Rt,n,"/",r,t,e)}),qt=r(function(n,r,t){var e;return""===t?B:(e=b(At,"?",t)).b?l(_t,n,A(b(Nt,(e=e.a)+1,t)),r,b(Bt,e,t)):l(_t,n,B,r,t)}),Et=(f(function(n,r){var t;return""===r?B:(t=b(At,"#",r)).b?s(qt,n,A(b(Nt,(t=t.a)+1,r)),b(Bt,t,r)):s(qt,n,B,r)}),function(n){for(;;);}),Qt=function(n){return{$:0,a:n}},I=Qt(u),St=t(function(n,r,t,e){var u,o,i,f;return e.b?(u=e.a,(e=e.b).b?(o=e.a,(e=e.b).b?(i=e.a,(e=e.b).b?(f=e.b,b(n,u,b(n,o,b(n,i,b(n,e.a,500<t?s(Vr,n,r,_(f)):l(St,n,r,t+1,f)))))):b(n,u,b(n,o,b(n,i,r)))):b(n,u,b(n,o,r))):b(n,u,r)):r}),Kt=r(function(n,r,t){return l(St,n,r,0,t)}),S=f(function(t,n){return s(Kt,f(function(n,r){return b(y,t(n),r)}),p,n)}),jt=An,Lt=f(function(r,n){return b(jt,function(n){return Qt(r(n))},n)}),xt=r(function(t,n,e){return b(jt,function(r){return b(jt,function(n){return Qt(b(t,r,n))},e)},n)}),Ct=xn,Ot=f(function(n,r){r=r.a;return _n(b(jt,Ct(n),r))}),X=r(function(n,r,t){return b(Lt,function(n){return u},(n=b(S,Ot(n),r),s(Kt,xt(y),Qt(p),n)))}),vn=r(function(n,r,t){return Qt(u)}),Nn=f(function(n,r){return{$:"Perform",a:b(Lt,n,r.a)}}),Tt=(Ln.Task={b:I,c:X,d:vn,e:Nn,f:void 0},qr="Task",function(n){return{$:1,k:qr,l:n}}),Dt=f(function(n,r){return Tt({$:"Perform",a:b(Lt,n,r)})}),Mt={$:2,m:p},Ft={$:2,m:p},V=r(function(n,r,t){for(;;){var e=b(st,32,n),u=e.a,e=e.b;if(i(u.length,32)<0)return b(pt,!0,{nodeList:r,nodeListSize:t,tail:u});n=e,r=b(y,{$:"Leaf",a:u},r),t+=1}}),zt=(on=d([{correctAnswer:"♘f3♙d5♙c4♙c4♙e3♙b5",fromPosition:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",toPosition:"rnbqkbnr/p1p1pppp/8/1p6/2p5/4PN2/PP1P1PPP/RNBQKB1R w KQkq b6 0 4"},{correctAnswer:"♙a4♙c6♙b5♙b5♘c3♗d7",fromPosition:"rnbqkbnr/p1p1pppp/8/1p6/2p5/4PN2/PP1P1PPP/RNBQKB1R w KQkq b6 0 4",toPosition:"rn1qkbnr/p2bpppp/8/1p6/2p5/2N1PN2/1P1P1PPP/R1BQKB1R w KQkq - 2 7"},{correctAnswer:"♘e5♘f6♕f3",fromPosition:"rn1qkbnr/p2bpppp/8/1p6/2p5/2N1PN2/1P1P1PPP/R1BQKB1R w KQkq - 2 7",toPosition:"rn1qkb1r/p2bpppp/5n2/1p2N3/2p5/2N1PQ2/1P1P1PPP/R1B1KB1R b KQkq - 5 8"},{correctAnswer:"♙a4♙c6♙b5♙b5♘c3♕b6",fromPosition:"rnbqkbnr/p1p1pppp/8/1p6/2p5/4PN2/PP1P1PPP/RNBQKB1R w KQkq b6 0 4",toPosition:"rnb1kbnr/p3pppp/1q6/1p6/2p5/2N1PN2/1P1P1PPP/R1BQKB1R w KQkq - 2 7"},{correctAnswer:"♙b3♗e6♙c4♗c4♗c4♙c4♘e5",fromPosition:"rnb1kbnr/p3pppp/1q6/1p6/2p5/2N1PN2/1P1P1PPP/R1BQKB1R w KQkq - 2 7",toPosition:"rn2kbnr/p3pppp/1q6/4N3/2p5/2N1P3/3P1PPP/R1BQK2R b KQkq - 1 10"},{correctAnswer:"♙c4♙e5♘c3♘f6",fromPosition:"rnbqkbnr/ppp1pppp/3p4/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq - 0 2",toPosition:"rnbqkb1r/ppp2ppp/3p1n2/4p3/2P5/2N2N2/PP1PPPPP/R1BQKB1R w KQkq - 2 4"},{correctAnswer:"♙d4♙d4♘d4♗e7♙e4",fromPosition:"rnbqkb1r/ppp2ppp/3p1n2/4p3/2P5/2N2N2/PP1PPPPP/R1BQKB1R w KQkq - 2 4",toPosition:"rnbqk2r/ppp1bppp/3p1n2/8/2PNP3/2N5/PP3PPP/R1BQKB1R b KQkq e3 0 6"},{correctAnswer:"♘c2♘c6",fromPosition:"rnbq1rk1/pp2bppp/3p1n2/2p5/2PNP3/2N5/PP2BPPP/R1BQK2R w KQ c6 0 8",toPosition:"r1bq1rk1/pp2bppp/2np1n2/2p5/2P1P3/2N5/PPN1BPPP/R1BQK2R w KQ - 2 9"},{correctAnswer:"♙f4♘c6♗f3",fromPosition:"r1bq1rk1/pp2bppp/3p1n2/2p1n3/2P1P3/2N5/PPN1BPPP/R1BQ1RK1 w - - 4 10",toPosition:"r1bq1rk1/pp2bppp/2np1n2/2p5/2P1PP2/2N2B2/PPN3PP/R1BQ1RK1 b - - 2 11"},{correctAnswer:"♗e3♘d4♗d4♙c5♗e3",fromPosition:"r1bq1rk1/ppp1bppp/2np1n2/8/2PNP3/2N5/PP2BPPP/R1BQK2R w KQ - 3 8",toPosition:"r1bq1rk1/pp2bppp/3p1n2/2p5/2P1P3/2N1B3/PP2BPPP/R2QK2R b KQ - 1 10"}])).b?s(V,on,p,0):it,Jt={correctAnswer:"xxxxxx",fromPosition:"8/8/8/8/8/8/8/8 w KQkq - 0 1",toPosition:"8/8/8/8/8/8/8/8 w KQkq - 0 1"},It=4294967295>>>32-ot,Yt=U,Vt=r(function(n,r,t){for(;;){var e=b(Yt,It&r>>>n,t);if("SubTree"!==e.$)return b(Yt,It&r,e.a);n-=ot,t=e.a}}),Wt=f(function(n,r){var t=r.a,e=r.b,u=r.c,r=r.d;return n<0||-1<i(n,t)?B:-1<i(n,t>>>5<<5)?A(b(Yt,It&n,r)):A(s(Vt,e,n,u))}),Gt=f(function(n,r){n=b(Wt,n+1,r);return"Just"===n.$?n.a:Jt}),Ut=f(function(n,r){return n-1||(r.length?3:1)}),W=f(function(n,r){switch(n.$){case"ClickedMove":var t=o(r.userAnswer,n.a);return J(r,{currentMoveStep:4===(e=r.currentMoveStep+1)?1:e,userAnswer:t});case"ClickedDelete":return J(r,{currentMoveStep:b(Ut,r.currentMoveStep,r.userAnswer),userAnswer:s(yt,0,r.userAnswer.length-1,r.userAnswer)});default:e=b(Gt,r.currentExercise,zt);return J(r,{correctAnswer:e.correctAnswer,currentExercise:r.currentExercise+1,currentMoveStep:1,fromPosition:e.fromPosition,toPosition:e.toPosition,userAnswer:""})}var e}),Xt={$:"ClickedDelete"},Ht={$:"ClickedNext"},Zt=an,ne=r(function(n,r,t){return 0<n?s(ne,n>>1,o(r,r),1&n?o(t,r):t):t}),re=f(function(n,r){return s(ne,n,r,"")}),te=r(function(n,r,t){return o(t,b(re,n-t.length,function(n){return b(Zt,n,"")}(r)))}),ee=f(function(n,r){return s(te,n.length,new String("."),r)}),ue=f(function(n,r){return b(Jn,function(n){return/^(on|formAction$)/i.test(n)?"data-"+n:n}(n),In(r))}),oe=w("button"),ie=f(function(n,r){for(;;){if(!n)return r;n-=1,r=o(r,d([B]))}}),fe=f(function(n,r){var t=Br(n);return"Just"===t.$?b(ie,t.a,r):o(r,d([A(n)]))}),ce=f(function(n,r){return r.b?s(Kt,y,r,n):n}),ae=sn,se=f(function(n,r){return"Just"===r.$?r.a:n}),be=function(n){return{$:0,a:n}},le=f(function(n,r){return b(zn,n,be(r))}),K=le("className"),pe=f(function(t,n){return s(Kt,f(function(n,r){return t(n)?b(y,n,r):r}),p,n)}),j=w("div"),ve=w("img"),de=Fn,he=f(function(n,r){return b(de,n,{$:"Normal",a:r})}),ge=f(function(n,r){for(;;){if(n<=0)return r;if(!r.b)return r;n-=1,r=r.b}}),Pe=r(function(n,r,t){for(;;){if(n<=0)return t;if(!r.b)return t;var e=r.a;n-=1,r=r.b,t=b(y,e,t)}}),me=f(function(n,r){return _(s(Pe,n,r,p))}),$e=r(function(n,r,t){if(0<r){var e,u,o,i,f,c={$:"#2",a:r,b:t};n:for(;;){r:for(;;){if(!c.b.b)return t;if(!c.b.b.b){if(1===c.a)break n;break}switch(c.a){case 1:break n;case 2:var a=c.b;return d([a.a,a.b.a]);case 3:if(c.b.b.b.b)return d([(a=c.b).a,(e=a.b).a,e.b.a]);break r;default:if(c.b.b.b.b&&c.b.b.b.b.b)return f=(i=(o=(u=(e=c.b).b).b).b).b,b(y,e.a,b(y,u.a,b(y,o.a,b(y,i.a,1e3<n?b(me,r-4,f):s($e,n+1,r-4,f)))));break r}}return t}return d([c.b.a])}return p}),we=f(function(n,r){return s($e,0,n,r)}),ke=f(function(u,n){var r;return 0<u?(r=f(function(n,r){for(;;){if(!n.b)return _(r);var t=b(ge,u,n),e=b(y,b(we,u,n),r);n=t,r=e}}),b(r,n,p)):p}),ye=w("section"),L=function(n){return{$:0,a:n}},Ne=un,Ae=f(function(n,r){r=function(n){return b(Ne,2,n<8||15<n&&n<24||31<n&&n<40||47<n&&n<56?n:n+1)?"black-cell":"white-cell"}(r);return"Just"===n.$?(n=n.a,b(j,d([K(r)]),d([b(ve,d([K("piece-image"),wr(function(n){switch(n){case"p":return"black_pawn.svg";case"r":return"black_rook.svg";case"n":return"black_knight.svg";case"b":return"black_bishop.svg";case"q":return"black_queen.svg";case"k":return"black_king.svg";case"P":return"white_pawn.svg";case"R":return"white_rook.svg";case"N":return"white_knight.svg";case"B":return"white_bishop.svg";case"Q":return"white_queen.svg";default:return"white_king.svg"}}(n))]),p)]))):b(j,d([K(r)]),p)}),Be=d(["a","b","c","d","e","f","g","h"]),Re=d(["♔","♕","♘","♗","♖","♙"]),_e=d(["1","2","3","4","5","6","7","8"]),qe={init:{correctAnswer:"♘f3♙d5♙c4♙c4♙e3♙b5",currentExercise:0,currentMoveStep:1,fromPosition:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",toPosition:"rnbqkbnr/p1p1pppp/8/1p6/2p5/4PN2/PP1P1PPP/RNBQKB1R w KQkq b6 0 4",userAnswer:""},update:W,view:function(n){return b(j,d([K("general")]),d([b(j,d([K("task-container")]),d([b(ye,d([K("chessboard")]),kr(Pr(n.fromPosition))),b(ve,d([K("arrow-image"),wr("arrow.png")]),p),b(j,d([K("answers")]),b(S,yr,(r=b(ee,n.correctAnswer,n.userAnswer),b(Xr,f(function(n,r){return n+1+". "+r}),b(S,R(" "),b(ke,2,b(S,b(te,3,new String(".")),b(S,R(""),b(ke,3,b(Yr,"",r)))))))))),b(ve,d([K("arrow-image"),wr("arrow.png")]),p),L("        "),b(ye,d([K("chessboard")]),kr(Pr(n.toPosition)))])),b(j,d([K("moves-container")]),d([b(j,d([K("moves")]),function(){switch(n.currentMoveStep){case 1:return b(S,_r,Re);case 2:return b(S,_r,Be);default:return b(S,_r,_e)}}()),b(j,d([K("edit-moves-container")]),d([b(oe,d([K("button-6"),b(ue,"role","button"),$r(Xt),mr(d([{$:"#2",a:"button-6-disabled",b:!n.userAnswer.length}]))]),d([L("Apagar")]))])),b(j,d([K("edit-moves-container")]),d([b(oe,d([K("button-6"),b(ue,"role","button"),$r(Ht)]),d([L("Próximo Exercício")]))]))])),b(j,d([K("correct-invisible"),mr(d([{$:"#2",a:"correct-visible",b:F(n.userAnswer,n.correctAnswer)}]))]),d([L("Correto!")]))]));var r}},fn={Main:{init:cr({init:function(n){return{$:"#2",a:qe.init,b:Mt}},subscriptions:function(n){return Ft},update:f(function(n,r){return{$:"#2",a:b(qe.update,n,r),b:Mt}}),view:qe.view})(Pt(u))(0)}};x.Elm?function n(r,t,e){for(var u in e)u in t?"init"==u?g(6,r):n(r+"."+u,t[u],e[u]):t[u]=e[u]}("Elm",x.Elm,fn):x.Elm=fn}(this);