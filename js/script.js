//DOM Elements
const time = document.getElementById("time"),
    greeting = document.getElementById("greeting"),
    name = document.getElementById("name"),
    focus = document.getElementById("focus");

//Show time
function showTime(){
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

//output time
time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
 
 setTimeout(showTime,1000);
}

//Add zero
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

// Set Background and Greeting
function setBgGreet () {
    let today = new Date(),
       hour = today.getHours();

    if (hour < 12) {
        //morning
        document.body.style.backgroundImage = "url('../img/beautiful-color-dawn-217114.jpg')";
        greeting.textContent = "Good Morning" ;

    }   else if (hour < 18){
        //afternoon
        document.body.style.backgroundImage = "url('../img/blue-sky-buildings-coconut-trees-196663.jpg')";
        greeting.textContent = "Good Afternoon" ;

    } else {
        //Evening
        document.body.style.backgroundImage = "url('../img/astronomy-astrophotography-calm-1542493.jpg')";
        greeting.textContent = "Good Evening" ;
        document.body.style.color = "white";

    }
}

// Get Name
function getName(){
    if(localStorage.getItem("name") === null) {
        name.textContent = "[Enter Name]";
    } else {
        name.textContent = localStorage.getItem("name");
    }
}

// Set Name
function setName (e) {
    if (e.type === "keypress") {    
        // Checking if Enter is pressed
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem("name", e.target.innerText);
            name.blur();
        }

    } else {
        localStorage.setItem("name", e.target.innerText);
    }
}


// Get Focus
function getFocus(){
    if(localStorage.getItem("focus") === null) {
        focus.textContent = "[Enter focus]";
    } else {
        focus.textContent = localStorage.getItem("focus");
    }
}

// Set Focus
function setFocus (e) {
    if (e.type === "keypress") {    
        // Checking if Enter is pressed
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem("focus", e.target.innerText);
            focus.blur();
        }

    } else {
        localStorage.setItem("name", e.target.innerText);
    }
}

name.addEventListener("keypress", setName);
name.addEventListener("blurr", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blurr", setFocus);

// run
showTime();
setBgGreet();
getName();
getFocus();
