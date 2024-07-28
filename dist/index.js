"use strict";var o=function(f,i){return function(){return i||f((i={exports:{}}).exports,i),i.exports}};var y=o(function(F,m){
var q=8;function b(f,i,e,n){var v,r,u;if(f<=0)return e;if(n===1){if(u=f%q,u>0)for(r=0;r<u;r++)e[r]=i;if(f<q)return e;for(r=u;r<f;r+=q)e[r]=i,e[r+1]=i,e[r+2]=i,e[r+3]=i,e[r+4]=i,e[r+5]=i,e[r+6]=i,e[r+7]=i;return e}for(n<0?v=(1-f)*n:v=0,r=0;r<f;r++)e[v]=i,v+=n;return e}m.exports=b
});var M=o(function(G,j){
var s=8;function g(f,i,e,n,v){var r,u,t;if(f<=0)return e;if(r=v,n===1){if(u=f%s,u>0)for(t=0;t<u;t++)e[r]=i,r+=n;if(f<s)return e;for(t=u;t<f;t+=s)e[r]=i,e[r+1]=i,e[r+2]=i,e[r+3]=i,e[r+4]=i,e[r+5]=i,e[r+6]=i,e[r+7]=i,r+=s;return e}for(t=0;t<f;t++)e[r]=i,r+=n;return e}j.exports=g
});var E=o(function(H,_){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=y(),w=M();k(R,"ndarray",w);_.exports=R
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=E(),c,O=A(z(__dirname,"./native.js"));B(O)?c=C:c=O;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
