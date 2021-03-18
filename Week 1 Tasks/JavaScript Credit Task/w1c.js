/* Filename: w1c.js
   Target html: tickets.html
   Purpose : This jsvascript file calculates the total cost of tickets
   Author: Mario Stavreski ID: 10305593
   Date written: 6/3/2020
   Revisions:  v1.1
*/

// [ brief comment on what the function does…]
function init() {

var price;
price = prompt("Please enter the ticket price: ");
price = Number(price);

var Amount;
Amount = prompt("Please enter the amount of tickets purchased: ");
Amount = Number(Amount);

var totalAmount = price * Amount;

var today = new Date();
var day = today.getDate();
var month = today.getMonth()+1;
var year = today.getFullYear();

var date = new Date();
CurrentTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

var price2 = price.toFixed(2);
var totalAmount2 = totalAmount.toFixed(2); 


document.write("<h1>Name: Mario Stavreski, ID: 103055993</h1>");
document.write("<h2>" + date + CurrentTime + "</h2>");

document.write("<table border=1> <tr> <th>Price</th> <th>Quantity</th> <th>Total Amount</th> </tr> <tr> <td>+"price2+"</td> <td>"+Amount+"</td><td>"+totalAmount2+"</td> </tr>");

}

window.onload = init;  
