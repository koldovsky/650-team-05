// --------------------------------------- countdown ---------------------------------------
let days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const currentYear = new Date().getFullYear();
const newYearTime = new Date("January 1 2022 00:00:00");

// Update CountDown
function updateCountDown() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.innerText = d;
    console.log(d);
    hours.innerHTML = h < 10 ? "0" + h : h;
    console.log(d);
    minutes.innerHTML = m < 10 ? "0" + m : m;
    console.log(d);
    seconds.innerHTML = s < 10 ? "0" + s : s;
    console.log(d);

}

setInterval(updateCountDown, 1000)
// --------------------------------------- countdown ---------------------------------------

