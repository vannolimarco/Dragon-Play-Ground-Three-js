    /* --- THE WELLCOME BILLBOARD --- */
    
    //the group for wellcome billboard
    var wellcome_billboard = new THREE.Group();

    //the creation and initialization of pillars for wellcome billboard
    var geometry = new THREE.CylinderGeometry(0.2, 0.2, 10, 32);
    var material = new THREE.MeshPhongMaterial({map:texture_escape_atlantide});

    var pillars1 = new THREE.Mesh(geometry, material);  //pillar 1 (left)
    var pillars2 = new THREE.Mesh(geometry, material);  //pillar 2 (right)
        
    //the pillar1 receive the shadow from light
	pillars1.receiveShadow = true;    
	pillars1.castShadow = true;
    
    //position of pillar 1
	pillars1.position.x = -10.1;
	pillars1.position.y = 2;
    pillars1.position.z = 190;

    //the pillar2 receive the shadow from light
    pillars2.receiveShadow = true;
	pillars2.castShadow = true;
    
    //position of pillar 2 
	pillars2.position.x = -4.9;
	pillars2.position.y = 2;
    pillars2.position.z = 190;

    //plane billboard
    var geometry = new THREE.PlaneGeometry(5, 4, 100);
    var material = new THREE.MeshPhongMaterial({map: texture_Billboard, depthWrite: true });
    var billboard = new THREE.Mesh(geometry, material);


    //the billboard position
    billboard.position.x = -7.5;
	billboard.position.y = 5;
    billboard.position.z = 190;


    wellcome_billboard.add(pillars1)  //add the pillar 1 (left) to the group of wellcome billboard
    wellcome_billboard.add(pillars2)  //add the pillar 2 (right) to the group of wellcome billboard
    wellcome_billboard.add(billboard) //add the billboard to the goup of wellcome billboard

    //the light point to illuminate the billboard during night
    var lights_wellcome_billboard = new THREE.PointLight( 0xffffff, 0, 20, 2 );
    lights_wellcome_billboard.position.set(  billboard.position.x , billboard.position.y + 2 , billboard.position.z + 2 );
    scene.add( lights_wellcome_billboard );
    lights.push( lights_wellcome_billboard );

    //add wellcome billboard to the scene
    scene.add(wellcome_billboard)