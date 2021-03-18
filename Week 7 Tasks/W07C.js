/* Filename: W07C.js
   Target html: W07C.html
   Purpose : Adds names and birthyears from an array to a table
   Author: Mario Stavreski ID: 103055993
   Date written: 07/05/2020
   Revisions:  v1.0
*/

// This functon add a Names and Birthyear in a table
var arrNames=[];
var arrYear=[];

function addNames() { // this function adds a new name to the table
  var newName = document.getElementById("custname").value;
  var existingName = findName(newName);
  if(existingName == true) {
    document.getElementById("errormsg").innerHTML = "Cannot add " + newName + ". It already exists within the array."
  } else if(newName.length == 0) {
    document.getElementById("output").innerHTML = "No name entered. Please enter a name."
  } else {
    arrNames.push(newName);
    var arrNewYOB = document.getElementById("birthyear").value;
    arrYear.push(arrNewYOB);
  }
}

function findName(searchValue) { //This function finds the new name
  var vIndex = 0;
  var vFound = false;
  while (vIndex < arrNames.length && !vFound) {
    if (arrNames[vIndex] == searchValue) {
      vFound = true;
    }
    vIndex++;
  }
  return vFound;
}

function displayArray() { //this funciton displays the table with the names and years
  var tableValues = "";
  for (var i=0; i < arrNames.length; i++) {
    tableValues = tableValues + "<tr> <td>" + arrNames[i] + "</td><td>" + arrYear[i] + "</td></tr>"
  }
  document.getElementById("output").innerHTML = "<table border = '1'> <tr> <th> Name </th> <th> Birthyear </th> </tr>" + tableValues;
}

function init() {
  document.getElementById("addname").onclick = addNames;
  document.getElementById("process").onclick = displayArray;

}

window.onload = init;
