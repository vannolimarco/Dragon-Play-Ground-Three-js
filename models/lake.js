    
	
	var lastDuck;
	
	//position plane lake
    plane_lake_x = 0;
	plane_lake_y =  0.5;
	plane_lake_z =  0;
	// Size plane
	var plane_size_lake_x = 10;
	var plane_size_lake_y = 10;
	var plane_size_lake_z = 1;
	var geometry = new THREE.CircleGeometry( plane_size_lake_x, plane_size_lake_y, plane_size_lake_z);
	var lake_group = new THREE.Group();
	
	var material = new THREE.MeshPhongMaterial( {color: new THREE.Color("rgb(153, 235, 255)"),  map: texture, side: THREE.DoubleSide} );


    var plane_lake = new THREE.Mesh( geometry, material );
	plane_lake.rotateX( - Math.PI / 2);
	plane_lake.position.x = plane_lake_x;
	plane_lake.position.y = plane_lake_y;
	plane_lake.position.z = plane_lake_z;


	//duck	
		var centerOfDuckGeometry = new THREE.BoxGeometry(0.001, 0.001, 0.001);
		var centerOfDuckMaterial = material;
		
		var centerOfDuck = new THREE.Mesh(centerOfDuckGeometry, centerOfDuckMaterial);

		centerOfDuck.receiveShadow = true;
		
		centerOfDuck.rotation.x = Math.PI / 2;
		
		plane_lake.add(centerOfDuck);
			
		var supportDuckGeometry = new THREE.BoxGeometry(7, 0.001, 0.001);
		var supportDuckMaterial = material;

		var duckBodyRadius = 0.3;

		var duckBodyGeometry = new THREE.SphereGeometry(duckBodyRadius, 32, 32);
		var duckBodyMaterial = new THREE.MeshPhongMaterial({color: new THREE.Color("rgb(255, 235, 153)")});

		var duckHeadRadius = 0.2;
		var duckHeadGeometry = new THREE.SphereGeometry(duckHeadRadius, 32, 32);
		var duckHeadMaterial = duckBodyMaterial;
		
		var duckbeakUpperGeometry = new THREE.BoxGeometry(0.1, 0.05, 0.2);
		var duckbeakLowerGeometry = new THREE.BoxGeometry(0.1, 0.02, 0.2);
		var duckbeakMaterial = new THREE.MeshPhongMaterial({color: new THREE.Color("rgb(255, 153, 0)")});

		var duckTailGeometry = new THREE.BoxGeometry(0.2, 0.5, 0.1);
		var duckTailMaterial = duckBodyMaterial;

		var duckEyeRadius = 0.025;
		var duckEyeGeometry = new THREE.SphereGeometry(duckEyeRadius, 32, 32);
		var duckEyeMaterial = new THREE.MeshPhongMaterial({color: new THREE.Color("rgb(0, 0, 0)")});;

		for(var rad = 0; rad < Math.PI - 0.001 ; rad += Math.PI / 5) {
			var supportDuck = new THREE.Mesh(supportDuckGeometry, supportDuckMaterial);

			supportDuck.rotation.x = 0;
			supportDuck.rotation.y = rad;
			supportDuck.rotation.z = 0;
			
			centerOfDuck.add(supportDuck);
			
			// Duck1
				var duckBody1 = new THREE.Mesh(duckBodyGeometry, duckBodyMaterial);
		
				duckBody1.scale.z = 1.5;
				duckBody1.position.x = 6;
				supportDuck.add(duckBody1);
				
				var duckHead1 = new THREE.Mesh(duckHeadGeometry, duckHeadMaterial);
		
				duckHead1.position.z = -0.25;
				duckHead1.position.y = 0.3 + 0.1;
				
				duckBody1.add(duckHead1);
				
				var duckBeakUpper1 = new THREE.Mesh(duckbeakUpperGeometry, duckbeakMaterial);
				
				duckBeakUpper1.position.z = -0.17;
				duckHead1.add(duckBeakUpper1);

				var duckBeakLower1 = new THREE.Mesh(duckbeakLowerGeometry, duckbeakMaterial);
				
				duckBeakLower1.rotation.x = -Math.PI / 6;
				duckBeakLower1.position.z = -0.17;
				duckHead1.add(duckBeakLower1);

				for(var radTail1 = -Math.PI / 6; radTail1 <= Math.PI / 6 ; radTail1 = radTail1 + Math.PI / 6) {
					var duckTail1 = new THREE.Mesh(duckTailGeometry, duckTailMaterial);
					duckTail1.rotation.x = Math.PI / 10;
					duckTail1.rotation.z = radTail1;

					duckTail1.position.z = 0.15;
					duckTail1.position.y = 0.20;
					duckBody1.add(duckTail1);
				}
				
				var duckEyeLeft1 = new THREE.Mesh(duckEyeGeometry, duckEyeMaterial);
		
				duckEyeLeft1.position.x = -duckHeadRadius * 3 / 6.5;
				duckEyeLeft1.position.y = duckHeadRadius * 3 / 6;
				duckEyeLeft1.position.z = -duckHeadRadius * 1.5 * 3 / 6.5;

				duckHead1.add(duckEyeLeft1);
				
				var duckEyeRight1 = new THREE.Mesh(duckEyeGeometry, duckEyeMaterial);
		
				duckEyeRight1.rotation.y = Math.PI / 2;

				duckEyeRight1.position.x = duckHeadRadius * 3 / 6.5;
				duckEyeRight1.position.y = duckHeadRadius * 3 / 6;
				duckEyeRight1.position.z = -duckHeadRadius * 1.5 * 3 / 6.5;
				
				duckHead1.add(duckEyeRight1);

			// Duck 2
				var duckBody2 = new THREE.Mesh(duckBodyGeometry, duckBodyMaterial);
		
				duckBody2.scale.z = 1.5;
				duckBody2.position.x = -6;
				supportDuck.add(duckBody2);
				
				var duckHead2 = new THREE.Mesh(duckHeadGeometry, duckHeadMaterial);
		
				duckHead2.position.z = 0.25;
				duckHead2.position.y = 0.3 + 0.1;
				
				duckBody2.add(duckHead2);
				
				var duckBeakUpper2 = new THREE.Mesh(duckbeakUpperGeometry, duckbeakMaterial);
				
				duckBeakUpper2.position.z = 0.17;
				duckHead2.add(duckBeakUpper2);

				var duckBeakLower2 = new THREE.Mesh(duckbeakLowerGeometry, duckbeakMaterial);
				
				duckBeakLower2.rotation.x = -Math.PI / 6;
				duckBeakLower2.position.z = 0.17;
				duckHead2.add(duckBeakLower2);

				for(var radTail2 = -Math.PI / 6; radTail2 <= Math.PI / 6 ; radTail2 = radTail2 + Math.PI / 6) {
					var duckTail2 = new THREE.Mesh(duckTailGeometry, duckTailMaterial);
					duckTail2.rotation.x = -Math.PI / 10;
					duckTail2.rotation.z = radTail2;

					duckTail2.position.z = -0.15;
					duckTail2.position.y = 0.20;
					duckBody2.add(duckTail2);
				}
				
				var duckEyeLeft2 = new THREE.Mesh(duckEyeGeometry, duckEyeMaterial);
		
				duckEyeLeft2.position.x = -duckHeadRadius * 3 / 6.5;
				duckEyeLeft2.position.y = duckHeadRadius * 3 / 6;
				duckEyeLeft2.position.z = duckHeadRadius * 1.5 * 3 / 6.5;

				duckHead2.add(duckEyeLeft2);
				
				var duckEyeRight2 = new THREE.Mesh(duckEyeGeometry, duckEyeMaterial);
		
				duckEyeRight2.rotation.y = Math.PI / 2;

				duckEyeRight2.position.x = duckHeadRadius * 3 / 6.5;
				duckEyeRight2.position.y = duckHeadRadius * 3 / 6;
				duckEyeRight2.position.z = duckHeadRadius * 1.5 * 3 / 6.5;
				
				duckHead2.add(duckEyeRight2);
				
				lastDuck = duckHead2;
		}

	//fence rock
	fence_rock_size_plane_x = 10;
	fence_rock_size_plane_y = 10;
	fence_rock_size_plane_z = 0.7;

	var geometry = new THREE. CylinderGeometry(fence_rock_size_plane_x, fence_rock_size_plane_y, fence_rock_size_plane_z,100,100,true);
	var material = new THREE.MeshLambertMaterial({map:texture_Rock});
	var fence_rock_plane = new THREE.Mesh(geometry, material);
		
	fence_rock_plane.receiveShadow = true;
	fence_rock_plane.castShadow = true;
	fence_rock_plane.position.z = plane_lake_z;
	fence_rock_plane.position.x = plane_lake_x;
	fence_rock_plane.position.y= plane_lake_y;
	geometry.parameters.openEnded =  true;
	
	lake_group.add( plane_lake );
	lake_group.add(fence_rock_plane);
    scene.add(lake_group);
	
function animateLake() {
	centerOfDuck.rotation.y += Math.PI / 180;
};