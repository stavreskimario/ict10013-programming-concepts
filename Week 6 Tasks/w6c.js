/* Filename: w6c1.js
   Target html: w6c1.html
   Purpose : This file finds which value belong to the arrays between 2 values
   Author: Mario Stavreski
   Date written: 26/04/2020
   Revisions:  v1.0
*/

// this function check how many values from an array belong to a certain range
function start(){
  var arr=[12,14,17,20,24,27,34,56,43,87];
  var vIndex = 0;
  var highNumber = document.getElementById("highValue").value;
  var validHigh = validateHigh(highNumber);
  var lowNumber = document.getElementById("lowValue").value;
  var validLow = validateLow(lowNumber, highNumber);
  var vList = "";
  vList = "The numbers in the array are: ";
  for (vIndex = 0; vIndex < arr.length; vIndex++) { // lists all values within array
    vList = vList + arr[vIndex] + ", "
    document.getElementById("msg1").innerHTML = vList;
  }
  if (validLow == true && validHigh == true) { // finds the number of values within the specified range
    var vRange = 0;
    for (vIndex = 0; vIndex < arr.length; vIndex++) {
      if (arr[vIndex] > lowNumber && arr[vIndex] < highNumber) {
        vRange = vRange + 1;
      }
    }
    document.getElementById("result").innerHTML = "The numbers between the selected range are: " + vRange;
  } else {
    if (validLow == false) { //prints error statement if low value is invalid
      var lowError = document.getElementById("msg1");
      lowError.innerHTML = "Invalid Low number. Must be lower than high number and a numeric value";
    }
    if (validHigh == false) { //prints error staement if high value is invalid
      var highError = document.getElementById("errorHigh");
      highError.innerHTML = "Invalid high number. Must be higher than low number and a numeric value";
    }
  }
}

function validateHigh(high) { //validates high values
  var valid = true;
  if (isNaN(high))
    valid = false;
  return valid;
}

function validateLow(low, high) { //validates low value
  var valid = true;
  if (low >= high || isNaN(low))
  valid = false;
  return valid;
}

function init() {
  document.getElementById("search").onclick = start;
}

window.onload = init;
