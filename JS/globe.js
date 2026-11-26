
import * as THREE from 'three';

// 1. Find the globe container in our HTML
const container = document.getElementById('globe-container');

// Stop if the container does not exist
if (!container) {
    console.error('Globe container not found!');
} else {

    // 2. Create the 3D scene
    const scene = new THREE.Scene();

    // 3. Create the camera
    const camera = new THREE.PerspectiveCamera(
        45,
        container.clientWidth / container.clientHeight,
        0.1,
        100
    );

    camera.position.z = 3.5;

    // 4. Create the renderer
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    renderer.setSize(
        container.clientWidth,
        container.clientHeight
    );

    container.appendChild(renderer.domElement);

    // 5. Create the Earth geometry
    const geometry = new THREE.SphereGeometry(1.2, 64, 64);

    // 6. Load the Earth texture
    const textureLoader = new THREE.TextureLoader();

    const earthTexture = textureLoader.load(
        'https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg'
    );

    // 7. Apply the texture to the Earth
    const material = new THREE.MeshPhongMaterial({
        map: earthTexture,
        shininess: 15
    });

    const earth = new THREE.Mesh(geometry, material);

    scene.add(earth);


// 8. Add glowing team location markers

const locations = [
    { name: "Kenya", lat: -1.2864, lon: 36.8172 },
    { name: "Brazil", lat: -15.7975, lon: -47.8919 },
    { name: "Japan", lat: 35.6762, lon: 139.6503 },
    { name: "United Kingdom", lat: 51.5072, lon: -0.1276 },
    { name: "United States", lat: 40.7128, lon: -74.0060 }
];

const markerGeometry = new THREE.SphereGeometry(0.025, 16, 16);

const markerMaterial = new THREE.MeshBasicMaterial({
    color: 0x19e6ff
});

const markers = [];

locations.forEach(location => {

    const phi = (90 - location.lat) * (Math.PI / 180);
    const theta = (location.lon + 180) * (Math.PI / 180);

    const radius = 1.215;

    const x = -radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);

    const marker = new THREE.Mesh(
        markerGeometry,
        markerMaterial
    );

    marker.position.set(x, y, z);

    earth.add(marker);

    markers.push(marker);
});


    // 8. Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 2);
    sunLight.position.set(5, 3, 5);
    scene.add(sunLight);

    // 9. Add a blue atmospheric glow
    const atmosphereGeometry = new THREE.SphereGeometry(1.25, 64, 64);

    const atmosphereMaterial = new THREE.MeshBasicMaterial({
        color: 0x168cff,
        transparent: true,
        opacity: 0.13,
        side: THREE.BackSide
    });

    const atmosphere = new THREE.Mesh(
        atmosphereGeometry,
        atmosphereMaterial
    );

    scene.add(atmosphere);

    // 10. Animate the Earth
    function animate() {
        requestAnimationFrame(animate);

        earth.rotation.y += 0.002;
        atmosphere.rotation.y += 0.002;

        renderer.render(scene, camera);
    }

    animate();

    // 11. Adjust the globe when the browser is resized
    window.addEventListener('resize', () => {

        const width = container.clientWidth;
        const height = container.clientHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
    });
}
