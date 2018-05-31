// load in dynamic elements as vars for JS
/// main divs
var div_map = document.getElementById("pg-map");
var div_pano = document.getElementById("pg-pano");
/// pano placeholder div
var div_panoplaceholder = document.getElementById("ps-loc");
/// back button
var btn_back = document.getElementById("goback");
/// location label
var txt_panolabel = document.getElementById("panolabel");

//event listeners for buttons
btn_back.addEventListener("click",clickHandlerBack,false);
btn_back.style.cursor = "pointer";

//create switch status var (0=map, 1=pano)
var switchStatus = 1; //set 1 for default, as code will switch to 0 on page load

//create nice location name var for user display
var niceName = "";

//create var to store location of photosphere
var whichSphere = "";

function clickHandlerMap(z){
	divChange();
	switch(z) {
		case "sports_hall":
			niceName = "Sports Hall";
			whichSphere = "img/spheres/sports_hall.jpg";
			break;
		case "playing_fields":
			niceName = "Playing Fields";
			whichSphere = "img/spheres/playing_fields.jpg";
			break;
		case "rectory":
			niceName = "Rectory";
			whichSphere = "img/spheres/rectory.jpg";
			break;
		case "pond":
			niceName = "Pond";
			whichSphere = "img/spheres/pond.jpg";
			break;
		case "plessyington_classroom":
			niceName = "Plessyington Lodge Classroom";
			whichSphere = "img/spheres/plessyington_classroom.jpg";
			break;
		case "plessyington_foyer":
			niceName = "Plessyington Lodge Foyer";
			whichSphere = "img/spheres/plessyington_foyer.jpg";
			break;
		case "memorial_hall":
			niceName = "Memorial Hall";
			whichSphere = "img/spheres/memorial_hall.jpg";
			break;
		case "exhibition_space":
			niceName = "Exhibition Space";
			whichSphere = "img/spheres/exhibition_space.jpg";
			break;
		case "main_stairwell":
			niceName = "Main Stairwell";
			whichSphere = "img/spheres/main_stairwell.jpg";
			break;
		case "theatre":
			niceName = "Theatre";
			whichSphere = "img/spheres/theatre.jpg";
			break;
		case "paton_library":
			niceName = "Paton Library";
			whichSphere = "img/spheres/paton_library.jpg";
			break;
		case "garner_library":
			niceName = "Garner Library";
			whichSphere = "img/spheres/garner_library.jpg";
			break;
		case "refectory":
			niceName = "Refectory";
			whichSphere = "img/spheres/refectory.jpg";
			break;
		case "multi_gym":
			niceName = "Multi-gym";
			whichSphere = "img/spheres/multi_gym.jpg";
			break;
	}
	txt_panolabel.innerHTML = niceName;
	loadPanorama();
}

function clickHandlerBack(){
	divChange();
	niceName = "";
	whichSphere = "";
}

function divChange(){
	if (switchStatus == 0) {
		switchStatus = 1;
		div_map.style.display = "none";
		div_pano.style.display = "block";
	} else {
		switchStatus = 0;
		div_map.style.display = "block";
		div_pano.style.display = "none";
	}
}

window.onload = function() {
	divChange();
	niceName = "";
	whichSphere = "";
};

function loadPanorama() {
	var PSV = new PhotoSphereViewer({
		time_anim: false,
		panorama: whichSphere,
		container: "ps-loc",
		autoload: false,
		navbar: true,
		navbar_style: {
			backgroundColor: "rgba(58, 67, 77, 0.7)"
		},
		size: {
			width: "100%",
			height: "500px"
		},
	});
	PSV.load();
}

var schoolMap = L.map('newMapDiv').setView([53.44846, -2.21140], 17);
var schoolMapBounds = L.latLngBounds(L.latLng(53.44969,-2.21645),L.latLng(53.44681,-2.20732));
L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
		minZoom: 17, // limit user scrolling
		maxZoom: 19,
		bounds: schoolMapBounds // don't load more than needed
}).addTo(schoolMap);
schoolMap.setMaxBounds(schoolMapBounds); // don't let the user see more than needed
var marker = L.marker([53.4486, -2.209761]).addTo(schoolMap);
