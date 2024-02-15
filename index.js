function startfunction(){
    var usna = document.getElementById("intro-name").value;
    var user = getCookie("username");
    if (user != "") {
        location.href = "speed-type.html";
    } else {
        if(usna=="" || usna==" "){
            alert("Please enter the name");
        }
        else{
          setCookie("username", usna);
        }
      }
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";";
    location.href = "speed-type.html";
}

var user = getCookie("username");
if (user != "") {
    location.href = "speed-type.html";
}