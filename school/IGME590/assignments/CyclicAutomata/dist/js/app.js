"use strict";!function e(n,t,r){function a(o,d){if(!t[o]){if(!n[o]){var u="function"==typeof require&&require;if(!d&&u)return u(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var l=t[o]={exports:{}};n[o][0].call(l.exports,function(e){var t=n[o][1][e];return a(t||e)},l,l.exports,e,n,t,r)}return t[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)a(r[o]);return a}({1:[function(e,n,t){function r(){E={time:{value:0},resolution:{value:new THREE.Vector2},tPrev:{value:u}},o=new THREE.Scene,d=new THREE.OrthographicCamera(-1,1,1,-1,1,3),d.position.z=1;var e=new THREE.PlaneGeometry(2,2,1);u=new THREE.WebGLRenderTarget(s,R,{minFilter:THREE.LinearFilter,magFilter:THREE.NearestFilter}),l=new THREE.WebGLRenderTarget(s,R,{minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter}),g=new THREE.ShaderMaterial({uniforms:E,vertexShader:document.getElementById("vertexShader").textContent,fragmentShader:v}),h=new THREE.Mesh(e,g),o.add(h)}function a(){f.render(o,d),f.render(o,d,u,!0);var e=l;l=u,u=e,E.tPrev.value=l}function i(){requestAnimationFrame(i),E.time.value+=w*m.getDelta(),a()}var o,d,u,l,E,f,m,h,g,s=window.innerWidth,R=window.innerHeight,w=1,c={shaderVariation:"fragmentShaderDefault"},v=document.getElementById(c.shaderVariation).textContent;(new dat.GUI).add(c,"shaderVariation",{Default:"fragmentShaderDefault",Paint:"fragmentShaderPaint",Rain:"fragmentShaderRain",Rows:"fragmentShaderRows",Moths:"fragmentShaderMoths",Diagonal:"fragmentShaderDiagMoths",DownRain:"fragmentShaderDownRain"}).onChange(function(e){g.fragmentShader=document.getElementById(c.shaderVariation).textContent,g.needsUpdate=!0}),m=new THREE.Clock,function(){r(),f=new THREE.WebGLRenderer,f.setSize(s,R);var e=f.domElement;E.resolution.value.x=e.width,E.resolution.value.y=e.height,document.body.appendChild(f.domElement)}(),i()},{}]},{},[1]);