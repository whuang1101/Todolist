(()=>{"use strict";var e={786:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,".popup {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    height: 45%;\n    width: 70%;\n    background-color: #fce7f3;\n    z-index: 1000;\n    overflow:scroll;\n  }\n\n.form {\n    font-family: 'Times New Roman', Times, serif;\n    display: flex;\n    flex-direction: column;\n    font-size: 1.5em;\n    padding: 1em;\n    gap: .2em;\n}\n.blur {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    backdrop-filter: blur(5px);\n\n}\n#title,#details,#date, #submit{\n    font-size: 1em;\n    padding: .2em;\n}\n",""]);const s=i},184:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(81),a=n.n(r),o=n(645),i=n.n(o),s=n(667),u=n.n(s),d=new URL(n(815),n.b),c=new URL(n(86),n.b),l=i()(a()),f=u()(d),m=u()(c);l.push([e.id,`* {\n    margin: 0px;\n    border: 0px;\n    padding: 0px;\n}\n.header{\n    font-family: "CustomFont";\n    flex: .5;\n    background-image: linear-gradient(to right, #ec4899, #fdf2f8);\n    font-size: 5em;\n    display: flex;\n    padding: .2em;\n    border-bottom: 2px solid rgb(246, 154, 169);\n  }\n.title {\n    font-family: "CustomFont";\n    color: #fdf2f8;\n    flex: 10;\n    display: flex;\n    justify-content: center;\n}\n.color {\n    color: #f572ba;\n}\n.container {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n.main {\n    flex: 5; background-color: white;\n    display: flex;\n}\n.header {\n    display: flex;\n    align-items: center;\n}\n.dropdown {\n    flex: .1;\n    display: flex;\n    justify-content: center;\n    color: black;\n}\n.dropdown:hover {\n    background-color: rgb(254, 154, 253);\n}\n.main-content {\n    font-family: "CustomFont";\n    flex: 8;\n    background-color: rgb(252, 252, 252);\n}\n\n.drop-down-items {\n    display: flex;\n    flex-direction: column;\n    flex: 2; \n    background-color: #fdf2f8;\n    padding: .5em;\n    font-size: 2em;\n    gap: .6em;\n    opacity: 1;\n    transition: transform 1s ease, opacity 1s ease;\n}   \n.home, .project{\n    display: flex;\n    align-items: center;\n    border-bottom: 2px solid black;\n    padding: .05em;\n\n}\n.home-things {\n    font-family: "CustomFont";\n    display: flex;\n    flex-direction: column;\n    padding-left: .5em;\n    gap: .1em;\n}\n.inbox,.today, .this-week, .important, .completed{ \n    display: flex;\n    font-size: .7em;\n    padding: .3em;\n    gap: .5em;\n}\n.inbox:hover ,.today:hover, .this-week:hover, .important:hover, .completed:hover{ \n    background-color: #f9a8d4;\n    border-radius: 2em;\n}\n.hide {\n    display: none !important;\n}\n#show {\n    display: flex !important;\n    justify-content: center;\n    flex-direction: column;\n    padding: 1em;\n    font-size: 1.4em;\n    background-color: #fbe1ef;\n    border-radius: 1em;\n    gap: 0.5em;\n    margin-bottom: 0.5em;\n}\n\n.main-title {\n    background-color: #ec4899;\n    color: white;\n    font-size: 3rem;\n    padding: .5em .5em .5em .5em;\n    border-radius: 1rem;\n}\n.format {\n    padding: 1rem;\n    gap: 1em;\n}\n.highlight {\n    background-color: #f9a8d4;\n    border-radius: 2em;\n}\n.popup-hide {\n    display: none;\n}\n.task-frame{\n    display: flex;\n    flex-direction: column;\n    margin-top: 1em;\n    gap:1em;\n}\n.add-tasks {\n    display: flex;\n    justify-content: center;\n    padding: 1em;\n    font-size: 1.8em;\n    border-radius: 1em;\n}\n.add-tasks:hover{\n    background-color: lightgrey;\n}\n.task{\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    padding: 1em;\n    font-size: 1.4em;\n    background-color: #fbe1ef;\n    border-radius: 1em;\n    gap: 0.5em;\n    margin-bottom: 0.5em;\n}\n\n.first-line {\n    font-size: 1.3em;\n    display: flex;\n    align-items: center;\n    gap: .5em;\n}\ninput[type="checkbox"] {\n    font-size: .8em;\n    transform: scale(1.5);\n    border-radius: 50%; \n  }\n.description {\n    opacity: .5;\n    font-size: 1em;\n}\n.date{\n\n}\n@font-face {\n    font-family: 'CustomFont';\n    src: url(${f}) format('opentype'),\n         url(${m}) format('truetype');\n  }\n`,""]);const h=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var u=this[s][0];null!=u&&(i[u]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);r&&i[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),t.push(c))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var u=e[s],d=r.base?u[0]+r.base:u[0],c=o[d]||0,l="".concat(d," ").concat(c);o[d]=c+1;var f=n(l),m={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==f)t[f].references++,t[f].updater(m);else{var h=a(m,r);r.byIndex=s,t.splice(s,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=n(o[i]);t[s].references--}for(var u=r(e,a),d=0;d<o.length;d++){var c=n(o[d]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}o=u}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},815:(e,t,n)=>{e.exports=n.p+"41c72f98b8f27dbeb6eb.otf"},86:(e,t,n)=>{e.exports=n.p+"a7924f5604c5c19116db.ttf"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),o=n(569),i=n.n(o),s=n(565),u=n.n(s),d=n(216),c=n.n(d),l=n(589),f=n.n(l),m=n(184),h={};h.styleTagTransform=f(),h.setAttributes=u(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=c(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var g=n(786),p={};function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function y(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function b(e){y(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===v(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function w(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function T(e){y(1,arguments);var t=b(e),n=t.getUTCDay(),r=(n<1?7:0)+n-1;return t.setUTCDate(t.getUTCDate()-r),t.setUTCHours(0,0,0,0),t}function k(e){y(1,arguments);var t=b(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=T(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=T(o);return t.getTime()>=a.getTime()?n+1:t.getTime()>=i.getTime()?n:n-1}p.styleTagTransform=f(),p.setAttributes=u(),p.insert=i().bind(null,"head"),p.domAPI=a(),p.insertStyleElement=c(),t()(g.Z,p),g.Z&&g.Z.locals&&g.Z.locals;var x={};function C(){return x}function M(e,t){var n,r,a,o,i,s,u,d;y(1,arguments);var c=C(),l=w(null!==(n=null!==(r=null!==(a=null!==(o=null==t?void 0:t.weekStartsOn)&&void 0!==o?o:null==t||null===(i=t.locale)||void 0===i||null===(s=i.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==a?a:c.weekStartsOn)&&void 0!==r?r:null===(u=c.locale)||void 0===u||null===(d=u.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==n?n:0);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var f=b(e),m=f.getUTCDay(),h=(m<l?7:0)+m-l;return f.setUTCDate(f.getUTCDate()-h),f.setUTCHours(0,0,0,0),f}function S(e,t){var n,r,a,o,i,s,u,d;y(1,arguments);var c=b(e),l=c.getUTCFullYear(),f=C(),m=w(null!==(n=null!==(r=null!==(a=null!==(o=null==t?void 0:t.firstWeekContainsDate)&&void 0!==o?o:null==t||null===(i=t.locale)||void 0===i||null===(s=i.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==a?a:f.firstWeekContainsDate)&&void 0!==r?r:null===(u=f.locale)||void 0===u||null===(d=u.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==n?n:1);if(!(m>=1&&m<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=new Date(0);h.setUTCFullYear(l+1,0,m),h.setUTCHours(0,0,0,0);var g=M(h,t),p=new Date(0);p.setUTCFullYear(l,0,m),p.setUTCHours(0,0,0,0);var v=M(p,t);return c.getTime()>=g.getTime()?l+1:c.getTime()>=v.getTime()?l:l-1}function D(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const E=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return D("yy"===t?r%100:r,t.length)},L=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):D(n+1,2)},P=function(e,t){return D(e.getUTCDate(),t.length)},U=function(e,t){return D(e.getUTCHours()%12||12,t.length)},q=function(e,t){return D(e.getUTCHours(),t.length)},W=function(e,t){return D(e.getUTCMinutes(),t.length)},N=function(e,t){return D(e.getUTCSeconds(),t.length)},Y=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return D(Math.floor(r*Math.pow(10,n-3)),t.length)};var O={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return E(e,t)},Y:function(e,t,n,r){var a=S(e,r),o=a>0?a:1-a;return"YY"===t?D(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):D(o,t.length)},R:function(e,t){return D(k(e),t.length)},u:function(e,t){return D(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return D(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return D(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return L(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return D(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=function(e,t){y(1,arguments);var n=b(e),r=M(n,t).getTime()-function(e,t){var n,r,a,o,i,s,u,d;y(1,arguments);var c=C(),l=w(null!==(n=null!==(r=null!==(a=null!==(o=null==t?void 0:t.firstWeekContainsDate)&&void 0!==o?o:null==t||null===(i=t.locale)||void 0===i||null===(s=i.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==a?a:c.firstWeekContainsDate)&&void 0!==r?r:null===(u=c.locale)||void 0===u||null===(d=u.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==n?n:1),f=S(e,t),m=new Date(0);return m.setUTCFullYear(f,0,l),m.setUTCHours(0,0,0,0),M(m,t)}(n,t).getTime();return Math.round(r/6048e5)+1}(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):D(a,t.length)},I:function(e,t,n){var r=function(e){y(1,arguments);var t=b(e),n=T(t).getTime()-function(e){y(1,arguments);var t=k(e),n=new Date(0);return n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0),T(n)}(t).getTime();return Math.round(n/6048e5)+1}(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):D(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):P(e,t)},D:function(e,t,n){var r=function(e){y(1,arguments);var t=b(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=n-t.getTime();return Math.floor(r/864e5)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):D(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return D(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return D(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return D(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return U(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):q(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):D(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):D(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):W(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):N(e,t)},S:function(e,t){return Y(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return j(a);case"XXXX":case"XX":return z(a);default:return z(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return j(a);case"xxxx":case"xx":return z(a);default:return z(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+A(a,":");default:return"GMT"+z(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+A(a,":");default:return"GMT"+z(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return D(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return D((r._originalDate||e).getTime(),t.length)}};function A(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=t||"";return n+String(a)+i+D(o,2)}function j(e,t){return e%60==0?(e>0?"-":"+")+D(Math.abs(e)/60,2):z(e,t)}function z(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+D(Math.floor(a/60),2)+n+D(a%60,2)}const F=O;var H=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},B=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}};const I={p:B,P:function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return H(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",H(a,t)).replace("{{time}}",B(o,t))}};var R=["D","DD"],Q=["YY","YYYY"];function G(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var X={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function $(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const Z={date:$({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:$({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:$({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var _={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function J(e){return function(t,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var a=e.defaultFormattingWidth||e.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=e.formattingValues[o]||e.formattingValues[a]}else{var i=e.defaultWidth,s=null!=n&&n.width?String(n.width):e.defaultWidth;r=e.values[s]||e.values[i]}return r[e.argumentCallback?e.argumentCallback(t):t]}}const K={ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:J({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:J({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:J({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:J({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:J({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function V(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(a);if(!o)return null;var i,s=o[0],u=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(u)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(s))return n}(u):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(s))return n}(u);return i=e.valueCallback?e.valueCallback(d):d,{value:i=n.valueCallback?n.valueCallback(i):i,rest:t.slice(s.length)}}}var ee,te={ordinalNumber:(ee={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(ee.matchPattern);if(!n)return null;var r=n[0],a=e.match(ee.parsePattern);if(!a)return null;var o=ee.valueCallback?ee.valueCallback(a[0]):a[0];return{value:o=t.valueCallback?t.valueCallback(o):o,rest:e.slice(r.length)}}),era:V({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:V({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:V({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:V({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:V({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const ne={code:"en-US",formatDistance:function(e,t,n){var r,a=X[e];return r="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:Z,formatRelative:function(e,t,n,r){return _[e]},localize:K,match:te,options:{weekStartsOn:0,firstWeekContainsDate:1}};var re=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ae=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,oe=/^'([^]*?)'?$/,ie=/''/g,se=/[a-zA-Z]/;function ue(e,t,n){var r,a,o,i,s,u,d,c,l,f,m,h,g,p,T,k,x,M;y(2,arguments);var S=String(t),D=C(),E=null!==(r=null!==(a=null==n?void 0:n.locale)&&void 0!==a?a:D.locale)&&void 0!==r?r:ne,L=w(null!==(o=null!==(i=null!==(s=null!==(u=null==n?void 0:n.firstWeekContainsDate)&&void 0!==u?u:null==n||null===(d=n.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==s?s:D.firstWeekContainsDate)&&void 0!==i?i:null===(l=D.locale)||void 0===l||null===(f=l.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==o?o:1);if(!(L>=1&&L<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var P=w(null!==(m=null!==(h=null!==(g=null!==(p=null==n?void 0:n.weekStartsOn)&&void 0!==p?p:null==n||null===(T=n.locale)||void 0===T||null===(k=T.options)||void 0===k?void 0:k.weekStartsOn)&&void 0!==g?g:D.weekStartsOn)&&void 0!==h?h:null===(x=D.locale)||void 0===x||null===(M=x.options)||void 0===M?void 0:M.weekStartsOn)&&void 0!==m?m:0);if(!(P>=0&&P<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!E.localize)throw new RangeError("locale must contain localize property");if(!E.formatLong)throw new RangeError("locale must contain formatLong property");var U=b(e);if(!function(e){if(y(1,arguments),!function(e){return y(1,arguments),e instanceof Date||"object"===v(e)&&"[object Date]"===Object.prototype.toString.call(e)}(e)&&"number"!=typeof e)return!1;var t=b(e);return!isNaN(Number(t))}(U))throw new RangeError("Invalid time value");var q=function(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}(U),W=function(e,t){return y(2,arguments),function(e,t){y(2,arguments);var n=b(e).getTime(),r=w(t);return new Date(n+r)}(e,-w(t))}(U,q),N={firstWeekContainsDate:L,weekStartsOn:P,locale:E,_originalDate:U};return S.match(ae).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,I[t])(e,E.formatLong):e})).join("").match(re).map((function(r){if("''"===r)return"'";var a,o,i=r[0];if("'"===i)return(o=(a=r).match(oe))?o[1].replace(ie,"'"):a;var s,u=F[i];if(u)return null!=n&&n.useAdditionalWeekYearTokens||(s=r,-1===Q.indexOf(s))||G(r,t,String(e)),null!=n&&n.useAdditionalDayOfYearTokens||!function(e){return-1!==R.indexOf(e)}(r)||G(r,t,String(e)),u(W,r,E.localize,N);if(i.match(se))throw new RangeError("Format string contains an unescaped latin alphabet character `"+i+"`");return r})).join("")}function de(e){y(1,arguments);var t=b(e);return t.setHours(0,0,0,0),t}function ce(e,t,n){const r=document.querySelector(".main-content"),a=document.createElement("div");a.classList.add(e),a.classList.add("format"),a.classList.add("hide");const o=document.createElement("div");o.textContent=t,o.classList.add("main-title"),a.append(o);const i=document.createElement("div");return i.classList.add("task-frame"),i.classList.add(`${e}-frame`),a.append(i),r.append(a),document.querySelector(n).addEventListener("click",(()=>{var t;t=n,document.querySelectorAll(".highlight").forEach((e=>{e.classList.remove("highlight")})),document.querySelector(t).classList.add("highlight"),function(e){let t=document.querySelector(".main-content");Array.from(t.children).forEach((e=>{e.classList.add("hide")})),document.querySelector(e).classList.remove("hide")}(`.${e}`)})),a}ce("today-page","Today",".today"),document.querySelector(".dropdown").addEventListener("click",(()=>{const e=document.querySelector(".drop-down-items"),t=document.querySelector(".main-content");e.classList.contains("hide")?(e.classList.remove("hide"),t.classList.remove("move-main-content")):(e.classList.add("hide"),t.classList.add("move-main-content"))})),ce("this-week-page","This Week",".this-week"),ce("important-page","Important",".important");const le=ce("all-tasks-page","All Tasks",".inbox");le.classList.remove("hide"),function(e){const t=document.createElement("div");t.textContent="+ ADD TASK",t.classList.add("add-tasks"),e.append(t);const n=document.querySelectorAll(".popup-hide");t.addEventListener("click",(()=>{n.forEach((e=>{e.classList.remove("popup-hide")}))})),document.querySelector(".blur").addEventListener("click",(()=>{n.forEach((e=>{e.classList.add("popup-hide")}))})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&n.forEach((e=>{e.classList.add("popup-hide")}))}))}(le),function(){const e=document.getElementById("submit"),t=(document.querySelector(".popup"),document.querySelector(".blur"),document.getElementById("title")),n=document.getElementById("details"),r=document.getElementById("isImportant"),a=document.getElementById("date");e.addEventListener("click",(function(e){e.preventDefault();let o=t.value,i=n.value,s=r.checked,u=new Date(a.value);u.setDate(u.getDate()+1),function(e,t,n,r,a){const o=document.createElement("div"),i=document.querySelector(".all-tasks-page-frame");o.classList.add("task"),o.classList.add(`${e}-task`);const s=document.createElement("div");s.classList.add("first-line");const u=document.createElement("span"),d=document.createElement("input");d.classList.add("task-check"),d.classList.add(e),d.type="checkbox",u.textContent=e,s.append(d),s.append(u);const c=document.createElement("div");c.textContent=t,c.classList.add("description");const l=document.createElement("div");l.classList.add("date"),l.textContent=r;let f=new Date,m=(ue(f,"yyyy-MM-dd"),new Date(f));if(m.setDate(m.getDate()+7),o.append(s),o.append(c),o.append(l),function(e,t){y(2,arguments);var n=b(e),r=b(t);return n.getTime()<r.getTime()}(n,m)){const e=document.querySelector(".this-week-page-frame"),t=o.cloneNode(!0);e.append(t)}if(a){const e=document.querySelector(".important-page-frame"),t=o.cloneNode(!0);e.append(t)}if(console.log(f),console.log(n),function(e,t){y(2,arguments);var n=de(e),r=de(t);return n.getTime()===r.getTime()}(f,n)){const e=document.querySelector(".today-page-frame"),t=o.cloneNode(!0);e.append(t)}else console.log("false");i.append(o),function(){console.log("hi");let e=document.querySelectorAll(".task-check"),t=Array.from(e);console.log(t),t.forEach((e=>{e.addEventListener("click",(()=>{if(e.checked){const t=document.querySelector(".all-tasks-page-frame"),n=document.querySelector(".completed-page"),r=e.parentNode.parentNode;e.checked=!1,Array.from(t.children).forEach((e=>{e.classList.contains(r.classList[1])&&(console.log("yes"),e.children[0].children[0].checked=!0,e.id="show",n.append(e))})),e.classList.forEach((e=>{if(console.log(e),"task-check"!==e){let t=document.querySelectorAll(`.${e}-task`);Array.from(t).forEach((e=>{console.log(e),e.classList.add("hide")}))}}))}else document.querySelector(".all-tasks-page-frame").append(e.parentNode.parentNode),e.parentNode.parentNode.id="show",e.classList.forEach((e=>{if(console.log(e),"task-check"!==e){let t=document.querySelectorAll(`.${e}-task`);Array.from(t).forEach((e=>{console.log(e),e.classList.remove("hide")}))}}))}))}))}()}(o,i,u,ue(u,"yyyy-MM-dd"),s),t.value="",n.value="",a.value="",r.checked=!1,a.value=""}))}(),ce("completed-page","Completed Tasks",".completed")})()})();