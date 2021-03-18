/* Filename: [ name of this file�].js
   Target html: [ what is the html file(s) linked to this js�]
   Purpose : [ a html file may have multiple js files. What does this one do?�]
   Author: [ your name�]
   Date written: [ �]
   Revisions:  [ your name, what, when�]
*/

// [ brief comment on what the function does�]

function processQuote() {
  var standardCost;
  var discountRate;
  var discount = calcDiscount(numberOfNights);
  var amountDue;
  var pricePerNight = Number(document.getElementById("pricePerNight").value);
  var numberOfNights = Number(document.getElementById('noNights').value);

  var validPrice = validateInput(pricePerNight);
  if (!validPrice) {
    document.getElementById('price').innerHTML = "The price you entered is invalid. Please enter a value greater than 0.";
  }
  var validNights = validateInput(numberOfNights);
  if (!validNights) {
    document.getElementById('noNights').innerHTML = "The number of nights you entered is invalid. Please enter a value greater than 0.";
  }
  if (validPrice && validNights) {
    standardCost = calcStayCost(pricePerNight, numberOfNights);
   document.getElementById('standardCost').innerHTML = "Standard Cost is $" + standardCost;
   document.getElementById('price').innerHTML = "The Price per night is: " + pricePerNight;
   document.getElementById('noNights').innerHTML = "The duration of stay is: " + numberOfNights + " nights";
  }
  if (discount > 0 && validNights && validPrice) {
    document.getElementById('discount').innerHTML = "Total discount amount is: $" + standardCost * discount;
    amountDue = document.getElementById('amountDue').innerHTML = "Total amount due is: $" + standardCost - (discount * standardCost);
  }
  else {
    amountDue = document.getElementById('amountDue').innerHTML = "Total amount due is: $" + standardCost;
  }
}

function calcDiscount(numberOfNights) {
  var dRate;
  if (numberOfNights < 5) {
    dRate = 0
  } else {
    if (numberOfNights >= 5 && numberOfNights <= 10) {
    dRate = 0.03
  } else {
    dRate = 0.05
  }
  }
  return dRate;
}

function calcStayCost(pricePerNight, numberOfNights) {
  return pricePerNight * numberOfNights;
}

function validateInput(pricePerNight) {
  if (pricePerNight > 0){
    return true;
  }
  else {
    return false;
  }

}

function init() {

  var btn = document.getElementById("send");
  btn.onclick = processQuote;

}

window.onload = init;
