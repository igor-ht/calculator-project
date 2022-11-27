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
})
  
// info display
const infoPopUpAlert = document.getElementById("closePopUp");
infoPopUpAlert.addEventListener('click', () => infoLog())
const info = document.getElementById('infoButton');
info.addEventListener('click', () => infoLog())
function infoLog() {
    const p: HTMLElement = document.getElementById('infoPopUp');
    const screen: HTMLElement = document.getElementById('screenDisplay');
    const button: HTMLElement = document.getElementById('infoButton');
    if (p.style.display === 'block') {
        p.style.display = 'none';
        screen.style.display = 'block';
        button.style.backgroundColor =  'rgba(128, 128, 128, 0.661)';
    } else {
        p.style.display = 'block';
        screen.style.display = 'none';
        button.style.backgroundColor =  'yellowgreen';
        
    }
}

// open/close history log
const hist = document.getElementById('histButton');
hist.addEventListener('click', () => openHist());
function openHist() {
    const x: HTMLElement = document.getElementById("hist");
    const histButton: HTMLElement = document.getElementById('histButton');
    if (x.style.display === "grid") {
        x.style.display = "none";
        histButton.style.backgroundColor =  'rgba(128, 128, 128, 0.661)';
    }
    else {
        x.style.display = "grid";
        histButton.style.backgroundColor = 'yellowgreen';
    }
}
// refresh histLog
const refreshHistLog = document.getElementById('refresh');
refreshHistLog.addEventListener('click', () => refresh());
function refresh () {
    const histlog: HTMLElement = document.getElementById('histLog');
    histlog.innerHTML = '';
}

// open/close scientific calculator
const sci = document.getElementById('sciButton');
sci.addEventListener('click', () => openSci());
function openSci() {
    const x: HTMLElement = document.getElementById("sci");
    const sciButton: HTMLElement = document.getElementById('sciButton');
    if (x.style.display === "grid") {
        x.style.display = "none";
        sciButton.style.backgroundColor =  'rgba(128, 128, 128, 0.661)';
        if (mode === 'remote') return;
        mode = 'basic';
    }
    else {
        x.style.display = "grid";
        sciButton.style.backgroundColor = 'yellowgreen';
        if (mode === 'remote') return;
        mode = 'sci';
    }
}

// light/dark mode feature for screen display
const lightButton = document.getElementById('lightButton');
lightButton.addEventListener('click', () => lightMode());
function lightMode() {
    const x: HTMLElement = document.getElementById("screenDisplay");
    const b: HTMLElement = document.getElementById("lightButton");
    if (x.style.backgroundColor !== "rgb(227, 227, 85)") {
        x.style.backgroundColor = "rgb(227, 227, 85)";
        x.style.color = "black";
        b.style.backgroundColor = 'yellowgreen';
    }
    else {
        b.style.backgroundColor = 'rgba(128, 128, 128, 0.661)';
        x.style.backgroundColor = "black";
        x.style.color = "white";
    }
}


// remote mode by api
const remoteButton = document.getElementById('remoteButton');
remoteButton.addEventListener('click', () => remoteMode());
function remoteMode() {
    firstNumber = '';
    secondNumber = '';
    mathOperation = undefined;
    oppArray = [];
    allNum = [];
    mode = 'remote';
    activeRemote();
}

const formRemote = document.querySelector('form');
formRemote.addEventListener('submit', () => getRemoteResult());

function activeRemote () {
    let input = document.getElementById('formRemote');
    let screen = document.getElementById('output');
    let button = document.getElementById('remoteButton');
    let sci = document.getElementById('sci');
    if (input.style.display === 'block') {
        input.style.display = 'none';
        screen.style.display = 'block';
        screen.innerHTML = '';
        button.style.backgroundColor = 'rgba(128, 128, 128, 0.661)';
        if (sci.style.display === 'grid') {
            mode = 'sci';
        } else mode = 'basic';
    } else {
        input.style.display = 'block';
        screen.style.display = 'none';
        screen.innerHTML = '';
        button.style.backgroundColor = 'yellowgreen';
    }
}

async function getRemoteResult( ) {
    let input = document.querySelector('form');
    let expression = input.querySelector('input');
    let expr = encodeURIComponent(expression.value);
    let url = 'http://api.mathjs.org/v4/?expr=' + expr;
    let response = await fetch(url);
    let stats = await response.json();
    let print = expression.value + ' = ' + stats;
    expression.value = stats;
    printInHistLog(print);
}
 function printInHistLog (str: String) {
    let histLog = document.getElementById('histLog');
    let hist = document.getElementById('hist');
    hist.style.display = 'grid';
    histLog.innerHTML += str + '<br>';
 }
