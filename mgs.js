// load in dynamic elements as vars for JS
/// map hotspots
var btn_m_sports = document.getElementById("m-sports");  //0
var btn_m_fields = document.getElementById("m-fields"); //1
var btn_m_rectory = document.getElementById("m-rectory"); //2
var btn_m_pond = document.getElementById("m-pond"); //3
var btn_m_plclass = document.getElementById("m-plclass"); //4
var btn_m_plfoyer = document.getElementById("m-plfoyer"); //5
var btn_m_memhall = document.getElementById("m-memhall"); //6
var btn_m_exhib = document.getElementById("m-exhib"); //7
var btn_m_mstw = document.getElementById("m-mstw"); //8
var btn_m_theatre = document.getElementById("m-theatre"); //9
var btn_m_paton = document.getElementById("m-paton"); //10
var btn_m_garner = document.getElementById("m-garner"); //11
var btn_m_refectory = document.getElementById("m-refectory"); //12
var btn_m_multigym = document.getElementById("m-multigym"); //13
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
		case 0:
			niceName = "Sports Hall";
			whichSphere = "spheres/sports_hall.jpg";
			break;
		case 1:
			niceName = "Playing Fields";
			whichSphere = "spheres/playing_fields.jpg";
			break;
		case 2:
			niceName = "Rectory";
			whichSphere = "spheres/rectory.jpg";
			break;
		case 3:
			niceName = "Pond";
			whichSphere = "spheres/pond.jpg";
			break;
		case 4:
			niceName = "Plessyington Lodge Classroom";
			whichSphere = "spheres/plessyington_classroom.jpg";
			break;
		case 5:
			niceName = "Plessyington Lodge Foyer";
			whichSphere = "spheres/plessyington_foyer.jpg";
			break;
		case 6:
			niceName = "Memorial Hall";
			whichSphere = "spheres/memorial_hall.jpg";
			break;
		case 7:
			niceName = "Exhibition Space";
			whichSphere = "spheres/exhibition_space.jpg";
			break;
		case 8:
			niceName = "Main Stairwell";
			whichSphere = "spheres/main_stairwell.jpg";
			break;
		case 9:
			niceName = "Theatre";
			whichSphere = "spheres/theatre.jpg";
			break;
		case 10:
			niceName = "Paton Library";
			whichSphere = "spheres/paton_library.jpg";
			break;
		case 11:
			niceName = "Garner Library";
			whichSphere = "spheres/garner_library.jpg";
			break;
		case 12:
			niceName = "Refectory";
			whichSphere = "spheres/refectory.jpg";
			break;
		case 13:
			niceName = "Multi-gym";
			whichSphere = "spheres/multi_gym.jpg";
			break;
	}
	alert(niceName + " : " + whichSphere);
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
		div_map.style.display = 'none';
		div_pano.style.display = 'block';
	} else {
		switchStatus = 0;
		div_map.style.display = 'block';
		div_pano.style.display = 'none';
	}
}

window.onload = function() {
	divChange();
	niceName = "";
	whichSphere = "";
	//document.getElementById('go').addEventListener('click', loadPredefinedPanorama, false);
};

// Load the predefined panorama
function loadPanorama() {
	alert("Pano triggered");
	var loader = document.createElement('div');
	loader.className = 'loader';
	alert("loaded loader");
	var PSV = new PhotoSphereViewer({	
		// Deactivate the animation
		time_anim: false,
		panorama: 	"spheres/pond.jpg", //whichSphere,
		container: div_panoplaceholder,
		navbar: true,
		navbar_style: {
			backgroundColor: 'rgba(58, 67, 77, 0.7)'
		},
		loading_html: loader,
	});
	alert("Vars set");
	alert("Done");
}