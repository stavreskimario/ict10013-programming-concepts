var tourCodes=["H","F","A"];
var tourNames=["Half-day City Sightseeing","Full-day City Sightseeing","City Sightseeing  + Art museum"];
var tourPrices=[80,130,170];
var lunchTypes=["OG","2C","3C","GL"];
var lunchNames=["On-the-Go","2-Course","3-Course","Gourmet"];
var lunchPrices=[10,17,27,32];
function addToOutput(str,num){
    if(num==0){
        document.getElementById("price").innerHTML="The total price of the tour is: $" + str;

    }
    else if(num==1){
        document.getElementById("data").innerHTML+=str;
    }
    else if(num==2){
        document.getElementById("data").innerHTML+=str;
    }
};
function displayTourOptions(){
    document.getElementById("data").innerHTML="";
    var str="\t----Tour Prices and Options----<br> ";
    for(var i=0;i<tourCodes.length;i++){
        str=str+"\t"+tourCodes[i]+"-"+tourNames[i]+" "+tourPrices[i]+"$<br>";
    }
    addToOutput(str,2);
}
function displayLunchOptions(){
    document.getElementById("data").innerHTML="";
    var str="\t-------Lunch Options-------<br> ";
    for(var i=0;i<lunchTypes.length;i++){
        str=str+"\t"+lunchTypes[i]+"-"+lunchNames[i]+" "+lunchPrices[i]+"$<br>";
    }
    addToOutput(str,2);
}
function validateNoOfPeople(str){
    if(isNaN(str)){
        addToOutput("Number of People must be in numeric<br>",1);
        return false;
    }
    else if(str < 1 || str > 11)
    {
        addToOutput("Number of People must be between 1 and 11<br>",1);
        return false;
    }
    return true;

}
function validateName(str){
    if(str.length>25){
        document.getElementById("data").value="";
        addToOutput("Name must be between 1 and 25 characters in length<br>",1);
        return false;
    }
    return true;

}
function validateId(id){
    if(isNaN(id)){
        addToOutput("Id must be numeric<br> ",1);
    }
    if(id.length===5){
        return true;
    }
    else{
        addToOutput("Id must be 5 in length<br>",1)
    }
    return false;
}
function validateType(arr,str){
    for (var i=0;i<arr.length;i++){
        if(arr[i]==str)
        {
            return i;
        }
    }
    return -1;
}
function validateCheck(str){
    var resultA=parseInt(str[0])*parseInt(str[2]);
    var resultB=resultA+ parseInt(str[1])+parseInt(str[3]);
    var check=String(resultB);
    if(parseInt(check[0])+parseInt(check[1])===parseInt(str[4]))
    {
        return true;
    }
    addToOutput("Id has invalid check<br>",1);
    return false;
}
function calculateTourCost(index,not){
    return tourPrices[index]*not;
}
function calculateLunchCost(index,not){
    return lunchPrices[index]*not;
}
function calculateTotalPayment(ctc,clc){
    return ctc+clc;
}
function validateAndCal(){
    document.getElementById("data").innerHTML="";
    document.getElementById("price").innerHTML="";
    var name=document.getElementById("name").value;
    var tourCode=document.getElementById("tourCode").value;
    var lunchCode=document.getElementById("lunchCode").value;
    var noOfPeople=document.getElementById("noOfGuest").value;
    var id=document.getElementById("agentId").value;
    var str="";
    validateName(name);
    var tourIndex=validateType(tourCodes,tourCode.toUpperCase());
    var lunchIndex=validateType(lunchTypes,lunchCode.toUpperCase());
    if(tourIndex==-1){
        addToOutput("Invalid tour code<br>",1);
    }
    if(lunchIndex==-1){
        addToOutput("Invalid Lunch Code<br>",1);
    }
    validateCheck(id);
    if(validateId(id)===true){
        if(validateNoOfPeople(noOfPeople)==false){

        }
        else{

            var ctc;
            var clc;
            if(tourIndex==-1){
                
            }
            else{
                ctc= calculateTourCost(tourIndex,noOfPeople);
            }
            if(lunchIndex==-1){
                
            }else{
                clc= calculateLunchCost(lunchIndex,noOfPeople);
            }
            if(lunchIndex==-1 || tourIndex==-1){
                
            }else{
                var tc=calculateTotalPayment(parseInt(ctc),parseInt(clc));
            addToOutput(tc,0);
            }
        }
    }


}
window.onload=function(e){
   // addToOutput("as");
   console.log(this.calculateTourCost(0,2));
}