const watchDocument = document.querySelector("#watch");
let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

function init() {
    watch();
    interval = setInterval(watch, 1000);
}

function watch() {
    seconds++
    
    if (seconds === 60) {
        minutes++;
        seconds = 0;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    watchDocument.innerHTML = hours + ":" + minutes + ":" + seconds;
}