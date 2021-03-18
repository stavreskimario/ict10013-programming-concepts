/* Filename: w6P1.js
   Target html: w6P1.html
   Purpose : display names using for and while loops, count the number of letters in a name
   Author: Mario Stavreski
   Date written: 27/04/2020
   Revisions:  v1.0
*/

var arrNames = ["Brian", "Mario", "Dominic", "Mia", "Han", "Peter", "Paul", "Andreas"]; //array of names

function listValuesForLoop() {//lists the names using a for loop

  var vNames = "";
  vNames = "This is a list of names using a for loop: ";
  var vIndex = 0;

    for (vIndex = 0; vIndex < arrNames.length; vIndex++) {
    vNames = vNames + arrNames[vIndex] + "</br>";
  }

  document.getElementById('msg1').innerHTML = vNames;

}

function listValuesWhileLoop() { // lists the names using a while loop

  var vNames = "";
  vNames = "This is a list of names using a while loop: ";
  var vIndex = arrNames.length - 1;

  while (vIndex >= 0) {
    vNames = vNames + arrNames[vIndex]  + "</br>";
    vIndex --;
  }

  document.getElementById('msg2').innerHTML = vNames;

}

function determineNameLength() { // determines the number of characters in a name
  var vName = "";
  vName = "Number of characters in my name: ";
  document.getElementById('msg3').innerHTML = vName + arrNames[1].length;
}

function init() {

  var btn = document.getElementById('forbutton');
  btn.onclick = listValuesForLoop;

  var btn = document.getElementById('whilebutton');
  btn.onclick = listValuesWhileLoop;

  var btn = document.getElementById('namelength');
  btn.onclick = determineNameLength;
}

window.onload = init;
