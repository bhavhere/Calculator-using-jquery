$( "h1" ).css( "border", "3px solid black" );

var clicked = 0;
var var1 = 0;
var var2 = null;
var event = 0;
var count = 0;
var result = 0;
var opcount = 0;
var preevent = 0;

function varInput(){
	var todisplay = clicked;

	if (clicked != 0 && count == 0) {
		var1 = clicked;	
		count = count +1;
		}
	else if (clicked != 0 && count != 0) {
		var1 = var1 + clicked;
		count = count +1;
	}

	else if (clicked == 0) {
		if (var1 == 0) {
			console.log("bekar zero");
		}

		if (var1 !=0) {
			var1 = var1*10;
			count =count+1;
			}
		} 
	else{
		console("error")
	}

	if (opcount !=0) {
		operations2(var1);
	}
	if (event == 0) {
		document.getElementById("p1").innerHTML =  var1;	
		}
	else if (event != 0) {
		document.getElementById("p1").innerHTML =  var2 + " " +  event + " " + var1;
	}
}

function display(){
		
	if (opcount ==0 ) {	
		if (result == 0) {
			if (event == "+") {
				document.getElementById("p1").innerHTML = var1 + " +";
				operations1(var1,event);
				var2 = var1;
				var1 = 0;
				count = 0;
				opcount = opcount + 1;
				preevent = "+";
				
			}

			else if (event == "-") {
				document.getElementById("p1").innerHTML = var2 + " -";
				operations1(var1,event);
				var2 = var1;
				var1 = 0;
				count = 0;
				opcount = opcount + 1;
				preevent = "-";
			}
			else if (event == "*") {
				document.getElementById("p1").innerHTML = var1 + " *";
				operations1(var1,event);
				var2 = var1;
				var1 = 0;
				count = 0;
				opcount = opcount + 1;
				preevent = "*";
			}
			else if (event == "/") {
				document.getElementById("p1").innerHTML = var1 + " /";
				operations1(var1,event);
				var2 = var1;
				var1 = 0;
				count = 0;
				opcount = opcount + 1;
				preevent = "/";
				}
			}

		else if (result != 0) {
			if (event == "+") {
				document.getElementById("p1").innerHTML = result + " +";
				operations1(result,event);
				var2 = result;
				result = 0;
				var1 = 0;
				count = 0;
				opcount = opcount + 1;
				preevent = "+";
			}

			else if (event == "-") {
				document.getElementById("p1").innerHTML = result + " -";
				operations1(result,event);
				var2 = result;
				result = 0
				var1 = 0;
				count = 0;
				opcount = opcount + 1;
				preevent = "-";
			}
			else if (event == "*") {
				document.getElementById("p1").innerHTML = result + " *";
				operations1(result,event);
				var2 = result;
				result = 0;
				var1 = 0;
				count = 0;
				opcount = opcount + 1;
				preevent = "*";
			}
			else if (event == "/") {
				document.getElementById("p1").innerHTML = result + " /";
				operations1(result,event);
				var2 = result;
				result = 0;
				var1 = 0;
				count = 0;
				opcount = opcount + 1;
				preevent = "/";
				}
			}

		}

	
	else if (opcount != 0) {
		var2 = var2 + " " +  preevent + " " + var1;	
		document.getElementById("p1").innerHTML = var2 + " " + event ;
		operations3(event);
		var1 = 0;
		count = 0;
		preevent = event ;
			
	}
}

var a;
var b;
var currentevent;
var currentresult =0;

function operations1(variable1,currevent){
	a = parseInt(variable1);
	currentevent = currevent;
	}

function operations3(currevent){
	currentevent = currevent;
	}


function operations2(variable2){
	var b = parseInt(variable2);

	if (currentevent == "+" && currentresult == 0) {
		currentresult = a + b;
		
	}
	else if (currentevent == "+" && currentresult!=0) {
		currentresult = currentresult + b;
	}

	if (currentevent == "-" && currentresult == 0) {
		currentresult = a - b;
	}
	else if (currentevent == "-" && currentresult!=0) {
		currentresult = currentresult - b;
	}

	if (currentevent == "*" && currentresult == 0) {
		currentresult = a * b;
	}
	else if (currentevent == "*" && currentresult!=0) {
		currentresult = currentresult * b;
	}

	if (currentevent == "/" && currentresult == 0) {
		currentresult = a / b;
	}
	else if (currentevent == "/" && currentresult!=0) {
		currentresult = currentresult / b;
	}



}		

function equalto(){
	document.getElementById("p1").innerHTML = currentresult;
	result = currentresult;
	currentresult = 0;
	event = 0;
	var2 = 0;
	var1 = 0;
	count = 0;
	opcount = 0;
	preevent = 0;
}

function clc(){
	a=0;
	b=0;
	result = 0;
	event = 0;
	var2 = 0;
	var1 = 0;
	count = 0;
	opcount = 0;
	preevent = 0;
	document.getElementById("p1").innerHTML = "0";
}

$( "#one" ).click(function() {  clicked = "1"; varInput() });

$( "#two" ).click(function() {  clicked = "2"; varInput() });

$( "#three" ).click(function() {  clicked = "3"; varInput() });

$( "#four" ).click(function() {  clicked = "4"; varInput() });

$( "#five" ).click(function() {  clicked = "5"; varInput() });

$( "#six" ).click(function() {  clicked = "6"; varInput() });

$( "#seven" ).click(function() {  clicked = "7"; varInput() });

$( "#eight" ).click(function() {  clicked = "8";  varInput() });

$( "#nine" ).click(function() {  clicked = "9"; varInput()});

$( "#zero" ).click(function() {  clicked = "0"; varInput() });

$( "#add" ).click(function() {  event = "+";  display() });

$( "#sub" ).click(function() {  event = "-";  display() });

$( "#mul" ).click(function() {  event = "*";  display() });

$( "#div" ).click(function() {  event = "/";  display() });

$( "#equal" ).click(function() { equalto() });

$( "#resets" ).click(function() { clc() });

document.getElementById("p1").innerHTML = clicked;