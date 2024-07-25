var countDownDate = new Date("Dec 12,2024 00:00:00");
var x = setInterval(function(){
    var now = new Date().getTime();
    var countdown = countDownDate - now;
    
    var dayss = Math.floor(countdown/(1000*60*60*24));
    var hourss = Math.floor((countdown % (1000*60*60*24))/(1000*60*60));
    var minutess = Math.floor((countdown %(1000*60*60))/(1000*60));
    var secondss = Math.floor((countdown%(1000*60))/1000);

    document.getElementById("daysss").innerHTML = dayss;
    document.getElementById("hoursss").innerHTML = hourss;
    document.getElementById("minutesss").innerHTML = minutess;
    document.getElementById("secondsss").innerHTML = secondss;

    if(countdown < 0){
        clearInterval(x);
        document.getElementById("daysss").innerHTML = "00";
        document.getElementById("hoursss").innerHTML = "00";
        document.getElementById("minutesss").innerHTML = "00";
        document.getElementById("secondsss").innerHTML = "00";
    }
},1000);
