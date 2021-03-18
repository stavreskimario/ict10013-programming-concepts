/* Filename: [ name of this file…].js
   Target html: [ what is the html file(s) linked to this js…] 
   Purpose : [ a html file may have multiple js files. What does this one do?…]
   Author: [ your name…]
   Date written: [ …]
   Revisions:  [ your name, what, when…]
*/

// [ brief comment on what the function does…]
function init() {
}

var MyName;
MyName = "Mario";
document.write("Hello " + MyName);
myCity = prompt("Please type the name of the city you were born in: ");
document.write("<h1> This webpage uses JavaScript strings and varibales</h1>");
document.write(myName + " was born in " + myCity)
window.onload = init;  
