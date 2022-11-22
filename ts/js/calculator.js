window.firstNumber = undefined;
window.secondNumber = undefined;
window.mathOperation = undefined;

// reset button
function resetButton() {
  let output = document.getElementById("output");
  output.innerHTML = "";
  firstNumber = undefined;
  secondNumber = undefined;
  mathOperation = undefined;
}

// numbers click
function clickNumber(input) {
  let output = document.getElementById("output");
  if (input === ".") {
    let screenDisplay = output.textContent;
    let check = screenDisplay.includes(input);
    if (screenDisplay.length == 0 || screenDisplay === "-") {
      return;
    } else {
      if (check === false) {
        output.innerHTML += input;
        return;
      } else {
        return;
      }
    }
  } else {
    output.innerHTML += input;
  }
}

// operator selection
function clickOperator(operator) {
  let output = document.getElementById("output");
  if (output.textContent === "-") {
    if (output.textContent === "") {
      mathOperation = operator;
    }
  }
  if (output.textContent.length > 0) {
    if (firstNumber === undefined) {
      firstNumber = output.textContent;
      output.innerHTML = "";
      mathOperation = operator;
      return;
    } else {
      if (secondNumber === undefined) {
        secondNumber = output.textContent;
        output.innerHTML = "";
        return result(operator);
      } else {
        mathOperation = operator;
        return;
      }
    }
  } else {
    mathOperation = operator;
    return;
  }
}

// operation result
function result(operator) {
  let ans = mathOperation(firstNumber, secondNumber);
  firstNumber = ans;
  secondNumber = undefined;
  mathOperation = operator;
}
function equal() {
  let output = document.getElementById("output");
  let num = output.textContent;
  if (firstNumber !== undefined) {
    if (secondNumber === undefined) {
      if (num !== "") {
        secondNumber = num;
        let ans = mathOperation(firstNumber, secondNumber);
        firstNumber = ans;
        let output = document.getElementById("output");
        output.innerHTML = firstNumber;
        firstNumber = undefined;
        secondNumber = undefined;
        mathOperation = undefined;
      } else {
        output.innerHTML = firstNumber;
        firstNumber = undefined;
      }
    } else {
      output.innerHTML = firstNumber;
    }
  }
}

// BackSpace click
function backSpace() {
  let output = document.getElementById("output");
  let content = output.textContent;
  if (content !== "") {
    content = content.slice(0, -1);
    output.innerHTML = content;
  } else {
    if (mathOperation !== undefined) {
      mathOperation = undefined;
    }
  }
}

// addition function
function plus(x, y) {
  x = Number(x);
  y = Number(y);
  const res = x + y;
  if (typeof res === "number") {
    const hist = document.getElementById("histLog");
    hist.innerHTML += x + " + " + y + " = " + res + "<br>";
    return res;
  } else {
    return 0;
  }
}
// sub function
function minus(x, y) {
  const res = x - y;
  if (typeof res === "number") {
    const hist = document.getElementById("histLog");
    hist.innerHTML += x + " - " + y + " = " + res + "<br>";
    return res;
  } else {
    return 0;
  }
}
// product function
function mult(x, y) {
  const res = x * y;
  if (typeof res === "number") {
    const hist = document.getElementById("histLog");
    hist.innerHTML += x + " x " + y + " = " + res + "<br>";
    return res;
  } else {
    return 0;
  }
}
// division function
function div(x, y) {
  if (y == 0) {
    const res = 0;
    const hist = document.getElementById("histLog");
    hist.innerHTML += x + " / " + y + " = " + res + "<br>";
    return res;
  } else {
    const res = x / y;
    const hist = document.getElementById("histLog");
    hist.innerHTML += x + " / " + y + " = " + res + "<br>";
    return res;
  }
}
// positive/negative
function plusMinus() {
  const output = document.getElementById("output");
  let num = output.textContent;
  if (num === "") {
    output.innerHTML = "-";
  } else {
    if (num === "-") {
      output.innerHTML = "";
    } else {
      num = num * -1;
      output.innerHTML = num;
    }
  }
}

//scientific calculator functions:
// mod function
function mod(x,y) {
  const res = Number(x) % Number(y);
  const output = document.getElementById("output");
  const hist = document.getElementById("histLog");
  output.innerHTML = res;
  hist.innerHTML += x + " mod " + y + " = " + res + "<br>";
  return res;
}
//square power
function sqrPower() {
  let output = document.getElementById("output");
  let paragraph = output.textContent;
  if (paragraph !== "") {
    let ans = Number(paragraph) ** 2;
    output.innerHTML = ans;
    const hist = document.getElementById("histLog");
    hist.innerHTML += paragraph + "&#178 = " + ans + "<br>";
  }
}
//square root
function sqrRoot() {
  let output = document.getElementById("output");
  let paragraph = output.textContent;
  if (paragraph !== "") {
    let ans = Number(paragraph) ** 0.5;
    output.innerHTML = ans;
    const hist = document.getElementById("histLog");
    hist.innerHTML += "&#178&#8730 " + paragraph + " = " + ans + "<br>";
  }
}
// x ^ y
function xPowerY (x, y) {
  const res = Number(x) ** Number(y);
  const hist = document.getElementById("histLog");
  hist.innerHTML += x + " ^ " + y + " = " + res + "<br>";
  return res;
}
// x ^ 1/y
function yRootX (x, y) {
  const res = Number(x) ** (1/y);
  const hist = document.getElementById("histLog");
    hist.innerHTML += x + " ^ 1/" + y + " = " + res + "<br>";
    return res;
}
// PI
function pi() {
  const x = document.getElementById("output");
  x.innerHTML = 3.141592653589793;
}

// event and listeners
document.addEventListener("DOMContentLoaded", () => {
  console.log("page loaded");
});
