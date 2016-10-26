/**
 * Created by toby on 10/25/16.
 */

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
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

