/* --- THE TOWER ---*/

// Variables to animate
var towerSeat1;
var towerSeat2;
var isTowerSeat1Up = 1;
var isTowerSeat2Up = 1;
var maxTowerSeatY;
var minTowerSeatY;

// Base of the tower

	// Size Base tower
		var baseTowerXSize = 12;
		var baseTowerYSize = 0.4;
		var baseTowerZSize = 30;

	// Position Base tower
		var baseTowerXPosition = foregroundParkXSize / 2 - baseTowerXSize / 2 - 2;
		var baseTowerYPosition = baseTowerYSize / 2;
		var baseTowerZPosition = -foregroundParkZSize / 2 + baseTowerZSize / 2 + 2;

	var baseTowerGeometry = new THREE.BoxGeometry(baseTowerXSize, baseTowerYSize, baseTowerZSize);
	
	var baseTowerMaterial = new THREE.MeshPhongMaterial({ map: baseTowerTexture });

	var baseTower = new THREE.Mesh(baseTowerGeometry, baseTowerMaterial);
		
	baseTower.receiveShadow = true;
	baseTower.castShadow = true;

	baseTower.position.x = baseTowerXPosition;
	baseTower.position.y = baseTowerYPosition;
	baseTower.position.z = baseTowerZPosition;

	scene.add(baseTower); 
	
// Towers
	// Size Towers
		var towerRadius = (baseTowerXSize - 2) / 4;
		var towerYSize = 60;

	// Position Towers
		var towerXPosition = 0;
		var towerYPosition = baseTowerYSize + towerYSize / 2;
		var towerZPosition = baseTowerZSize / 4;

	var towerGeometry = new THREE.CylinderGeometry(towerRadius, towerRadius, towerYSize, 32);

	var towerMaterial = new THREE.MeshPhongMaterial({ map: texture_Space });

	var tower1 = new THREE.Mesh(towerGeometry, towerMaterial);
		
	tower1.receiveShadow = true;
	tower1.castShadow = true;

	tower1.position.x = towerXPosition;
	tower1.position.y = towerYPosition;
	tower1.position.z = towerZPosition;

	baseTower.add(tower1);
	
	var tower2 = new THREE.Mesh(towerGeometry, towerMaterial);
		
	tower2.receiveShadow = true;
	tower2.castShadow = true;

	tower2.position.x = towerXPosition;
	tower2.position.y = towerYPosition;
	tower2.position.z = -towerZPosition;

	baseTower.add(tower2);

// Orthogonal Towers
	// Size Base tower
		var orthogonalTowerXSize = towerRadius * 2;
		var orthogonalTowerYSize = towerRadius;
		var orthogonalTowerZSize = 2 * towerZPosition;

	// Position Towers
		var orthogonalTowerXPosition = 0;
		var orthogonalTowerYPosition = towerYSize / 2 - orthogonalTowerYSize / 2;
		var orthogonalTowerZPosition = orthogonalTowerZSize / 2;

	var orthogonalTowerGeometry = new THREE.BoxGeometry(orthogonalTowerXSize, orthogonalTowerYSize, orthogonalTowerZSize);

	var orthogonalTower = new THREE.Mesh(orthogonalTowerGeometry, towerMaterial);
		
	orthogonalTower.receiveShadow = true;
	orthogonalTower.castShadow = true;

	orthogonalTower.position.x = orthogonalTowerXPosition;
	orthogonalTower.position.y = orthogonalTowerYPosition;
	orthogonalTower.position.z = orthogonalTowerZPosition;

	tower2.add(orthogonalTower);

// Seats 	
	// Size Seats
		var seatRadius = 2 * towerRadius;
		var seatTube = 2;

	// Position seats
		var seatXPosition = 0;
		var seat1YPosition = baseTowerYSize - towerYSize / 2 + seatTube / 2;
		var seat2YPosition = 0;
		var seatZPosition = 0;

	var seatGeometry = new THREE.TorusGeometry(seatRadius, seatTube, 32, 100);
	
	var seatMaterial = new THREE.MeshPhongMaterial({ map: seatTexture });

	var seat1 = new THREE.Mesh(seatGeometry, seatMaterial);
		
	seat1.receiveShadow = true;
	seat1.castShadow = true;

	seat1.rotation.x = Math.PI / 2;
	seat1.rotation.y = 0;
	seat1.rotation.z = 0;
	
	seat1.position.x = seatXPosition;
	seat1.position.y = seat1YPosition;
	seat1.position.z = seatZPosition;

	tower1.add(seat1);
	towerSeat1 = seat1;
	
	var seat2 = new THREE.Mesh(seatGeometry, seatMaterial);
		
	seat2.receiveShadow = true;
	seat2.castShadow = true;

	seat2.rotation.x = Math.PI / 2;
	seat2.rotation.y = 0;
	seat2.rotation.z = 0;

	seat2.position.x = seatXPosition;
	seat2.position.y = seat2YPosition;
	seat2.position.z = -seatZPosition;

	tower2.add(seat2);
	towerSeat2 = seat2;

maxTowerSeatY = towerYSize / 2 - seatTube / 2 - orthogonalTowerYSize - 3
minTowerSeatY = baseTowerYSize - towerYSize / 2 + seatTube / 2 + 4;

   //sphere
   var geometry = new THREE.SphereGeometry( 8, 32, 32 );
   var material = new THREE.MeshPhongMaterial( {map: texture_World} );
   var sphere_world = new THREE.Mesh( geometry, material );
   sphere_world.position.y = baseTowerYPosition + 70
   baseTower.add( sphere_world );

function animateTower() {
	//rotation sphere
	sphere_world.rotation.y += 0.1
	// Towers 1
		if (towerSeat1.position.y >= maxTowerSeatY) isTowerSeat1Up = -1.5;
		else if (towerSeat1.position.y <= minTowerSeatY) isTowerSeat1Up = 0.3;
		towerSeat1.position.y += isTowerSeat1Up;
				
	// Towers 2
		if (towerSeat2.position.y >= maxTowerSeatY) isTowerSeat2Up = -1.5;
		else if (towerSeat2.position.y <= minTowerSeatY) isTowerSeat2Up = 0.3;
		towerSeat2.position.y += isTowerSeat2Up;
};


//point light

console.log( sphere_world.position.x)
console.log( sphere_world.position.y)
console.log( sphere_world.position.z)
var lights_tower_world = new THREE.PointLight( 0xffffff, 0, 150, 2);
lights_tower_world.position.set(  sphere_world.position.x , sphere_world.position.y  + 45, sphere_world.position.z + 10  );
scene.add( lights_tower_world );
lights.push( lights_tower_world );
			
			