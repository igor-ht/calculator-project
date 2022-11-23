// event for design setting by user
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.search;
    if (path) {
        const config = new URLSearchParams(path);
        const classSet = document.getElementById('html');
        classSet.style.backgroundColor = config.get("bg-color");
        classSet.style.fontFamily = config.get('font-style');
        classSet.classList.add(config.get('mode'));
    }
});
// info display
const info = document.getElementById('infoButton');
info.addEventListener('click', () => infoLog());
function infoLog() {
    const p = document.getElementById('infoPopUp');
    const screen = document.getElementById('screenDisplay');
    const button = document.getElementById('infoButton');
    if (p.style.display === 'block') {
        p.style.display = 'none';
        screen.style.display = 'block';
        button.style.opacity = '1.0';
    }
    else {
        p.style.display = 'block';
        screen.style.display = 'none';
        button.style.opacity = '0.5';
    }
}
// open/close history log
const hist = document.getElementById('histButton');
hist.addEventListener('click', () => openHist());
function openHist() {
    const x = document.getElementById("hist");
    const histButton = document.getElementById('histButton');
    if (x.style.display === "grid") {
        x.style.display = "none";
        histButton.style.backgroundColor = 'rgba(128, 128, 128, 0.661)';
    }
    else {
        x.style.display = "grid";
        histButton.style.backgroundColor = 'darkgreen';
    }
}
// refresh histLog
const refreshHistLog = document.getElementById('refresh');
refreshHistLog.addEventListener('click', () => refresh());
function refresh() {
    const histlog = document.getElementById('histLog');
    histlog.innerHTML = '';
}
// open/close scientific calculator
const sci = document.getElementById('sciButton');
sci.addEventListener('click', () => openSci());
function openSci() {
    const x = document.getElementById("sci");
    const sciButton = document.getElementById('sciButton');
    if (x.style.display === "grid") {
        mode = 'basic';
        x.style.display = "none";
        sciButton.style.backgroundColor = 'rgba(128, 128, 128, 0.661)';
    }
    else {
        mode = 'sci';
        x.style.display = "grid";
        sciButton.style.backgroundColor = 'darkgreen';
    }
}
//default basic mode
const basicButton = document.getElementById('basicButton');
basicButton.addEventListener('click', () => basicMode());
function basicMode() {
    const sci = document.getElementById('sci');
    const hist = document.getElementById('hist');
    sci.style.display = 'grid';
    hist.style.display = 'grid';
    openSci();
    openHist();
}
// light/dark mode feature for screen display
const lightButton = document.getElementById('lightButton');
lightButton.addEventListener('click', () => lightMode());
function lightMode() {
    const x = document.getElementById("screenDisplay");
    const b = document.getElementById("lightButton");
    if (x.style.backgroundColor !== "rgb(227, 227, 85)") {
        x.style.backgroundColor = "rgb(227, 227, 85)";
        x.style.color = "black";
        b.style.opacity = "0.5";
    }
    else {
        b.style.opacity = "1.0";
        x.style.backgroundColor = "black";
        x.style.color = "white";
    }
}
