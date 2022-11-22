// settings buttons
function settings() {
    
}

// info button
function infoLog() {
    const p = document.getElementById('infoPopUp');
    const screen = document.getElementById('screenDisplay');
    const button = document.getElementById('infoButton');
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
    const x = document.getElementById("hist");
    const histButton = document.getElementById('histButton');
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
    const histlog = document.getElementById('histLog');
    histlog.innerHTML = '';
}

// open/close scientific calculator
function openSci() {
    const x = document.getElementById("sci");
    const sciButton = document.getElementById('sciButton');
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
    const x = document.getElementById("sci");
    const y = document.getElementById("hist");
    x.style.display = "none";
    y.style.display = "none";
    const sciButton = document.getElementById('sciButton');
    sciButton.style.opacity = '1.0';
    const histButton = document.getElementById('histButton');
    histButton.style.opacity = '1.0';
}

// light/dark mode feature for screen display
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