function showContactUsDiv(){
    document.getElementById('main').style.display="none";
    document.getElementById('contactUs').style.display="block";

}

function showMainDiv(){
    document.getElementById('contactUs').style.display="none";
    document.getElementById('main').style.display="block";
}
 function showClintonFacts(){
     document.getElementById('main').style.display="none";
     document.getElementById('contactUs').style.display="none";
     document.getElementById('clinton').style.display="block";
 }
function showTrumpFacts(){
    document.getElementById('main').style.display="none";
    document.getElementById('contactUs').style.display="none";
    document.getElementById('clinton').style.display="none";
    document.getElementById('trump').style.display="block";
}

function validateForm() {
    var x = document.forms["form"]["name"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    }
}
