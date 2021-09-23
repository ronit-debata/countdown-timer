var secs = 10;

setTimeout(Decrement,1000); 

function Decrement() {
    document.getElementById("timer").innerHTML = secs;
    secs--;
    if(secs !== -1)
    {
        setTimeout(Decrement,1000);
    }
    else{
        document.getElementById("timer").style.fontFamily = "Satisfy";
        document.getElementById("timer").classList.add("message");
        document.getElementById("timer").innerHTML = "Happy New Year!";
    }
}