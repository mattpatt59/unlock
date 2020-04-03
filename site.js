var url_images="";

function select_aventure(aventure){
	//global url_images;
	url_images = aventure;
	
	if(aventure=="02_la_5_eme_avenue"){
		add_card("welcome1");
		add_card("welcome2");
		add_card("welcome3");
		add_card("welcome4");
	}
	if(aventure=="01_tuto"){
		add_card("welcome");
		add_card("welcome1");
	}
	
}


function add_card(id){
	//global url_images;
	var card="<table id=\""+id+"_card\" style=\"display:inline\">";
	card+="<tr><td><img src=\""+url_images+"/" + id + ".png\"></td></tr>";
	card+="<tr><td><a onclick=\"hide_card('"+id+"');\">Supprimer</a></td></tr></table>";
	
	document.getElementById('card_zone').innerHTML += card;
}

function hide_card(id){
	document.getElementById(id+'_card').remove()
}

function find_card(){
	add_card(document.getElementById('text_card').value)
}

$(document).on("keypress", "input", function(e){
	if(e.which == 13){
		find_card();
	}
});

function extractUrlParams(){	
	var t = location.search.substring(1).split('&');
	var f = [];
	for (var i=0; i<t.length; i++){
		var x = t[ i ].split('=');
		f[x[0]]=x[1];
	}
	return f;
}
