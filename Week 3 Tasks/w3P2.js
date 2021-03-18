/* Filename: w3P2.js
   Target html: w3P2.html
   Purpose : Calculate the cost of tickets based on seating are and ticket quantity
   Author: Mario Stavreski
   Date written: 28/03/2020
   Revisions:  v1.0
*/


function determineTicketPrice(seatingAreaCategory) { // determines seating category

	var ticketPrice;
	switch(seatingAreaCategory) {

		case "S": case "s":
			ticketPrice = 180; break;
		case "C": case "c":
			ticketPrice = 150; break;
		case "B": case "b":
			ticketPrice = 100; break;
		case "R": case "r":
			ticketPrice = 70; break;
		default:
			ticketPrice = 0; break;
	} // end switch
	return ticketPrice;
}

function totalAmount(ticketPrice, ticketQty) { // calculates total amount due

	return ticketPrice * ticketQty + 7;
}

function validateQty(ticketQty) { // validates ticket quantity

	if (ticketQty>=1 && ticketQty<=20) {
		return true;
	}
	else {
		return false;
	}
}

function init() {
	var	seatingAreaCategory;
	seatingAreaCategory = prompt("Please enter seating area category: ");

	var ticketPrice = determineTicketPrice(seatingAreaCategory);
	ticketPrice = Number(ticketPrice);

	var ticketQty;
	ticketQty = prompt("Please enter ticket quantity: ");
	ticketQty = Number(ticketQty);

	var ticketCost;
	ticketCost = totalAmount(ticketPrice, ticketQty);

	var validQty = validateQty(ticketQty);

if (validQty && ticketPrice > 0) {
	var seatOut  = document.getElementById("seatingArea").innerHTML = "Your seating area is: " + seatingAreaCategory;
	var priceOut  = document.getElementById("pricePerTicket").innerHTML = "Price per ticket: " + ticketPrice;
	var validQtyOut  = document.getElementById("ticketQty").innerHTML = "Number of tickets ordered: " + ticketQty.toFixed(2);
	var costOut  = document.getElementById("amountDue").innerHTML = "Amount due: " + ticketCost;
}
else {
	if (ticketPrice == 0){
		var seatingErrorOut = document.getElementById("seatingArea");
		seatingErrorOut.innerHTML = seatingAreaCategory + " is not a valid seating area category. Please enter S, C, B or R.";
}
	if (validQty == false) {
		var qtyErrorOut = document.getElementById("ticketQty");
		qtyErrorOut.innerHTML = "Ticket quantity must be between 1 and 20. Please try again";
	}
}
	}

window.onload = init;
