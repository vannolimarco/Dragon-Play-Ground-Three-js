	/* --- ESCAPE FROM ATLANTIS --- */
	
	//global ecsape group 
	var escape_from_atlantis_group = new THREE.Group();
	
	//group of dome pillar 1
	var dome_pillar1 =  new THREE.Group();

	//group of dome pillar 2
	var dome_pillar2 =  new THREE.Group();

	// Size base escape from Atlantis
	var escape_base_x = 6;
	var escape_base_y = 6;
	var escape_base_z = 15;

	//creation and initialization of base 1 and 2
	//Size base 1
	var base1_escape_x =  -5;
	var base1_escape_y = 2.5;
	var base1_escape_z = 5.48;

	var geometry = new THREE.BoxGeometry(escape_base_x,escape_base_y, escape_base_z);

	var material = new THREE.MeshLambertMaterial({map:texture_escape_atlantide_1,reflectivity:0.1});

	var escape_from_atlantic_base1 = new THREE.Mesh(geometry, material);  //base1
		
	escape_from_atlantic_base1.receiveShadow = true;
	escape_from_atlantic_base1.castShadow = true;

	escape_from_atlantic_base1.position.x = base1_escape_x;
	escape_from_atlantic_base1.position.y = base1_escape_y;
	escape_from_atlantic_base1.position.z = base1_escape_z;

	//Size base 2
	var base2_escape_x =  - 25;
	var base2_escape_y = 2.5;
	var base2_escape_z = 5.48;
	
	var geometry = new THREE.BoxGeometry(escape_base_x,escape_base_y, escape_base_z);
	
	var material = new THREE.MeshPhongMaterial({map:texture_escape_atlantide_1,reflectivity:0.1});
	
	var escape_from_atlantic_base2 = new THREE.Mesh(geometry, material);  //base2
		
	escape_from_atlantic_base2.receiveShadow = true;
	escape_from_atlantic_base2.castShadow = true;

	escape_from_atlantic_base2.position.x = base2_escape_x;
	escape_from_atlantic_base2.position.y = base2_escape_y;
	escape_from_atlantic_base2.position.z = base2_escape_z;


	//creation and initialization of slider of both bases
	var escape_slides_x = 6;
	var escape_slides_y = 5;
	var escape_slides_z = 14;

	// size slides 1
	var base1_slides_x =  base1_escape_x;
	var base1_slides_y = base1_escape_y/4;
	var base1_slides_z = base1_escape_z*3 + 2;
	// size slides 2
	var base2_slides_x =  base2_escape_x;
	var base2_slides_y = base2_escape_y/4;
	var base2_slides_z = base2_escape_z*3 + 2;
	var geometry = new THREE.BoxGeometry(escape_slides_x,escape_slides_y, escape_slides_z);

	const loader = new THREE.TextureLoader();
	var material = new THREE.MeshPhongMaterial({map:texture_escape_atlantide_1});
		
	var escape_from_atlantic_slides1 = new THREE.Mesh(geometry, material);
		
	escape_from_atlantic_slides1.receiveShadow = true;
	escape_from_atlantic_slides1.castShadow = true;
	
	var escape_from_atlantic_slides2 = new THREE.Mesh(geometry, material);
		
	escape_from_atlantic_slides2.receiveShadow = true;
	escape_from_atlantic_slides2.castShadow = true;

	escape_from_atlantic_slides1.position.x = base1_slides_x;
	escape_from_atlantic_slides1.position.y = base1_slides_y;
	escape_from_atlantic_slides1.position.z = base1_slides_z;
	escape_from_atlantic_slides1.rotation.x = -119           //inclination slider1
	escape_from_atlantic_slides2.position.x = base2_slides_x;
	escape_from_atlantic_slides2.position.y = base2_slides_y;
	escape_from_atlantic_slides2.position.z = base2_slides_z;
	escape_from_atlantic_slides2.rotation.x = -119           //inclination slider2


	//creation and initialization of whole water plane  of escape from atlantis
	var plane_x = 19;
	var plane_y = 20;
	var plane_z = 3;
	var geometry = new THREE.CircleGeometry(plane_x, plane_y, plane_z);

	var material = new THREE.MeshPhongMaterial({color: new THREE.Color("rgb(153, 235, 255)"),  map: texture, side: THREE.DoubleSide});

	var plane = new THREE.Mesh(geometry, material);
			
	plane.rotateX(- Math.PI / 2);
	plane.position.x = base1_slides_x*3;
	plane.position.y = base1_slides_y*1.2;
	plane.position.z = base1_slides_z;


	
	//creation and initialization of water plane of both bases for rides
	var plane_rides_x = 3;
	var plane_rides_y = 19;
	var plane_rides_z = 5;
	var geometry = new THREE.PlaneGeometry(plane_rides_x, plane_rides_y, plane_rides_z);
	var material = new THREE.MeshPhongMaterial({color: new THREE.Color("rgb(153, 235, 255)"),  map: texture, side: THREE.DoubleSide});

	var plane_rides_base1 = new THREE.Mesh(geometry, material);
	
	var plane_rides_base2 = new THREE.Mesh(geometry, material);
		
	plane_rides_base1.rotation.x =  Math.PI*2/3.22;
	plane_rides_base1.position.x = base1_slides_x;
	plane_rides_base1.position.y = base1_slides_y*3.2;
	plane_rides_base1.position.z = base1_slides_z*1.18;
	plane_rides_base2.rotation.x =  Math.PI*2/3.22;
	plane_rides_base2.position.x = base2_slides_x;
	plane_rides_base2.position.y = base2_slides_y*3.2;
	plane_rides_base2.position.z = base2_slides_z*1.18;


	//creation and initialization of water plane of both bases 
	//size water plane 
	var plane_base_x = 3;
	var plane_base_y = 13;
	var plane_base_z = 5;
	var geometry = new THREE.PlaneGeometry(plane_base_x, plane_base_y, plane_base_z);
	var material = new THREE.MeshPhongMaterial({color: new THREE.Color("rgb(153, 235, 255)"),  map: texture, side: THREE.DoubleSide});
	var plane_base1 = new THREE.Mesh(geometry, material);
			
	var plane_base2 = new THREE.Mesh(geometry, material);
			
	plane_base1.rotation.x =  Math.PI/2;
	plane_base1.position.y = escape_base_y/1.95
	plane_base1.position.z = escape_base_z/25
	plane_base2.rotation.x =  Math.PI/2;
	plane_base2.position.y = escape_base_y/1.95
	plane_base2.position.z = escape_base_z/25
	

	//creation and initialization of fence in back position of both bases 
	fence_back_size_plane__x = 10
	fence_back_size_plane_y = 3
	fence_back_size_plane_z = 16

	var geometry = new THREE.TorusBufferGeometry(fence_back_size_plane__x, fence_back_size_plane_y, fence_back_size_plane_z, 100,Math.PI);
	var material = new THREE.MeshPhongMaterial({map:texture_escape_atlantide_1});
	var fence_back = new THREE.Mesh(geometry, material);
		
	fence_back.receiveShadow = true;
	fence_back.castShadow = true;
	
	fence_back.rotateX(- Math.PI / 2);
	fence_back.position.x = base1_escape_x*3;
	fence_back.position.y = base1_escape_y;
	fence_back.position.z = base1_escape_z*2;


	//creation and initialization of fence for plane of both bases 
	fence_size_plane_x = 19
	fence_size_plane_y = 19
	fence_size_plane_z = 3

	var geometry = new THREE. CylinderGeometry(fence_size_plane_x, fence_size_plane_y, fence_size_plane_z,100,100,true);
	var material = new THREE.MeshLambertMaterial({map:texture_Escape_Fence});
	var fence_plane = new THREE.Mesh(geometry, material);
		
	fence_plane.receiveShadow = true;
	fence_plane.castShadow = true;
	
	geometry.parameters.openEnded =  true;
	fence_plane.position.x = base1_slides_x*3;
	fence_plane.position.y = base1_slides_y;
	fence_plane.position.z = base1_slides_z;
	



	//creation and initialization of pillars for dome of both bases 1 and 2 of escape from atlantis
    //creation and initialization of pillar left front for base1
	var geometry = new THREE.CylinderGeometry(0.5, 0.5, 10, 32);
	var material = new THREE.MeshPhongMaterial({map:texture_escape_atlantide});
	var cylinder_left_f_base1 = new THREE.Mesh(geometry, material);
		
	cylinder_left_f_base1.receiveShadow = true;
	cylinder_left_f_base1.castShadow = true;
	
	cylinder_left_f_base1.position.x = base1_escape_x-2;
	cylinder_left_f_base1.position.y = base1_escape_y+2;
	cylinder_left_f_base1.position.z = base1_escape_z;
	
	//creation and initialization of pillar left front for base1
	var geometry = new THREE.CylinderGeometry(0.5, 0.5, 10, 32);
	var material = new THREE.MeshPhongMaterial({map:texture_escape_atlantide});
	var cylinder_right_f_base1 = new THREE.Mesh(geometry, material);
		
	cylinder_right_f_base1.receiveShadow = true;
	cylinder_right_f_base1.castShadow = true;
	
	cylinder_right_f_base1.position.x = base1_escape_x+2;
	cylinder_right_f_base1.position.y = base1_escape_y+2;
	cylinder_right_f_base1.position.z = base1_escape_z;
	
	//creation and initialization of pillar left back for base1
	var geometry = new THREE.CylinderGeometry(0.5, 0.5, 10, 32);
	var material = new THREE.MeshPhongMaterial({map:texture_escape_atlantide});
	var cylinder_left_b_base1 = new THREE.Mesh(geometry, material);
		
	cylinder_left_b_base1.receiveShadow = true;
	cylinder_left_b_base1.castShadow = true;
	
	cylinder_left_b_base1.position.x = base1_escape_x-2;
	cylinder_left_b_base1.position.y = base1_escape_y+2;
	cylinder_left_b_base1.position.z = base1_escape_z/5;
	
	//creation and initialization of pillar right back for base1
	var geometry = new THREE.CylinderGeometry(0.5, 0.5, 10, 32);
	var material = new THREE.MeshPhongMaterial({map:texture_escape_atlantide});
	var cylinder_right_b_base1 = new THREE.Mesh(geometry, material);
		
	cylinder_right_b_base1.receiveShadow = true;
	cylinder_right_b_base1.castShadow = true;
	
	cylinder_right_b_base1.position.x = base1_escape_x+2;
	cylinder_right_b_base1.position.y = base1_escape_y+2;
	cylinder_right_b_base1.position.z = base1_escape_z/5;


	//creation and initialization of pillar left front for base2
	var geometry = new THREE.CylinderGeometry(0.5, 0.5, 10, 32);
	var material = new THREE.MeshPhongMaterial({map:texture_escape_atlantide});
	var cylinder_left_f_base2 = new THREE.Mesh(geometry, material);
		
	cylinder_left_f_base2.receiveShadow = true;
	cylinder_left_f_base2.castShadow = true;
	
	cylinder_left_f_base2.position.x = base2_escape_x-2;
	cylinder_left_f_base2.position.y = base2_escape_y+2;
	cylinder_left_f_base2.position.z = base2_escape_z;
	
	//creation and initialization of pillar right front for base2
	var geometry = new THREE.CylinderGeometry(0.5, 0.5, 10, 32);
	var material = new THREE.MeshPhongMaterial({map:texture_escape_atlantide});
	var cylinder_right_f_base2 = new THREE.Mesh(geometry, material);
		
	cylinder_right_f_base2.receiveShadow = true;
	cylinder_right_f_base2.castShadow = true;
	
	cylinder_right_f_base2.position.x = base2_escape_x+2;
	cylinder_right_f_base2.position.y = base2_escape_y+2;
	cylinder_right_f_base2.position.z = base2_escape_z;
	
	//creation and initialization of pillar left back for base2
	var geometry = new THREE.CylinderGeometry(0.5, 0.5, 10, 32);
	var material = new THREE.MeshPhongMaterial({map:texture_escape_atlantide});
	var cylinder_left_b_base2 = new THREE.Mesh(geometry, material);
		
	cylinder_left_b_base2.receiveShadow = true;
	cylinder_left_b_base2.castShadow = true;
	
	cylinder_left_b_base2.position.x = base2_escape_x-2;
	cylinder_left_b_base2.position.y = base2_escape_y+2;
	cylinder_left_b_base2.position.z = base2_escape_z/5;
	
	//creation and initialization of pillar right back for base2
	var geometry = new THREE.CylinderGeometry(0.5, 0.5, 10, 32);
	var material = new THREE.MeshPhongMaterial({map:texture_escape_atlantide});
	var cylinder_right_b_base2 = new THREE.Mesh(geometry, material);
		
	cylinder_right_b_base2.receiveShadow = true;
	cylinder_right_b_base2.castShadow = true;
	
	cylinder_right_b_base2.position.x = base2_escape_x+2;
	cylinder_right_b_base2.position.y = base2_escape_y+2;
	cylinder_right_b_base2.position.z = base2_escape_z/5;


	//creation and initialization of dome for both bases 1 and 2 of escape from atlantis
	//size of dome object
	var length = 4, width = 1;

	//initialization of shape parameter for dome object
	var shape = new THREE.Shape();
	shape.moveTo(0,0);
	shape.lineTo(0, width);
	shape.lineTo(length, width);
	shape.lineTo(length, 0);
	shape.lineTo(0, 0);

	var extrudeSettings = {
	steps: 2,
	depth: 4,
	bevelEnabled: true,
	bevelThickness: 1,
	bevelSize: 1,
	bevelOffset: 0,
	bevelSegments: 1
	};

	var geometry = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings);
	var material = new THREE.MeshPhongMaterial({map:texture_escape_atlantide});
	var mesh_1 = new THREE.Mesh(geometry, material) ;
		
	mesh_1.receiveShadow = true;
	mesh_1.castShadow = true;
	
	var mesh_2 = new THREE.Mesh(geometry, material) ;
		
	mesh_2.receiveShadow = true;
	mesh_2.castShadow = true;
	
	geometry.rotateX = 90
	mesh_1.position.x = base1_escape_x-2;
	mesh_1.position.y = base1_escape_y*4;
	mesh_1.position.z = base1_escape_z/3.5;
	mesh_2.position.x = base2_escape_x-2;
	mesh_2.position.y = base2_escape_y*4;
	mesh_2.position.z = base2_escape_z/3.5;


	//creation and initialization of red circle positioned above the dome
	//size red cicrle
	circle_size_x =1
	circle_size_y =32
	var geometry = new THREE.CircleGeometry(circle_size_x, circle_size_y);
	var material = new THREE.MeshPhongMaterial({ color: new THREE.Color("rgb(220,20,60)")});
	var circle_base_1 = new THREE.Mesh(geometry, material);
		
	circle_base_1.receiveShadow = true;
	circle_base_1.castShadow = true;
	
	var circle_base_2 = new THREE.Mesh(geometry, material);
		
	circle_base_2.receiveShadow = true;
	circle_base_2.castShadow = true;
	
	circle_base_1.position.x = base1_escape_x
	circle_base_1.position.y = base1_escape_y*5.2
	circle_base_1.position.z = base1_escape_z
	circle_base_2.position.x = base2_escape_x
	circle_base_2.position.y = base2_escape_y*5.2
	circle_base_2.position.z = base2_escape_z
   
	//creation and initialization of circle positioned above the dome
	//size circle
	torus_size_x = 1
	torus_size_y = 0.5
	torus_size_z = 9

	var geometry = new THREE.TorusBufferGeometry(torus_size_x, torus_size_y, torus_size_z, 100);
	var material = new THREE.MeshPhongMaterial({map:texture_escape_atlantide});
	var torus_1 = new THREE.Mesh(geometry, material);
		
	torus_1.receiveShadow = true;
	torus_1.castShadow = true;
	
	var torus_2 = new THREE.Mesh(geometry, material);
		
	torus_2.receiveShadow = true;
	torus_2.castShadow = true;
	
	torus_1.position.x = base1_escape_x
	torus_1.position.y = base1_escape_y*5.2
	torus_1.position.z = base1_escape_z
	torus_2.position.x = base2_escape_x
	torus_2.position.y = base2_escape_y*5.2
	torus_2.position.z = base2_escape_z


	//creation and initialization of body of both wagons 1 and 2
	//parameters
	var wagonradiusTop = 1.4;
	var wagonradiusBottom = 1.4;
	var wagonheight =5;
	var wagonradialSegments = 32;
	var wagonheightSegments = 1;
	var wagonopenEnded = false;
	var wagonthetaStart=0;
	var wagonthetaLength = Math.PI*2;;

	var wagon1_positionx = base1_slides_x;
	var wagon2_positionx = base2_slides_x;
	var wagon_positiony = base1_slides_y;
	var wagon_positionz= base1_slides_z;
	var wagon_depth = 3
	var wagon_height = 10.5
	var wagon_rotationx =  (Math.PI/2);
	
	var wagonDoorGeometry = new THREE.CylinderGeometry(wagonradiusTop, wagonradiusBottom, wagonheight,wagonradialSegments,wagonheightSegments,wagonopenEnded,wagonthetaStart,wagonthetaLength);
	var wagonDoorMaterial = new THREE.MeshLambertMaterial({map:texture_Wagon});

	var wagon1 = new THREE.Mesh(wagonDoorGeometry, wagonDoorMaterial);
		
	wagon1.receiveShadow = true;
	wagon1.castShadow = true;
	
	var wagon2 = new THREE.Mesh(wagonDoorGeometry, wagonDoorMaterial);
		
	wagon2.receiveShadow = true;
	wagon2.castShadow = true;
  
	wagon1.rotation.x = wagon_rotationx;

	wagon1.position.x = wagon1_positionx;
	wagon1.position.y = wagon_positiony*wagon_height;
	wagon1.position.z = wagon_positionz/wagon_depth;
  
	wagon2.rotation.x = wagon_rotationx;
	wagon2.position.x = wagon2_positionx;
	wagon2.position.y = wagon_positiony*wagon_height;
	wagon2.position.z = wagon_positionz/wagon_depth;
 
	//creation and initialization of cone for wagon  1 and 2 with texture
	var geometry = new THREE.ConeBufferGeometry( 1.5, 1.5, 32 );
	var material = new THREE.MeshPhongMaterial( {map: texture_escape_atlantide_1} );
	var cone_wagon1 = new THREE.Mesh( geometry, material );
		
	cone_wagon1.receiveShadow = true;
	cone_wagon1.castShadow = true;
	
	var cone_wagon2 = new THREE.Mesh( geometry, material );
		
	cone_wagon2.receiveShadow = true;
	cone_wagon2.castShadow = true;

	cone_wagon1.position.y = wagon_positiony+2.5;
	cone_wagon2.position.y = wagon_positiony+2.5;
	

	//Animate function that has the purpose of move wagons in to the escape from atlantis structure

	function animateEscape_from_Atlantis(){
		if(wagon1.position.z > 15){         //if the wagon is in depth position greater than 15 than the wagon start
			                                // to tilt in the direction of slider
			if(wagon1.position.z <= 19){    //if the depth position of wagon is lower or equal to 19 then the wagon start to tilt slowly
				wagon_rotationx += 0.004
				wagon_depth -= 0.003
				wagon_height -= 0.040
				wagon1.rotation.x = wagon_rotationx;
				wagon1.position.x = wagon1_positionx;
				wagon1.position.y = wagon_positiony*wagon_height;
				wagon1.position.z = wagon_positionz/wagon_depth;
				wagon2.rotation.x = wagon_rotationx;
				wagon2.position.x = wagon2_positionx;
				wagon2.position.y = wagon_positiony*wagon_height;
				wagon2.position.z = wagon_positionz/wagon_depth;
			
			}else{      //otherwise the wagon start to assume teh position of slider
				wagon_rotationx = -((Math.PI/2)*2.75)
				wagon_depth -= 0.003
				wagon_height -= 0.045
				wagon1.rotation.x = wagon_rotationx;
				wagon1.position.x = wagon1_positionx;
				wagon1.position.y = wagon_positiony*wagon_height;
				wagon1.position.z = wagon_positionz/wagon_depth;
				wagon2.rotation.x = wagon_rotationx;
				wagon2.position.x = wagon2_positionx;
				wagon2.position.y = wagon_positiony*wagon_height;
				wagon2.position.z = wagon_positionz/wagon_depth;
			
			}
			if(wagon1.position.z  > 29){   //if the wagon is in depth position greater than 29 than the wagon start
				                           //return in initial postion
				wagon_rotationx =  (Math.PI/2);
				wagon_depth = 3
				wagon_height = 10
				wagon1.rotation.x = wagon_rotationx;
				wagon1.position.x = wagon1_positionx;
				wagon1.position.y = wagon_positiony*wagon_height;
				wagon1.position.z = wagon_positionz/wagon_depth;
				wagon2.rotation.x = wagon_rotationx;
				wagon2.position.x = wagon2_positionx;
				wagon2.position.y = wagon_positiony*wagon_height;
				wagon2.position.z = wagon_positionz/wagon_depth;
			}
		} else {      //otherwise the wagons slide 
			wagon_depth -= 0.01
			wagon1.position.z = wagon_positionz/wagon_depth;
			wagon2.position.z = wagon_positionz/wagon_depth;
		}
	}
	

	//add cones of wagon's structure for 1 and 2 wagon
	wagon1.add(cone_wagon1)
	wagon2.add(cone_wagon2)

	//add the both plane of water for both bases 
	escape_from_atlantic_base1.add(plane_base1)
	escape_from_atlantic_base2.add(plane_base2)
	
	
	//add the bases 1 and 2 for escape form atlantis
	escape_from_atlantis_group.add(escape_from_atlantic_base1);
	escape_from_atlantis_group.add(escape_from_atlantic_base2);

	//add slides 1 and 2 for both bases of escape from atlantis
	escape_from_atlantis_group.add(escape_from_atlantic_slides1);
	escape_from_atlantis_group.add(escape_from_atlantic_slides2);

	//add plane of water in to the group escape from atlantis
	escape_from_atlantis_group.add(plane)

	//add plane for rides water in to the group escape from atlantis
	escape_from_atlantis_group.add(plane_rides_base1)
	escape_from_atlantis_group.add(plane_rides_base2)

	//add the back and wraparound fence plane in to the escape 
	escape_from_atlantis_group.add(fence_back)
	escape_from_atlantis_group.add(fence_plane)

	//add all elements of dome pillar in to the corresponding dome pillars (1,2)
	dome_pillar1.add(cylinder_left_f_base1)
	dome_pillar1.add(cylinder_right_f_base1)
	dome_pillar1.add(cylinder_left_b_base1)
	dome_pillar1.add(cylinder_right_b_base1)
	dome_pillar2.add(cylinder_left_f_base2)
	dome_pillar2.add(cylinder_right_f_base2)
	dome_pillar2.add(cylinder_left_b_base2)
	dome_pillar2.add(cylinder_right_b_base2)
	dome_pillar1.add(mesh_1)
	dome_pillar2.add(mesh_2)
	dome_pillar1.add(circle_base_1)
	dome_pillar2.add(circle_base_2)
	dome_pillar1.add(torus_1)
	dome_pillar2.add(torus_2)

	//balance position in x direction of dome pillars 1 and 2
	dome_pillar1.position.x = base1_escape_x +10
	dome_pillar2.position.x = -base2_escape_x


	//add the childs of escace base in to the group escape form atlantis
	escape_from_atlantic_base1.add(dome_pillar1)
	escape_from_atlantic_base2.add(dome_pillar2)

	//add wagons in to the escape 
	escape_from_atlantis_group.add(wagon1)
	escape_from_atlantis_group.add(wagon2)

	//size to balance  the size of escape from atlantis with difference size of park
	escape_from_atlantis_group.position.x = -foregroundParkXSize / 2 + circle_size_y + 2;
	escape_from_atlantis_group.position.z = -20;//foregroundParkZSize / 15 - fenceFrontLeftZSize - escape_base_z / 15;

	//add all escape from atlantis into scene
	scene.add(escape_from_atlantis_group);
	


	

	



 

	