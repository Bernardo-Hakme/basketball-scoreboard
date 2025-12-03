let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el");
let homeHeader = document.getElementById("home-header");
let guestHeader = document.getElementById("guest-header");

let countHome = 0;
let countGuest = 0;

function check() {
    if (countHome > countGuest) {
        homeHeader.style.color = 'green';
        guestHeader.style.color = 'red';
    } else if (countHome < countGuest) {
        homeHeader.style.color = 'red';
        guestHeader.style.color = 'green';
    } else {
        homeHeader.style.color = 'yellow';
        guestHeader.style.color = 'yellow';
    }
}

function addOneHome() {
    countHome++;
    homeEl.textContent = countHome;
    check();
}

function addTwoHome() {
    countHome += 2;
    homeEl.textContent = countHome;
    check();
}

function addThreeHome() {
    countHome += 3;
    homeEl.textContent = countHome;
    check();
}

function addOneGuest() {
    countGuest++;
    guestEl.textContent = countGuest;
    check();
}

function addTwoGuest() {
    countGuest += 2;
    guestEl.textContent = countGuest;
    check();
}

function addThreeGuest() {
    countGuest += 3;
    guestEl.textContent = countGuest;
    check();
}

function reset() {
    countHome = 0;
    countGuest = 0;
    homeEl.textContent = countHome;
    guestEl.textContent = countGuest;
    check();
}

