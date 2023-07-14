# How to make 3D object (sphere) step-by-step

### Making 3D sphere using Three.js

![overview image loading](https://github.com/NureddinFarzaliyev/3d-sphere/blob/master/public/overview-gif.gif)

---

1. Install 'three' module: <br>

```
npm install three
```

2. In Javascript file import "three" module

```js
import * as THREE from "three";
```

3. Create a scene

```js
const scene = new THREE.Scene();
```

4. Create a shape of your choice (shape, in this case)
   and add the shape to your scene

```js
// Create a sphere
const geometry = new THREE.SphereGeometry(5, 64, 64); // Geometry for shape
const material = new THREE.MeshStandardMaterial({
  // Material for color
  color: "#3453BB",
});
const mesh = new THREE.Mesh(geometry, material); // mesh combines them
scene.add(mesh); // add mesh to scene
```

5. Create a camera and add to your scene

```js
const camera = new THREE.PerspectiveCamera(45, 800 / 600); // fov, aspect ratio, minimal distance to see, max dist to see
camera.position.z = 25; // make camera go back a bit so we can see the object
scene.add(camera); // Add camera to scene
```

6. Create a light source and add to your scene

```js
const light = new THREE.PointLight(0xfffffff, 1, 100);
light.position.set(20, 10, 10);
scene.add(light);
```

7. Create a renderer and add to your scene

```js
const canvas = document.querySelector(".webgl"); // <canvas> element in html with class of 'webgl'
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setPixelRatio(2); // smooth edges
renderer.setSize(800, 699); // set size for canvas
```

8. Render the whole canvas

```js
renderer.render(scene, camera);
```

**Now simple 3D sphere should appear on the page. For further information, please visit Three.js documentation.**
