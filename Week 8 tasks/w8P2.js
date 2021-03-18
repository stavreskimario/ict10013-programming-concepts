/* Filename: w8P2.js
   Target html: w8P2.html
   Purpose : Javascript objects
   Author: Mario Stavreski
   Date written: 15/05/2020
   Revisions:  v1.0
*/

function start() { //creats an arrays and objects stores withn the array, calls function listCars, displayStats

   var vCar1 = {make:"Toyota",colour:"Silver",price:24000};
   var vCar2 = {make:"Mazda",colour:"Red",price:30000};
   var vCar3 = {make:"Audi",colour:"Black",price:90000};
   var arrCars = [vCar1,vCar2,vCar3];
   listCars(arrCars);
   displayStats(arrCars);

}

function listCars(arrayCars) { //lists the Cars in the array

   var msg = "";
   var vIndex = 0;
   for (vIndex = 0; vIndex < arrayCars.length; vIndex++) {
      msg = msg + "Make: " + arrayCars[vIndex].make + " ";
      msg = msg + "Colour: " + arrayCars[vIndex].colour + " ";
      msg = msg + "Price: $" + arrayCars[vIndex].price + "<br/>";
   }
   document.getElementById("carList").innerHTML = msg;
}

function displayStats(arrayCars) { // display the number of cars, sums the prices, calculates average price
   var vIndex = 0;
   var vTotalPrice = 0;
   for (vIndex = 0; vIndex < arrayCars.length; vIndex++) {
      vTotalPrice = vTotalPrice + arrayCars[vIndex].price;
   }
   var noOfCars = arrayCars.length;
   var avgPrice = vTotalPrice / noOfCars;
   avgPrice = avgPrice.toFixed(2);
   var msg = "";
   msg = msg + "Total Cars: " + noOfCars + "<br/>";
   msg = msg + "Price totals: $" + vTotalPrice + "<br/>";
   msg = msg + "Average Price: $" + avgPrice + "<br/>";
   document.getElementById("stats"). innerHTML = msg;
}

window.onload = start;
