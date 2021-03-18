/* Filename: W2P.js
   Target html: w2P1.html
   Purpose : Calculates the cost of tickets
   Author: Mario Stavreski ID: 103055993
   Date written: 10/03/2020
   Revisions:  v1.0
*/

// This function returns the total amount due

function totalCost(ticketPrice, ticketQty) {

		return ticketPrice * ticketQty;

}

// This function asks the user to input the number of tickets and ticket price

function init() {


	document.write("<h1> Ticket Cost Calculator </h1>");
	document.write("<h2> Mario Stavreski, ID: 103055993 </h2>");

	var ticketPrice;
	ticketPrice = prompt("Please enter ticket price: ");
	ticketPrice = Number(ticketPrice);

	var ticketQty;
	ticketQty = prompt("Please enter ticket quantity" );
	ticketQty = Number(ticketQty);

	var ticketCost;
	ticketCost = totalCost(ticketPrice, ticketQty);

	document.write("The total cost of your tickets is: $" + ticketCost);

}
window.onload = init;  
