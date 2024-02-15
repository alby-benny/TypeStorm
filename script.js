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


var user = getCookie("CPM");
if (user == "") {
    location.href = "speed-type.html";
}
else{
    document.getElementById("usrn").innerHTML=getCookie("username");
    document.querySelector(".measure-wpm").innerHTML=getCookie("CPM");
    document.querySelector(".measure-char").innerHTML=getCookie("correct");
    document.querySelector(".measure-mistake").innerHTML=getCookie("Mistake");
    document.querySelector(".measure-acc").innerHTML=getCookie("accuracy");
}