let text = document.getElementsByTagName("h3")[0];

let btnStart = document.getElementById("start");
let btnStop = document.getElementById("stop");
let btnReset = document.getElementById("reset");

btnStart.addEventListener("click", start);
btnStop.addEventListener("click", stop);
btnReset.addEventListener("click", reset);

let secs = 0;
let cont = 0;
let minutes = 0;
let hours = 0;

let sumNum = function () {
	secs += 1;

	if (secs == 60) {
		minutes += 1;
		secs = 0;
	}

	if (minutes == 60) {
		hours += 1;
		minutes = 0;
		secs = 0;
	}

	if (hours != 0) {

		if( hours == 1){
			text.innerHTML = hours + " hour " + minutes + " minutes and " + secs + " seconds.";

		}
		else{
			text.innerHTML = hours + " hours " + minutes + " minutes and " + secs + " seconds.";
	
		}

	} else {
		if (minutes != 0 && hours == 0) {
			text.innerHTML = minutes + " minutes and " + secs + " seconds.";
		} else {
			text.innerHTML = "Seconds : " + secs;
		}
	}
}

let tm;

function start() {
	cont += 1;
	if (cont <= 1) {
		tm = setInterval(sumNum, "1000");
	}

}

function stop() {
	clearInterval(tm);
	cont = 0;
}

function reset() {
	stop();
	secs = 0;
	minutes = 0;
	hours = 0;
	text.innerHTML = "Seconds : " + secs;
}