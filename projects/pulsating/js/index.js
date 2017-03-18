// const lSystem = require('./lSystem.js');
// const THREE = require('./three.min.js');
//
// window.onload = function() {
//     console.log("THREE included",  THREE);
// }

let scene, cancel, camera, mesh, geometry, lights = [],
    cancelled = false;
var renderer;

let wireframe = false,
    material;
let mouseX = mouseY = 20;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
let scrollPosition = 0;
let pi = Math.PI;
let phone = 55,
    tabletPortrait, size = 95,
    desktop = tabletLandscape = 76,
    bigDesktop = 106;

// let colorStart = new THREE.Color("rgb(248, 248, 248)");
let colorEnd = new THREE.Color("rgb(221, 221, 221)");

let colorStart = new THREE.Color("rgb(240, 99, 125)");
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
            console.log("Slide 2222")
        } else if (index == 2 && direction == 'up') {
            slideMoveUp = 1;
            slideMoveDown = 0;
            counter = 0;
            console.log("Slide 1111")
        }
    }
});
$.fn.fullpage.setScrollingSpeed(slideSpeed);


let createIndexedSphereGeometry = function(width, length) {
    let geom = new THREE.BufferGeometry();
    let vertices = [];
    let indices = [];
    let uvs = [];
    let width1 = width + 1;
    let length1 = length + 1;

    scene.background = new THREE.Color(0xf8f8f8);

    for (let i = 0; i < width1; i++) {
        for (let j = 0; j < length1; j++) {
            vertices.push(i / width, 0, j / length);
            uvs.push(i / width, j / length);
        }
    }
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < length; j++) {
            let a = i * length1 + j;
            let b = i * length1 + j + 1;
            let c = (i + 1) * length1 + j;
            let d = (i + 1) * length1 + j + 1;
            indices.push(a, c, b);
            indices.push(b, c, d);
        }
    }


    let positions = new Float32Array(vertices);
    let index = new Uint32Array(indices);
    let uv = new Float32Array(uvs);

    geom.addAttribute('position', new THREE.BufferAttribute(positions, 3));
    geom.addAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    geom.setIndex(new THREE.BufferAttribute(index, 1));

    return geom;

}

let main = function(geom, radius) {
    let pos = geom.attributes.position.array;
    let uvs = geom.attributes.uv.array;



    for (let i = 0, u = 0, v = 1; i < pos.length; i += 3, u += 2, v += 2) {
        pos[i] = radius * Math.sin(uvs[u] * pi) * Math.cos(uvs[v] * 2 * pi);
        pos[i + 1] = radius * Math.sin(uvs[u] * pi) * Math.sin(uvs[v] * 2 * pi);
        pos[i + 2] = radius * Math.cos(uvs[u] * pi);
    }
    geom.addAttribute('base_position', geom.attributes.position.clone())
    geom.computeVertexNormals();
}

initScene = function() {
    scene = new THREE.Scene();

    // Renderer
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false
    });
    renderer.setClearColor(0xf8f8f8, 1.0);
    renderer.autoClearColor = true;
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    // document.addEventListener('mousemove', onDocumentMouseMove, false);
    document.getElementById("ball").appendChild(renderer.domElement);

    // My Light
    lights[0] = new THREE.PointLight(0xf8f8f8, .2, 0);
    lights[0].position.set(0, 400, 400);

    scene.add(lights[0]);

    // My Camera
    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 8, 550);
    //   camera.setLens( flatten_modifier );
    //   camera.position.z = flatten_modifier * 9;

}
window.addEventListener('resize', onWindowResize, false);


window.onload = function() {
    ballPresence();
    console.log("loaded");
    if (window.innerWidth <= 1020) {
        cancelAnimationFrame(cancel);
        cancelled = true;
    } else if (window.innerWidth >= 1020) {
        animate();
        cancelled = false;
    }
}

function onWindowResize() {
    // windowHalfX = window.innerWidth / 2;
    // windowHalfY = window.innerHeight / 2;

    ballPresence();

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function ballPresence() {
    if (window.innerWidth <= 1020 && cancelled == false) {
        cancelAnimationFrame(cancel);
        cancelled = true;
    } else if (cancelled == true && window.innerWidth >= 1020) {
        animate();
        cancelled = false;
    }
}

function onDocumentMouseMove(event) { //Perspective turn
    mouseX = (event.clientX + windowHalfX) * .5;
    mouseY = (event.clientY + windowHalfY) * .5;
}

function rotateObject(object, degreeX = 0, degreeY = 0, degreeZ = 0) {

    degreeX = (degreeX * Math.PI) / 180;
    degreeY = (degreeY * Math.PI) / 180;
    degreeZ = (degreeZ * Math.PI) / 180;

    object.rotateX(degreeX);
    object.rotateY(degreeY);
    object.rotateZ(degreeZ);

}

let init = function() {
    initScene();
    let sizeX = sizeY = sizeZ = size;
    mesh = new THREE.Object3D();
    mesh.scale.set(size, size, size);
    rotateObject(mesh, -106, -45, -180);

    geometry = createIndexedSphereGeometry(250, 250);
    main(geometry, 1);

    material = new THREE.MeshStandardMaterial({
        color: 0xFFFFFF,
        emissive: colorStart,
        transparent: true,
        opacity: 0.5,
        wireframe: wireframe
    });
    sphere = new THREE.Mesh(geometry, material);

    mesh.add(sphere);
    scene.add(mesh);
    animate();
}

// window.onmousemove = function(e) {}
let testCounter = false;
let time = 0;

let modifyGeometry = function() {
    let pos = geometry.attributes.position.array;
    let base_pos = geometry.attributes.base_position.array;
    let uvs = geometry.attributes.uv.array;

    for (let i = 0, j = 0; i < pos.length; i += 6, j += 4) {
        let scale = 0.01 * Math.cos(uvs[j] * 0.02);
        // if (testCounter = false) {
        //     console.log("works!" + uvs[j]);
        //     testCounter = true;
        // }
        // scale += 0.05 * Math.cos(uvs[j] *  0.45);

        for (let k = 4; k < 6; k += 2) {

            scale += (0.05 * k) * Math.cos(uvs[j] * 9 * k + (k + time * 0.05));
            // scale += 0 * Math.cos(uvs[j] * 7 * k + (k * 0.05));
        }

        scale *= scale * Math.sin(time * 0.04 + uvs[j] * 4);

        pos[i] = base_pos[i] * (1 + scale);
        // pos[i + 1] = base_pos[i + 1] * (1 + scale);
        pos[i + 2] = base_pos[i + 2] * (1 + scale);
    }
    geometry.attributes.position.needsUpdate = true;
    geometry.computeVertexNormals();
}

let animate = function() {
    time = time + .8;
    // time++;
    // if (time == 155){
    //     time = 0;
    // }
    // console.log(time);


    // if (window.innerWidth < 599) {
    //     mesh.scale.set(phone, phone, phone);
    // }
    // if (window.innerWidth > 600) {
    //     tabletPortrait = (55 + (window.innerWidth - 600) * .07);
    //     mesh.scale.set(tabletPortrait, tabletPortrait, tabletPortrait);
    //     if (window.innerWidth === 601) {}
    // }
    // if (window.innerWidth > 900) {
    //     mesh.scale.set(tabletLandscape, tabletLandscape, tabletLandscape);
    // }
    // if (window.innerWidth > 1200) {
    //     desktop = (76 + (window.innerWidth - 1200) * .10);
    //     mesh.scale.set(desktop, desktop, desktop);
    // }
    // if (window.innerWidth > 1500) {
    //     mesh.scale.set(bigDesktop, bigDesktop, bigDesktop);
    // }


    // scene.requestFrame = requestAnimationFrame(animate);
    cancel = requestAnimationFrame(animate);

    modifyGeometry();

    render();
}

function getScrollPosition() {
    let elmnt = document.getElementById("homepage");
    let y = elmnt.scrollTop;
    scrollPosition = y;
}

function render() {
    let materialR = sphere.material.emissive.r * 255;
    let materialG = sphere.material.emissive.g * 255;
    let materialB = sphere.material.emissive.b * 255;

    if (slideMoveDown === 2) {
        console.log("Slide 2")
    }

    if (slideMoveUp === 1) {
        console.log("Slide 1")
    }

    if (slideMoveDown === 2) {
        counter++;
    }
    if (slideMoveUp === 1) {
        counter++;
    }

    if (counter === transSpeed) {
        counter = 0;
        if (slideMoveUp === 1) {
            slideMoveUp = 0;
            sphere.material.emissive.r = colorStart.r;
            sphere.material.emissive.g = colorStart.g;
            sphere.material.emissive.b = colorStart.b;
        }
        if (slideMoveDown === 2) {
            slideMoveDown = 0;
            sphere.material.emissive.r = colorEnd.r;
            sphere.material.emissive.g = colorEnd.g;
            sphere.material.emissive.b = colorEnd.b;
        }
    }

    renderer.render(scene, camera);


}

init();
