

// Set up the scene
const scene = new THREE.Scene();

// Set up the camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Set up the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

// Add the canvas to the container element
const container = document.getElementById( 'container' );
container.appendChild( renderer.domElement );


// Set up the sphere
const radius = 1;
const segments = 32;
const rings = 32;
const sphereGeometry = new THREE.SphereGeometry( radius, segments, rings );
const sphereMaterial = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );

// Add the sphere to the scene
scene.add( sphere );


function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}

animate();

  // Set up the light source
const light = new THREE.PointLight( 0xffffff );
scene.add( light );

// Update the light position when the mouse moves
window.addEventListener( 'mousemove', function( event ) {
  light.position.set( event.clientX, event.clientY, 100 );
});