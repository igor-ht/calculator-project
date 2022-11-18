// info button
function infoLog() {
  const p = "Developer name: Igor Hamburger\nCalculator Version: 1.0\nDigital calculator with all basics functions and scientific calculator.";
  alert(p);
}

// open/close history log
function openHist(){
  const x = document.getElementById("hist");
  if (x.style.display === "grid") {
    x.style.display = "none";
  } else {
    x.style.display = 'grid';
  }
}

// open/close scientific calculator
function openSci() {
  const x = document.getElementById("sci");
  if (x.style.display === "grid") {
    x.style.display = "none";
  } else {
    x.style.display = "grid";
  }
}

//  default basic mode
function basicMode() {
  const x = document.getElementById("sci");
  const y = document.getElementById("hist");
  x.style = 'none';
  y.style = 'none';
}

// light/dark mode feature for screen display
function lightMode() {
  const x = document.getElementById("screenDisplay");
  if (x.style.backgroundColor !== 'yellow') { 
    x.style.backgroundColor = 'yellow';
    x.style.color = 'black';
  } else {
    x.style.backgroundColor = 'black';
    x.style.color = 'white';
  }
}




