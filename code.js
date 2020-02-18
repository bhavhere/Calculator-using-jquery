$( "h1" ).css( "border", "3px solid black" );

var clicked = 0;
var var1 = 0;
var var2 = null;
var event = 0;
var count = 0;

function reload(){
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

if (event == 0) {
	document.getElementById("p1").innerHTML =  var1;	
	}
else if (event != 0) {
	document.getElementById("p1").innerHTML =  var2 + " " +  event + " " + var1;
}
	
}

function operator(){
	if (event == "+") {
		document.getElementById("p1").innerHTML = var1 + " +";
		var2 = var1;
		var1 = 0;
		count = 0;
	}

	else if (event == "-") {
		document.getElementById("p1").innerHTML = var1 + " -";
		var2 = var1;
		var1 = 0;
		count = 0;
	}
	else if (event == "*") {
		document.getElementById("p1").innerHTML = var1 + " *";
		var2 = var1;
		var1 = 0;
		count = 0;
	}
	else if (event == "/") {
		document.getElementById("p1").innerHTML = var1 + " /";
		var2 = var1;
		var1 = 0;
		count = 0;
	}
}

function equalto(){
var a;
var b;
var result;
	if (event == "+") {
		a = parseInt(var2);
		b = parseInt(var1);
		
		result = a + b;
		
		event = 0;
		var2 = 0;
		var1 = 0;
		count = 0;
		}

	else if (event == "-") {
		a = parseInt(var2);
		b = parseInt(var1);
		
		result = a - b;
		
		event = 0;
		var2 = 0;
		var1 = 0;
		count = 0;
			}
	else if (event == "*") {
		a = parseInt(var2);
		b = parseInt(var1);
		
		result = a * b;
		
		event = 0;
		var2 = 0;
		var1 = 0;
		count = 0;
		}
	else if (event == "/") {
		a = parseInt(var2);
		b = parseInt(var1);
		
		result = a / b;
		
		event = 0;
		var2 = 0;
		var1 = 0;
		count = 0;
		}
	document.getElementById("p1").innerHTML = result;

}

function clc(){
	document.getElementById("p1").innerHTML = "0";
}

$( "#one" ).click(function() {  clicked = "1"; reload() });

$( "#two" ).click(function() {  clicked = "2"; reload() });

$( "#three" ).click(function() {  clicked = "3"; reload() });

$( "#four" ).click(function() {  clicked = "4"; reload() });

$( "#five" ).click(function() {  clicked = "5"; reload() });

$( "#six" ).click(function() {  clicked = "6"; reload() });

$( "#seven" ).click(function() {  clicked = "7"; reload() });

$( "#eight" ).click(function() {  clicked = "8";  reload() });

$( "#nine" ).click(function() {  clicked = "9"; reload()});

$( "#zero" ).click(function() {  clicked = "0"; reload() });

$( "#add" ).click(function() {  event = "+";  operator() });

$( "#sub" ).click(function() {  event = "-";  operator() });

$( "#mul" ).click(function() {  event = "*";  operator() });

$( "#div" ).click(function() {  event = "/";  operator() });

$( "#equal" ).click(function() { equalto() });

$( "#resets" ).click(function() { clc() });

document.getElementById("p1").innerHTML = clicked;


