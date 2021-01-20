const yearIn = document.querySelector("#yearAndMon");
const dateAndClock = document.querySelector("#dateAndClock");

function getTime() {
    const forDay = new Date();
    const year = forDay.getFullYear();
    const mon = forDay.getMonth() + 1;
    const date = forDay.getDate();
    const hours = forDay.getHours();
    const min = forDay.getMinutes();
    const sec = forDay.getSeconds();
    yearIn.innerText = `${year}.${mon < 10 ? `0${mon}` : mon}.${
        date < 10 ? `0${date}` : date}`
    dateAndClock.innerText =`${hours < 10 ? `0${hours}` : hours}:${
        min < 10 ? `0${min}`: min}:${sec < 10 ? `0${sec}`: sec}`
}

function init() {
    getTime();
    setInterval(getTime,1000);
}

init();