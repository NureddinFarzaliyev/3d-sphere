import * as THREE from 'three' // import three

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls' // import orbit controls for control sphere

import { gsap } from 'gsap'; // import gsap

// create scene
const scene = new THREE.Scene();

// Create a sphere
const geometry = new THREE.SphereGeometry(5, 64, 64); // Geometry for shape
const material = new THREE.MeshStandardMaterial({ // Material for color
  color: '#3453BB',
})
const mesh = new THREE.Mesh(geometry, material) // mesh combines them
scene.add(mesh) // add mesh to scene

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}

// Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width/sizes.height); // fov, aspect ratio, minimal distance to see, max dist to see
camera.position.z = 25 // make camera go back a bit so we can see the object
scene.add(camera) // Add camera to scene

// Light
const light = new THREE.PointLight(0xfffffff, 1, 100);
light.position.set(20, 10, 10)
scene.add(light)

// Renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setPixelRatio(2); // smooth edges
renderer.setSize(sizes.width, sizes.height) // set size for canvas

// Render the scene with camera
renderer.render(scene, camera)

// Controls 
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true; // add little bit delay to stop for smooth animating
controls.enablePan = false; // change position of the object with holding right click
controls.enableZoom = false; // zoom in out
controls.autoRotate = true; // rotates automatically
controls.autoRotateSpeed = 3; // change rotation speed

// Resize window in responsive change
window.addEventListener('resize', () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix(); // updates inside image
  renderer.setSize(sizes.width, sizes.height)
})

// Re-render scene constantly
// Constantly happening animations go here
const loop = () => {
  controls.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(loop)
}
loop();

// gsap timeline thing 
const tl = gsap.timeline( { defaults: {duration: 1.5} } )
// Make sphere get bigger when opened page
tl.fromTo(mesh.scale, {z: 0, x:0, y:0}, {z:1, x:1, y:1})
// Animate 'spin it' text
tl.fromTo('h1', {y: '300%'}, {y: '0%'} )