function updeteClock() {
    const clock = document.querySelector(".clock");
    clock.innerText = new Date().toLocaleTimeString();
}
setInterval(updeteClock, 1000);