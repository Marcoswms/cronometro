//setInterval - faz o controle de tempo
const watchDocument = document.querySelector("#watch");
let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

function start() {
    watch();
    interval = setInterval(watch, 3);
}

const pause = () => {
    clearInterval(interval);
}

const clearAll = () => {
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    watchDocument.innerHTML = "00:00:00";
}

const digitZero = (digit) => {
    if (digit < 10) {
        return `0${digit}`;
    }
    else {
        return digit;
    }
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
    watchDocument.innerHTML = 
    digitZero(hours) + ":" + digitZero(minutes) + ":" + digitZero(seconds);
}