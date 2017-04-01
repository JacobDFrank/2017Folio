var width = window.innerWidth;
var height = window.innerHeight;

var scene, camera, fieldOfView, aspectRatio, nearPlane, farPlane;
var rt1, rt2; // render targets
var uniforms1, renderer;

var clock;
var clockSpeed = 1.0;

clock = new THREE.Clock();

init();
animate();


function setupScreen() {
    uniforms1 = {
        time: {
            value: 0.0
        },
        resolution: {
            value: new THREE.Vector2()
        },
        tPrev: {
            value: rt1
        }
    };

    scene = new THREE.Scene();

    camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 3);
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

    var geometry = new THREE.PlaneGeometry(2, 2, 1);
    // var geometry = new THREE.SphereGeometry( 5, 32, 32 );
    // var geometry = new THREE.RingBufferGeometry( 1, 5, 32 );

    // Two render targets prepared for feedback effect
    // rt1 & rt2
    rt1 = new THREE.WebGLRenderTarget(width, height, {
        minFilter: THREE.LinearFilter, //pixelates as you scale up
        magFilter: THREE.NearestFilter, //pixelates as you scale up
    });
    rt2 = new THREE.WebGLRenderTarget(width, height, {
        minFilter: THREE.LinearFilter, //pixelates as you scale up
        magFilter: THREE.LinearFilter, //pixelates as you scale up
    });

    var material = new THREE.ShaderMaterial({
        uniforms: uniforms1,
        vertexShader: document.getElementById('vertexShader').textContent,
        fragmentShader: document.getElementById('fragmentShader').textContent
    });
    var mesh = (new THREE.Mesh(geometry, material));

    scene.add(mesh);
}

function init() {
    setupScreen();

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);

    // sending the resolution to the canvas for render
    var canvas = renderer.domElement;
    uniforms1.resolution.value.x = canvas.width;
    uniforms1.resolution.value.y = canvas.height;

    document.body.appendChild(renderer.domElement);
    //adding the canvas element to the dom
}

function render() {
    renderer.render(scene, camera);
    renderer.render(scene, camera, rt1, true);

    // feedback effect
    var temp = rt2;
    rt2 = rt1;
    rt1 = temp
    uniforms1.tPrev.value = rt2;
}

// animate sequence
function animate() {
    requestAnimationFrame(animate);

    uniforms1.time.value += clockSpeed * clock.getDelta(); //updating the unforms
    render();
}
