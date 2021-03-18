/* Filename: w3C.js
   Target html: w3C1.html
   Purpose : Calculate the cost of tickets and surcharge amount
   Author: Mario Stavreski ID: 10305993
   Date written: 28/03/2020
   Revisions:  v1.0
*/

function surRate(cardType) { // determines the surcharge rate

  var surchargeRate = -1;

  switch (cardType) {
    case "1":
      surchargeRate = 0.02;
      break;
    case "2":
      surchargeRate = 0.01;
      break;
  } // end switch
  return surchargeRate;
}

// This function calculates the surcharge amount.

function surchargeAmount(ticketCost, surchargeRate) { // calculates surcharge amount

  return ticketCost * surchargeRate;
}

function determineTicketPrice(seatingAreaCategory) { // determines ticket price

  var ticketPrice = 0;
  switch (seatingAreaCategory) {

    case "S":
    case "s":
      ticketPrice = 180;
      break;
    case "C":
    case "c":
      ticketPrice = 150;
      break;
    case "B":
    case "b":
      ticketPrice = 100;
      break;
    case "R":
    case "r":
      ticketPrice = 70;
      break;
    default:
      ticketPrice = 0;
      break;
  } // end switch
  return ticketPrice;
}

function totalAmount(ticketPrice, ticketQty) { // calculates total amount excl. surcharge

  return ticketPrice * ticketQty + 7;
}

function validateQty(ticketQty) { // validates ticket qty

  if (ticketQty >= 1 && ticketQty <= 20) {
    return true;
  } else {
   return false;
  }
}

function init() {

  var surcharge;
  var finalCost;
  var seatingAreaCategory;
  seatingAreaCategory = prompt("Please enter seating area category: ");

  var ticketPrice = determineTicketPrice(seatingAreaCategory);
  ticketPrice = Number(ticketPrice);

  var ticketQty;
  ticketQty = prompt("Please enter ticket quantity: ");
  ticketQty = Number(ticketQty);

  var ticketCost;
  ticketCost = totalAmount(ticketPrice, ticketQty);

  var cardType;
  cardType = prompt("Enter your Card type. Enter 1 for American Express and 2 for Visa/Mastercard ");

  var surchargeRate = surRate(cardType);

  var validQty = validateQty(ticketQty);

  surcharge = surchargeAmount(ticketCost, surRate(cardType));

  finalCost = surcharge + ticketCost;

  console.log(cardType);
  console.log(surcharge);

 if (ticketPrice > 0 && validQty && surchargeRate != -1) {

  var beforeSurchargeOut = document.getElementById("beforeSurcharge");
  var costOut = document.getElementById("amountDue");
  var priceOut = document.getElementById("pricePerTicket");
  var seatOut = document.getElementById("seatingArea");
  var surchargeOut = document.getElementById("surcharge");
  var validQtyOut = document.getElementById("ticketQty");

  beforeSurchargeOut.innerHTML = "Gross amount: $" + ticketCost.toFixed(2);
  costOut.innerHTML = "Amount due: $" + finalCost.toFixed(2);
  priceOut.innerHTML = "Price per ticket: $" + ticketPrice.toFixed(2);
  seatOut.innerHTML = "Your seating area is: " + seatingAreaCategory;
  surchargeOut.innerHTML = "Card fee: $" + surcharge.toFixed(2);
  validQtyOut.innerHTML = "Number of tickets ordered: "+ ticketQty;


}

else {
	if (ticketPrice == 0){
		var seatingErrorOut = document.getElementById("seatingArea");
		seatingErrorOut.innerHTML = seatingAreaCategory + " is not a valid seating area category. Please try again.";
	}
	if (validQty == false) {
		var qtyErrorOut = document.getElementById("ticketQty");
		qtyErrorOut.innerHTML = "Ticket quantity must be between 1 and 20. Please try again";
	}
	if (surchargeRate != 0.01 && surchargeRate != 0.02) {
		var rateErrorOut = document.getElementById("surcharge");
		rateErrorOut.innerHTML = "Invalid credit card type. Please enter 1 for American Experess or 2 for Visa/Mastercard";
	}
}
}

window.onload = init;
