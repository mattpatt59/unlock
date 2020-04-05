function extractUrlParams(){	
	var t = location.search.substring(1).split('&');
	var f = [];
	for (var i=0; i<t.length; i++){
		var x = t[ i ].split('=');
		f[x[0]]=x[1];
	}
	return f;
}


var url_images="";
var url_website="https://unlock.cippil.fr/";
var list_images=[]

//////////////////////////////////////////////////////////////////////////////////
//Cards 


function hide_card(id){
	document.getElementById(id+'_card').remove()
}

function add_card(id){
	id=id.toLowerCase()
	//remove card if exist 
	
	try {
		hide_card(id);
	}
	catch(error) {
		
	}
	
	
	if(list_images.includes(id)){
		var card="<table id=\"" + id + "_card\" style=\"display:inline\">";
		card+="<tr><td><img src=\"" + url_images + "/" + id + ".png\"></td></tr>";
		card+="<tr><td><a onclick=\"hide_card('" + id + "');\">Ranger</a></td></tr></table>";
		document.getElementById('card_zone').innerHTML += card;
	}
	else{
		alert("carte inconnue");
	}
	

}



function find_card(){
	add_card(document.getElementById('text_card').value)
}

$(document).on("keypress", "input", function(e){
	if(e.which == 13){
		find_card();
	}
});

////////////////////////////////////////////////////////////////////////////////////
//Aventure 


function select_aventure(aventure){
	//global url_images;
	url_images = aventure;
	if(aventure=="05_a_la_poursuite_de_cabrakan"){
		list_images=["application_demo","welcome1","welcome2","welcome3","6","10","12","15","18","20","24","26","30","35","38","43","46","54","59","60","75","85","95"];
		add_card("welcome1");
		add_card("welcome2");
		add_card("application_demo");
		add_card("welcome3");
	}
	if(aventure=="04_L_elite"){
		list_images=["application_demo","welcome1","welcome2","4","15","21","22","32","35","42","47","50","60","63","67","73","79","80","85","c","k","m"];
		add_card("welcome1");
		add_card("application_demo");
		add_card("welcome2");
	}
	if(aventure=="03_le_donjon_de_doo_arann"){
		
		list_images=["application_demo","18","21","22","24","29","31","39","43","46","48","50","60","64","68","73","78","82","84","88","92","94","welcome","welcome2","welcome3","welcome4","welcome5"];
		add_card("welcome");
		add_card("welcome2");
		//add_card("welcome3");
		//add_card("welcome4");
		add_card("application_demo");
		add_card("welcome5");
	}
	
	if(aventure=="02_la_5_eme_avenue"){
		
		list_images=["application_demo", "5","8","11","15","22","25","30","37","42","43","44","52","58","66","73","86","88","92","c","f","g","h","r","v","w","welcome1","welcome2","welcome3","welcome4"];
		add_card("welcome1");
		add_card("welcome2");
		add_card("welcome3");

		add_card("application_demo");
		add_card("welcome4");
	}
	if(aventure=="01_tuto"){
		list_images=["11","16","21","25","35","42","46","48","69","welcome","welcome1","application_tuto"];
		
		add_card("welcome");
		add_card("application_tuto");
		add_card("welcome1");
	}
	
	
}