// event for design setting by user
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.search;
  if (path) {
    const config = new URLSearchParams(path);
    const classSet: HTMLElement = document.getElementById('html');
    classSet.style.backgroundColor = config.get("bg-color");
    classSet.style.fontFamily = config.get('font-style');
    classSet.classList.add(config.get('mode'));
  }
});
  


// info button
function infoLog() {
    const p: HTMLElement = document.getElementById('infoPopUp');
    const screen: HTMLElement = document.getElementById('screenDisplay');
    const button: HTMLElement = document.getElementById('infoButton');
    if (p.style.display === 'block') {
        p.style.display = 'none';
        screen.style.display = 'block';
        button.style.opacity = '1.0';
    } else {
        p.style.display = 'block';
        screen.style.display = 'none';
        button.style.opacity = '0.5';
    }
}
// open/close history log
function openHist() {
    const x: HTMLElement = document.getElementById("hist");
    const histButton: HTMLElement = document.getElementById('histButton');
    if (x.style.display === "grid") {
        x.style.display = "none";
        histButton.style.opacity = '1.0';
    }
    else {
        x.style.display = "grid";
        histButton.style.opacity = '0.5';
    }
}
// refresh histLog
function refresh () {
    const histlog: HTMLElement = document.getElementById('histLog');
    histlog.innerHTML = '';
}

// open/close scientific calculator
function openSci() {
    const x: HTMLElement = document.getElementById("sci");
    const sciButton: HTMLElement = document.getElementById('sciButton');
    if (x.style.display === "grid") {
        x.style.display = "none";
        sciButton.style.opacity = '1.0';
    }
    else {
        x.style.display = "grid";
        sciButton.style.opacity = '0.5';
    }
}

//  default basic mode
function basicMode() {
    const x: HTMLElement = document.getElementById("sci");
    const y: HTMLElement = document.getElementById("hist");
    x.style.display = "none";
    y.style.display = "none";
    const sciButton: HTMLElement = document.getElementById('sciButton');
    sciButton.style.opacity = '1.0';
    const histButton: HTMLElement = document.getElementById('histButton');
    histButton.style.opacity = '1.0';
}

// light/dark mode feature for screen display
function lightMode() {
    const x: HTMLElement = document.getElementById("screenDisplay");
    const b: HTMLElement = document.getElementById("lightButton");
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
