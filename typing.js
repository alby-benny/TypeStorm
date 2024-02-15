//need to check the cookies.....(for last)

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
}


function addclass(cur,name){
    cur.className+="-"+name;
}
function removeclass(cur,name){
    cur.className=cur.className.replace("-"+name,"");
}

function formatWord() {
    var word=para.split(" ");
    var str_html="";
    for(let i=0;i<word.length;i++){
        str_html=str_html.concat(`<span class="word"><span class="letter">${word[i].split('').join('</span><span class="letter">')}</span></span><span class="word"><span class="letter"> </span></span>`);
    }
    return str_html;
}


function calculations_char(state){
    if(state){
        char_correct+=1;
    }else{
        char_correct-=1;
    }
    document.querySelector(".measure-char").innerHTML=char_correct.toString();
}

function calculations_acc(total_char){
    acc=Math.round((char_correct/total_char)*100);
    temp=acc.toString();
    if(temp=="" || temp=="NaN" || temp==null){
        temp="100";
    }
    document.querySelector(".measure-acc").innerHTML=temp;
    
}

function calculations_mistake(state){
    if(state){
        mist+=1;
    }else{
        mist-=1;
    }
    document.querySelector(".measure-mistake").innerHTML=mist.toString();
}


function randomize(original_letter){
    
    let orignial_asci=original_letter.charCodeAt(0);
    let randomized_letter;
    
    switch (parseInt(rand_key)) {
      case 0:
            randomized_letter = randomize_1(orignial_asci,original_letter);
            break;
      case 1:
            randomized_letter = randomize_2(orignial_asci,original_letter);
            break;
      case 2:
            randomized_letter = randomize_3(orignial_asci,original_letter);
            break;
      case 3:
            randomized_letter = randomize_4(orignial_asci,original_letter);
            break;
      case 4:
            randomized_letter = randomize_5(orignial_asci,original_letter);
            break;
      case 5:
            randomized_letter = randomize_6(orignial_asci,original_letter);
            break;
    }
    return(randomized_letter);
}

function randomize_1(orignial_asci,original_letter){
    
    let randomized_asci=orignial_asci+10;
    
    if(/[A-Z]/.test(original_letter)){
        if(randomized_asci>90){
            randomized_asci-=26;
        }
    }else{
        if(randomized_asci>122){
            randomized_asci-=26;
        }
    }
    return(String.fromCharCode(randomized_asci));
}

function randomize_2(orignial_asci,original_letter){
    
    let randomized_asci=orignial_asci-10;
    
    if(/[A-Z]/.test(original_letter)){
        if(randomized_asci<65){
            randomized_asci+=26;
        }
    }else{
        if(randomized_asci<97){
            randomized_asci+=26;
        }
    }
    return(String.fromCharCode(randomized_asci));
}

function randomize_3(orignial_asci,original_letter){
    
    let randomized_asci;
    
    if(/[A-Z]/.test(original_letter)){
        randomized_asci=155-orignial_asci;
    }else{
        randomized_asci=219-orignial_asci;
    }
    return(String.fromCharCode(randomized_asci));
}

function randomize_4(orignial_asci,original_letter){
    
    let randomized_asci;
    
    if(/[A-Z]/.test(original_letter)){
        randomized_asci=152-orignial_asci;
        if(randomized_asci<65){
            randomized_asci+=26;
        }
    }else{
        randomized_asci=216-orignial_asci;
        if(randomized_asci<97){
            randomized_asci+=26;
        }
    }
    return(String.fromCharCode(randomized_asci));
}

function randomize_5(orignial_asci,original_letter){
    
    let randomized_asci;
    
    if(/[A-Z]/.test(original_letter)){
        randomized_asci=135-orignial_asci;
        if(randomized_asci<65){
            randomized_asci+=26;
        }
    }else{
        randomized_asci=199-orignial_asci;
        if(randomized_asci<97){
            randomized_asci+=26;
        }
    }
    return(String.fromCharCode(randomized_asci));
}

function randomize_6(orignial_asci,original_letter){
    
    let randomized_asci;
    
    if(/[A-Z]/.test(original_letter)){
        randomized_asci=165-orignial_asci;
        if(randomized_asci>90){
            randomized_asci-=26;
        }
    }else{
        randomized_asci=229-orignial_asci;
        if(randomized_asci>122){
            randomized_asci-=26;
        }
    }
    return(String.fromCharCode(randomized_asci));
}




function updateTimer() {
    
    minutes = Math.floor(countdownTime / 60);
    var seconds = countdownTime % 60;

    // Add leading zero if seconds are less than 10
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // Update the timer element
    
    console.log(minutes+":"+seconds);
    document.querySelector(".contest-timer-time").innerHTML=minutes+":"+seconds;
    
     
    // Decrease countdown time by 1 second
    countdownTime--;

    // Check if the countdown has reached zero
    if (countdownTime < 0) {
        clearInterval(interval);
        setCookie("Mistake",mist.toString());
        setCookie("accuracy",acc.toString());
        setCookie("correct",char_correct.toString());
        setCookie("CPM",cpm.toString());
        location.href = "result.html";
    }
}


function starter(){
    if(start_game==0){
        interval = setInterval(updateTimer, 1000);
    }
    start_game=1;
}

function update_cpm(){
    cpm;
    if(10-minutes!=0 && minutes!=undefined){
        cpm=Math.floor(word_count/(10-minutes));
    }
    else{
        cpm=0;
    }
    
    document.querySelector(".measure-wpm").innerHTML=cpm;
}

var para="The hefty opinion reveals itself as a sterile peer-to-peer to those who look. This could be, or perhaps the watch of a diamond becomes a bosom baboon. In recent years, some posit the unstuffed road to be less than altern. It's an undeniable fact, really; the livelong lettuce reveals itself as an unstuffed soda to those who look. In ancient times a bit is a balance's season. A baby is a shingle from the right perspective. Before defenses, collars were only operations. Bails are gleesome relatives. An alloy is a streetcar's debt. A fighter of the scarecrow is assumed to be a leisured laundry. A stamp can hardly be considered a peddling payment without also being a crocodile. A skill is a meteorology's fan";




document.getElementsByClassName("contest-main-content")[0].innerHTML=formatWord();



var real_text="";


var rand_key = getCookie("random_keys");
if (rand_key == "") {
    rand_key=Math.floor(Math.random() * 6).toString();
    setCookie("random_keys",rand_key);
} 

let sub_caret=`<span class="contest-sub-text-caret"></span>`;
let cpm;
var countdownTime = 10 * 60;
let interval;
let minutes;
var start_game=0;
let word_count;
addclass(document.querySelector(".letter"),"current");
addclass(document.querySelector(".word"),"current");

var first_letter=1;
var char_correct=0;
var acc=100;
var mist=0;

if(getCookie("username")==""){
    location.href = "index.html";
}

if(getCookie("CPM")!=""){
    location.href = "result.html";
}



document.querySelector(".measure-mistake").innerHTML=mist.toString();
document.querySelector(".measure-char").innerHTML=char_correct.toString();
document.querySelector(".measure-acc").innerHTML=acc.toString();



document.addEventListener('keydown',e=>{
    starter();
    if(e.key=="ArrowUp"){
        var x=para;
        x=x.replace(/(\r\n|\n|\r)/gm, "");
        x=x.trim();
        x=x.split(' ').join("?");
        alert(formatWord());
    }
    else if ((e.key.length === 1 && /[a-zA-Z0-9]/.test(e.key)) || /^[.,;/'\\\[\]\-=\s?<>:"{}+_\)\(*&^%$#@!]+$/.test(e.key)){
        let randomized_letter;
        if(real_text.length<para.length){
            
            if(e.key.length === 1 && /[a-zA-Z]/.test(e.key)){
                randomized_letter=randomize(e.key);
            }
            else{
                randomized_letter=e.key;
            }
            real_text=real_text.concat(randomized_letter);
            let original_length=real_text.length;
            
            
            
            let clsname=document.querySelector(".letter-current");
            if(randomized_letter==para[original_length-1]){
                addclass(clsname,"correct");
                calculations_char(true);
            }else{
                addclass(clsname,"wrong");
                calculations_mistake(true);
            }
            calculations_acc(real_text.length);
            
            removeclass(clsname,"current");
            addclass(document.querySelector(".letter"),"current");
            if(!clsname.previousSibling && first_letter!=1){
                let next_word=document.querySelector(".word-current");
                removeclass(next_word,"current");
                addclass(next_word.nextSibling,"current");
            }
            first_letter=0;
            
        }else{
            alert("Limit reached!");
        }
        
    }
    else if (e.key === "Backspace"){
        real_text=real_text.substring(0, real_text.length - 1);
        if(!first_letter){
            let test=document.querySelector(".letter-current");
            
            let word_curr=document.querySelector(".word-current");
            
            
            
            if(test.previousSibling){
                
                
                
                if(test.previousSibling.previousSibling){
                    let clsname = test.previousSibling;
                    removeclass(test,"current");
                    if(clsname.className.includes("correct")){
                        removeclass(clsname,"correct");
                        calculations_char(false);
                    }
                    else{
                        removeclass(clsname,"wrong");
                        calculations_mistake(false);
                    }
                    addclass(clsname,"current");
                }else{
                    if(word_curr.previousSibling){
                        removeclass(word_curr,"current");
                        addclass(word_curr.previousSibling,"current");
                        let clsname = test.previousSibling;
                        removeclass(test,"current");
                        if(clsname.className.includes("correct")){
                            removeclass(clsname,"correct");
                            calculations_char(false);
                        }
                        else{
                            removeclass(clsname,"wrong");
                            calculations_mistake(false);
                        }
                        addclass(clsname,"current");
                    }else{
                        let clsname = test.previousSibling;
                        removeclass(test,"current");
                        if(clsname.className.includes("correct")){
                            removeclass(clsname,"correct");
                            calculations_char(false);
                        }
                        else{
                            removeclass(clsname,"wrong");
                            calculations_mistake(false);
                        }
                        addclass(clsname,"current");
                        first_letter=1;
                    }
                }
                
            }else if(!word_curr.previousSibling && !test.previousSibling && test.parentNode.className=='word-current'){
                first_letter=1;
                
            }else{
                
                if(!word_curr.lastChild.previousSibling){
                    removeclass(word_curr,"current");
                    addclass(word_curr.previousSibling,"current");
                    removeclass(test,"current");
                    if(word_curr.lastChild.className.includes("correct")){
                        removeclass(word_curr.lastChild,"correct");
                        calculations_char(false);
                    }
                    else{
                        removeclass(word_curr.lastChild,"wrong");
                        calculations_mistake(false);
                    }
                    
                    addclass(word_curr.lastChild,"current");
                }else if(word_curr.previousSibling){
                    removeclass(test,"current");
                    if(word_curr.lastChild.className.includes("correct")){
                        removeclass(word_curr.lastChild,"correct");
                        calculations_char(false);
                    }
                    else{
                        removeclass(word_curr.lastChild,"wrong");
                        calculations_mistake(false);
                    }
                    addclass(word_curr.lastChild,"current");
                }else{
                    removeclass(test,"current");
                    let clsname = word_curr.lastChild;
                    if(clsname.className.includes("correct")){
                        removeclass(clsname,"correct");
                        calculations_char(false);
                    }
                    else{
                        removeclass(clsname,"wrong");
                        calculations_mistake(false);
                    }
                    addclass(clsname,"current");
                }
                
            }
            calculations_acc(real_text.length);
            
        }
    }
    else if(e.key==="Escape"){
        alert("Hey, don't you even think about leaving this cosmic spectacle! We've got more pixels than a constellation, more drama than a soap opera, and more laughs than a stand-up comedy show on Jupiter! So, sit back, relax, and enjoy the ride - your screen's not going anywhere, and neither are you! ");
        console.log("Ctrl + R detected");
    }
    document.getElementsByClassName("contest-sub-content")[0].innerHTML=real_text+"&nbsp"+sub_caret;
    word_count=real_text.length;
    update_cpm();
})
