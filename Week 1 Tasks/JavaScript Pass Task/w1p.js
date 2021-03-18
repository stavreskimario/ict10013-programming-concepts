/* Filename: w1p.js
   Target html: tickets.html 
   Purpose : Calculate the total cost of tickets
   Author: Mario Stavreski
   Date written: 5/03/202
   Revisions:  v1.1
*/

// This function calculaes the total cost of tickets and displays the to the user
function init() {

var price;
price = prompt("Please enter the ticket price: ");
price = Number(price);

var Amount;
Amount = prompt("Please enter the amount of tickets purchased: ");
Amount = Number(Amount);

var totalAmount = price * Amount;

document.write("<h1>Name: Mario Stavreski, ID: 103055993</h1>");
document.write("Ticket Price: " + price);
document.write(" Number of tickets: " + Amount);
document.write(" Total payment required: " + totalAmount);

}

window.onload = init;  
