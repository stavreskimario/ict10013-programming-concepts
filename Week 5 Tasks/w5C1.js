/* Filename: [w5C1].js
   Target html: [ w5C1.html]
   Purpose : [ This js file assigns a Austrailian State to valid Postcode ]
   Author: Mario Stavreski
   Date written: 17/04/2020
   Revisions:  v1.0
*/


    // [ the pcodeToState function returns a state name corresponding to first digit of pcode passed as parameter]
    function pcodeToState(pcode){

        var state;

        var firstDigit= pcode.charAt(0);

        switch (firstDigit) {
            case '2':
              state = "NSW";
              break;
            case '0':
              state = "Northern Territory";
              break;
            case '3':
              state = "Victoria";
              break;
            case '8':
              state = "Victoria";
              break;
            case '4':
              state = "Queensland";
              break;
            case '9':
              state = "Queensland";
              break;
            case '5':
              state = "South Australia";
              break;
            case '6':
              state = "Western Australia";
              break;
            case '7':
              state = "Tasmania";
              break;

            default:
              state=" Not such state exists";
          }

        return state;
        }

        // [ the isPcodeValid function verifies if the pcode entered byuser in of length 4 and digits only]
    function isPCodeValid(pcode){
        var valid=true;

        if (pcode.length !=4)
        {
            valid=false;
        }
        else if(isNaN(pcode))
        {
            valid=false;
        }
        return valid;
    }

    // [ the validateInput function displays the result if credit card expiry in the <p> tag of html document]
    function validateInput(pcode)
    {
        var ausState;
        if(isPCodeValid(pcode))
        {
            ausState=pcodeToState(pcode);

        }
        else{
           ausState=("Not a valid PCode");
        }
        document.getElementById("msg").innerText=ausState;
    }

function value(){

        var code = document.getElementById("postcode").value;
        validateInput(code);
    }

function init() {

    var btnCheck= document.getElementById("check");
    btnCheck.onclick=value;
}

window.onload = init;
