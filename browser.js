// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t="function"==typeof Math.fround?Math.fround:null,n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,r=o,e=function(t){return r.call(t)},f=Object.prototype.hasOwnProperty,u=function(t,n){return null!=t&&f.call(t,n)},l="function"==typeof Symbol?Symbol.toStringTag:"",i=u,a=l,c=o,y=e,p=function(t){var n,o,r;if(null==t)return c.call(t);o=t[a],n=i(t,a);try{t[a]=void 0}catch(n){return c.call(t)}return r=c.call(t),n?t[a]=o:delete t[a],r},d=n&&"symbol"==typeof Symbol.toStringTag?p:y,b="function"==typeof Float32Array,m=function(t){return b&&t instanceof Float32Array||"[object Float32Array]"===d(t)},s=Number.POSITIVE_INFINITY,h="function"==typeof Float32Array?Float32Array:null,S=m,F=s,g=h,v="function"==typeof Float32Array?Float32Array:void 0,A=function(){throw new Error("not implemented")},T=new(function(){var t,n;if("function"!=typeof g)return!1;try{n=new g([1,3.14,-3.14,5e40]),t=S(n)&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===F}catch(n){t=!1}return t}()?v:A)(1),w=t;"function"!=typeof w&&(w=function(t){return T[0]=t,T[0]});var I=w,N=function(t){return t!=t};return function(t,n){return N(t)||N(n)?NaN:t>n?I(I(t)-I(n)):0}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).pdifff=n();
//# sourceMappingURL=browser.js.map