//s.codepen.io/joshbader/debug/badd93ac5c974796d5bfb092e2fd620e
// GLOBAL letIABLES
let scene,
    camera, fieldOfView, aspectRatio, nearPlane, farPlane,
    renderer, container, cancelled = false,
    HEIGHT, WIDTH,
    ambientLight, hemisphereLight, shadowLight,
    shape;

// HANDLE SCREEN EVENTS
function onWindowResize() {
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    ballPresence();
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
}
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
    scene.fog = new THREE.Fog(0xE53455, 10, 900);
    camera.position.x = 0;
    camera.position.z = 600;
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
}

// LIGHTS
function createLights() {
    // hemisphereLight = new THREE.HemisphereLight(0xbd8f49,0x000000, .8);
    // ambientLight = new THREE.AmbientLight(0xdcde95, .5);

    shadowLight = new THREE.DirectionalLight(0xE53455, .9);
    shadowLight.position.set(150, 350, 350);
    shadowLight.castShadow = true;

    scene.add(hemisphereLight);
    scene.add(shadowLight);
    scene.add(ambientLight);
}

// Shape
Shape = function() {
    // let geometry = new THREE.SphereGeometry(60, 30, 30, 0, 6.3, 0, 6.3),
    let geometry = new THREE.SphereGeometry(60, 30, 30),
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
            ang: Math.random() * Math.PI * 0.13,
            amp: Math.random() * 4,
            speed: 0.025 + Math.random() * 0.01
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
    }

    this.mesh.geometry.verticesNeedUpdate = true;
    shape.mesh.rotation.z += .001;
}

// 3D MODEL
function createShape() {
    shape = new Shape();
    shape.mesh.position.y = 0;
    scene.add(shape.mesh);
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

function getScrollPosition() {
    let elmnt = document.getElementById("homepage");
    let y = elmnt.scrollTop;
    scrollPosition = y;
}

function onDocumentMouseMove(event) { //Perspective turn
    mouseX = (event.clientX + windowHalfX) * .5;
    mouseY = (event.clientY + windowHalfY) * .5;
}
// animate
function animate() {
    shape.moveWaves();
    renderer.render(scene, camera);

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
