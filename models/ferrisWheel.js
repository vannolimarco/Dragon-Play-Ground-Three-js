/* --- FERRIS WHEEL --- */

// Parameters to animate
	var listOfCarriageOfFerrisWheel = [];
	var centerOfFerrisWheel;
	var lastwindow;

/* --- BASE --- */
	// BASE
		// Size Base Ferris Wheel
		var baseFerrisWheelXSize = 25;
		var baseFerrisWheelYSize = 0.4;
		var baseFerrisWheelZSize = 10;

		// Position Base Ferris Wheel
		var baseFerrisWheelXPosition = 0;
		var baseFerrisWheelYPosition = baseFerrisWheelYSize / 2;
		var baseFerrisWheelZPosition = -foregroundParkZSize / 2 + baseFerrisWheelZSize / 2 + 2;

		var geometry = new THREE.BoxGeometry(baseFerrisWheelXSize, baseFerrisWheelYSize, baseFerrisWheelZSize);

		var baseFerrisWheelMaterial = new THREE.MeshPhongMaterial({ map: baseFerrisWheelTexture });

		var baseFerrisWheel = new THREE.Mesh(geometry, baseFerrisWheelMaterial);
	
		baseFerrisWheel.receiveShadow = true;
		baseFerrisWheel.castShadow = true;

		baseFerrisWheel.position.x = baseFerrisWheelXPosition;
		baseFerrisWheel.position.y = baseFerrisWheelYPosition;
		baseFerrisWheel.position.z = baseFerrisWheelZPosition;

		scene.add(baseFerrisWheel);
		
	// SUPPORTS 
		var b = baseFerrisWheelXSize / 2 - 1;			// base
		var i = b / Math.abs(Math.sin(Math.PI / 6));	// ipotenusa
		var h = i * Math.abs(Math.sin(Math.PI / 3));	// altezza
		
		// Size Support
		var supportXSize = 1;
		var supportYSize = i;
		var supportZSize = 0.4;

		// Position Support
		var supportLeftXPosition = baseFerrisWheelXPosition - (baseFerrisWheelXSize - 1) / 2 + b / 2;
		var supportRightXPosition = baseFerrisWheelXPosition + (baseFerrisWheelXSize - 1) / 2 - b / 2;
		var supportYPosition = baseFerrisWheelYPosition + baseFerrisWheelYSize / 2 + h / 2 - 0.2;
		var support1ZPosition = baseFerrisWheelZPosition + (baseFerrisWheelZSize - 1) / 2 - supportZSize / 2;
		var support2ZPosition = baseFerrisWheelZPosition - (baseFerrisWheelZSize - 1) / 2 + supportZSize / 2;

		var geometry = new THREE.BoxGeometry(supportXSize, supportYSize, supportZSize);

		var material = new THREE.MeshPhongMaterial({color: new THREE.Color("rgb(250,250,250)")});

		// Left 1
			var supportLeft1 = new THREE.Mesh(geometry, material);
	
			supportLeft1.receiveShadow = true;
			supportLeft1.castShadow = true;
			
			supportLeft1.rotation.x = 0;
			supportLeft1.rotation.y = 0;
			supportLeft1.rotation.z = -Math.PI / 6;
			
			supportLeft1.position.x = supportLeftXPosition;
			supportLeft1.position.y = supportYPosition;
			supportLeft1.position.z = support1ZPosition;

			scene.add(supportLeft1);
			
		// Left 1
			var supportLeft2 = new THREE.Mesh(geometry, material);
	
			supportLeft2.receiveShadow = true;
			supportLeft2.castShadow = true;
			
			supportLeft2.rotation.x = 0;
			supportLeft2.rotation.y = 0;
			supportLeft2.rotation.z = -Math.PI / 6;
			
			supportLeft2.position.x = supportLeftXPosition;
			supportLeft2.position.y = supportYPosition;
			supportLeft2.position.z = support2ZPosition;

			scene.add(supportLeft2);
			
		// Right 1
			var supportRight1 = new THREE.Mesh(geometry, material);
	
			supportRight1.receiveShadow = true;
			supportRight1.castShadow = true;
			
			supportRight1.rotation.x = 0;
			supportRight1.rotation.y = 0;
			supportRight1.rotation.z = Math.PI / 6;
			
			supportRight1.position.x = supportRightXPosition;
			supportRight1.position.y = supportYPosition;
			supportRight1.position.z = support1ZPosition;

			scene.add(supportRight1);
			
		// Right 1
			var supportRight2 = new THREE.Mesh(geometry, material);
	
			supportRight2.receiveShadow = true;
			supportRight2.castShadow = true;
			
			supportRight2.rotation.x = 0;
			supportRight2.rotation.y = 0;
			supportRight2.rotation.z = Math.PI / 6;
			
			supportRight2.position.x = supportRightXPosition;
			supportRight2.position.y = supportYPosition;
			supportRight2.position.z = support2ZPosition;

			scene.add(supportRight2);

	// WHEEL
		// Cilindre Ferris Wheel
			// Size Cilindre Ferris Wheel
			var cilindreFerrisWheelRadius = 2;
			var cilindreFerrisWheelYSize = baseFerrisWheelZSize;

			// Position Cilindre Ferris Wheel
			var cilindreFerrisWheelXPosition = baseFerrisWheelXPosition;
			var cilindreFerrisWheelYPosition = supportYPosition + h / 2 + cilindreFerrisWheelRadius / 2;
			var cilindreFerrisWheelZPosition = baseFerrisWheelZPosition;

			var cilindreFerrisWheelGeometry = new THREE.CylinderGeometry(cilindreFerrisWheelRadius, cilindreFerrisWheelRadius, cilindreFerrisWheelYSize, 32);
			
			
			var cilindreFerrisWheelMaterial = new THREE.MeshPhongMaterial({ map: cilindreFerrisWheelTexture });			


			var cilindreFerrisWheel = new THREE.Mesh(cilindreFerrisWheelGeometry, cilindreFerrisWheelMaterial);
	
			cilindreFerrisWheel.receiveShadow = true;
			cilindreFerrisWheel.castShadow = true;

			cilindreFerrisWheel.rotation.x = Math.PI / 2;
			cilindreFerrisWheel.rotation.y = 0;
			cilindreFerrisWheel.rotation.z = 0;

			cilindreFerrisWheel.position.x = cilindreFerrisWheelXPosition;
			cilindreFerrisWheel.position.y = cilindreFerrisWheelYPosition;
			cilindreFerrisWheel.position.z = cilindreFerrisWheelZPosition;

			scene.add(cilindreFerrisWheel);
		
			centerOfFerrisWheel = cilindreFerrisWheel;
			
		// Circle Wheel
			// Size Seats
				var circleWheelRadius = 0.8 * h;
				var circleWheelTube = 0.2;

			// Position seats
				var circleWheelXPosition = 0;
				var circleWheel1YPosition = cilindreFerrisWheelYSize / 2 - 1.5;
				var circleWheel2YPosition = -cilindreFerrisWheelYSize / 2 + 1.5;
				var circleWheelZPosition = 0;

			var circleWheelGeometry = new THREE.TorusGeometry(circleWheelRadius, circleWheelTube, 32, 100);
			
			var circleWheelMaterial = new THREE.MeshPhongMaterial({ map: circleWheelTexture });			
		
			var circleWheel1 = new THREE.Mesh(circleWheelGeometry, circleWheelMaterial);	
	
			circleWheel1.castShadow = true;

			circleWheel1.rotation.x = Math.PI / 2;
			circleWheel1.rotation.y = 0;
			circleWheel1.rotation.z = 0;

			circleWheel1.position.x = circleWheelXPosition;
			circleWheel1.position.y = circleWheel1YPosition;
			circleWheel1.position.z = circleWheelZPosition;

			cilindreFerrisWheel.add(circleWheel1);
			
			var circleWheel2 = new THREE.Mesh(circleWheelGeometry, circleWheelMaterial);
	
			circleWheel2.castShadow = true;		

			circleWheel2.rotation.x = Math.PI / 2;
			circleWheel2.rotation.y = 0;
			circleWheel2.rotation.z = 0;

			circleWheel2.position.x = circleWheelXPosition;
			circleWheel2.position.y = circleWheel2YPosition;
			circleWheel2.position.z = circleWheelZPosition;

			cilindreFerrisWheel.add(circleWheel2);

		// Spokes Wheel
			// Size Spokes Wheel
				var spokesWheelXSize = 0.4;
				var spokesWheelYSize = spokesWheelXSize;
				var spokesWheelZSize = 2 * circleWheelRadius;

			// Position Spokes Wheel
				var spokesWheelXPosition = 0;
				var spokesWheel1YPosition = circleWheel1YPosition;
				var spokesWheel2YPosition = circleWheel2YPosition;
				var spokesWheelZPosition = 0;
			
			var spokesWheelGeometry = new THREE.BoxGeometry(spokesWheelXSize, spokesWheelYSize, spokesWheelZSize);
			var spokesWheelMaterial = new THREE.MeshPhongMaterial({color: new THREE.Color("rgb(235, 235, 235)")});

			// Size Orthogonal Spokes Wheel
				var orthogonalSpokesWheelXSize = spokesWheelXSize;
				var orthogonalSpokesWheelYSize = spokesWheel1YPosition - spokesWheel2YPosition;
				var orthogonalSpokesWheelZSize = spokesWheelXSize;

			// Position Orthogonal Spokes Wheel
				var orthogonalSpokesWheelXPosition = 0;
				var orthogonalSpokesWheelYPosition = 0;
			

			var orthogonalSpokesWheelGeometry = new THREE.BoxGeometry(orthogonalSpokesWheelXSize, orthogonalSpokesWheelYSize, orthogonalSpokesWheelZSize);
			var orthogonalSpokesWheelMaterial = new THREE.MeshPhongMaterial({color: new THREE.Color("rgb(235, 235, 235)")});
				
			// Size Roof Carriage
				var RoofCarriageYSize = 0.07 * h ;
				var RoofCarriageZSize = 0.80 * orthogonalSpokesWheelYSize;

			// Position Roof Carriage
				var RoofCarriageXPosition = 0;
				var RoofCarriageYPosition = 0;
				var RoofCarriageZPosition = RoofCarriageZSize;

			var RoofCarriageGeometry = new THREE.CylinderGeometry(0.7 / Math.sqrt(2), 1 / Math.sqrt(2), 1, 4, 1);
			RoofCarriageGeometry.computeFlatVertexNormals();

			var RoofCarriageMaterial = new THREE.MeshPhongMaterial({ map: RoofCarriageTexture });			

			// Size Base Carriage
				var carriageXSize = (RoofCarriageZSize - 1) * 0.8;
				var carriageYSize = carriageXSize;
				var carriageZSize = 0.16 * h;

			// Position Base Carriage
				var carriageXPosition = -carriageXSize / 2;
				var carriageYPosition = -carriageYSize / 2;
				var carriageZPosition = RoofCarriageYSize / 2;
			
			var shape = new THREE.Shape();
			shape.moveTo(0,0);
			shape.lineTo(0, carriageYSize);
			shape.lineTo(carriageXSize, carriageYSize);
			shape.lineTo(carriageXSize, 0);
			shape.lineTo(0, 0);

			var extrudeSettings = {
				steps: 2,
				depth: carriageZSize,
				bevelEnabled: true,
				bevelThickness: 0.5,
				bevelSize: 0.5,
				bevelOffset: 0,
				bevelSegments: 32
			};

			var carriageGeometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

			var carriageMaterial = new THREE.MeshPhongMaterial({ map: carriageTexture });			

			// Size Windows
				var windowsXSize = 0.02;
				var windowsYSize = carriageXSize - 0.5;
				var windowsZSize = carriageZSize / 2;

			var windowsSideGeometry = new THREE.BoxGeometry(windowsXSize, windowsYSize, windowsZSize);
			var windowsFrontGeometry = new THREE.BoxGeometry(windowsYSize, windowsXSize, windowsZSize);

			

			var windowsMaterial = new THREE.MeshPhongMaterial({ map: windowsTexture });

			// Spokes Wheel
			for(var rad = 0; rad < Math.PI - 0.001 ; rad += Math.PI / 6) {
				var spokesWheel1 = new THREE.Mesh(spokesWheelGeometry, spokesWheelMaterial);
	
				spokesWheel1.castShadow = true;		

				spokesWheel1.rotation.x = 0;
				spokesWheel1.rotation.y = rad;
				spokesWheel1.rotation.z = 0;
				
				spokesWheel1.position.x = spokesWheelXPosition;
				spokesWheel1.position.y = spokesWheel1YPosition;
				spokesWheel1.position.z = spokesWheelZPosition;

				cilindreFerrisWheel.add(spokesWheel1);
				
				var spokesWheel2 = new THREE.Mesh(spokesWheelGeometry, spokesWheelMaterial);
	
				spokesWheel2.castShadow = true;		

				spokesWheel2.rotation.x = 0;
				spokesWheel2.rotation.y = rad;
				spokesWheel2.rotation.z = 0;
				
				spokesWheel2.position.x = spokesWheelXPosition;
				spokesWheel2.position.y = spokesWheel2YPosition;
				spokesWheel2.position.z = spokesWheelZPosition;

				cilindreFerrisWheel.add(spokesWheel2);
				
				// Orthogonal Spokes Wheel
					
				for(var j = -(spokesWheelZSize / 2) * 0.65; j <= (spokesWheelZSize / 2) * 0.70; j += (spokesWheelZSize) * 0.65 / 15) {
					var orthogonalSpokesWheel = new THREE.Mesh(orthogonalSpokesWheelGeometry, orthogonalSpokesWheelMaterial);
	
					orthogonalSpokesWheel.castShadow = true;		

					orthogonalSpokesWheel.rotation.x = 0;
					orthogonalSpokesWheel.rotation.y = 0;
					orthogonalSpokesWheel.rotation.z = 0;
					
					orthogonalSpokesWheel.position.x = orthogonalSpokesWheelXPosition;
					orthogonalSpokesWheel.position.y = orthogonalSpokesWheelYSize / 2;
					orthogonalSpokesWheel.position.z = j;
		
					spokesWheel2.add(orthogonalSpokesWheel);
				}
				
				// Extreme Orthogonal Spokes Wheel

				for(var j = -(spokesWheelZSize / 2); j <= (spokesWheelZSize / 2); j += spokesWheelZSize) {
					var orthogonalSpokesWheel = new THREE.Mesh(orthogonalSpokesWheelGeometry, orthogonalSpokesWheelMaterial);
	
					orthogonalSpokesWheel.castShadow = true;		

					var radForCarriage = -rad;

					orthogonalSpokesWheel.rotation.x = 0;
					orthogonalSpokesWheel.rotation.y = ((j < 0) ? radForCarriage + Math.PI : radForCarriage);
					orthogonalSpokesWheel.rotation.z = 0;
						
					orthogonalSpokesWheel.position.x = orthogonalSpokesWheelXPosition;
					orthogonalSpokesWheel.position.y = orthogonalSpokesWheelYSize / 2;
					orthogonalSpokesWheel.position.z = j;
			
					spokesWheel2.add(orthogonalSpokesWheel);
					
					listOfCarriageOfFerrisWheel.push(orthogonalSpokesWheel);
					
					// Carriage
					
						// Roof Carriage
		
							//Code to get a Trapezoid
								var roofCarriage = new THREE.Mesh(RoofCarriageGeometry, RoofCarriageMaterial);
	
								roofCarriage.castShadow = true;		

								roofCarriage.scale.set(RoofCarriageZSize, RoofCarriageYSize, RoofCarriageZSize);

								roofCarriage.rotation.x = ((j > 0) ? -Math.PI / 2 : Math.PI / 2);
								roofCarriage.rotation.y = Math.PI / 4;
								roofCarriage.rotation.z = 0;
								
								roofCarriage.position.x = RoofCarriageXPosition;
								roofCarriage.position.y = RoofCarriageYPosition;
								roofCarriage.position.z = 0;
								
								orthogonalSpokesWheel.add(roofCarriage);
						
						// Base Carrige
							var baseCarriage = new THREE.Mesh(carriageGeometry, carriageMaterial) ;
	
							baseCarriage.castShadow = true;		
							
							baseCarriage.rotation.x = 0;
							baseCarriage.rotation.y = ((j > 0) ? 0 : Math.PI);
							baseCarriage.rotation.z = 0;

							baseCarriage.position.x = ((j > 0) ? carriageXPosition : -carriageXPosition);
							baseCarriage.position.y = carriageYPosition;
							baseCarriage.position.z = ((j > 0) ? carriageZPosition : -carriageZPosition);

							orthogonalSpokesWheel.add(baseCarriage);
							
							/* --- Windows --- */
								
								// Windows Left
									var windowsLeft = new THREE.Mesh(windowsSideGeometry, windowsMaterial);
	
									windowsLeft.castShadow = true;		

									windowsLeft.position.x = -0.5;
									windowsLeft.position.y = carriageXSize / 2;
									windowsLeft.position.z = carriageZSize / 3;

									baseCarriage.add(windowsLeft);

								// Windows Right 
									var windowsRight = new THREE.Mesh(windowsSideGeometry, windowsMaterial);
	
									windowsRight.castShadow = true;		

									windowsRight.position.x = carriageXSize + 0.5;
									windowsRight.position.y = carriageXSize / 2;
									windowsRight.position.z = carriageZSize / 3;

									baseCarriage.add(windowsRight);

								// Windows Front
									var windowsFront = new THREE.Mesh(windowsFrontGeometry, windowsMaterial);
	
									windowsFront.castShadow = true;		

									windowsFront.position.x = carriageXSize / 2;
									windowsFront.position.y = carriageXSize + 0.5;
									windowsFront.position.z = carriageZSize / 3;

									baseCarriage.add(windowsFront);
									
									lastwindow = windowsFront;

								// Windows Back
									var windowsBack = new THREE.Mesh(windowsFrontGeometry, windowsMaterial);
	
									windowsBack.castShadow = true;		

									windowsBack.position.x = carriageXSize / 2;
									windowsBack.position.y = -0.5;
									windowsBack.position.z = carriageZSize / 3;

									baseCarriage.add(windowsBack);
	
				}
			}		
		
function animateFerrisWheel() {
	listOfCarriageOfFerrisWheel.forEach(function(carriageOfFerrisWheel) {
		carriageOfFerrisWheel.rotation.y += 2 * Math.PI / 1800;
	});
					
	centerOfFerrisWheel.rotation.y -= 2 * Math.PI / 1800;
};
			

var lights_ferris_wheel = new THREE.PointLight( 0xffffff, 0, 120, 1);
lights_ferris_wheel.position.set(  baseFerrisWheel.position.x ,  20 , baseFerrisWheel.position.z + 10);
scene.add( lights_ferris_wheel );
lights.push( lights_ferris_wheel );
			
			
			