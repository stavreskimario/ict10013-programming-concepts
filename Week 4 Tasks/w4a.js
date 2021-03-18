/* Filename: [ name of this file�].js
   Target html: [ what is the html file(s) linked to this js�]
   Purpose : [ a html file may have multiple js files. What does this one do?�]
   Author: [ your name�]
   Date written: [ �]
   Revisions:  [ your name, what, when�]
*/

// [ brief comment on what the function does�]
function processName() {

  var first = document.getElementById("firstname").value;
  var output = document.getElementById("msg");
  output.innerHTML = "Hello, " + first + ".";
}

function init() {

  var btn = document.getElementById("process");
  btn.onclick = processName;
}

window.onload = init;
