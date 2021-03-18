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

var price;
price = prompt("Please enter the ticket price: ");
price = Number(price);

var Amount;
Amount = prompt("Please enter the amount of tickets purchased: ");
Amount = Number(Amount);

var totalAmount = price * Amount;

document.write("<h1>Name: Mario Stavreski, ID: 103055993</h1>");
document.write("Ticket Price: " + price);
document.write("<br> Number of tickets: " + Amount);
document.write("<br> Total payment required: " + totalAmount);

window.onload = init;  
