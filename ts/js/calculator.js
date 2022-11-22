globalThis.firstNumber = undefined;
globalThis.secondNumber = undefined;
globalThis.mathOperation = undefined;
// reset button
function resetButton() {
    let output = document.getElementById("output");
    output.innerHTML = "";
    globalThis.firstNumber = undefined;
    globalThis.secondNumber = undefined;
    globalThis.mathOperation = undefined;
}
// numbers click
function clickNumber(input) {
    let output = document.getElementById("output");
    if (input === ".") {
        let screenDisplay = output.textContent;
        let check = screenDisplay.includes(input);
        if (screenDisplay.length == 0 || screenDisplay === "-") {
            return;
        }
        else {
            if (check === false) {
                output.innerHTML += input;
                return;
            }
            else {
                return;
            }
        }
    }
    else {
        output.innerHTML += input;
    }
}
// operator selection
function clickOperator(operator) {
    let output = document.getElementById("output");
    let p = output.textContent;
    if (p === "-") {
        if (p === "") {
            globalThis.mathOperation = operator;
        }
    }
    if (output.textContent.length > 0) {
        if (globalThis.firstNumber === undefined) {
            globalThis.firstNumber = output.textContent;
            output.innerHTML = "";
            globalThis.mathOperation = operator;
            return;
        }
        else {
            if (globalThis.secondNumber === undefined) {
                globalThis.secondNumber = output.textContent;
                output.innerHTML = "";
                return result(operator);
            }
            else {
                globalThis.mathOperation = operator;
                return;
            }
        }
    }
    else {
        globalThis.mathOperation = operator;
        return;
    }
}
// operation result
function result(operator) {
    let ans = globalThis.mathOperation(globalThis.firstNumber, globalThis.secondNumber);
    globalThis.firstNumber = ans;
    globalThis.secondNumber = undefined;
    globalThis.mathOperation = operator;
}
function equal() {
    let output = document.getElementById("output");
    let num = output.textContent;
    if (globalThis.firstNumber !== undefined) {
        if (globalThis.secondNumber === undefined) {
            if (num !== "") {
                globalThis.secondNumber = num;
                let ans = globalThis.mathOperation(globalThis.firstNumber, globalThis.secondNumber);
                globalThis.firstNumber = ans;
                let output = document.getElementById("output");
                output.innerHTML = globalThis.firstNumber;
                globalThis.firstNumber = undefined;
                globalThis.secondNumber = undefined;
                globalThis.mathOperation = undefined;
            }
            else {
                output.innerHTML = globalThis.firstNumber;
                globalThis.firstNumber = undefined;
            }
        }
        else {
            output.innerHTML = globalThis.firstNumber;
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
    }
    else {
        if (globalThis.mathOperation !== undefined) {
            globalThis.mathOperation = undefined;
        }
    }
}
// addition function
function plus(x, y) {
    const res = Number(x) + Number(y);
    if (typeof res === "number") {
        const hist = document.getElementById("histLog");
        hist.innerHTML += x + " + " + y + " = " + res + "<br>";
        return res;
    }
    else {
        return 0;
    }
}
// sub function
function minus(x, y) {
    const res = Number(x) - Number(y);
    if (typeof res === "number") {
        const hist = document.getElementById("histLog");
        hist.innerHTML += x + " - " + y + " = " + res + "<br>";
        return res;
    }
    else {
        return 0;
    }
}
// product function
function mult(x, y) {
    const res = Number(x) * Number(y);
    if (typeof res === "number") {
        const hist = document.getElementById("histLog");
        hist.innerHTML += x + " x " + y + " = " + res + "<br>";
        return res;
    }
    else {
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
    }
    else {
        const res = Number(x) / Number(y);
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
    }
    else {
        if (num === "-") {
            output.innerHTML = "";
        }
        else {
            num = Number(num) * -1;
            output.innerHTML = String(num);
        }
    }
}
//scientific calculator functions:
// mod function
function mod(x, y) {
    const res = Number(x) % Number(y);
    const output = document.getElementById("output");
    const hist = document.getElementById("histLog");
    output.innerHTML = String(res);
    hist.innerHTML += x + " mod " + y + " = " + res + "<br>";
    return res;
}
//square power
function sqrPower() {
    let output = document.getElementById("output");
    let paragraph = output.textContent;
    if (paragraph !== "") {
        let ans = Number(paragraph) ** 2;
        output.innerHTML = String(ans);
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
        output.innerHTML = String(ans);
        const hist = document.getElementById("histLog");
        hist.innerHTML += "&#178&#8730 " + paragraph + " = " + ans + "<br>";
    }
}
// x ^ y
function xPowerY(x, y) {
    const res = Number(x) ** Number(y);
    const hist = document.getElementById("histLog");
    hist.innerHTML += x + " ^ " + y + " = " + res + "<br>";
    return res;
}
// x ^ 1/y
function yRootX(x, y) {
    const res = Number(x) ** (1 / Number(y));
    const hist = document.getElementById("histLog");
    hist.innerHTML += x + " ^ 1/" + y + " = " + res + "<br>";
    return res;
}
// PI
function pi() {
    const x = document.getElementById("output");
    x.innerHTML = '3.141592653589793';
}
// event and listeners
document.addEventListener("DOMContentLoaded", () => {
});
