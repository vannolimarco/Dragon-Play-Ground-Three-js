/* --- ROTATING ARMS ---*/

var scaleRotatingArms = 0.85;

// Variables to animate
	var centerRotatingArms;
	var armsRotatingArms = [];
	var isArmUpRotatingArms = [];
	var carsRotatingArms = [];
	var lastCar;
// Base of the Rotating Arms

	// Size Base Rotating Arms
		var baseRotatingArmsXSize = 35 * scaleRotatingArms;
		var baseRotatingArmsYSize = 0.4;
		var baseRotatingArmsZSize = 35 * scaleRotatingArms;

	// Position Base Rotating Arms
		var baseRotatingArmsXPosition = foregroundParkXSize / 2 - baseRotatingArmsXSize / 2 - 2;
		var baseRotatingArmsYPosition = baseRotatingArmsYSize / 2;
		var baseRotatingArmsZPosition = foregroundParkZSize / 2 - baseRotatingArmsZSize / 2 - 2;

	var baseRotatingArmsGeometry = new THREE.BoxGeometry(baseRotatingArmsXSize, baseRotatingArmsYSize, baseRotatingArmsZSize);

	var baseRotatingArmsMaterial = new THREE.MeshPhongMaterial({ map: baseRotatingArmsTexture });

	var baseRotatingArms = new THREE.Mesh(baseRotatingArmsGeometry, baseRotatingArmsMaterial);
	
	baseRotatingArms.receiveShadow = true;
	baseRotatingArms.castShadow = true;


	baseRotatingArms.position.x = baseRotatingArmsXPosition;
	baseRotatingArms.position.y = baseRotatingArmsYPosition;
	baseRotatingArms.position.z = baseRotatingArmsZPosition;

	scene.add(baseRotatingArms); 

// Center
	// Size Center
		var centerRotatingArmsRadius = 2 * scaleRotatingArms;
		var centerRotatingArmsYSize = 15 * scaleRotatingArms;

	// Position Center
		var centerRotatingArmsXPosition = 0;
		var centerRotatingArmsYPosition = baseRotatingArmsYSize + centerRotatingArmsYSize / 2;
		var centerRotatingArmsZPosition = 0;

	var centerRotatingArmsGeometry = new THREE.CylinderGeometry(centerRotatingArmsRadius, centerRotatingArmsRadius * 3, centerRotatingArmsYSize, 32);
	
	var centerRotatingArmsMaterial = new THREE.MeshPhongMaterial({ map: centerRotatingArmsTexture });		

	var centerRotatingArms = new THREE.Mesh(centerRotatingArmsGeometry, centerRotatingArmsMaterial);
	
	centerRotatingArms.receiveShadow = true;
	centerRotatingArms.castShadow = true;

	centerRotatingArms.position.x = centerRotatingArmsXPosition;
	centerRotatingArms.position.y = centerRotatingArmsYPosition;
	centerRotatingArms.position.z = centerRotatingArmsZPosition;

	baseRotatingArms.add(centerRotatingArms);
	centerRotatingArms = centerRotatingArms;
	
	// Fire Sphere
	var fireSphereRadius = 6 * scaleRotatingArms;
	
	var fireSphereGeometry = new THREE.SphereGeometry(fireSphereRadius, 32, 32);
	
	var fireSphereMaterial = new THREE.MeshPhongMaterial({ map: fireSphereTexture });	
	
	var fireSphere = new THREE.Mesh(fireSphereGeometry, fireSphereMaterial);
	
	fireSphere.receiveShadow = true;
	fireSphere.castShadow = true;
	
	fireSphere.position.y = centerRotatingArmsYSize / 2 + fireSphereRadius + 3;

	centerRotatingArms.add(fireSphere);

// Arms
	// Size Arms
		var ArmsXSize = 30 * scaleRotatingArms;
		var ArmsYSize = 1;
		var ArmsZSize = 1;

	// Position Arms
		var ArmsXPosition = 0;
		var ArmsYPosition = 0;
		var ArmsZPosition = 0;

	var ArmsGeometry = new THREE.BoxGeometry(ArmsXSize, ArmsYSize, ArmsZSize);

	var ArmsMaterial = centerRotatingArmsMaterial;

	var numberOfArm = 5;

	for(var rad = 0; rad < Math.PI - 0.001 ; rad += Math.PI / numberOfArm) {
		var Arm = new THREE.Mesh(ArmsGeometry, ArmsMaterial);
		
		Arm.receiveShadow = true;
		Arm.castShadow = true;
			
		Arm.rotation.x = 0;
		Arm.rotation.y = rad;
		Arm.rotation.z = (Math.PI / 6) * (rad - Math.PI / 2) / (Math.PI / 2);

		Arm.position.x = ArmsXPosition;
		Arm.position.y = ArmsYPosition;
		Arm.position.z = ArmsZPosition;

		centerRotatingArms.add(Arm);
		armsRotatingArms.push(Arm);
		isArmUpRotatingArms.push((armsRotatingArms.length % 2 == 0 ? Math.PI / 90 : -Math.PI/ 90));

		// Car
			// Size Arms
				var carDoorXSize = 1 * scaleRotatingArms;
				var carDoorYSize = 2 * scaleRotatingArms;
				var carDoorZSize = 5 * scaleRotatingArms;

			// Position Arms
				var carDoorXPosition = -ArmsXSize / 2;
				var carDoorYPosition = 0;
				var carDoorZPosition = 0;

			var carDoorGeometry = new THREE.BoxGeometry(carDoorXSize, carDoorYSize, carDoorZSize);
			var carDoorMaterial = new THREE.MeshPhongMaterial({color: new THREE.Color("rgb(225, 0, 0)")});

			var carDoor1 = new THREE.Mesh(carDoorGeometry, carDoorMaterial);

			carDoor1.rotation.x = 0;
			carDoor1.rotation.y = 0;
			carDoor1.rotation.z = -Arm.rotation.z;

			carDoor1.position.x = carDoorXPosition;
			carDoor1.position.y = carDoorYPosition;
			carDoor1.position.z = carDoorZPosition;

			Arm.add(carDoor1);
			carsRotatingArms.push(carDoor1);

			var carDoor2 = new THREE.Mesh(carDoorGeometry, carDoorMaterial);

			carDoor2.rotation.x = 0;
			carDoor2.rotation.y = 0;
			carDoor2.rotation.z = -Arm.rotation.z;

			carDoor2.position.x = -carDoorXPosition;
			carDoor2.position.y = carDoorYPosition;
			carDoor2.position.z = carDoorZPosition;

			Arm.add(carDoor2);
			carsRotatingArms.push(carDoor2);

		// Car
			var carRadius = 2 * scaleRotatingArms;

			var carGeometry = new THREE.SphereGeometry(carRadius, 32, 32);
			var carMaterial = fireSphereMaterial;
			
			var car1 = new THREE.Mesh(carGeometry, carMaterial);
		
			car1.receiveShadow = true;
			car1.castShadow = true;
		
			car1.scale.z = 1.5;

			carDoor1.add(car1);
			
			var car2 = new THREE.Mesh(carGeometry, carMaterial);
		
			car2.receiveShadow = true;
			car2.castShadow = true;
		
			car2.scale.z = 1.5;

			carDoor2.add(car2);
			lastCar = car2;
	}
	
	
function animateRotatingArms() {
	centerRotatingArms.rotation.y += Math.PI / 180;

	for(var i = 0; i < armsRotatingArms.length; i++) {
		if (armsRotatingArms[i].rotation.z >= Math.PI / 13) isArmUpRotatingArms[i] = -Math.PI / 360;
		else if (armsRotatingArms[i].rotation.z <= -Math.PI / 13) isArmUpRotatingArms[i] = Math.PI / 360;
		armsRotatingArms[i].rotation.z += isArmUpRotatingArms[i];
		carsRotatingArms[i * 2].rotation.z -= isArmUpRotatingArms[i];
		carsRotatingArms[i * 2 + 1].rotation.z -= isArmUpRotatingArms[i];
	}
};