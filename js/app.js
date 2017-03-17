(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// const fullPage = require('./jquery.fullPage.min.js');

// window.addEventListener('load', function () {
//     let input = lSystem.init();
// })

// window.onload = function() {
//     console.log("jquery fullPage included", fullPage);
// }



let scene,
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
let geometry = new THREE.SphereGeometry(radius, 40, 30);

let counter = 0;
let downCounter = 0;
let slideMoveUp = 0;
let slideMoveDown = 0;
let slideSpeed = 1200;
let transSpeed = 35;

$('#fullpage').fullpage({
    anchors: ['page1', 'page2'],
    onLeave: function(index, nextIndex, direction) {
        let leavingSection = $(this);

        //after leaving section 2
        if (index == 1 && direction == 'down') {
            slideMoveDown = 2;
            slideMoveUp = 0;
            counter = 0;
        } else if (index == 2 && direction == 'up') {
            slideMoveUp = 1;
            slideMoveDown = 0;
            counter = 0;
        }
    }
});
$.fn.fullpage.setScrollingSpeed(slideSpeed);

// HANDLE SCREEN EVENTS
function onWindowResize() {
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
    // console.log("loaded");
    // if (window.innerWidth <= 1020) {
    //     cancelAnimationFrame(cancel);
    //     cancelled = true;
    // } else if (window.innerWidth >= 1020) {
    //     animate();
    //     cancelled = false;
    // }
}

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
    // scene.fog = new THREE.Fog(0xE53455, 10, 900);
    camera.position.x = 0;
    camera.position.z = 300;
    camera.position.y = 0;

    renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
    });
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    renderer.setSize(WIDTH, HEIGHT);
    renderer.shadowMap.enabled = true;
    container = document.getElementById('ball');
    container.appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('mousemove', onDocumentMouseMove, false);
}

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
    // let geometry = new THREE.SphereGeometry(60, 30, 30, 0, 6.3, 0, 6.3),
    geometry,
    material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 1,
        shading: THREE.FlatShading,
    }),
    l = geometry.vertices.length;

    this.waves = [];

    for (let i = 0; i < l; i++) {
        let v = geometry.vertices[i];
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
    let verts = this.mesh.geometry.vertices;
    let verticeLength = verts.length;

    for (let i = 0; i < verticeLength; i++) {
        let v = verts[i],
            vprops = this.waves[i];

        v.x = vprops.x + Math.sin(vprops.ang) * vprops.amp;
        v.y = vprops.y + Math.cos(vprops.ang) * vprops.amp;
        vprops.ang += vprops.speed;
        vprops.speed = 0.025 + Math.random() * noise;
    }

    this.mesh.geometry.verticesNeedUpdate = true;
    shape.mesh.rotation.z += .001;
    this.mesh.geometry.radius += radius;
    // console.log(this.mesh.geometry.radius);
}

// 3D MODEL
function createShape() {
    shape = new Shape();
    // shape.mesh.position.y = 0;
    scene.add(shape.mesh);
}

function changeResizeWidth(newWidth) {
    resizeWidth = newWidth;
}

function ballPresence() {
    // if (window.innerWidth <= 1020 && cancelled == false) {
    //     cancelAnimationFrame(cancel);
    //     cancelled = true;
    // } else if (cancelled == true && window.innerWidth >= 1020) {
    //     animate();
    //     cancelled = false;
    // }

    if (window.innerWidth >= 1000) {
        resizeWidth = 800;
    } else if (window.innerWidth <= 400) {
        resizeWidth = 1200;
    } else if (window.innerWidth >= 400 && window.innerWidth <= 1000) {
        resizeWidth = (1200 - 500 * ((window.innerWidth - 400) / 600));
    }
    if (window.innerHeight <= 480) {
        resizeWidth = 600;
    }
    // console.log(resizeWidth);
}

function getScrollPosition() {
    let elmnt = document.getElementById("homepage");
    let y = elmnt.scrollTop;
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
        let from = e.relatedTarget || e.toElement;
        if (!from || from.nodeName == "HTML") {
            // stop your drag event here
            // for now we can just use an alert
            noise = 0.01;
        }
    });
});


function onDocumentMouseMove(event) { //Reactivity

    let a = windowHalfX - event.clientX;
    let b = windowHalfY - event.clientY;

    let distance = Math.sqrt(a * a + b * b);

    noise = 1 - distance / windowHalfX - .35;
}
// animate
function animate() {
    shape.moveWaves();
    camera.position.z = resizeWidth;
    renderer.render(scene, camera);
    console.log(WIDTH);
    // HEIGHT = window.innerHeight;
    // WIDTH = window.innerWidth;

    // scene.requestFrame = requestAnimationFrame(animate);
    cancel = requestAnimationFrame(animate);
}

// INIT
function init(event) {
    createScene();
    createLights();
    createShape();
    animate();
}

window.addEventListener('load', init, false);

},{}]},{},[1]);
