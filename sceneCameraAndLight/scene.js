//----scene----//

//initialization of three scene
var scene = new THREE.Scene();

//color of sky for night
var color_night = 0x003153;

//color of sky for day
var color_day = 0xefffff;

//intensity of fog of scene
var intensity_fog = 750;

//set the background property of scene to the color of day (initialization)
scene.background = new THREE.Color(color_day);

//set teh fog property of scene
scene.fog = new THREE.Fog(0xffffff, 0, intensity_fog);

