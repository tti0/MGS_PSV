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

var schoolMap = L.map('newMapDiv').setView([53.44846, -2.21140], 18);
var schoolMapBounds = L.latLngBounds(L.latLng(53.44969, -2.21645), L.latLng(53.44681, -2.20732));
L.tileLayer('img/map_tiles/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    minZoom: 17, // limit user scrolling
    maxZoom: 19,
    bounds: schoolMapBounds // don't load more map than needed
}).addTo(schoolMap);
schoolMap.setMaxBounds(schoolMapBounds); // don't let the user see more map than needed

// <pins on map>
var pin_sports_hall = L.marker([53.44880, -2.21423]).addTo(schoolMap);
pin_sports_hall.bindPopup('<a onclick="clickHandlerMap(&quot;sports_hall&quot;)"><b>Sports Hall</b></a>');
var pin_playing_fields = L.marker([53.44864, -2.21375]).addTo(schoolMap);
pin_playing_fields.bindPopup('<a onclick="clickHandlerMap(&quot;playing_fields&quot;)"><b>Playing Fields</b></a>');
var pin_rectory = L.marker([53.44925, -2.21364]).addTo(schoolMap);
pin_rectory.bindPopup('<a onclick="clickHandlerMap(&quot;rectory&quot;)"><b>Rectory</b></a>');
var pin_pond = L.marker([53.44896, -2.21372]).addTo(schoolMap);
pin_pond.bindPopup('<a onclick="clickHandlerMap(&quot;pond&quot;)"><b>Pond</b></a>');
var pin_plessyington_classroom = L.marker([53.44909, -2.21326]).addTo(schoolMap);
pin_plessyington_classroom.bindPopup('<a onclick="clickHandlerMap(&quot;plessyington_classroom&quot;)"><b>Plessyington Lodge Classroom</b></a>');
var pin_plessyington_foyer = L.marker([53.44904, -2.21260]).addTo(schoolMap);
pin_plessyington_foyer.bindPopup('<a onclick="clickHandlerMap(&quot;plessyington_foyer&quot;)"><b>Plessyington Lodge Foyer</b></a>');
var pin_memorial_hall = L.marker([53.44907, -2.21101]).addTo(schoolMap);
pin_memorial_hall.bindPopup('<a onclick="clickHandlerMap(&quot;memorial_hall&quot;)"><b>Memorial Hall</b></a>');
var pin_exhibition_space = L.marker([53.44905, -2.21071]).addTo(schoolMap);
pin_exhibition_space.bindPopup('<a onclick="clickHandlerMap(&quot;exhibition_space&quot;)"><b>Exhibition Space</b></a>');
var pin_main_stairwell = L.marker([53.44898, -2.21056]).addTo(schoolMap);
pin_main_stairwell.bindPopup('<a onclick="clickHandlerMap(&quot;main_stairwell&quot;)"><b>Main Stairwell</b></a>');
var pin_theatre = L.marker([53.44899, -2.21025]).addTo(schoolMap);
pin_theatre.bindPopup('<a onclick="clickHandlerMap(&quot;theatre&quot;)"><b>Theatre</b></a>');
var pin_refectory = L.marker([53.44871, -2.20992]).addTo(schoolMap);
pin_refectory.bindPopup('<a onclick="clickHandlerMap(&quot;refectory&quot;)"><b>Refectory</b></a>');
var pin_multi_gym = L.marker([53.44846, -2.20948]).addTo(schoolMap);
pin_multi_gym.bindPopup('<a onclick="clickHandlerMap(&quot;multi_gym&quot;)"><b>Multi-gym</b></a>');
var pin_paton_library = L.marker([53.44848, -2.21082]).addTo(schoolMap);
pin_paton_library.bindPopup('<a onclick="clickHandlerMap(&quot;paton_library&quot;)"><b>Paton Library</b></a>');
var pin_garner_library = L.marker([53.44845, -2.21047]).addTo(schoolMap);
pin_garner_library.bindPopup('<a onclick="clickHandlerMap(&quot;garner_library&quot;)"><b>Garner Library</b></a>');
// </pins on map>
