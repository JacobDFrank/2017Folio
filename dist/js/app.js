"use strict";!function e(t,o,n){function a(r,s){if(!o[r]){if(!t[r]){var l="function"==typeof require&&require;if(!s&&l)return l(r,!0);if(i)return i(r,!0);var d=new Error("Cannot find module '"+r+"'");throw d.code="MODULE_NOT_FOUND",d}var m=o[r]={exports:{}};t[r][0].call(m.exports,function(e){var o=t[r][1][e];return a(o||e)},m,m.exports,e,t,o,n)}return o[r].exports}for(var i="function"==typeof require&&require,r=0;r<n.length;r++)a(n[r]);return a}({1:[function(e,t,o){function n(){jQuery(".project__cover").addClass("bottom--reappear").removeClass("bottom--disappear")}function a(){jQuery(".projects__name").addClass("fluid-type30-60").removeClass("fluid-type24-44"),jQuery(".projects__subhead").addClass("fluid-type14-20").removeClass("fluid-type12-16")}function i(){jQuery(".projects__name").addClass("fluid-type24-44").removeClass("fluid-type30-60"),jQuery(".projects__subhead").addClass("fluid-type12-16").removeClass("fluid-type14-20")}function r(){try{var e=document.getElementById("bottom__Link--Change");if(e.innerHTML="Next Project",null==e)throw"on case study page"}catch(e){console.log(e)}}function s(){document.getElementById("bottom__Link--Change").innerHTML="You seem cool, we should talk...",document.getElementById("bottom__Link--Change").href="mailto:hello@jacobdfrank.com?subject=Jacob, let’s talk"}function d(){k=window.innerHeight,L=window.innerWidth,W=window.innerWidth/2,R=window.innerHeight/2,x=!0,_(),E.setSize(L,k),w.aspect=L/k,w.updateProjectionMatrix();document.getElementsByClassName("project__cover__image");w.aspect>=1.8?jQuery(".project__cover__image").addClass("project__cover__image--vh").removeClass("project__cover__image--vw"):jQuery(".project__cover__image").addClass("project__cover__image--vw").removeClass("project__cover__image--vh")}function m(){k=window.innerHeight,L=window.innerWidth,y=new THREE.Scene,f=L/k,b=25,j=1e5,w=new THREE.PerspectiveCamera(b,f,C,j),y.fog=new THREE.Fog(15021141,1,2500),w.position.x=0,w.position.z=1e3,w.position.y=0,E=new THREE.WebGLRenderer({alpha:!0,antialias:!0}),E.setSize(L,k),E.shadowMap.enabled=!0;try{if(M=document.getElementById("ball"),M.appendChild(E.domElement),null==M)throw"ball not on page"}catch(e){console.log("ball doesn't exist")}window.addEventListener("resize",d,!1),document.addEventListener("mousemove",h,!1)}function p(){Q=new THREE.AmbientLight(15021141,.1),T=new THREE.DirectionalLight(15021141,.95),T.position.set(250,-100,800),T.castShadow=!0,y.add(T),y.add(Q)}function c(){H=new Shape,y.add(H.mesh)}function _(){window.innerWidth>=1e3?B=700:window.innerWidth<=400?B=1200:window.innerWidth>=400&&window.innerWidth<=1e3&&(B=1200-(window.innerWidth-400)/600*500),window.innerHeight<=480&&(B=1100-window.innerHeight)}function u(e,t,o){e.addEventListener?e.addEventListener(t,o,!1):e.attachEvent&&e.attachEvent("on"+t,o)}function h(e){var t=W-e.clientX,o=R-e.clientY,n=Math.abs(Math.sqrt(t*t+o*o)),a=W,i=R,r=Math.abs(Math.sqrt(a*a+i*i));D=.3*(1-n/r)}function v(){H.moveWaves(),0===slideMoveDown&&0===slideMoveUp&&(w.position.z=B),2===slideMoveDown&&(U++,N-=z,w.position.z=B+N),1===slideMoveUp&&(U++,N+=z,w.position.z=B+N),U===G+50&&(1===slideMoveUp&&(slideMoveUp=3,document.getElementById("bottom__Link--Change").innerHTML="Work",document.getElementById("bottom__Link--Change").href="#page2"),2===slideMoveDown&&(slideMoveDown=3,cancelAnimationFrame(cancel),S=!0,document.getElementById("ball").style.display="none")),E.render(y,w),cancel=requestAnimationFrame(v)}function g(e){m(),c(),p(),v()}var y,w,b,f,C,j,E,M,k,L,Q,T,B,H,I,S=!1,W=window.innerWidth/2,R=window.innerHeight/2,D=.01,x=!1,z=-5,N=0,O=new THREE.SphereGeometry(60,40,30),U=downCounter=slideMoveUp=slideMoveDown=0,G=35,F=$(".section").length,P=!0,q=topGone=!1;$("#fullpage").fullpage({anchors:["page1","page2","page3","page4","page5"],easing:"easeInOutQuad",slidesNavigation:!0,scrollOverflow:!0,scrollOverflowReset:!0,scrollOverflowResetKey:"amFjb2JkZnJhbmsuY29tXzY4dmMyTnliMnhzVDNabGNtWnNiM2RTWlhObGRBPT12OVc=",onLeave:function(e,t,o){$(this);if(Math.abs(e-t)>1?($.fn.fullpage.setScrollingSpeed(0),console.log("firsthit")):$.fn.fullpage.setScrollingSpeed(1200),"up"!=o&&"down"!=o||jQuery(".project__cover").addClass("bottom--disappear").removeClass("bottom--reappear"),1==e&&"down"==o){slideMoveDown=2,slideMoveUp=0,U=0,q=topGone=!0,jQuery(".bottom__link__name__color").addClass("bottom--disappear").removeClass("bottom--reappear"),jQuery(".bottom__link__line").addClass("bottom--disappear").removeClass("bottom--reappear"),jQuery(".projects__name").addClass("bottom--disappear").removeClass("bottom--reappear"),jQuery(".projects__subhead").addClass("bottom--disappear").removeClass("bottom--reappear"),window.setTimeout(r,300),window.setTimeout(i,300);try{if(null==document.getElementById("ball"))throw"ball not there";document.getElementById("ball").style.opacity="0.0",document.getElementById("ball").style.transitionProperty="opacity",document.getElementById("ball").style.transitionDuration=".5s",document.getElementById("ball").style.transitionTimingFunction="ease-out"}catch(e){console.log(e)}}else 2==e&&"up"==o&&(slideMoveUp=1,slideMoveDown=0,document.getElementById("ball").style.display="",U=0,v(),S=!1,jQuery(".bottom__link__name__color").addClass("bottom--disappear").removeClass("bottom--reappear"),jQuery(".bottom__link__line").addClass("bottom--disappear").removeClass("bottom--reappear"),jQuery(".projects__name").addClass("bottom--disappear").removeClass("bottom--reappear"),jQuery(".projects__subhead").addClass("bottom--disappear").removeClass("bottom--reappear"),window.setTimeout(a,300),q=topGone=!0,document.getElementById("ball").style.opacity="1",document.getElementById("ball").style.transitionProperty="opacity",document.getElementById("ball").style.transitionDuration="1s",document.getElementById("ball").style.transitionTimingFunction="ease-in");t!=F?(console.log("slide"+t),P=!0,I=t+1,document.getElementById("bottom__Link--Change").href="#page"+I.toString()):(jQuery(".bottom__link__name__color").addClass("bottom--disappear").removeClass("bottom--reappear"),jQuery(".bottom__link__line").addClass("bottom--disappear").removeClass("bottom--reappear"),window.setTimeout(s,300),q=!0),e==F&&(jQuery(".bottom__link__name__color").addClass("bottom--disappear").removeClass("bottom--reappear"),jQuery(".bottom__link__line").addClass("bottom--disappear").removeClass("bottom--reappear"),window.setTimeout(r,300),q=!0)},afterLoad:function(e,t){$(this);if(q&&(jQuery(".bottom__link__line").addClass("bottom--reappear").removeClass("bottom--disappear"),jQuery(".bottom__link__name__color").addClass("bottom--reappear").removeClass("bottom--disappear"),q=!1),topGone&&(jQuery(".projects__name").addClass("bottom--reappear").removeClass("bottom--disappear"),jQuery(".projects__subhead").addClass("bottom--reappear").removeClass("bottom--disappear"),topGone=!1),t==F)try{document.getElementById("bottom__link__lastLine").style.display="none"}catch(e){console.log("bottom Link Not On Home")}if(t!=F)try{document.getElementById("bottom__link__lastLine").style.display="block",document.getElementById("bottom__Link--Change").href="#page"+(t+1).toString()}catch(e){console.log("bottom Link Not On Home")}window.setTimeout(n,0)}}),$.fn.fullpage.setScrollingSpeed(1200),window.onload=function(){_(),window.innerWidth/window.innerHeight>=2?jQuery(".project__cover__image").addClass("project__cover__image--vh").removeClass("project__cover__image--vw"):jQuery(".project__cover__image").addClass("project__cover__image--vw").removeClass("project__cover__image--vh"),console.log("pageLoaded")},Shape=function(){material=new THREE.MeshPhongMaterial({color:16777215,transparent:!0,opacity:1,shading:THREE.FlatShading}),l=O.vertices.length,this.waves=[];for(var e=0;e<l;e++){var t=O.vertices[e];this.waves.push({y:t.y,x:t.x,z:t.z,ang:Math.random()*Math.PI*.13,amp:4*Math.random(),speed:Math.random()*D})}this.mesh=new THREE.Mesh(O,material),this.mesh.receiveShadow=!0},Shape.prototype.moveWaves=function(){for(var e=this.mesh.geometry.vertices,t=e.length,o=0;o<t;o++){var n=e[o],a=this.waves[o];n.x=a.x+Math.sin(a.ang)*a.amp,n.y=a.y+Math.cos(a.ang)*a.amp,a.ang+=a.speed,a.speed=.03+Math.random()*D}this.mesh.geometry.verticesNeedUpdate=!0,H.mesh.rotation.z+=.001,this.mesh.geometry.radius+=60},u(window,"load",function(e){u(document,"mouseout",function(e){e=e||window.event;var t=e.relatedTarget||e.toElement;t&&"HTML"!=t.nodeName||(D=.01)})}),$(function(){$("body").removeClass("fade-out")}),window.addEventListener("load",g,!1)},{}]},{},[1]);