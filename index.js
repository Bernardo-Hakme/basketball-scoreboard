let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el");

let countHome = 0;
let countGuest = 0;

function addOneHome() {
    countHome++;
    homeEl.textContent = countHome;
}

function addTwoHome() {
    countHome += 2;
    homeEl.textContent = countHome;
}

function addThreeHome() {
    countHome += 3;
    homeEl.textContent = countHome;
}

function addOneGuest() {
    countGuest++;
    guestEl.textContent = countGuest;
}

function addTwoGuest() {
    countGuest += 2;
    guestEl.textContent = countGuest;
}

function addThreeGuest() {
    countGuest += 3;
    guestEl.textContent = countGuest;
}

function reset() {
    homeEl.textContent = 0;
    guestEl.textContent = 0;
}

