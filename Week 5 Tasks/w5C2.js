/* Filename: [ w5C2].js
   Target html: [ w5C2.html]
   Purpose : [ This js file checks for credit card expity date if the card is valid or not]
   Author: Mario Stavreski
   Date written: 17/04/2020
   Revisions:  v1.0
*/

// [ the init function is called when the html document is fully loaded]
function init() {
    // [ validateMonth function returns true or false based on the month number passed as a parameter]
    function validateMonth(month)
    {
        var valid = true;
        if(isNaN(month))
        {
            valid = false;
        }
        else
        {
            var num = parseInt(month);
            if (num <1 || num >12)
            {
                valid = false;
            }
        }
    return valid;
    }
    // [ validateMonth function returns true or false based on the Year value passed as a parameter]
    function validateYear(yr)
    {
        var valid = true;
        if(isNaN(yr))
        {
            valid=false;
        }
        else
        {
            var num = parseInt(yr);
            var d = new Date();
            if((num > (d.getFullYear()+5)) || (num < d.getFullYear()))
            {
                valid = false;
            }

        }
        return valid;

    }

    // [ validateExpiry function displays the result in paragraph <p> after verifying the validity of credit card]
    function validateExpiry()
    {
        var month = document.getElementById("monthNo").value;
        var year = document.getElementById("year").value;
        var output="";
        var validMonth= validateMonth(month);
        var validYear= validateYear(year);
        if(validMonth && validYear)
        {
            output="Expiry Date is Valid";
        }
        else
        {
            output="Expiry Date is invalid";
        }
        console.log(output);
        document.getElementById("msg").innerText= output;
    }

    var btnCheck= document.getElementById("check");
    btnCheck.onclick=function() {validateExpiry()};


}

window.onload = init;
