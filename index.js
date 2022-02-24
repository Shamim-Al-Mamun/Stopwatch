var min = 0;
var sec = 0;
var miliSec = 0;
var timer;
var blinker;
var n = 0;
var xlap = 0;

//Initializing minute, second and milisecond values
function callTimer() {
    miliSec++;
    if (miliSec < 100) {
        if (miliSec === 99) {
            miliSec = 0;
            sec++;
            if (sec === 60)  {
                sec = 0;
                min++;
            }
        }
    }
    else{
        miliSec = 0;
    }
    //Printing the values to the browser
    document.getElementById("timer").innerHTML = min + ":" + sec + ":" + miliSec;
}

    //Disable lap button before start
    document.getElementById("lap").disabled = true;
    document.getElementById("lap").style.color = "gray";

function start() {
    //Disable start button after start
    document.getElementById("start").disabled = true;
    document.getElementById("start").style.color = "gray";

    //Enable stop button 
    document.getElementById("stop").disabled = false;
    document.getElementById("stop").style.color = "white";

    timer = setInterval(callTimer, 10);

    //Enable Lap button after start
    if(!document.getElementById("lap3").innerHTML){
        document.getElementById("lap").disabled = false;
        document.getElementById("lap").style.color = "white";
    }
    //clear blink
    document.getElementById("timer").style.opacity = "1"
    clearInterval(blinker);
}

function stop() {
    //enable start button after start
    document.getElementById("start").disabled = false;
    document.getElementById("start").style.color = "white";

    //Disable lap button after stop
    document.getElementById("lap").disabled = true;
    document.getElementById("lap").style.color = "gray";

    //Diable stop button after stop
    document.getElementById("stop").disabled = true;
    document.getElementById("stop").style.color = "gray";
    clearInterval(timer);

    //blink while stop
    if(!miliSec ==0 || !sec ==0 || !min ==0){
        blinker =setInterval(()=>{
        (n % 2  == 0)   ? document.getElementById("timer").style.opacity = "1"
                        : document.getElementById("timer").style.opacity = "0";
        n++;
        }, 500);
    }
}

function reset() {
    clearInterval(timer);
    clearInterval(blinker);
    min = 0;
    sec = 0;
    miliSec = 0;
    xlap = 0;
    document.getElementById("timer").innerHTML = min + ":" + sec + ":" + miliSec;

    //clear laps
    document.getElementById("lap1").innerHTML="";
    document.getElementById("lap2").innerHTML="";
    document.getElementById("lap3").innerHTML="";

    //enable start button after start
    document.getElementById("start").disabled = false;
    document.getElementById("start").style.color = "white";

    document.getElementById("timer").style.opacity = "1" 

    //Diable stop button after stop
    document.getElementById("stop").disabled = true;
    document.getElementById("stop").style.color = "gray";
}

function lap(){
    if(!miliSec ==0 || !sec ==0 || !min ==0){
        if (xlap ===0){
            document.getElementById("lap1").innerHTML=min + ":" + sec +":" + miliSec;
        }
        if (xlap ===1){
            document.getElementById("lap2").innerHTML=min + ":" + sec +":" + miliSec;
        }
        if (xlap ===2){
            document.getElementById("lap3").innerHTML=min + ":" + sec +":" + miliSec;

            //disable Lap Button after 3 laps
            document.getElementById("lap").disabled = true;
            document.getElementById("lap").style.color = "gray";
        }
        if(xlap >= 2){
            xlap = 0;
        }
        else{
            xlap ++;
        }
    }
}