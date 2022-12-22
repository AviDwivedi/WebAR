const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

			const renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
            // Add the canvas to the container element
            const container = document.getElementById( 'container' );
			document.body.appendChild( renderer.domElement );

			// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
			// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			// const cube = new THREE.Mesh( geometry, material );
			// scene.add( cube );

			const geometry = new THREE.SphereGeometry( 1, 32, 16  );
			const material = new THREE.MeshBasicMaterial({ color: 0x999999, wireframe: false, transparent: true, opacity: 0.85 } )
			
			const cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

			// Set up the light source
			const light = new THREE.PointLight( 0xff0000, 10, 50 );
			light.position.set( 5	, 15, 5 );
			scene.add( light );

			// Update the light position when the mouse moves
			// window.addEventListener( 'mousemove', function( event ) {
			// 	pointLight.position.set( event.clientX, event.clientY, 100 );
			// });



			camera.position.z = 5;

			function animate() {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;

				renderer.render( scene, camera );
			};

			animate();

			