function fileExists(dir, successCallback, errorCallback) {
    var xhttp = new XMLHttpRequest;

    /* Check the status code of the request */
    xhttp.onreadystatechange = function() {
        return (xhttp.status !== 404) ? successCallback : errorCallback;
    };

    /* Open and send the request */
    xhttp.open('head', dir, false);
    xhttp.send();
};

function extractUrlParams(){	
	var t = location.search.substring(1).split('&');
	var f = [];
	for (var i=0; i<t.length; i++){
		var x = t[ i ].split('=');
		f[x[0]]=x[1];
	}
	return f;
}


function urlExists(testUrl) {
    var http = jQuery.ajax({
        type:"HEAD", //Not get
        url: testUrl,
        async: false
    })
    return http.status!=404;
}

var url_images="";
var url_website="https://cippil.fr/unlock/";

//////////////////////////////////////////////////////////////////////////////////
//Cards 


function hide_card(id){
	document.getElementById(id+'_card').remove()
}

function add_card(id){
	//remove card if exist 
	
	try {
		hide_card(id);
	}
	catch(error) {
		
	}
	
	
	if(urlExists(url_website+"/"+url_images+"/" + id + ".png")){
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