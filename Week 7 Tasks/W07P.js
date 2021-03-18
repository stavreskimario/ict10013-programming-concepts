/* Filename: W07P.js
   Target html: W07P.html
   Purpose : Adds Names to an array
   Author: Mario Stavreski ID:103055993
   Date written: 05/05/2020
   Revisions:  v1.0
*/

// This JavaScript adds names to an array
var arrNameList = []

function addName() {
  var newName = document.getElementById("custname").value;
  if (newName.length == 0) { //verifies that a name is added by the user
    document.getElementById("error").innerHTML = "Please enter a name."
  } else { //adds the name to the array
  arrNameList.push(newName);
}
}

function displayArray() { //displays array
  var newName = document.getElementById("custname").value;
    var vNames = "";
    vNames = "The names in the array are: " + "</br>"
    var vIndex;
    for (vIndex = 0; vIndex < arrNameList.length; vIndex++) {
    vNames =  vNames + (vIndex + 1) + ". " + arrNameList[vIndex] + "</br>";
  }

  document.getElementById('output').innerHTML = vNames;
  document.getElementById('error').innerHTML = "";

}

function init() {

  var btn = document.getElementById("add");
  btn.onclick = addName;

  var btn = document.getElementById("process");
  btn.onclick = displayArray;

}

window.onload = init;
