/* Filename: [ name of this file…].js
   Target html: [ what is the html file(s) linked to this js…] 
   Purpose : [ a html file may have multiple js files. What does this one do?…]
   Author: [ your name…]
   Date written: [ …]
   Revisions:  [ your name, what, when…]
*/

// [ brief comment on what the function does…]
function init() {

	var wid;
	wid = prompt("What is the width of the room in metres?");

	var len;
	len = prompt("What is the length of the room in metres?");

	var rmSize = len * wid;

	var widthOut = document.getElementById("width").innerHTML = wid;
	var lengthOut = document.getElementById("length").innerHTML = len;
	var SizeOut = document.getElementById("size").innerHTML = rmSize; 

}

window.onload = init;  
