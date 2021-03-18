/* Filename: [w5C1].js
   Target html: [ w5C1.html]
   Purpose : [ This js file checks if postcode is valid]
   Author: Mario Stavreski
   Date written: 16/04/2020
   Revisions:  v.10
*/

function validatePCode (postcode) {
	var valid = true;
		if (postcode.length !=4) {
		valid = false;
		}
	else {
		if (isNaN(postcode)){
		valid = false;
		}
	}
	return valid;
}

function validateInput () {
	var pCode = document.getElementById("postcode").value;
	console.log(pCode);
	var isPCodeValid = validatePCode(pCode);
	console.log(isPCodeValid);
	if (isPCodeValid == true) {
		var validMsg = document.getElementById("msg");
		validMsg.innerHTML = "Postcode is valid";
		}
	else {
		if (isPCodeValid == false) {
		var errorMsg = document.getElementById("msg");
		errorMsg.innerHTML = "Postcode is invalid";
		}
	}
}

function init() {
	var btn = document.getElementById("check");
	btn.onclick = validateInput;
}

window.onload = init;
