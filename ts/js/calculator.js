let firstNumber = undefined;
let secondNumber = undefined;
let mathOperation = undefined;
let oppArray = [];
let allNum = [];
let mode = 'basic';
// reset button
const reset = document.getElementById('resetButton');
reset.addEventListener('click', () => resetButton());
function resetButton() {
    let output = document.getElementById("output");
    output.innerHTML = "";
    firstNumber = undefined;
    secondNumber = undefined;
    mathOperation = undefined;
    oppArray = [];
    allNum = [];
}
// numbers click
const allDigits = document.querySelectorAll('.digits');
allDigits.forEach(element => {
    element.addEventListener('click', () => clickNumber(element.value));
});
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
    let sci = document.getElementById('sci');
    if (mode === 'basic') {
        if (p === "-") {
            if (p === "") {
                mathOperation = operator;
            }
        }
        if (output.textContent.length > 0) {
            if (firstNumber === undefined) {
                firstNumber = output.textContent;
                output.innerHTML = "";
                mathOperation = operator;
                return;
            }
            else {
                if (secondNumber === undefined) {
                    secondNumber = output.textContent;
                    output.innerHTML = "";
                    return result(operator);
                }
                else {
                    mathOperation = operator;
                    return;
                }
            }
        }
        else {
            mathOperation = operator;
            return;
        }
    }
    else {
        if (p.length < 1) {
            oppArray.pop();
            oppArray.push(operator);
        }
        else {
            allNum.push(p);
            oppArray.push(operator);
            output.innerHTML = '';
        }
    }
}
// operation result
function result(operator) {
    let ans = mathOperation(firstNumber, secondNumber);
    firstNumber = ans;
    secondNumber = undefined;
    mathOperation = operator;
}
const getResult = document.getElementById('equalButton');
getResult.addEventListener('click', () => equal());
function equal() {
    let output = document.getElementById("output");
    let num = output.textContent;
    if (mode === 'basic') {
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
                }
                else {
                    output.innerHTML = firstNumber;
                    firstNumber = undefined;
                }
            }
            else {
                output.innerHTML = firstNumber;
            }
        }
    }
    else {
        if (num !== '-' && num !== '' && num !== '.' && num !== undefined) {
            allNum.push(num);
        }
        if (oppArray.length > 0 && allNum.length > 1) {
            let j = 0;
            while (j < oppArray.length && allNum.length > 1) {
                if (oppArray[j] === div || oppArray[j] === mult || oppArray[j] === yRootX || oppArray[j] === xPowerY) {
                    let ans = String(oppArray[j](allNum[j], allNum[j + 1]));
                    oppArray.splice(j, 1);
                    allNum.splice(j, 2, ans);
                    output.innerHTML = allNum[0];
                }
                else {
                    j++;
                }
            }
        }
        if (oppArray.length > 0 && allNum.length > 1) {
            let i = 0;
            while (oppArray.length > i && allNum.length > 1) {
                let ans = String(oppArray[i](allNum[i], allNum[i + 1]));
                oppArray.shift();
                allNum.splice(i, 2, ans);
            }
            output.innerHTML = allNum[0];
            allNum = [];
        }
    }
}
// BackSpace click
const erase = document.getElementById('eraseButton');
erase.addEventListener('click', () => backSpace());
function backSpace() {
    let output = document.getElementById("output");
    let content = output.textContent;
    if (content !== "") {
        content = content.slice(0, -1);
        output.innerHTML = content;
    }
    else {
        if (mode === 'basic') {
            if (mathOperation !== undefined) {
                mathOperation = undefined;
            }
        }
        else {
            oppArray.pop();
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
const plusOrMinus = document.getElementById('plusMinus');
plusOrMinus.addEventListener('click', () => plusMinus());
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
const sqrPwr = document.getElementById('xPower');
sqrPwr.addEventListener('click', () => sqrPower());
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
const sqrRt = document.getElementById('sqrRoot');
sqrRt.addEventListener('click', () => sqrRoot());
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
const Pi = document.getElementById('pi');
Pi.addEventListener('click', () => pi());
function pi() {
    const x = document.getElementById("output");
    if (x.textContent === '') {
        x.innerHTML = '3.141592653589793';
    }
    else {
        x.innerHTML = String(Number(x.textContent) * 3.1415926535897);
    }
}
// event and listeners
document.addEventListener("DOMContentLoaded", () => {
});
