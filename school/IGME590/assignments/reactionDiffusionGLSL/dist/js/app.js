"use strict";!function r(e,t,a){function n(i,u){if(!t[i]){if(!e[i]){var d="function"==typeof require&&require;if(!u&&d)return d(i,!0);if(o)return o(i,!0);throw new Error("Cannot find module '"+i+"'")}var f=t[i]={exports:{}};e[i][0].call(f.exports,function(r){var t=e[i][1][r];return n(t||r)},f,f.exports,r,e,t,a)}return t[i].exports}for(var o="function"==typeof require&&require,i=0;i<a.length;i++)n(a[i]);return n}({1:[function(r,e,t){function a(){window.requestAnimationFrame(a),w+=2e3;for(var r=1;r<g-1;r+=1)for(var e=1;e<m-1;e+=1){var t=S[r][e][0],o=S[r][e][1];R[r][e][0]=(t+b*n(r,e,0)-t*o*o+y*(1-t))*x,R[r][e][1]=(o+p*n(r,e,1)+t*o*o-(E+y)*o)*x}for(var u=v.getImageData(0,0,g,m),d=1;d<g-1;d+=1)for(var f=1;f<m-1;f+=1){var h=Math.floor(255*(R[d][f][0]-R[d][f][1])),c=155-h,l=65-h,A=255-h,s=4*(d+f*g);u.data[s+0]=A,u.data[s+1]=l,u.data[s+2]=c,u.data[s+3]=255}v.putImageData(u,0,0),i()}function n(r,e,t){var a=.0499,n=0;return n+=-1*S[r][e][t],n+=.2*S[r-1][e][t],n+=.2*S[r+1][e][t],n+=.2*S[r][e+1][t],n+=.2*S[r][e-1][t],n+=S[r-1][e-1][t]*a,n+=S[r+1][e-1][t]*a,n+=S[r-1][e+1][t]*a,n+=S[r+1][e+1][t]*a}function o(){h=window.innerWidth/2,c=window.innerHeight/2}function i(){var r=S;S=R,R=r}console.log("diffusion running");var u=document.getElementById("gl");u.width=u.height=256;var d=u.getContext("webgl"),f=document.getElementById("texture");f.width=f.height=256;var v=f.getContext("2d");f.style.display="none";var h=window.innerWidth/2,c=window.innerHeight/2,g=u.width,m=u.height;d.viewport(0,0,d.drawingBufferWidth,d.drawingBufferHeight);var l=d.createBuffer();d.bindBuffer(d.ARRAY_BUFFER,l);var A=new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]);d.bufferData(d.ARRAY_BUFFER,A,d.STATIC_DRAW);var w=0,s={};s.x=g/2,s.y=m/2;for(var x=2,b=1,p=.5,y=.055,E=.061,S=[],R=[],B=Math.PI/180,F=0;F<g;F+=1){S[F]=[],R[F]=[];for(var C=0;C<m;C+=1)S[F][C]=[],S[F][C][0]=1,S[F][C][1]=0,R[F][C]=[],R[F][C][0]=1,R[F][C][1]=0}for(var I=0;I<1;I++)for(var T=0;T<360;T+=30)for(var M=20;M<35;M++){var P=Math.floor(s.x+M*Math.cos(T*B)),q=Math.floor(s.y+M*Math.sin(T*B));S[P][q][1]=1}window.requestAnimationFrame(a),window.addEventListener("resize",o,!1);var D=document.getElementById("vertex").text,L=d.createShader(d.VERTEX_SHADER);d.shaderSource(L,D),d.compileShader(L);var H=document.getElementById("fragment").text,U=d.createShader(d.FRAGMENT_SHADER);d.shaderSource(U,H),d.compileShader(U);var _=d.createProgram();d.attachShader(_,L),d.attachShader(_,U),d.linkProgram(_),d.useProgram(_);var W=d.getAttribLocation(_,"aPosition");d.enableVertexAttribArray(W),d.vertexAttribPointer(W,2,d.FLOAT,!1,0,0),_.textureCoordAttribute=d.getAttribLocation(_,"aTextureCoord"),d.enableVertexAttribArray(_.textureCoordAttribute),d.vertexAttribPointer(_.textureCoordAttribute,2,d.FLOAT,!1,0,0),_.samplerUniform=d.getUniformLocation(_,"uSampler"),d.uniform1i(_.samplerUniform,0);d.createTexture()},{}]},{},[1]);