"use strict";var v=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var o=v(function(C,a){
var f=8;function l(t,r,e,s,_){var i,n,u;if(t<=0)return e;if(i=_,s===1){if(n=t%f,n>0)for(u=0;u<n;u++)e[i]=r,i+=s;if(t<f)return e;for(u=n;u<t;u+=f)e[i]=r,e[i+1]=r,e[i+2]=r,e[i+3]=r,e[i+4]=r,e[i+5]=r,e[i+6]=r,e[i+7]=r,i+=f;return e}for(u=0;u<t;u++)e[i]=r,i+=s;return e}a.exports=l
});var y=v(function(D,c){
var E=require('@stdlib/strided-base-stride2offset/dist'),M=o();function O(t,r,e,s){return M(t,r,e,s,E(t,s))}c.exports=O
});var j=v(function(F,d){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=y(),g=o();b(m,"ndarray",g);d.exports=m
});var k=require("path").join,w=require('@stdlib/utils-try-require/dist'),z=require('@stdlib/assert-is-error/dist'),A=j(),q,R=w(k(__dirname,"./native.js"));z(R)?q=A:q=R;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
