var screen = document.getElementById("screen");

$(document).ready(function(){
	
$("div.key").click(function() {
	
	var text = $(this).text();
	

	if(text!="OFF"){
			if(screen.innerText=="0"){
				screen.innerText=text;
			} else {
				screen.innerText+=text;}
	}
	
	calculate(text);
});

});


function calculate(text) {

	switch (text){
		
		case "AC" :
		screen.innerText="0";
		break;
		
		case "C" : 
			screen.innerText = screen.innerText.slice(0, -2);
			if(screen.innerText.length<=0){
				screen.innerText="0";
			}
		break;
		
		case "\xD7" :
			screen.innerText = screen.innerText.slice(0, -1); 
			screen.innerText+="*";
		break;
		
		case "\xF7" :
			screen.innerText = screen.innerText.slice(0, -1);
			screen.innerText+="/";
		break;
		
		case "\u2212" :
			screen.innerText = screen.innerText.slice(0, -1);
			screen.innerText+="-";
		break;
		
		case "\u005e" :
			screen.innerText = screen.innerText.slice(0, -1);
			screen.innerText+="**";
		break;
		
		case "=" :
		screen.innerText = screen.innerText.slice(0, -1);	
		var answer = eval(screen.innerText);
		if(screen.innerText!=0){
			screen.innerText = answer;
		}else{
			screen.innerText = "0";
		}
		break;
		
		case "OFF" :
			screen.innerText = "";
		break;
		
		default :
		break;
		
	}
}