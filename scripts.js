// Write your JavaScript code here.
// Remember to pay attention to page loading!


function init() {
    let takeOff = null;
    let landing = null;
    let missionAbort = null;
    let flightStatus = null;
    let shuttleHeight = null;
    let move = null;
    let rocket = document.getElementById("rocket");
    rocket.style.position = 'absolute';
    rocket.style.left = '0px';
    rocket.style.bottom = '0px';
    rocket.style.top = '0px';
    rocket.style.right = '0px';

    missionAbort = document.getElementById("missionAbort");
    takeOff = document.getElementById("takeoff");
    flightStatus = document.getElementById("flightStatus");
    shuttleHeight = document.getElementById("spaceShuttleHeight");
    landing = document.getElementById("landing");


    function launch() {
        window.confirm("Confirm that the shuttle is ready for take off.");
        flightStatus.innerHTML = "Shuttle in Flight";
        document.getElementById("shuttleBackground").style.backgroundColor = "blue";
        shuttleHeight.innerHTML = "10,000";
    };

    function land() {
        window.alert("The shuttle is landing. Landing Gear Engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        shuttleHeight.innerHTML = "0";
    };

    function abort() {
        window.confirm("Confirm you want ot abort the mission.");
        flightStatus.innerHTML = "Mission aborted.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        shuttleHeight.innerHTML = "0";
    };

    takeOff.addEventListener("click", launch);
    landing.addEventListener("click", land);
    missionAbort.addEventListener("click", abort);

    let up = document.getElementById("up");
    up.addEventListener("click", function() {
        // console.log(rocket.style.top);
        move = parseInt(rocket.style.top) - 10 + 'px';
        rocket.style.top = move;
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;

    });

    let left = document.getElementById("left");
    left.addEventListener("click", function() {
        move = parseInt(rocket.style.left) - 10 + 'px';
        rocket.style.left = move;
    });
    let right = document.getElementById("right");
    right.addEventListener("click", function() {
        move = parseInt(rocket.style.left) + 10 + 'px';
        rocket.style.left = move;


    });

    let down = document.getElementById("down");
    down.addEventListener("click", function() {
        move = parseInt(rocket.style.top) + 10 + 'px';
        rocket.style.top = move;
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;


    });


    // function moveDown() {
    //     let elem = document.getElementById("shuttleBackground");
    //     elem.style.paddingTop += 10;
    //     var pos = 0;
    //     var id = setInterval(frame, 10);
    //     function frame() {
    //         if (pos == 350) {
    //             clearInterval(id);
    //         } else {
    //             pos++;
    //             elem.style.top = pos + "px";
    //             // elem.style.left = pos + "px";
    //         }
    //     }
    // }

    // function moveUp() {
    //     var elem = document.getElementById("rocket");
    //     var pos = 0;
    //     var id = setInterval(frame, 10);
    //     function frame() {
    //         if (pos == 350) {
    //             clearInterval(id);
    //         } else {
    //             //  pos++;
    //             elem.style.bottom = pos + "px";
    //             // elem.style.left = pos + "px";
    //         }
    //     }
    // }

    // function moveLeft() {
    //     var elem = document.getElementById("rocket");
    //     var pos = 0;
    //     var id = setInterval(frame, 10);
    //     function frame() {
    //         if (pos == 350) {
    //             clearInterval(id);
    //         } else {
    //             // pos++;
    //             elem.style.left = pos + "px";
    //         }
    //     }
    // }
    // function moveRight() {
    //     var elem = document.getElementById("rocket");
    //     var pos = 0;
    //     var id = setInterval(frame, 10);
    //     function frame() {
    //         if (pos == 350) {
    //             clearInterval(id);
    //         } else {
    //             //  pos++;
    //             elem.style.right = pos + "px";
    //         }
    //     }
    // }







    // down.addEventListener("click", moveDown);
    // up.addEventListener("click", moveUp);
    // left.addEventListener("click", moveLeft);
    // right.addEventListener("click", moveRight);

}



window.addEventListener("load", init);
