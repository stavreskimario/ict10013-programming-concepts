/* Filename: w4P1.js
   Target html: w4P.js
   Purpose : To calculate the discount of an accomodation fee
   Author: Mario Stavreski
   Date written: 10/4/2020
   Revisions:  v1.0
*/

// this function calculates the total cost excl. discount
function calcStayCost(pricePerNight, numberOfNights) {
  return pricePerNight * numberOfNights;
}

// this function calculates the discount rate
function calcDiscount(numNights, standardCost) {
  var dRate;

  if (numNights < 5) {
    dRate = 0
  } else {
    if (numNights <= 10) {
    dRate = 0.03
  } else {
    dRate = 0.05
  }
  }
  return standardCost * dRate;
}

// This funcion calculates the discounted cost
function calcAmount(cost, discount) {
  return cost - discount;
}

// this function validates user input, making sure that the values the user has entered for both field are >0
function validateInput(validNumber) {
  if (validNumber > 0) {
    return true;
  }
  else {
    return false;
  }
  }

// this function processes the accomodation quote and prints it
function processQuote() {

  var pricePerNight = document.getElementById("totalPrice").value;
  var totalNights = document.getElementById('noNights').value;
  pricePerNight = Number(pricePerNight);
  totalNights = Number(totalNights);
  var validPrice = validateInput(pricePerNight);
  var validNights = validateInput(totalNights);

  if (validPrice && validNights) {
    var standardCost = calcStayCost(pricePerNight, totalNights);
    standardCost = standardCost.toFixed(2);

    var totalDiscount = calcDiscount(totalNights, standardCost);
    totalDiscount = totalDiscount.toFixed(2);

    console.log(totalDiscount);

    var totalAmountDue = calcAmount(standardCost, totalDiscount);
    totalAmountDue = totalAmountDue.toFixed(2);
    var standardCostOut = document.getElementById("standardPrice");
    standardCostOut.innerHTML = "The standard cost of stay is: $" + standardCost;
    var discountOut = document.getElementById('discount');
    discountOut.innerHTML = "The total discount amount is: $" + totalDiscount;
    var totalDueOut = document.getElementById('amount');
    totalDueOut.innerHTML = "The total amount due is: $" + totalAmountDue;

  }

  else {
    if (validPrice == false) {
      var priceErrorOut = document.getElementById('priceErrorMessage').innerHTML = "The price you entered is invalid, please enter a value greater than $0";
    }
    if (validNights == false) {
      var nightsErrorOut = document.getElementById('nightsErrorMessage').innerHTML = "The number of nights you entered is invalid, please enter a value of 1 or more"
    }
  }

}

function init() {
  var btn = document.getElementById("send");
  btn.onclick = processQuote;

 }

window.onload = init;
