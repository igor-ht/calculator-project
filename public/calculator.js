let firstNumber = undefined;
let secondNumber = undefined;
let mathOperation = undefined;
let oppArray = [];
let allNum = [];
let mode = 'basic';
// numbers click
const allDigits = document.querySelectorAll('.digits');
allDigits.forEach(element => {
    element.addEventListener('click', () => clickNumber(element.value));
});
function clickNumber(input) {
    if (mode === 'remote')
        return;
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
const Plus = document.getElementById('plusButton');
Plus.addEventListener('click', () => clickOperator(plus));
const Minus = document.getElementById('minusButton');
Minus.addEventListener('click', () => clickOperator(minus));
const Mult = document.getElementById('multButton');
Mult.addEventListener('click', () => clickOperator(mult));
const Div = document.getElementById('divButton');
Div.addEventListener('click', () => clickOperator(div));
const Mod = document.getElementById('mod');
Mod.addEventListener('click', () => clickOperator(mod));
const xPwrY = document.getElementById('xPowerY');
xPwrY.addEventListener('click', () => clickOperator(xPowerY));
const yRtX = document.getElementById('yRootX');
yRtX.addEventListener('click', () => clickOperator(yRootX));
// operator selection
function clickOperator(operator) {
    if (mode === 'remote')
        return;
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
// operation result ('equal' button)
const getResult = document.getElementById('equalButton');
getResult.addEventListener('click', () => equal());
function equal() {
    if (mode === 'remote')
        return;
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
// BackSpace
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
    if (mode === 'remote')
        return;
    let output = document.getElementById("output");
    let num = output.textContent;
    if (num !== "") {
        let ans = Math.pow(Number(num), 2);
        output.innerHTML = String(ans);
        const hist = document.getElementById("histLog");
        hist.innerHTML += num + "&#178 = " + ans + "<br>";
    }
}
//square root
const sqrRt = document.getElementById('sqrRoot');
sqrRt.addEventListener('click', () => sqrRoot());
function sqrRoot() {
    if (mode === 'remote')
        return;
    let output = document.getElementById("output");
    let num = output.textContent;
    if (num !== "") {
        let ans = Math.pow(Number(num), 0.5);
        output.innerHTML = String(ans);
        const hist = document.getElementById("histLog");
        hist.innerHTML += "&#178&#8730 " + num + " = " + ans + "<br>";
    }
}
// x ^ y
function xPowerY(x, y) {
    const res = Math.pow(Number(x), Number(y));
    const hist = document.getElementById("histLog");
    hist.innerHTML += x + " ^ " + y + " = " + res + "<br>";
    return res;
}
// x ^ 1/y
function yRootX(x, y) {
    const res = Math.pow(Number(x), (1 / Number(y)));
    const hist = document.getElementById("histLog");
    hist.innerHTML += x + " ^ 1/" + y + " = " + res + "<br>";
    return res;
}
// PI number
const Pi = document.getElementById('pi');
Pi.addEventListener('click', () => pi());
function pi() {
    const x = document.getElementById("output");
    x.innerHTML = String(Math.PI);
    firstNumber = '';
    secondNumber = '';
    allNum = [];
    oppArray = [];
    mathOperation = undefined;
}
let toBinary = document.getElementById('baseTwo');
toBinary.addEventListener('click', () => BinaryConverter());
async function BinaryConverter() {
    let output = document.getElementById('output');
    let num = output.textContent;
    num = String(Math.round(Number(num)));
    let hist = document.getElementById('histLog');
    if (mode === 'remote')
        return;
    if (num !== '' && num !== '-') {
        try {
            let url = 'https://networkcalc.com/api/binary/' + num + '?from=10&to=2';
            let response = await fetch(url);
            let stats = await response.json();
            output.innerHTML = stats.converted;
            hist.innerHTML += num + ' = ' + stats.converted + '<br>';
        }
        catch {
            console.log('error');
            hist.innerHTML = 'this function is currently offline';
        }
    }
    else {
        return;
    }
}
