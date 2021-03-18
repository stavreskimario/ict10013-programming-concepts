/* Filename: w8P1.js
   Target html: w8P1.html
   Purpose : JavaScript array update
   Author: Mario Stavreski
   Date written: 15/08/2020
   Revisions:  v1.0
*/


function start() { //this function creates an array and displays the original and updated lists
    var arr = [42,69,20,25,15,4,5,24];
    document.getElementById("msg1").innerHTML = "Arrays before the update: ";
    document.getElementById("msg2").innerHTML = "Arrays after the update: ";

    var displayOriginal = displayValues(arr);
    document.getElementById("originalist").innerHTML = displayOriginal;

    updateValues(arr);

    var displayUpdated = displayValues(arr);
    document.getElementById("newlist").innerHTML = displayUpdated;

}

function updateValues(array) { //adds +10 to each value in array
    var vIndex = 0;
    for (vIndex = 0; vIndex < array.length; vIndex++) {
        array[vIndex] = array[vIndex] + 10;
    }
}

function displayValues(array) { //for loops lists all values
    var vList = "";
    var vIndex = 0;
    for (vIndex = 0; vIndex < array.length; vIndex++) {
        vList = vList + " " + array[vIndex];
    }
    return vList;
}
function init() {
    document.getElementById("display").onclick = start;
}

window.onload = init;
