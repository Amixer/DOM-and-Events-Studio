// Write your JavaScript code here.
// Remember to pay attention to page loading!
let takeOff = null;
let landing = null;
let missionAbort = null;
let flightStatus = null;
let shuttleHeight = null;
let up = null;
let left = null;
let right = null;
let down = null;
// let shuttleBackground = null;

function init() {
    missionAbort = document.getElementById("missionAbort");
    takeOff = document.getElementById("takeoff");
    flightStatus = document.getElementById("flightStatus");
    shuttleHeight = document.getElementById("spaceShuttleHeight");
    landing = document.getElementById("landing");

    up = document.getElementById("up");
    left = document.getElementById("left");
    right = document.getElementById("right");
    down = document.getElementById("down");


    function launch() {
        let command = window.confirm("Confirm that the shuttle is ready for take off.");
        flightStatus.innerHTML = "Shuttle in Flight";
        document.getElementById("shuttleBackground").style.backgroundColor = "blue";
        shuttleHeight.innerHTML = "10,000";
    };

    function land() {
        window.alert("The shuttle is landing. Landing Gear Engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        shuttleHeight.innerHTML = "0";

    }

    function abort() {
        window.confirm("Confirm you want ot abort the mission.");
        flightStatus.innerHTML = "Mission aborted.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        shuttleHeight.innerHTML = "0";
    }

    function move() {
        let pic = document.getElementById("rocket");
        let pos = 0;
        let id = setInterval(frame, 10);
        function frame() {
            if (pos == 350) {
                clearInterval(id);
            } else {
                pos++;
                pic.style.top = pos + "px";
                pic.style.left = pos + "px";
            }
        }
    }



















    takeOff.addEventListener("click", launch);
    landing.addEventListener("click", land);
    missionAbort.addEventListener("click", abort);
    down.addEventListener("click", lower);









}


window.onload = init;
