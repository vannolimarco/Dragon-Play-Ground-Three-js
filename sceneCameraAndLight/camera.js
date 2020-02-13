	/* --- CAMERA --- */

	var camera, scene, renderer;

	var aspectRatio =  window.innerWidth / window.innerHeight; //aspect ratio of camera
	var fov_camera = 75   //fov of camera
	var near_plane_camera = 0.1  //plane near of camera
	var far_plane_camera = 1000   //far plane of camera

	//parameter of Camera translaction
	var camera_translaction_z = 200;
	var camera_translaction_y = 2;
	var camera_translaction_x = 0;

	//parameter of Camera Rotation
	var camera_rotation_x = 0;
	var camera_rotation_y = 0;

	//type of view value from the value of radio button
	var viewType = 0;

	//bool variable to change view				
	var isChangedViewType = false;					

	// Initialization of the Camera from left column
	container = document.getElementById("leftColumn");
	
	aspectRatio =  container.offsetWidth / container.offsetHeight;

	//  Initialization of the Perspective Camera with the aspectRation 
	camera = new THREE.PerspectiveCamera(fov_camera, aspectRatio, near_plane_camera, far_plane_camera);
	camera.position.x = camera_translaction_x;  //set the camera position x with the value of translaction in direction x from slider (in this case take the initial value of translaction)
	camera.position.y = camera_translaction_y;  //set the camera position y with the value of translaction in direction y from slider (in this case take the initial value of translaction)
	camera.position.z = camera_translaction_z;  //set the camera position z with the value of translaction in direction z from slider (in this case take the initial value of translaction)
	
	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(container.offsetWidth, container.offsetHeight);
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.BasicShadowMap;
	
	container.appendChild(renderer.domElement);


	//-----sliders of translactiona nd rotation values----//
    // take values from slider for translaction (x,y,z) and rotation camera
	document.getElementById("slider_camera_translaction_x").value = camera_translaction_x;
	document.getElementById("span_camera_translaction_x").innerHTML = document.getElementById("slider_camera_translaction_x").valueAsNumber; 
		
	document.getElementById("slider_camera_translaction_x").oninput = function(event) {
		document.getElementById("span_camera_translaction_x").innerHTML =  this.valueAsNumber;
		camera_translaction_x = event.target.value;
	};
	
	document.getElementById("slider_camera_translaction_y").value = camera_translaction_y;
	document.getElementById("span_camera_translaction_y").innerHTML = document.getElementById("slider_camera_translaction_y").valueAsNumber; 
		
	document.getElementById("slider_camera_translaction_y").oninput = function(event) {
		document.getElementById("span_camera_translaction_y").innerHTML = this.valueAsNumber;
		camera_translaction_y = event.target.value;
	};
	
	document.getElementById("slider_camera_translaction_z").value = camera_translaction_z;
	document.getElementById("span_camera_translaction_z").innerHTML = document.getElementById("slider_camera_translaction_z").valueAsNumber; 
		
	document.getElementById("slider_camera_translaction_z").oninput = function(event) {
		document.getElementById("span_camera_translaction_z").innerHTML = this.valueAsNumber;
		camera_translaction_z = event.target.value;
	};
	
	document.getElementById("slider_camera_rotation_x").value = camera_rotation_x;
	document.getElementById("span_camera_rotation_x").innerHTML = document.getElementById("slider_camera_rotation_x").valueAsNumber; 
		
	document.getElementById("slider_camera_rotation_x").oninput = function(event) {
		document.getElementById("span_camera_rotation_x").innerHTML = roundTwo(this.valueAsNumber);
		camera_rotation_x = event.target.value;
	};
	
	document.getElementById("slider_camera_rotation_y").value = camera_rotation_y;
	document.getElementById("span_camera_rotation_y").innerHTML = document.getElementById("slider_camera_rotation_y").valueAsNumber; 
		
	document.getElementById("slider_camera_rotation_y").oninput = function(event) {
		document.getElementById("span_camera_rotation_y").innerHTML = roundTwo(this.valueAsNumber);
		camera_rotation_y = event.target.value;
    };
    
    document.getElementById("btn_here_first_person").onclick = function(){
		document.getElementById("alert").className = "invisible"
		
	};
	
	//----- FIRST PERSON COMAND-----//
	// To detect the press key on the keyboard and move the first person
	document.onkeydown = function(e) {
		switch (e.keyCode) {
			case 37:						// Left arrow
				document.getElementById("slider_camera_translaction_x").value = document.getElementById("slider_camera_translaction_x").valueAsNumber - 1;
				document.getElementById("span_camera_translaction_x").innerHTML = roundTwo(document.getElementById("slider_camera_translaction_x").valueAsNumber);
				camera_translaction_x = document.getElementById("slider_camera_translaction_x").value;				
				break;
			case 38:						// Up arrow
				document.getElementById("slider_camera_translaction_z").value = document.getElementById("slider_camera_translaction_z").valueAsNumber - 1;
				document.getElementById("span_camera_translaction_z").innerHTML = roundTwo(document.getElementById("slider_camera_translaction_z").valueAsNumber);
				camera_translaction_z = document.getElementById("slider_camera_translaction_z").value;				
				break;
			case 39:						// Right arrow
				document.getElementById("slider_camera_translaction_x").value = document.getElementById("slider_camera_translaction_x").valueAsNumber + 1;
				document.getElementById("span_camera_translaction_x").innerHTML = roundTwo(document.getElementById("slider_camera_translaction_x").valueAsNumber);
				camera_translaction_x = document.getElementById("slider_camera_translaction_x").value;				
				break;
			case 40:						// Down arrow
				document.getElementById("slider_camera_translaction_z").value = document.getElementById("slider_camera_translaction_z").valueAsNumber + 1;
				document.getElementById("span_camera_translaction_z").innerHTML = roundTwo(document.getElementById("slider_camera_translaction_z").valueAsNumber);
				camera_translaction_z = document.getElementById("slider_camera_translaction_z").value;				
				break;
			case 65: 						// a key
				document.getElementById("slider_camera_rotation_y").value = document.getElementById("slider_camera_rotation_y").valueAsNumber + Math.PI / 180;
				document.getElementById("span_camera_rotation_y").innerHTML = roundTwo(document.getElementById("slider_camera_rotation_y").valueAsNumber);
				camera_rotation_y = document.getElementById("slider_camera_rotation_y").value;
				break;
			case  87: 						// w key
				document.getElementById("slider_camera_rotation_x").value = document.getElementById("slider_camera_rotation_x").valueAsNumber + Math.PI / 180;
				document.getElementById("span_camera_rotation_x").innerHTML = roundTwo(document.getElementById("slider_camera_rotation_x").valueAsNumber);
				camera_rotation_x = document.getElementById("slider_camera_rotation_x").value;
				break;
			case  68: 						// d key
				document.getElementById("slider_camera_rotation_y").value = document.getElementById("slider_camera_rotation_y").valueAsNumber - Math.PI / 180;
				document.getElementById("span_camera_rotation_y").innerHTML = roundTwo(document.getElementById("slider_camera_rotation_y").valueAsNumber);
				camera_rotation_y = document.getElementById("slider_camera_rotation_y").value;
				break;
			case  83: 						// s key
				document.getElementById("slider_camera_rotation_x").value = document.getElementById("slider_camera_rotation_x").valueAsNumber - Math.PI / 180;
				document.getElementById("span_camera_rotation_x").innerHTML = roundTwo(document.getElementById("slider_camera_rotation_x").valueAsNumber);
				camera_rotation_x = document.getElementById("slider_camera_rotation_x").value;
				break;
		}
	};

	//function for approximate teh number around 2 digit
	function roundTwo(num) {
		return Math.round(num * 100) / 100;
	}

	//function to change the type of view, take as parameter the value from radion button and set the boolena variable isChangedViewType to true
	function changeTypeOfView(newValue){
		viewType = newValue;
		isChangedViewType = true;
	};
	
	//function to manage with swicth case the different view, 
	function manageViewCamera() {
		switch ("" + viewType) {
			case "0":                    //first person
				if (isChangedViewType) {    //if the view was changed
					if (camera.parent != null) camera.parent.remove(camera); //remove other view

	                    camera.rotation.z = 0;
						camera.position.y = 2;
						
						document.getElementById("alert").className = "visible"   //show the alert "play"
						document.getElementById("navigation_first_person_info").className = "visible"   //show the command information
					isChangedViewType = false;
				}
				firstPerson(); //call the function that allow to obtain the first person
				break;
			case "1":       //the panoramic view
				if (isChangedViewType) {   
					if (camera.parent != null) camera.parent.remove(camera);
					
					camera.rotation.x = 0;
					camera.rotation.y = 0;
					camera.rotation.z = 0;
					
					camera.position.x = 0;
					camera.position.y = 25;
					camera.position.z = 150;
					document.getElementById("alert").className = "invisible" // no show the alert "play"
					document.getElementById("navigation_first_person_info").className = "invisible" //no show the command information

					isChangedViewType = false;
				}
				panoramicView(); //call the function that allow to obtain the panoramic view
				break;
			case "2":    //the view on Frozen Ferris Wheel  
				if (isChangedViewType) {
					if (camera.parent != null) camera.parent.remove(camera);
					lastwindow.add(camera);  // add camera to the window of Frozen Ferris Wheel 
					document.getElementById("alert").className = "invisible"
					document.getElementById("navigation_first_person_info").className = "invisible"
					isChangedViewType = false;
				}
				frozenFerrisWheel();  //call the function that allow to obtain the frozen ferris wheel view
				break;
			case "3":   // the view Volcano Eruption
				if (isChangedViewType) {
					if (camera.parent != null) camera.parent.remove(camera);
					lastCar.add(camera);  //add camera to car of volcano
					document.getElementById("alert").className = "invisible"
					document.getElementById("navigation_first_person_info").className = "invisible"
					isChangedViewType = false;
				}				
				volcanoEruption(); //call the function that allow to obtain the volcano view
				break;
			case "4":   //the view of Space Tower.
				if (isChangedViewType) {
					if (camera.parent != null) camera.parent.remove(camera);
					seat1.add(camera);  //add camera to the seat of Space tower  
					document.getElementById("alert").className = "invisible"
					document.getElementById("navigation_first_person_info").className = "invisible"
					isChangedViewType = false;
				}				
				spaceTower();  //call the function that allow to obtain the space tower view
				break;
			case "5":   //the view Escape from Atlantis
				if (isChangedViewType) {
					if (camera.parent != null) camera.parent.remove(camera);
					wagon1.add(camera);  //the add camera to the wagon of Escape from Atlantis
					document.getElementById("alert").className = "invisible"
					document.getElementById("navigation_first_person_info").className = "invisible"
					isChangedViewType = false;
				}				
				escapeFromAtlantis(); //call the function that allow to obtain the escape from atlantis view
				break;
			case "6":   //the view Duck Lake
				if (isChangedViewType) {
					if (camera.parent != null) camera.parent.remove(camera);
					lastDuck.add(camera);  //the add camera to the wagon of Duck Lake
					document.getElementById("alert").className = "invisible"
					document.getElementById("navigation_first_person_info").className = "invisible"
					isChangedViewType = false;
				}				
				duckLake(); //call the function that allow to obtain the Duck Lake view
				break;
		}
	};

	//the funciton that allow to pass on to the first person, the view is moved into the park woth value of translaction and rotation 
	function firstPerson() {
	
		camera.rotation.x = camera_rotation_x;
		camera.rotation.y = camera_rotation_y;

		camera.position.x = camera_translaction_x;
		camera.position.y = camera_translaction_y;
		camera.position.z = camera_translaction_z;
		
	}

	//the function that allow to rotate the camera itsef to make a global panoramic view
	function panoramicView(){
		
		if(camera.rotation.y == 0 && camera.position.z > 0)
			camera.position.z -= 2;
		else if(camera.rotation.y < 2 * Math.PI && camera.position.z == 0)
			camera.rotation.y += Math.PI / 120;
		else if(camera.rotation.y > 2 * Math.PI && camera.position.z < 150)
			camera.position.z += 2;
		else if(camera.rotation.y > 2 * Math.PI && camera.position.z == 150)
			camera.rotation.y = 0;
	} 

	//the funciton that will allow you to position the camera in the right orientation in frozen ferris attraction's window
	function frozenFerrisWheel() {
		camera.position.x = 0;
		camera.position.y = 0;
		camera.position.z = 0;
		
		camera.rotation.x = Math.PI / 2;
		camera.rotation.y = 0;
		camera.rotation.z = Math.PI;
	}
	
	//the function that allow you to position the camera in the right orientation in car of volcano
	function volcanoEruption() {
		camera.position.x = 0;
		camera.position.y = 0;
		camera.position.z = 0;
		
		camera.rotation.x = 0;
		camera.rotation.y = 0;
		camera.rotation.z = 0;
	}

	//the function that allow you to position the camera in the right orientation in seat of space tower
	function spaceTower() {
		camera.position.x = -seatRadius + 1;
		camera.position.y = 0;
		camera.position.z = 0;
		
		camera.rotation.x = -Math.PI / 2;
		camera.rotation.y = Math.PI / 2;
		camera.rotation.z = 0;
	}

	
	//the function that allow you to position the camera in the right orientation in wagon of escape from atlantis
	function escapeFromAtlantis() {
		camera.position.x = 0;
		camera.position.y = -wagonradiusBottom ;
		camera.position.z = -wagonheight/2;
		
		camera.rotation.x = Math.PI / 2;
		camera.rotation.y = 0;
		camera.rotation.z = Math.PI;
	}
	
	//the function that allow you to position the camera in the right orientation in Duck Lake
	function duckLake() {
		camera.position.x = 0;
		camera.position.y = 0.13;
		camera.position.z = 0.13;
		
		camera.rotation.x = 0;
		camera.rotation.y = Math.PI;
		camera.rotation.z = 0;
	}