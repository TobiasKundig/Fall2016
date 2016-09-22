function showLandscapeDiv() {

    document.getElementById('Main').style.display="none";
    document.getElementById('LandscapeDiv').style.display="block";
    document.getElementById('WeddingsDiv').style.display="none";
}

function showWeddingsDiv() {

    document.getElementById('Main').style.display="none";
    document.getElementById('WeddingsDiv').style.display="block";
    document.getElementById('LandscapeDiv').style.display="none";
}

function validateForm() {
    var x = document.forms["form"]["name"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    }
}

function modalFunction(modalName){

    // Get the modal
    var modal = document.getElementById(modalName);


    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById(modalName);
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
}

