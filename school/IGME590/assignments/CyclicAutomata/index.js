//
// Globals
//
let width = window.innerWidth;
let height = window.innerHeight;

let scene, camera, fieldOfView, aspectRatio, nearPlane, farPlane;
let rt1, rt2; // render targets
let uniforms1, renderer;

let clock;
let clockSpeed = 1.0;

let R = 1,
    T = 3,
    C = 3,
    N = false; // Cyclic paramaters

clock = new THREE.Clock();

init();
animate();


function setupScreen() {
    uniforms1 = {
        time: {
            type: "f",
            value: 0.0
        }, //float
        resolution: {
            type: "v2",
            value: new THREE.Vector2()
        }, //2d vector
        tPrev: {
            type: "t",
            value: rt1
        } //texture itself
    };

    scene = new THREE.Scene();

    camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 1000);
    // aspectRatio =  width / height;
    // fieldOfView = 100;
    // farPlane = 1000;
    // camera = new THREE.PerspectiveCamera(
    //     fieldOfView,
    //     aspectRatio,
    //     nearPlane,
    //     farPlane
    // );
    camera.position.z = 1;

    let geometry = new THREE.PlaneGeometry(2, 2, 1);
    // let geometry = new THREE.SphereGeometry( 5, 32, 32 );
    // let geometry = new THREE.RingBufferGeometry( 1, 5, 32 );

    // Two render targets prepared for feedback effect
    // rt1 & rt2
    rt1 = new THREE.WebGLRenderTarget(width, height, {
        minFilter: THREE.NearestFilter,
        magFilter: THREE.NearestFilter,
        format: THREE.RGBFormat
    });
    rt2 = new THREE.WebGLRenderTarget(width, height, {
        minFilter: THREE.NearestFilter,
        magFilter: THREE.NearestFilter,
        format: THREE.RGBFormat
    });

    let material = new THREE.ShaderMaterial({
        uniforms: uniforms1,
        vertexShader: document.getElementById('vertexShader').textContent,
        fragmentShader: document.getElementById('fragmentShader').textContent
    });
    let mesh = (new THREE.Mesh(geometry, material));

    scene.add(mesh);
}

function init() {
    setupScreen();

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);

    // sending the resolution to the canvas for render
    let canvas = renderer.domElement;
    uniforms1.resolution.value.x = canvas.width;
    uniforms1.resolution.value.y = canvas.height;

    document.body.appendChild(renderer.domElement);
    //adding the canvas element to the dom
}

function render() {
    renderer.render(scene, camera);
    renderer.render(scene, camera, rt1, true);

    // feedback effect
    let temp = rt2;
    rt2 = rt1;
    rt1 = temp
    uniforms1.tPrev.value = rt2;
}

// animate sequence
function animate() {
    requestAnimationFrame(animate);

    uniforms1.time.value += clockSpeed * clock.getDelta();
    render();
}
