/* --- FOREGROUND --- */

// creation and initialization of infinite ground
var scene_ground = new THREE.Mesh(new THREE.PlaneBufferGeometry(2000, 2000), new THREE.MeshPhongMaterial({ map: ground_Texture , depthWrite: true }));
scene_ground.rotation.x = - Math.PI / 2;

//add infinite ground to teh scene
scene.add(scene_ground);

/* --- FOREGROUND PARK ---*/
var foreground_playground_group = new THREE.Group();  

// Size Foreground Park
var foregroundParkXSize = sizeParkX;
var foregroundParkYSize = 0.1;
var foregroundParkZSize = sizeParkZ;

// Position Foreground Park
var foregroundParkXPosition = 0;
var foregroundParkYPosition = 0.1;
var foregroundParkZPosition = 0;

var geometry = new THREE.BoxGeometry(foregroundParkXSize, foregroundParkYSize, foregroundParkZSize+15.5);

var material = new THREE.MeshPhongMaterial({ map: meadow_texture });

var foregroundPark = new THREE.Mesh(geometry, material);

foregroundPark.receiveShadow = true;

foregroundPark.position.x = foregroundParkXPosition;
foregroundPark.position.y = foregroundParkYPosition;
foregroundPark.position.z = foregroundParkZPosition;

foreground_playground_group.add(foregroundPark);


/* --- FOREGROUND STREET ---*/

//foreground group

// Size Foreground Street
var foregroundStreetXSize = foregroundParkXSize;
var foregroundStreetYSize = foregroundParkYSize;
var foregroundStreetZSize = 10;

// Position Foreground Street
var foregroundStreetXPosition = 0;
var foregroundStreetYPosition = foregroundParkYPosition;
var foregroundStreetZPosition = foregroundParkZSize / 2 + foregroundStreetZSize / 2;

var geometry = new THREE.BoxGeometry(foregroundStreetXSize, foregroundStreetYSize, foregroundStreetZSize);

var material = new THREE.MeshPhongMaterial({color: new THREE.Color("rgb(50, 50, 50)")});

var foregroundStreet = new THREE.Mesh(geometry, material);

foregroundStreet.receiveShadow = true;

foregroundStreet.position.x = foregroundStreetXPosition;
foregroundStreet.position.y = foregroundStreetYPosition;
foregroundStreet.position.z = foregroundStreetZPosition+8;

foreground_playground_group.add(foregroundStreet);

/* --- STREET LINES --- */

var numOfStreetLines = foregroundParkXSize / 0.5;

// Size StreetLines
var streetLinesXSize = 0.5;
var streetLinesYSize = foregroundParkYSize * 1.01;
var streetLinesZSize = 0.1;

// Position StreetLines
var streetLinesXPosition = -foregroundParkXSize / 2 + streetLinesXSize / 2;
var streetLinesYPosition = foregroundParkYPosition;
var streetLinesZPosition = foregroundParkZSize / 2 + foregroundStreetZSize / 2;

for(var i = 0; i < numOfStreetLines ; i++) {
	if(i%2 == 0) {
		var geometry = new THREE.BoxGeometry(streetLinesXSize, streetLinesYSize, streetLinesZSize);

		var material = new THREE.MeshPhongMaterial({color: new THREE.Color("rgb(255, 255, 255)")});

		var streetLines = new THREE.Mesh(geometry, material);

		streetLines.position.x = streetLinesXPosition;
		streetLines.position.y = streetLinesYPosition;
		streetLines.position.z = streetLinesZPosition+8;

		foreground_playground_group.add(streetLines);
	}
	streetLinesXPosition += streetLinesXSize;
}

/* --- FENCE OF PARKGROUND ---*/

    //creation and initialization of back fence
	// Size Fence Back
	var fenceBackXSize = foregroundParkXSize;
	var fenceBackYSize = 4;
	var fenceBackZSize = 0.2;

	// Position Fence Back
	var fenceBackXPosition = 0;
	var fenceBackYPosition = fenceBackYSize / 2;
	var fenceBackZPosition = -foregroundParkZSize / 2 + fenceBackZSize / 2 -7.8;

	var geometry = new THREE.BoxGeometry(fenceBackXSize, fenceBackYSize, fenceBackZSize);

	var material = new THREE.MeshPhongMaterial({map:texture_fence_Castle});

	var fenceBack = new THREE.Mesh(geometry, material);
	fenceBack.receiveShadow = true;
	fenceBack.castShadow = true;

	fenceBack.position.x = fenceBackXPosition;
	fenceBack.position.y = fenceBackYPosition;
	fenceBack.position.z = fenceBackZPosition;

	foreground_playground_group.add(fenceBack); // add back fence to the foreground group

    // creation and initialization of left fence
	// Size Fence Left
	var fenceLeftXSize = 0.2;
	var fenceLeftYSize = 4;
	var fenceLeftZSize = foregroundParkZSize+15.5;

	// Position Fence Left
	var fenceLeftXPosition = -foregroundParkXSize / 2 + fenceLeftXSize / 2;
	var fenceLeftYPosition = fenceLeftYSize / 2;
	var fenceLeftZPosition = 0;

	var geometry = new THREE.BoxGeometry(fenceLeftXSize, fenceLeftYSize, fenceLeftZSize);

	var material = new THREE.MeshPhongMaterial({map:texture_fence_Castle});

	var fenceLeft = new THREE.Mesh(geometry, material);

	fenceLeft.receiveShadow = true;
	fenceLeft.castShadow = true;

	fenceLeft.position.x = fenceLeftXPosition;
	fenceLeft.position.y = fenceLeftYPosition;
	fenceLeft.position.z = fenceLeftZPosition;

	foreground_playground_group.add(fenceLeft);  // add left fence to the foreground group

    // creation and initialization of right fence
	// Size Fence Right
	var fenceRightXSize = 0.2;
	var fenceRightYSize = 4;
	var fenceRightZSize = foregroundParkZSize+15.5;

	// Position Fence Right
	var fenceRightXPosition = foregroundParkXSize / 2 - fenceRightXSize / 2;
	var fenceRightYPosition = fenceRightYSize / 2;
	var fenceRightZPosition = 0;

	var geometry = new THREE.BoxGeometry(fenceRightXSize, fenceRightYSize, fenceRightZSize);

	var material = new THREE.MeshPhongMaterial({map:texture_fence_Castle});

	var fenceRight = new THREE.Mesh(geometry, material);

	fenceRight.receiveShadow = true;
	fenceRight.castShadow = true;

	fenceRight.position.x = fenceRightXPosition;
	fenceRight.position.y = fenceRightYPosition;
	fenceRight.position.z = fenceRightZPosition;

	foreground_playground_group.add(fenceRight); // add right fence to the foreground group

    // creation and initialization of front left fence
	// Size Fence Front Left
	var fenceFrontLeftXSize = foregroundParkXSize / 2 - sizeGate / 4  ;
	var fenceFrontLeftYSize = 4;
	var fenceFrontLeftZSize = 0.2;

	// Position Fence Left
	var fenceFrontLeftXPosition = -foregroundParkXSize / 2 + fenceFrontLeftXSize / 2;
	var fenceFrontLeftYPosition = fenceFrontLeftYSize / 2;
	var fenceFrontLeftZPosition = foregroundParkZSize / 2 - fenceFrontLeftZSize / 2;

	var geometry = new THREE.BoxGeometry(fenceFrontLeftXSize, fenceFrontLeftYSize, fenceFrontLeftZSize);

	var material = new THREE.MeshPhongMaterial({map:texture_fence_Castle});

	var fenceFrontLeft = new THREE.Mesh(geometry, material);

	fenceFrontLeft.receiveShadow = true;
	fenceFrontLeft.castShadow = true;

	fenceFrontLeft.position.x = fenceFrontLeftXPosition;
	fenceFrontLeft.position.y = fenceFrontLeftYPosition;
	fenceFrontLeft.position.z = fenceFrontLeftZPosition+8;

	foreground_playground_group.add(fenceFrontLeft); // add front left fence to the foreground group

    // creation and initialization of front right fence
	// Size Fence Front Right
	var fenceFrontRightXSize = foregroundParkXSize / 2 - sizeGate / 4;
	var fenceFrontRightYSize = 4;
	var fenceFrontRightZSize = 0.2;

	// Position Fence Right
	var fenceFrontRightXPosition = foregroundParkXSize / 2 - fenceFrontRightXSize / 2;
	var fenceFrontRightYPosition = fenceFrontRightYSize / 2;
	var fenceFrontRightZPosition = foregroundParkZSize / 2 - fenceFrontRightZSize / 2;

	var geometry = new THREE.BoxGeometry(fenceFrontRightXSize, fenceFrontRightYSize, fenceFrontRightZSize);

	var material = new THREE.MeshPhongMaterial({map:texture_fence_Castle});

	var fenceFrontRight = new THREE.Mesh(geometry, material);

	fenceFrontRight.receiveShadow = true;
	fenceFrontRight.castShadow = true;

	fenceFrontRight.position.x = fenceFrontRightXPosition;
	fenceFrontRight.position.y = fenceFrontRightYPosition;
	fenceFrontRight.position.z = fenceFrontRightZPosition+8;

	foreground_playground_group.add(fenceFrontRight);  // add front right fence to the foreground group

	// creation and initialization of body dragon
	var geometry = new THREE.TorusKnotGeometry( 13, 4, 100, 16);
	var material = new THREE.MeshPhongMaterial( { map: texture_Dragon_body } );
	var dragon1 = new THREE.Mesh( geometry, material );
	
	dragon1.receiveShadow = true;
	dragon1.castShadow = true;
	
	var dragon2 = new THREE.Mesh( geometry, material );

	dragon2.receiveShadow = true;
	dragon2.castShadow = true;

	dragon2.position.x += 4
	dragon1.position.x -= 3.5

	// creation and initialization of neck of dragons
	function CustomSinCurve( scale ) {

		THREE.Curve.call( this );
	
		this.scale = ( scale === undefined ) ? 1 : scale;
	
	}
	
	CustomSinCurve.prototype = Object.create( THREE.Curve.prototype );  
	CustomSinCurve.prototype.constructor = CustomSinCurve;
	
	CustomSinCurve.prototype.getPoint = function ( t ) {
	
		var tx = t * 3 - 1.5;
		var ty = Math.sin( 2 * Math.PI * t );
		var tz = 0;
	
		return new THREE.Vector3( tx, ty, tz ).multiplyScalar( this.scale );
	
	};
	
	var path = new CustomSinCurve( 10 );
	var geometry = new THREE.TubeGeometry(path,40, 3, 8, false );
	var material = new THREE.MeshPhongMaterial( { map: texture_Dragon_neck } );
	var neck_dragon1 = new THREE.Mesh( geometry, material );
	var neck_dragon2 = new THREE.Mesh( geometry, material );
	neck_dragon1.castShadow = true;
	neck_dragon1.position.x -= 9.5
	neck_dragon1.position.y += 20
	neck_dragon2.position.x += 9.5
	neck_dragon2.position.y += 20
	neck_dragon2.rotation.y = -Math.PI
	neck_dragon2.rotation.z = Math.PI/1.4
	neck_dragon1.rotation.z = Math.PI/1.4
	dragon2.add( neck_dragon2 );
	dragon1.add( neck_dragon1 );

	// creation and initialization of heads of dragons
	//group for head of dragons
	var head_dragon1 = new THREE.Group();

	//size dragon
	var width_head_dragon = 2.6
	var height_head_dragon = 8
	var depth_head_dragon = 6

	// creation and initialization of mouths and heads of dragons 
	var geometry = new THREE.BoxBufferGeometry( width_head_dragon, height_head_dragon, depth_head_dragon );
	var material = new THREE.MeshPhongMaterial( {map: texture_Dragon_head} );

	var mouth1_dragon1 = new THREE.Mesh( geometry, material );  //mouth 1 of dragon 1
	var mouth2_dragon1 = new THREE.Mesh( geometry, material );  //mouth 2 of dragon 2
	var head1_dragon1 =  new THREE.Mesh( geometry, material );  //head 1 of dragon 1

	mouth1_dragon1.position.x += 14
	mouth1_dragon1.position.y += 2
	mouth2_dragon1.position.x += 3

	head1_dragon1.rotation.z = Math.PI/2
	head1_dragon1.position.x += 2
	head1_dragon1.position.y -= 5
	mouth1_dragon1.add(mouth2_dragon1)  //add mouth 2 of dragon 1 to the mouth 1 of dragon 1
	mouth1_dragon1.add(head1_dragon1)   //add head1 of dragon 1 to the mouth 1 of dragon 1

	// creation and initialization of horns of dragons 
	var geometry = new THREE.ConeGeometry( 1, 5, 32 );
	var material = new THREE.MeshPhongMaterial( {color: 0x000000} );
	var cone1_head1_dragon1 = new THREE.Mesh( geometry, material );
	var cone2_head1_dragon1 = new THREE.Mesh( geometry, material );
	cone1_head1_dragon1.rotation.z = -Math.PI
	cone2_head1_dragon1.rotation.z = -Math.PI
	cone1_head1_dragon1.position.z += 2
	cone2_head1_dragon1.position.z -= 2
	head1_dragon1.add(cone1_head1_dragon1) // add cone 1 of head 1 to the head of dragon 1
	head1_dragon1.add(cone2_head1_dragon1) // add cone 2 of head 1 to the head of dragon 1
	cone1_head1_dragon1.position.y -= 5
	cone2_head1_dragon1.position.y -= 5
	head_dragon1.add(mouth1_dragon1); //add mouth 1 of dragon 1 to the head of dragon 1
	neck_dragon1.add( head_dragon1 ); //add head 1 of dragon 1 to the neck of dragon 1


	// creation and initialization of theets of dragons 
	var geometry = new THREE.ConeGeometry( 0.5, 1, 32 );
	var material = new THREE.MeshPhongMaterial( {color: 0xffffff} );

	//cicle for to visualize 7 right theet of  dragon 1
	for (var i = 0; i < 7; i ++) {
		var theetright_head1_dragon1 = new THREE.Mesh( geometry, material );
			theetright_head1_dragon1.rotation.z = Math.PI/2
			theetright_head1_dragon1.position.y += i-2.5;
			theetright_head1_dragon1.position.x -= 2
			theetright_head1_dragon1.position.z += 2.8
			theetright_head1_dragon1.updateMatrix();
			theetright_head1_dragon1.matrixAutoUpdate = false;
			mouth2_dragon1.add(theetright_head1_dragon1);
	}
	//cicle for to visualize 7 left theets of dragon 1
	for (var i = 0; i < 7; i ++) {
			var theetleft_head1_dragon1 = new THREE.Mesh( geometry, material );
			theetleft_head1_dragon1.rotation.z = Math.PI/2
			theetleft_head1_dragon1.position.y += i-2.5;
			theetleft_head1_dragon1.position.x -= 2
			theetleft_head1_dragon1.position.z -= 2.8
			theetleft_head1_dragon1.updateMatrix();
			theetleft_head1_dragon1.matrixAutoUpdate = false;
			mouth2_dragon1.add(theetleft_head1_dragon1);
	}


	//------follows the same structure used for dragon 1 for dragon 2-----//
	var head_dragon2 = new THREE.Group();

	var geometry = new THREE.BoxBufferGeometry( width_head_dragon, height_head_dragon, depth_head_dragon );
	var material = new THREE.MeshPhongMaterial( {map: texture_Dragon_head} );

	var mouth1_dragon2 = new THREE.Mesh( geometry, material );     
	var mouth2_dragon2 = new THREE.Mesh( geometry, material );
	var head1_dragon2 =  new THREE.Mesh( geometry, material );
	mouth1_dragon2.position.x += 14
	mouth1_dragon2.position.y += 2

	mouth2_dragon2.position.x += 3

	head1_dragon2.rotation.z = Math.PI/2
	head1_dragon2.position.x += 2
	head1_dragon2.position.y -= 5
	mouth1_dragon2.add(mouth2_dragon2)
	mouth1_dragon2.add(head1_dragon2)

	
	var geometry = new THREE.ConeGeometry( 1, 5, 32 );
	var material = new THREE.MeshPhongMaterial( {color: 0x000000} );
	var cone1_head1_dragon2 = new THREE.Mesh( geometry, material );
	var cone2_head1_dragon2 = new THREE.Mesh( geometry, material );
	cone1_head1_dragon2.rotation.z = -Math.PI
	cone2_head1_dragon2.rotation.z = -Math.PI
	cone1_head1_dragon2.position.z += 2
	cone2_head1_dragon2.position.z -= 2
	head1_dragon2.add(cone1_head1_dragon2)
	head1_dragon2.add(cone2_head1_dragon2)
	cone1_head1_dragon2.position.y -= 5
	cone2_head1_dragon2.position.y -= 5
	head_dragon2.add(mouth1_dragon2)
	neck_dragon2.add(head_dragon2);


	var geometry = new THREE.ConeGeometry( 0.5, 1, 32 );
	var material = new THREE.MeshPhongMaterial( {color: 0xffffff} );

	for (var i = 0; i < 7; i ++) {
		var theetright_head1_dragon2 = new THREE.Mesh( geometry, material );
			theetright_head1_dragon2.rotation.z = Math.PI/2
			theetright_head1_dragon2.position.y += i-2.5;
			theetright_head1_dragon2.position.x -= 2
			theetright_head1_dragon2.position.z += 2.8
			theetright_head1_dragon2.updateMatrix();
			theetright_head1_dragon2.matrixAutoUpdate = false;
			mouth2_dragon2.add(theetright_head1_dragon2);
	}
	for (var i = 0; i < 7; i ++) {
			var theetleft_head1_dragon2 = new THREE.Mesh( geometry, material );
			theetleft_head1_dragon2.rotation.z = Math.PI/2
			theetleft_head1_dragon2.position.y += i-2.5;
			theetleft_head1_dragon2.position.x -= 2
			theetleft_head1_dragon2.position.z -= 2.8
			theetleft_head1_dragon2.updateMatrix();
			theetleft_head1_dragon2.matrixAutoUpdate = false;
			mouth2_dragon2.add(theetleft_head1_dragon2);
	}

	var fire_size_cone_height = 10
	var fire_size_cone_wight = 1

	for (var i = 0; i < 30; i ++) {
		var fire_index = 0
		fire_size_cone_height -= (0.5 + fire_index);
		fire_size_cone_wight += (0.1 + fire_index);
		var geometry = new THREE.ConeGeometry( fire_size_cone_wight, fire_size_cone_height, 32 );
	    var material = new THREE.MeshPhongMaterial( {map: texture_Fire} );
		var fire_dragon1 = new THREE.Mesh( geometry, material );
	
		var fire_dragon2 = new THREE.Mesh( geometry, material );

		fire_dragon1.castShadow = true;
		fire_dragon2.castShadow = true;
		fire_dragon1.rotation.x = -Math.PI
		fire_dragon1.position.y += i+6;
		fire_dragon1.position.x += 1;
		fire_dragon1.updateMatrix();
		fire_dragon1.matrixAutoUpdate = false;
        fire_index += 10
		mouth1_dragon1.add(fire_dragon1);

		fire_dragon2.rotation.x = -Math.PI
		fire_dragon2.position.y += i+6;
		fire_dragon2.position.x += 1;
		fire_dragon2.updateMatrix();
		fire_dragon2.matrixAutoUpdate = false;
        fire_index += 10
		mouth1_dragon2.add(fire_dragon2);
	}

	//the light point to illuminate the park during night
	//light for  dragon1
	var lights_dragon1 = new THREE.PointLight( 0xffffff, 0, 100, 1);
	lights_dragon1.position.set(  fire_dragon1.position.x - 50 , 3, fire_dragon1.position.z + 50);
	scene.add( lights_dragon1 );
	lights.push( lights_dragon1 );

	//light for  dragon2
	var lights_dragon2 = new THREE.PointLight( 0xffffff, 0, 100, 1);
	lights_dragon2.position.set(  fire_dragon2.position.x + 50 , 3, fire_dragon2.position.z + 50);
	scene.add( lights_dragon2 );
	lights.push( lights_dragon2 );


	// add both dragon to the fence left and right
	fenceFrontLeft.add(dragon1)
	fenceFrontRight.add(dragon2)



	//creation and initialization of caslte of park
    //creation and initialization of big tower1 and tower 2 (called cylinder_castle 1 and cylinder_castle2)
	var geometry = new THREE.CylinderBufferGeometry( 3, 3, 15, 32 );
	var material = new THREE.MeshPhongMaterial( {map: texture_tower_Castle} );
	var cylinder_castle1 = new THREE.Mesh( geometry, material );

	cylinder_castle1.receiveShadow = true;
	cylinder_castle1.castShadow = true;
	
	var cylinder_castle2 = new THREE.Mesh( geometry, material );
	
	cylinder_castle2.receiveShadow = true;
	cylinder_castle2.castShadow = true;
	
	cylinder_castle1.position.x +=  foregroundParkXSize / 5 
	cylinder_castle2.position.x -=  foregroundParkXSize / 5 

	//creation and initialization of cone roofs for big tower 1 and 2
	var geometry = new THREE.ConeGeometry( 3,7, 32 );
	var material = new THREE.MeshPhongMaterial( {map:roofTicketOfficeTexture} );
	var cone_castle1 = new THREE.Mesh( geometry, material );

	cone_castle1.receiveShadow = true;
	cone_castle1.castShadow = true;
	
	var cone_castle2 = new THREE.Mesh( geometry, material );
	
	cone_castle2.receiveShadow = true;
	cone_castle2.castShadow = true;
	
	cone_castle1.position.y += 10
	cone_castle2.position.y += 10

	cylinder_castle1.add( cone_castle1 );  //add cone roof 1 in to the tower 1 
	cylinder_castle2.add( cone_castle2 );  //add cone roof 2 in to the tower 2

	//creation and initialization of short tower1 and tower 2 (called cylinder_castle11 and cylinder_castle22)
	var geometry = new THREE.CylinderBufferGeometry( 2, 2, 13, 32 );
	var material = new THREE.MeshPhongMaterial( {map: texture_tower_Castle} );
	var cylinder_castle11 = new THREE.Mesh( geometry, material );

	cylinder_castle11.receiveShadow = true;
	cylinder_castle11.castShadow = true;
	
	var cylinder_castle22 = new THREE.Mesh( geometry, material );
	
	cylinder_castle22.receiveShadow = true;
	cylinder_castle22.castShadow = true;
	
	cylinder_castle11.position.x =  5 ;
	cylinder_castle22.position.x = -5 ;

	//creation and initialization of cone roofs for short tower 1 and 2
	var geometry = new THREE.ConeGeometry( 2 ,5, 32 );
	var material = new THREE.MeshPhongMaterial( {map:roofTicketOfficeTexture} );
	var cone_castle11 = new THREE.Mesh( geometry, material );

	cone_castle11.receiveShadow = true;
	cone_castle11.castShadow = true;
	
	var cone_castle22 = new THREE.Mesh( geometry, material );
	
	cone_castle22.receiveShadow = true;
	cone_castle22.castShadow = true;
	
	cone_castle11.position.y += 8
	cone_castle22.position.y += 8

	cylinder_castle11.add( cone_castle11 );  //add cone roof 1 in to the tower 1 
	cylinder_castle22.add( cone_castle22 );  //add cone roof 2 in to the tower 2


	cylinder_castle1.add( cylinder_castle11 );  //add short tower 1 to the big tower 1
	cylinder_castle2.add( cylinder_castle22 );  //add short tower 2 to the big tower 2
	fenceFrontLeft.add( cylinder_castle1 );  //add tower 1 of castle 1 to the left fence
	fenceFrontRight.add( cylinder_castle2 ); //add tower 2 of castle 2 to the right fence

	var geometry = new THREE.CylinderBufferGeometry(0, 2, 12, 4, 1);
	var material = new THREE.MeshPhongMaterial({map: meadow_texture , flatShading: true });

	// the thees appear except in the park
			for (var i = 0; i < 1500; i ++) {
				var tree = new THREE.Mesh(geometry, material);
				
				tree.receiveShadow = true;
				tree.castShadow = true;
				
				tree.position.y = 6;

				do {
					tree.position.x = Math.random() * 1600 - 800;
					tree.position.z = Math.random() * 1600 - 800;
					
				} while (tree.position.x > -(sizeParkX / 2) - 40 && tree.position.x < (sizeParkX / 2) + 40 && tree.position.z > -(sizeParkZ / 2) - 20 && tree.position.z < 210 );
				tree.updateMatrix();
				tree.matrixAutoUpdate = false;
				foreground_playground_group.add(tree);
			}


	scene.add(foreground_playground_group)  //add foreground of aprk to the scene

			
			
	
		