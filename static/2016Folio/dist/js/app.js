"use strict";!function e(t,o,a){function n(r,s){if(!o[r]){if(!t[r]){var d="function"==typeof require&&require;if(!s&&d)return d(r,!0);if(i)return i(r,!0);throw new Error("Cannot find module '"+r+"'")}var l=o[r]={exports:{}};t[r][0].call(l.exports,function(e){var o=t[r][1][e];return n(o||e)},l,l.exports,e,t,o,a)}return o[r].exports}for(var i="function"==typeof require&&require,r=0;r<a.length;r++)n(a[r]);return n}({1:[function(e,t,o){function a(){jQuery(".project__cover").addClass("bottom--reappear").removeClass("bottom--disappear")}function n(){jQuery(".projects__name").addClass("fluid-type30-60").removeClass("fluid-type24-44"),jQuery(".projects__subhead").addClass("fluid-type14-20").removeClass("fluid-type12-16")}function i(){jQuery(".projects__name").addClass("fluid-type24-44").removeClass("fluid-type30-60"),jQuery(".projects__subhead").addClass("fluid-type12-16").removeClass("fluid-type14-20")}function r(){try{var e=document.getElementById("bottom__Link--Change");if(e.innerHTML="Next Project",null==e)throw"on case study page"}catch(e){console.log(e)}}function s(){document.getElementById("bottom__Link--Change").innerHTML="You seem cool, we should talk...",document.getElementById("bottom__Link--Change").href="mailto:frankjacob42@gmail.com?subject=Jacob, let’s talk"}function d(){M=window.innerHeight,Q=window.innerWidth,I=window.innerWidth/2,L=window.innerHeight/2,R=!0,c(),j.setSize(Q,M),y.aspect=Q/M,y.updateProjectionMatrix();document.getElementsByClassName("project__cover__image");y.aspect>=1.8?jQuery(".project__cover__image").addClass("project__cover__image--vh").removeClass("project__cover__image--vw"):jQuery(".project__cover__image").addClass("project__cover__image--vw").removeClass("project__cover__image--vh")}function l(){M=window.innerHeight,Q=window.innerWidth,g=new THREE.Scene,w=Q/M,b=25,C=1e5,y=new THREE.PerspectiveCamera(b,w,f,C),g.fog=new THREE.Fog(15021141,1,2500),y.position.x=0,y.position.z=1e3,y.position.y=0,j=new THREE.WebGLRenderer({alpha:!0,antialias:!0}),j.setSize(Q,M),j.shadowMap.enabled=!0;try{if(E=document.getElementById("ball"),E.appendChild(j.domElement),null==E)throw"ball not on page"}catch(e){console.log("ball doesn't exist")}window.addEventListener("resize",d,!1),document.addEventListener("mousemove",_,!1)}function m(){T=new THREE.AmbientLight(15021141,.1),B=new THREE.DirectionalLight(15021141,.95),B.position.set(250,-100,800),B.castShadow=!0,g.add(B),g.add(T)}function p(){W=new U,g.add(W.mesh)}function c(){window.innerWidth>=1e3?S=700:window.innerWidth<=400?S=1200:window.innerWidth>=400&&window.innerWidth<=1e3&&(S=1200-(window.innerWidth-400)/600*500),window.innerHeight<=480&&(S=1100-window.innerHeight)}function _(e){var t=I-e.clientX,o=L-e.clientY,a=Math.abs(Math.sqrt(t*t+o*o)),n=I,i=L,r=Math.abs(Math.sqrt(n*n+i*i));H=.3*(1-a/r)}function u(){W.moveRipples(),0===G&&0===D&&(y.position.z=S),2===G&&(F++,z-=x,y.position.z=S+z),1===D&&(F++,z+=x,y.position.z=S+z),F===J+50&&(1===D&&(D=3,document.getElementById("bottom__Link--Change").innerHTML="Work",document.getElementById("bottom__Link--Change").href="#page2"),2===G&&(G=3,cancelAnimationFrame(q),k=!0,document.getElementById("ball").style.display="none")),j.render(g,y),q=requestAnimationFrame(u)}function v(e){l(),p(),m(),u()}var h=this,g=void 0,y=void 0,b=void 0,w=void 0,f=void 0,C=void 0,j=void 0,E=void 0,k=!1,M=void 0,Q=void 0,I=window.innerWidth/2,L=window.innerHeight/2,T=void 0,B=void 0,H=.011,R=!1,S=void 0,W=void 0,x=-5,z=0,P=new THREE.SphereGeometry(60,32,32,0,2*Math.PI,6.3,Math.PI),N=void 0,O=void 0,q=void 0,F=void 0,D=void 0,G=void 0,Y=void 0,A=void 0;F=D=G=0;var J=35,V=void 0,X=$(".section").length,K=!0;Y=!1;$("#fullpage").fullpage({anchors:["page1","page2","page3","page4","page5","page6"],easing:"easeInOutQuad",slidesNavigation:!0,scrollOverflow:!0,scrollOverflowReset:!0,lazyLoading:!1,scrollOverflowResetKey:"amFjb2JkZnJhbmsuY29tXzY4dmMyTnliMnhzVDNabGNtWnNiM2RTWlhObGRBPT12OVc=",onLeave:function(e,t,o){$(h);if(Math.abs(e-t)>1?($.fn.fullpage.setScrollingSpeed(0),console.log("firsthit")):$.fn.fullpage.setScrollingSpeed(1200),"up"!=o&&"down"!=o||jQuery(".project__cover").addClass("bottom--disappear").removeClass("bottom--reappear"),1==e&&"down"==o){G=2,D=0,F=0,Y=A=!0,jQuery(".bottom__link__name__color").addClass("bottom--disappear").removeClass("bottom--reappear"),jQuery(".bottom__link__line").addClass("bottom--disappear").removeClass("bottom--reappear"),jQuery(".projects__name").addClass("bottom--disappear").removeClass("bottom--reappear"),jQuery(".projects__subhead").addClass("bottom--disappear").removeClass("bottom--reappear"),window.setTimeout(r,300),window.setTimeout(i,300);try{if(null==document.getElementById("ball"))throw"ball not there";document.getElementById("ball").style.opacity="0.0",document.getElementById("ball").style.transitionProperty="opacity",document.getElementById("ball").style.transitionDuration=".5s",document.getElementById("ball").style.transitionTimingFunction="ease-out"}catch(e){console.log(e)}}else 2==e&&"up"==o&&(D=1,G=0,document.getElementById("ball").style.display="",F=0,u(),k=!1,jQuery(".bottom__link__name__color").addClass("bottom--disappear").removeClass("bottom--reappear"),jQuery(".bottom__link__line").addClass("bottom--disappear").removeClass("bottom--reappear"),jQuery(".projects__name").addClass("bottom--disappear").removeClass("bottom--reappear"),jQuery(".projects__subhead").addClass("bottom--disappear").removeClass("bottom--reappear"),window.setTimeout(n,300),Y=A=!0,document.getElementById("ball").style.opacity="1",document.getElementById("ball").style.transitionProperty="opacity",document.getElementById("ball").style.transitionDuration="1s",document.getElementById("ball").style.transitionTimingFunction="ease-in");t!=X?(console.log("slide"+t),K=!0,V=t+1,document.getElementById("bottom__Link--Change").href="#page"+V.toString()):(jQuery(".bottom__link__name__color").addClass("bottom--disappear").removeClass("bottom--reappear"),jQuery(".bottom__link__line").addClass("bottom--disappear").removeClass("bottom--reappear"),window.setTimeout(s,300),Y=!0),e==X&&(jQuery(".bottom__link__name__color").addClass("bottom--disappear").removeClass("bottom--reappear"),jQuery(".bottom__link__line").addClass("bottom--disappear").removeClass("bottom--reappear"),window.setTimeout(r,300),Y=!0)},afterLoad:function(e,t){$(this);if(Y&&(jQuery(".bottom__link__line").addClass("bottom--reappear").removeClass("bottom--disappear"),jQuery(".bottom__link__name__color").addClass("bottom--reappear").removeClass("bottom--disappear"),Y=!1),A&&(jQuery(".projects__name").addClass("bottom--reappear").removeClass("bottom--disappear"),jQuery(".projects__subhead").addClass("bottom--reappear").removeClass("bottom--disappear"),A=!1),t==X)try{document.getElementById("bottom__link__lastLine").style.display="none"}catch(e){console.log("bottom Link Not On Home")}if(t!=X)try{document.getElementById("bottom__link__lastLine").style.display="block",document.getElementById("bottom__Link--Change").href="#page"+(t+1).toString()}catch(e){console.log("bottom Link Not On Home")}window.setTimeout(a,0)}}),$.fn.fullpage.setScrollingSpeed(1200),window.onload=function(){c(),window.innerWidth/window.innerHeight>=2?jQuery(".project__cover__image").addClass("project__cover__image--vh").removeClass("project__cover__image--vw"):jQuery(".project__cover__image").addClass("project__cover__image--vw").removeClass("project__cover__image--vh"),console.log("pageLoaded")};var U=function(){N=new THREE.MeshPhongMaterial({color:16777215,transparent:!0,opacity:1,shading:THREE.FlatShading}),O=P.vertices.length,this.ripples=[];for(var e=0;e<O;e++){var t=P.vertices[e];this.ripples.push({y:t.y,x:t.x,speed:Math.random()*H,ang:Math.random()*Math.PI*.8,muv:3*Math.random()})}this.mesh=new THREE.Mesh(P,N),this.mesh.receiveShadow=!0};U.prototype.moveRipples=function(){for(var e=this.mesh.geometry.vertices,t=e.length,o=0;o<t;o++){var a=e[o],n=this.ripples[o];a.x=n.x+Math.cos(n.ang)*n.muv-Math.sin(n.ang),a.y=n.y+Math.sin(n.ang)*n.muv+Math.cos(n.ang),n.speed=.03+Math.random()*H,n.ang+=n.speed}this.mesh.geometry.verticesNeedUpdate=!0,W.mesh.rotation.z+=1e-4,this.mesh.geometry.radius+=60},$(function(){$("body").removeClass("fade-out")}),window.addEventListener("load",v,!1)},{}]},{},[1]);