
var day = true;
var light_points_night = 0.7;
//light
var intensity_day = 0.75;
var intensity_night = 0.1;

var lights = [];

document.getElementById("btn_day").onclick = function() {
	day = !day;
	day ?  document.getElementById("btn_day").innerText = "Change to Night" :  document.getElementById("btn_day").innerText = "Change to Day" ;
	day ?  document.getElementById("btn_day").className = "btn btn-dark" :  document.getElementById("btn_day").className = "btn btn-light" ;
	day ?  document.getElementById("navigation_first_person_info_text").style = "color: black" :  document.getElementById("navigation_first_person_info_text").style = "color: white" ;

	lights.forEach(function(element) {
		element.intensity = (day? 0 : light_points_night) 
	});

	if(day){
		light.intensity = intensity_day
		scene.background = new THREE.Color(color_day);
		scene.fog = new THREE.Fog(0xffffff, 0, 750);
	}else{
		scene.background = new THREE.Color(color_night);
		scene.fog = new THREE.Fog(0x000000, 0, 750);
		light.intensity = intensity_night;
	}

};

var ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

var light = new THREE.PointLight(0x777788, intensity_day);
light.position.set(0, 100, 400);
light.castShadow = true;
light.shadow.camera.near = 0.1;
light.shadow.camera.far = 100000;
light.shadow.mapSize.width = 4096;  
light.shadow.mapSize.height = 4096;

scene.add(light);




