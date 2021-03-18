var SeatingAreaCategory;
seatingAreaCategory = prompt("Please enter seating area category: ");
var ticketPrice = determineTicketPrice(seatingAreaCategory);
ticketPrice = Number(ticketPrice);
var ticketQty;
ticketQty = prompt("Please enter ticket quantity: ");
ticketQty = Number(ticketQty);
var cardType;
cardType = prompt("Enter your Card type. Enter 1 for American Express and 2 for Visa/Mastercard ");
var validQty = validateQty(ticketQty);

//start if

var ticketCost;
ticketCost = totalAmount(ticketPrice, ticketQty);
var surcharge;
var finalCost = surcharge + ticketCost;
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
