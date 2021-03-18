/* Filename: w6c1.js
   Target html: w6c1.html
   Purpose : This file locates whether a value exists within an array
   Author: Mario Stavreski
   Date written: 26/04/2020
   Revisions:  v1.0
*/


function init() {
  document.getElementById("search").onclick = start;
}
function start(){ // This function locates whether a value exists within an array
  var arr=[12,14,17,20,24,27,34,56,43,87,12,43,12];
  var vIndex = 0;
  var vSearch = document.getElementById("value").value;
  vFound = false;
  document.getElementById("result").innerHTML = vSearch + " does not exist within the array";
  while (vIndex < arr.length && !vFound) { //check if the value exists in the array
    if (arr[vIndex] == vSearch) {
      vFound = true;
      document.getElementById("result").innerHTML = vSearch + " exists within the array";
    }
    vIndex++;
  }
  var vNumbers = "";
  vNumbers = "The numbers in the array are: "
  for (vIndex = 0; vIndex < arr.length; vIndex++) { //lists number within array
    vNumbers = vNumbers + arr[vIndex] + ", ";
    document.getElementById("arr").innerHTML = vNumbers;
  }
}
window.onload = init;
