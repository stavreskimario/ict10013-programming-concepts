/* Filename: [ name of this file�].js
   Target html: [ what is the html file(s) linked to this js�]
   Purpose : [ a html file may have multiple js files. What does this one do?�]
   Author: [ your name�]
   Date written: [ �]
   Revisions:  [ your name, what, when�]
*/

// [ brief comment on what the function does�]

function calcDiscountedPrice(Price) {
  return oldPrice * 0.8;
}

function processPrice() {
  var itemName = document.getElementById("item").value;
  var oldPrice = document.getElementById("price").value;
  oldPrice = Number(OldPrice);
  var newPrice = calcDiscountedPrice(Price);
}

function init() {

  var btn = document.getElementById("process");
  btn.onclick = processPrice;
}

window.onload = init;
