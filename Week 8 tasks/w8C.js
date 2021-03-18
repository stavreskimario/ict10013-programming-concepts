/* Filename: w8C.js
   Target html: w8C.html
   Purpose : objects
   Author: Mario Stavreski
   Date written: 16/05/2020
   Revisions:  v1
*/

var arrProducts = [];

function addProduct() { //Adds product to array

    var newId = document.getElementById("proid").value;
    newId = Number(newId);
    var newDesc = document.getElementById("desc").value;
    var newPrice = document.getElementById("price").value;
    newPrice = Number(newPrice);

    var vProducts = {proid: newId, desc: newDesc, price: newPrice};
    arrProducts.push(vProducts);

    document.getElementById("msg").innerHTML = "New Product added";
}

function listProducts() { // lists all products within the array

    var msg = "";
    if (arrProducts.length == 0) {
        msg = "There are no existing products in the list";
    } 
    
    else {
        var vIndex = 0;
        for (vIndex = 0; vIndex < arrProducts.length; vIndex++) {
            msg = msg + "Product ID: " + arrProducts[vIndex].proid + ", ";
            msg = msg + "Description: " + arrProducts[vIndex].desc + ", ";
            msg = msg + "Price: " + arrProducts[vIndex].price + "<br/>";
        }
        var count = countCheap(arrProducts);
        msg = msg + "Number of items under $5: " + count;
    }
    document.getElementById("msg").innerHTML = msg;
}

function countCheap(array) { //count the number of items under $5
    var vIndex;
    var vCount = 0 ;
    for (vIndex = 0; vIndex < array.length; vIndex++) {
        if (array[vIndex].price < 5) 
            vCount = vCount + 1;
    } // end loop
    return vCount;
}

function init() {
    document.getElementById("add").onclick = addProduct;
    document.getElementById("listall").onclick = listProducts;
}
window.onload = init;
