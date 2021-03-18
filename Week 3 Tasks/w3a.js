/* Filename: [ name of this file…].js
   Target html: [ what is the html file(s) linked to this js…] 
   Purpose : [ a html file may have multiple js files. What does this one do?…]
   Author: [ your name…]
   Date written: [ …]
   Revisions:  [ your name, what, when…]
*/

// [ brief comment on what the function does…]
function init() {

	var username;
	username = prompt("Please enter your name: ");

	var num;
	num = prompt("Enter any number between 0 and 10: ");

	var square = num*num;


	var output;
	document.getElementById("msg").innerHTML = "You entered the name " + username;

	var numberout;
	document.getElementById("number").innerHTML = "The entered number is: " + num;

	var squareout;
	document.getElementById("square").innerHTML = "The square of " + num + " is " + square;


}

window.onload = init;  
