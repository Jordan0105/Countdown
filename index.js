//HTML Elements

const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");
const pauseBtn = document.getElementById("pause");
const timeRemaining = document.getElementById("timeRemaining");

let seconds = 0, minutes = 0, hours = 0;

let interval = 0;
let timerOver = 0;

const audio = new Audio('Sound.mp3');

let secondWord = '', minuteWord = '', hourWord = '', words = '';

//On-click Start Button

function startTimer() {

    if (startBtn.innerHTML === 'Start') {

        let getHours = document.getElementById("hoursInput").value;
        let getMinutes = document.getElementById("minutesInput").value;
        let getSeconds = document.getElementById("secondsInput").value;

        hours = getHours === "" ? 0 : parseInt(getHours);

        minutes = getMinutes === "" ? 0 : parseInt(getMinutes);

        seconds = getSeconds === "" ? 0 : parseInt(getSeconds);

        timerOver = (hours * 3600) + (minutes * 60) + seconds;
        console.log(timerOver);
        start();
        // }
    }
    else {
        startBtn.disabled = true;
        interval = setInterval(timeIsRunning, 1000);
    }

}


//On-click Pause Button

function pauseTimer() {

    if (timerOver !== 0) {
        startBtn.innerHTML = "Resume";
        startBtn.disabled = false;
    }
    clearInterval(interval);
    audio.pause();
}

//On-click Reset Button

function resetTimer() {

    clearInterval(interval);
    audio.pause();

    let getHours = document.getElementById("hoursInput");
    let getMinutes = document.getElementById("minutesInput");
    let getSeconds = document.getElementById("secondsInput");

    getHours.value = '', getMinutes.value = '', getSeconds.value = '';
    seconds = 0, minutes = 0, hours = 0, timerOver = 0;

    startBtn.disabled = false, startBtn.innerHTML = "Start", timeRemaining.innerHTML = "";
    audio.pause();
}

function start() {

    timerOver !== 0 ? (startBtn.disabled = true, interval = setInterval(timeIsRunning, 1000)) : null;

}

function timeIsRunning() {

    timerOver -= 1, seconds -= 1;

    if (timerOver === 0) {

        startBtn.disabled = false;
        pauseTimer();
        timeRemaining.innerHTML = "Time's Up";
        audio.play();
    }

    else {

        seconds === -1 ? (minutes -= 1, seconds = 59) : null;

        minutes === -1 ? (hours -= 1, minutes = 59) : null;

        if (seconds === 0)
            secondWord = ""

        else if (seconds === 1)
            secondWord = `${seconds} second`;

        else if (seconds > 1)
            secondWord = `${seconds} seconds`;


        minuteWord = minutes === 1 ? `${minutes} minute ` : minutes > 1 ? `${minutes} minutes ` : '';
        hourWord = hours === 1 ? `${hours} hour ` : hours > 1 ? `${hours} hours ` : '';

        words = `${hourWord} ${minuteWord}  ${secondWord} left`;

        timeRemaining.innerHTML = words;

    }

}

//Event Listeners

startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);
pauseBtn.addEventListener("click", pauseTimer);
