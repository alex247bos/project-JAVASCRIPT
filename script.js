let startTime;
let elapsedTime = 0;
let timerInterval;
let running = false;

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 1000;
    let ms = Math.floor(diffInMs);
    let cs = Math.floor(ms / 10); // Convert milliseconds to centiseconds

    let formattedHH = hh.toString().padStart(2, "0");
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedCS = cs.toString().padStart(2, "0");

    return `${formattedHH}:${formattedMM}:${formattedSS}.${formattedCS}`;
}

function print(txt) {
    document.getElementById("display").innerText = txt;
}

function start() {
    if (!running) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(function printTime() {
            elapsedTime = Date.now() - startTime;
            print(timeToString(elapsedTime));
        }, 10); // Update every 10 milliseconds to reflect centiseconds
        running = true;
        document.getElementById("startStop").innerText = 'Stop';
    } else {
        clearInterval(timerInterval);
        running = false;
        document.getElementById("startStop").innerText = 'Start';
    }
}

function reset() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    print(timeToString(elapsedTime)); // Display reset time
    running = false;
    document.getElementById("startStop").innerText = 'Start';
}

document.getElementById("startStop").addEventListener("click", start);
document.getElementById("reset").addEventListener("click", reset);
