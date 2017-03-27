(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var scene,
    camera, fieldOfView, aspectRatio, nearPlane, farPlane,
    renderer, container, cancelled = false,
    HEIGHT, WIDTH, windowHalfX = window.innerWidth / 2,
    windowHalfY = window.innerHeight / 2,
    ambientLight, hemisphereLight, shadowLight,
    mouseX = windowHalfX * .01,
    mouseY = windowHalfY * .01,
    noise = 0.01,
    radius = 60,
    windowResized = false,
    resizeWidth,
    shape;
var slide2Position = -5,
    finalBallSize = 0;
var geometry = new THREE.SphereGeometry(radius, 40, 30);

var recordingYLocation, recordingSize;

var counter = downCounter = 0;
var slideMoveUp = slideMoveDown = 0;
var slideSpeed = 1200,
    transSpeed = 35;
var slide, slideNumber, slideBelow;
var slideAmount = $('.section').length
var notLastSlide = true;
var bottomGone = false,
    topGone = false;

$('#fullpage').fullpage({
    anchors: ['page1', 'page2', 'page3', 'page4'],
    easing: 'easeInOutQuad',
    onLeave: function(index, nextIndex, direction) {
        var leavingSection = $(this);
        //after leaving section 2
        if (direction == 'up' || direction == 'down') {
            jQuery('.project__cover').addClass('bottom--disappear').removeClass('bottom--reappear');
        }
        if (index == 1 && direction == 'down') {
            slideMoveDown = 2;
            slideMoveUp = 0;
            counter = 0;
            bottomGone = topGone = true;
            jQuery('.bottom__link__name__color').addClass('bottom--disappear').removeClass('bottom--reappear');
            jQuery('.bottom__link__line').addClass('bottom--disappear').removeClass('bottom--reappear');
            jQuery('.projects__name').addClass('bottom--disappear').removeClass('bottom--reappear');
            jQuery('.projects__subhead').addClass('bottom--disappear').removeClass('bottom--reappear');
            window.setTimeout(nextProjectBottomName, 500);
            window.setTimeout(topProjectName, 500);
            document.getElementById("ball").style.opacity = '0.0';
            document.getElementById("ball").style.transitionProperty = 'opacity';
            document.getElementById("ball").style.transitionDuration = ".5s";
            document.getElementById("ball").style.transitionTimingFunction = "ease-out";

        } else if (index == 2 && direction == 'up') {
            slideMoveUp = 1;
            slideMoveDown = 0;
            document.getElementById("ball").style.display = '';
            counter = 0;
            animate();
            cancelled = false;
            jQuery('.bottom__link__name__color').addClass('bottom--disappear').removeClass('bottom--reappear');
            jQuery('.bottom__link__line').addClass('bottom--disappear').removeClass('bottom--reappear');
            jQuery('.projects__name').addClass('bottom--disappear').removeClass('bottom--reappear');
            jQuery('.projects__subhead').addClass('bottom--disappear').removeClass('bottom--reappear');
            window.setTimeout(topHomeName, 500);
            bottomGone = topGone = true;
            document.getElementById("ball").style.opacity = '1';
            document.getElementById("ball").style.transitionProperty = "opacity";
            document.getElementById("ball").style.transitionDuration = "1s";
            document.getElementById("ball").style.transitionTimingFunction = "ease-in";
        }
        if (nextIndex != slideAmount) {
            // slide = window.location.hash;
            // slideNumber = parseInt(slide.substr(slide.length -1)) + 1;
            console.log("slide" + nextIndex);
            notLastSlide = true;
            slideBelow = nextIndex + 1;
            document.getElementById('bottom__Link--Change').href = "#page" + slideBelow.toString();
        } else {
            jQuery('.bottom__link__name__color').addClass('bottom--disappear').removeClass('bottom--reappear');
            jQuery('.bottom__link__line').addClass('bottom--disappear').removeClass('bottom--reappear');
            window.setTimeout(finalBottomName, 500);
            bottomGone = true;
        }
        if (index == slideAmount) {
            jQuery('.bottom__link__name__color').addClass('bottom--disappear').removeClass('bottom--reappear');
            jQuery('.bottom__link__line').addClass('bottom--disappear').removeClass('bottom--reappear');
            window.setTimeout(nextProjectBottomName, 500);
            bottomGone = true;
        }
    },
    afterLoad: function(anchorLink, index) {
        var loadedSection = $(this);
        if (bottomGone) {
            jQuery('.bottom__link__line').addClass('bottom--reappear').removeClass('bottom--disappear');
            jQuery('.bottom__link__name__color').addClass('bottom--reappear').removeClass('bottom--disappear');
            bottomGone = false;
        }
        if (topGone) {
            jQuery('.projects__name').addClass('bottom--reappear').removeClass('bottom--disappear');
            jQuery('.projects__subhead').addClass('bottom--reappear').removeClass('bottom--disappear');
            topGone = false;
        }
        window.setTimeout(projectCoverAppear, 3000);
    }

});
$.fn.fullpage.setScrollingSpeed(slideSpeed);

function projectCoverAppear() {
    jQuery('.project__cover').addClass('bottom--reappear').removeClass('bottom--disappear');
}

function projectCoverDisappear() {
    jQuery('.project__cover').addClass('bottom--reappear').removeClass('bottom--disappear');
}

function topHomeName() {
    jQuery('.projects__name').addClass('fluid-type30-60').removeClass('fluid-type24-44');
    jQuery('.projects__subhead').addClass('fluid-type14-20').removeClass('fluid-type12-16');
}

function topProjectName() {
    jQuery('.projects__name').addClass('fluid-type24-44').removeClass('fluid-type30-60');
    jQuery('.projects__subhead').addClass('fluid-type12-16').removeClass('fluid-type14-20');
}

function nextProjectBottomName() {
    document.getElementById('bottom__Link--Change').innerHTML = "Next Project";
    document.getElementById('bottom__Link--Change').href = "#page3";
}

function finalBottomName() {
    document.getElementById('bottom__Link--Change').innerHTML = "You seem cool, we should talk...";
    document.getElementById('bottom__Link--Change').href = "mailto:hello@jacobdfrank.com?subject=HelloJacob";
}
// HANDLE SCREEN EVENTS
function onWindowResize() {
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    windowResized = true;
    ballPresence();
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
}
window.onload = function() {
    ballPresence();
}
recordingYLocation = 46;
recordingSize = 145;
// INIT THREE JS SCENE
function createScene() {
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;

    scene = new THREE.Scene();
    aspectRatio = WIDTH / HEIGHT;
    fieldOfView = 25;
    farPlane = 100000;
    camera = new THREE.PerspectiveCamera(
        fieldOfView,
        aspectRatio,
        nearPlane,
        farPlane
    );

    scene.fog = new THREE.Fog(0xE53455, 1, 2500);
    camera.position.x = 0;
    camera.position.z = 1000;
    camera.position.y = 0;

    renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
    });
    renderer.setSize(WIDTH, HEIGHT);
    renderer.shadowMap.enabled = true;
    container = document.getElementById('ball');
    container.appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('mousemove', onDocumentMouseMove, false);
}

$(".pageUp__link").click(function() {
    console.log("link worked");
    window.location = $(this).find("a").attr("href");
    return false;
});

// LIGHTS
function createLights() {
    // hemisphereLight = new THREE.HemisphereLight(0xbd8f49,0x000000, .8);
    ambientLight = new THREE.AmbientLight(0xE53455, .1);

    shadowLight = new THREE.DirectionalLight(0xE53455, .95);
    shadowLight.position.set(250, -100, 800);
    shadowLight.castShadow = true;

    scene.add(hemisphereLight);
    scene.add(shadowLight);
    scene.add(ambientLight);
}

// Shape
Shape = function() {
    // var geometry = new THREE.SphereGeometry(60, 30, 30, 0, 6.3, 0, 6.3),
    geometry,
    material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 1,
        shading: THREE.FlatShading,
    }),
    l = geometry.vertices.length;

    this.waves = [];

    for (var i = 0; i < l; i++) {
        var v = geometry.vertices[i];
        this.waves.push({
            y: v.y,
            x: v.x,
            z: v.z,
            ang: Math.random() * Math.PI * .13,
            amp: Math.random() * 4,
            speed: Math.random() * noise
        });
    };

    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.receiveShadow = true;
}

Shape.prototype.moveWaves = function() {
    var verts = this.mesh.geometry.vertices;
    var verticeLength = verts.length;

    for (var i = 0; i < verticeLength; i++) {
        var v = verts[i],
            vprops = this.waves[i];

        v.x = vprops.x + Math.sin(vprops.ang) * vprops.amp;
        v.y = vprops.y + Math.cos(vprops.ang) * vprops.amp;
        vprops.ang += vprops.speed;
        vprops.speed = 0.03 + Math.random() * noise;
    }

    this.mesh.geometry.verticesNeedUpdate = true;
    shape.mesh.rotation.z += .001;
    this.mesh.geometry.radius += radius;
}

// 3D MODEL
function createShape() {
    shape = new Shape();
    scene.add(shape.mesh);
}

function changeResizeWidth(newWidth) {
    resizeWidth = newWidth;
}

function ballPresence() {
    if (window.innerWidth >= 1000) {
        resizeWidth = 700;
        // resizeWidth = recordingSize;
    } else if (window.innerWidth <= 400) {
        resizeWidth = 1200;
    } else if (window.innerWidth >= 400 && window.innerWidth <= 1000) {
        resizeWidth = (1200 - 500 * ((window.innerWidth - 400) / 600));
    }
    if (window.innerHeight <= 480) {
        resizeWidth = 1100 - window.innerHeight;
    }
}

function getScrollPosition() {
    var elmnt = document.getElementById("homepage");
    var y = elmnt.scrollTop;
    scrollPosition = y;
}
// Detect if left page
function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    } else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
}
addEvent(window, "load", function(e) {
    addEvent(document, "mouseout", function(e) {
        e = e ? e : window.event;
        var from = e.relatedTarget || e.toElement;
        if (!from || from.nodeName == "HTML") {
            // stop your drag event here
            // for now we can just use an alert
            noise = 0.01;
        }
    });
});

function onDocumentMouseMove(event) { //Reactivity

    var a = windowHalfX - event.clientX;
    var b = windowHalfY - event.clientY;
    var distance = Math.abs(Math.sqrt(a * a + b * b));
    var aMax = windowHalfX;
    var bMax = windowHalfY;
    var distanceMax = Math.abs(Math.sqrt(aMax * aMax + bMax * bMax));
    var noiseLimiter = .3;
    var finalNoise = (1 - distance / distanceMax) * noiseLimiter; //Subtracting 1 to reverse the noise value
    noise = finalNoise;
}
// animate
function animate() {
    shape.moveWaves();
    if (slideMoveDown === 0 && slideMoveUp === 0) {
        camera.position.z = resizeWidth;
    }
    if (slideMoveDown === 2) {
        counter++;
        finalBallSize -= slide2Position;
        camera.position.z = resizeWidth + finalBallSize;
    }
    if (slideMoveUp === 1) {
        counter++;
        finalBallSize += slide2Position;
        camera.position.z = resizeWidth + finalBallSize;
    }
    if (counter === transSpeed + 50) {
        if (slideMoveUp === 1) {
            slideMoveUp = 3;
            document.getElementById('bottom__Link--Change').innerHTML = "Work";
            document.getElementById('bottom__Link--Change').href = "#page2";
            // finalBallSize = 0;
        }
        if (slideMoveDown === 2) {
            slideMoveDown = 3;
            cancelAnimationFrame(cancel);
            cancelled = true;
            document.getElementById("ball").style.display = 'none';
            // finalBallSize = 0;
        }
    }


    renderer.render(scene, camera);
    cancel = requestAnimationFrame(animate);
}

// INIT
function init(event) {
    createScene();

    createShape();
    createLights();
    animate();
}

window.addEventListener('load', init, false);

},{}]},{},[1]);
