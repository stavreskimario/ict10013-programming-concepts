/* Filename: w6P2.js
   Target html: w6P2.html
   Purpose : Perform statistics on an array of values
   Author: Mario Stavreski
   Date written: 25/04/2020
   Revisions:  v1.0
*/

// this function performs statistics on an array of values
  var arrNumbers = [12,14,16,18,20,13,15,17,19,29,28,21]
  var vIndex = 0;
  var arrValues = "";

  arrValues = "The values in the array are: ";

  var vIndex = 0;

  for (vIndex = 0; vIndex < arrNumbers.length; vIndex++) {// counts the number of values
    arrValues = arrValues + arrNumbers[vIndex] + ", ";
}

  var valuesSum = 0;
  for (vIndex = 0; vIndex < arrNumbers.length; vIndex++) { //sums all the values in the array
    valuesSum = valuesSum + arrNumbers[vIndex];
  }

  var average = 0;

  average = valuesSum / vIndex; // calculates the average value

  document.getElementById('msg').innerHTML = arrValues + "<br/>" + "The Number of values in the array is: " + vIndex + "<br/>" + "The Total of all values is: " + valuesSum + "<br/>" + "The average value is: " + average;

}

function init() {

  var btn = document.getElementById('stats');
  btn.onclick = start;

}


window.onload = init;
