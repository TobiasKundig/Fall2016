/**
 * Created by toby on 10/25/16.
 */

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("myName", user, 365);
        }
    }
}

function showComments(){
    document.getElementById('detailBox').style.display="block";
}

function addElement(){

    var p = document.getElementById('commentList');
    var insert = document.getElementById('comment').value;

    var newElement = document.createElement("li");
    newElement.innerHTML = '<div class="commenterImage"><img src="http://placekitten.com/50/50"></div>';
    newElement.innerHTML += '<div class="commentText"><p class="">' + insert + '</p><span class="date sub-text">'+ new Date(); +'</span></div>';
    p.appendChild(newElement);
}

