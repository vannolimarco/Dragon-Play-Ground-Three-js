/* --- TICKET OFFICE ---*/

	// Size Ticket Office
	var ticketOfficeXSize = 3;
	var ticketOfficeYSize = 3;
	var ticketOfficeZSize = 5;

	// Position Ticket Office
	var ticketOfficeLeftXPosition = - sizeGate/10 - ticketOfficeXSize / 2;
	var ticketOfficeRightXPosition = sizeGate/10 + ticketOfficeXSize / 2;
	var ticketOfficeYPosition = ticketOfficeYSize / 2;
	var ticketOfficeZPosition = foregroundParkZSize / 2 - fenceFrontLeftZSize - ticketOfficeZSize / 2 +5;
	
	var ticketOfficeGeometry = new THREE.BoxGeometry(ticketOfficeXSize, ticketOfficeYSize, ticketOfficeZSize);

	
	var ticketOfficeMaterial = new THREE.MeshPhongMaterial({ map: ticketOfficeTexture });
	
	// Ticket Office Left
		var ticketOfficeLeft = new THREE.Mesh(ticketOfficeGeometry, ticketOfficeMaterial);
	
		ticketOfficeLeft.receiveShadow = true;
		ticketOfficeLeft.castShadow = true;

		ticketOfficeLeft.position.x = ticketOfficeLeftXPosition;
		ticketOfficeLeft.position.y = ticketOfficeYPosition;
		ticketOfficeLeft.position.z = ticketOfficeZPosition;

		scene.add(ticketOfficeLeft);

	// Ticket Office Right
		var ticketOfficeRight = new THREE.Mesh(ticketOfficeGeometry, ticketOfficeMaterial);
	
		ticketOfficeRight.receiveShadow = true;
		ticketOfficeRight.castShadow = true;

		ticketOfficeRight.position.x = ticketOfficeRightXPosition;
		ticketOfficeRight.position.y = ticketOfficeYPosition;
		ticketOfficeRight.position.z = ticketOfficeZPosition;

		scene.add(ticketOfficeRight);

/* --- Windows --- */
	
	// Size Windows
	var windowsXSize = 0.01;
	var windowsYSize = ticketOfficeYSize / 2;
	var windowsZSize = ticketOfficeYSize / 2;

	// Position Windows
	var windowsLeftXPosition = ticketOfficeXSize / 2;
	var windowsRightXPosition = -ticketOfficeXSize / 2 ;
	var windowsYPosition = ticketOfficeYSize / (2 * 3);
	var windows1ZPosition = (ticketOfficeZSize - 0.1) / 4;
	var windows2ZPosition = -(ticketOfficeZSize - 0.1) / 4;

	var windowsGeometry = new THREE.BoxGeometry(windowsXSize, windowsYSize, windowsZSize);

	
	var windowsMaterial = new THREE.MeshPhongMaterial({ map: windowsTexture });			

	// Windows Left 1
		var windowsLeft1 = new THREE.Mesh(windowsGeometry, windowsMaterial);
	
		windowsLeft1.receiveShadow = true;
		windowsLeft1.castShadow = true;

		windowsLeft1.position.x = windowsLeftXPosition;
		windowsLeft1.position.y = windowsYPosition;
		windowsLeft1.position.z = windows1ZPosition;

		ticketOfficeLeft.add(windowsLeft1);
		
	// Windows Left 2
		var windowsLeft2 = new THREE.Mesh(windowsGeometry, windowsMaterial);
	
		windowsLeft2.receiveShadow = true;
		windowsLeft2.castShadow = true;

		windowsLeft2.position.x = windowsLeftXPosition;
		windowsLeft2.position.y = windowsYPosition;
		windowsLeft2.position.z = windows2ZPosition;

		ticketOfficeLeft.add(windowsLeft2);
		
	// Windows Right 1
		var windowsRight1 = new THREE.Mesh(windowsGeometry, windowsMaterial);
	
		windowsRight1.receiveShadow = true;
		windowsRight1.castShadow = true;

		windowsRight1.position.x = windowsRightXPosition;
		windowsRight1.position.y = windowsYPosition;
		windowsRight1.position.z = windows1ZPosition;

		ticketOfficeRight.add(windowsRight1);
		
	// Windows Right 2
		var windowsRight2 = new THREE.Mesh(windowsGeometry, windowsMaterial);
	
		windowsRight2.receiveShadow = true;
		windowsRight2.castShadow = true;

		windowsRight2.position.x = windowsRightXPosition;
		windowsRight2.position.y = windowsYPosition;
		windowsRight2.position.z = windows2ZPosition;

		ticketOfficeRight.add(windowsRight2);
	
/* --- Roof --- */
	var size = ticketOfficeXSize + 0.8;
	var height = ticketOfficeZSize + 0.8; 

	// vertices of the triangle 
	var A = new THREE.Vector2(0, 0);
	var B = new THREE.Vector2(0, size);
	var C = new THREE.Vector2(1, size / 2);

					 
	var roofTicketOfficeGeometry = new PrismGeometry([A, B, C], height); 

	var roofTicketOfficeMaterial = new THREE.MeshPhongMaterial({ map: roofTicketOfficeTexture });

	// Ticket Office Roof Left
		var ticketOfficeRoofLeft = new THREE.Mesh(roofTicketOfficeGeometry, roofTicketOfficeMaterial);
	
		ticketOfficeRoofLeft.receiveShadow = true;
		ticketOfficeRoofLeft.castShadow = true;
		
		ticketOfficeRoofLeft.rotation.z = Math.PI / 2;

		ticketOfficeRoofLeft.position.x = size / 2;
		ticketOfficeRoofLeft.position.y = ticketOfficeYPosition;
		ticketOfficeRoofLeft.position.z = -height / 2;
		
		ticketOfficeLeft.add(ticketOfficeRoofLeft);
		
	// Ticket Office Roof Right
		var ticketOfficeRoofRight = new THREE.Mesh(roofTicketOfficeGeometry, roofTicketOfficeMaterial);
	
		ticketOfficeRoofRight.receiveShadow = true;
		ticketOfficeRoofRight.castShadow = true;
		
		ticketOfficeRoofRight.rotation.z = Math.PI / 2;

		ticketOfficeRoofRight.position.x = size / 2;
		ticketOfficeRoofRight.position.y = ticketOfficeYPosition;
		ticketOfficeRoofRight.position.z = -height / 2;
		
		ticketOfficeRight.add(ticketOfficeRoofRight);


	