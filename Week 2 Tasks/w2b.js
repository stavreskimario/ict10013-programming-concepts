/* Filename: [ name of this file…].js
   Target html: [ what is the html file(s) linked to this js…] 
   Purpose : [ a html file may have multiple js files. What does this one do?…]
   Author: [ your name…]
   Date written: [ …]
   Revisions:  [ your name, what, when…]
*/

// [ brief comment on what the function does…]
function init() {

	function calcDouble(vNum) {

		return vNum * 2;
	}

	var anyNum;
	var doubleNum;
	anyNum = prompt("Please enter a number: ");
	anyNum = Number(anyNum);

	
	calcDouble(anyNum);
	doubleNum = calcDouble();

	document.write("Entered value is " + anyNum + ", its double value is " + doubleNum);

}



window.onload = init;  
