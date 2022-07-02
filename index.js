// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,o=Object.prototype,n=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,u=o.__lookupGetter__,a=o.__lookupSetter__,l=t,c=function(e,r,t){var l,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||a.call(e,r)?(l=e.__proto__,e.__proto__=o,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,r,t.get),p&&f&&f.call(e,r,t.set),e},_=r()?l:c;function p(e,r,t,o){var n,i,f;if(e<=0)return t;if(1===o){if((f=e%8)>0)for(i=0;i<f;i++)t[i]=r;if(e<8)return t;for(i=f;i<e;i+=8)t[i]=r,t[i+1]=r,t[i+2]=r,t[i+3]=r,t[i+4]=r,t[i+5]=r,t[i+6]=r,t[i+7]=r;return t}for(n=o<0?(1-e)*o:0,i=0;i<e;i++)t[n]=r,n+=o;return t}return _(p,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r,t,o,n){var i,f,u;if(e<=0)return t;if(i=n,1===o){if((f=e%8)>0)for(u=0;u<f;u++)t[i]=r,i+=o;if(e<8)return t;for(u=f;u<e;u+=8)t[i]=r,t[i+1]=r,t[i+2]=r,t[i+3]=r,t[i+4]=r,t[i+5]=r,t[i+6]=r,t[i+7]=r,i+=8;return t}for(u=0;u<e;u++)t[i]=r,i+=o;return t}}),p},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).sfill=r();
//# sourceMappingURL=index.js.map
