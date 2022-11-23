let firstNumber = undefined;
let secondNumber = undefined;
let mathOperation: Function = undefined;
let oppArray: any[] = [];
let allNum: String[] = []
let mode: string = 'basic';

const sciMode = document.getElementById('sciButton');
sciMode.addEventListener('click', () => {
  if (mode === 'basic') {
    mode = 'sci';
  } else {
    mode = 'basic';
  }
});

const basic = document.getElementById('basicButton');
basic.addEventListener('click', () => {
  mode = 'basic';
});

// reset button
function resetButton() {
  let output: HTMLElement = document.getElementById("output");
  output.innerHTML = "";
  firstNumber = undefined;
  secondNumber = undefined;
  mathOperation = undefined;
  oppArray = [];
  allNum = [];
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
  let output: HTMLElement = document.getElementById("output");
  let p: String = output.textContent;
  let sci: HTMLElement = document.getElementById('sci');
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
  } else {
    if (p.length < 1) {
      oppArray.pop();
      oppArray.push(operator);
    } else {
      allNum.push(p);
      oppArray.push(operator);
      output.innerHTML = '';
    }
  }
  
}

// operation result
function result(operator: Function) {
  let ans: Number = mathOperation(firstNumber, secondNumber);
  firstNumber = ans;
  secondNumber = undefined;
  mathOperation = operator;
}

function equal() {
  let output: HTMLElement = document.getElementById("output");
  let num: Number | String = output.textContent;
  if (mode === 'basic') {
    if (firstNumber !== undefined) {
      if (secondNumber === undefined) {
        if (num !== "") {
          secondNumber = num;
          let ans: Number = mathOperation(firstNumber, secondNumber);
          firstNumber = ans;
          let output: HTMLElement = document.getElementById("output");
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
  } else {
    if (num !== '-' && num !== '' && num !== '.' && num !== undefined) {
      allNum.push(num);
    }
    if (oppArray.length > 0 && allNum.length > 1) {
      let j = 0;
      while (j < oppArray.length && allNum.length > 1) {
        if (oppArray[j] === div || oppArray[j] === mult || oppArray[j] === yRootX || oppArray[j] === xPowerY) {
          let ans = String(oppArray[j](allNum[j], allNum[j+1]));
          oppArray.splice(j, 1);
          allNum.splice(j, 2, ans); 
          output.innerHTML = allNum[0] as string;
        } else {
          j++;
        }
      }
    }
    if (oppArray.length > 0 && allNum.length > 1) {
      let i = 0;
      while (oppArray.length > i && allNum.length > 1) {
        let ans = String(oppArray[i](allNum[i], allNum[i+1]));
        oppArray.shift();
        allNum.splice(i, 2, ans); 
      }
      output.innerHTML = allNum[0] as string;
      allNum = [];     
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
    if (mode === 'basic') {
      if (mathOperation !== undefined) {
        mathOperation = undefined;
      }
    } else {
      oppArray.pop();
    }
    
  }
}

// addition function
function plus(x: Number, y: Number) {
  const res: Number = Number(x) + Number(y);
  if (typeof res === "number") {
    const hist = document.getElementById("histLog");
    hist.innerHTML += x + " + " + y + " = " + res + "<br>";
    return res;
  } else {
    return 0;
  }
}
// sub function
function minus(x: Number, y: Number) {
  const res: Number = Number(x) - Number(y);
  if (typeof res === "number") {
    const hist = document.getElementById("histLog");
    hist.innerHTML += x + " - " + y + " = " + res + "<br>";
    return res;
  } else {
    return 0;
  }
}
// product function
function mult(x: Number, y: Number) {
  const res: Number = Number(x) * Number(y);
  if (typeof res === "number") {
    const hist: HTMLElement = document.getElementById("histLog");
    hist.innerHTML += x + " x " + y + " = " + res + "<br>";
    return res;
  } else {
    return 0;
  }
}
// division function
function div(x: Number, y: Number) {
  if (y == 0) {
    const res: Number = 0;
    const hist: HTMLElement = document.getElementById("histLog");
    hist.innerHTML += x + " / " + y + " = " + res + "<br>";
    return res;
  } else {
    const res: Number = Number(x) / Number(y);
    const hist: HTMLElement = document.getElementById("histLog");
    hist.innerHTML += x + " / " + y + " = " + res + "<br>";
    return res;
  }
}
// positive/negative
function plusMinus() {
  const output: HTMLElement = document.getElementById("output");
  let num: String | Number = output.textContent;
  if (num === "") {
    output.innerHTML = "-";
  } else {
    if (num === "-") {
      output.innerHTML = "";
    } else {
      num = Number(num) * -1;
      output.innerHTML = String(num);
    }
  }
}

//scientific calculator functions:
// mod function
function mod(x: Number, y: Number) {
  const res: Number = Number(x) % Number(y);
  const output: HTMLElement = document.getElementById("output");
  const hist: HTMLElement = document.getElementById("histLog");
  output.innerHTML = String(res);
  hist.innerHTML += x + " mod " + y + " = " + res + "<br>";
  return res;
}
//square power
function sqrPower() {
  let output: HTMLElement = document.getElementById("output");
  let paragraph: String = output.textContent;
  if (paragraph !== "") {
    let ans: Number = Number(paragraph) ** 2;
    output.innerHTML = String(ans);
    const hist = document.getElementById("histLog");
    hist.innerHTML += paragraph + "&#178 = " + ans + "<br>";
  }
}
//square root
function sqrRoot() {
  let output: HTMLElement = document.getElementById("output");
  let paragraph: String = output.textContent;
  if (paragraph !== "") {
    let ans: Number = Number(paragraph) ** 0.5;
    output.innerHTML = String(ans);
    const hist: HTMLElement = document.getElementById("histLog");
    hist.innerHTML += "&#178&#8730 " + paragraph + " = " + ans + "<br>";
  }
}
// x ^ y
function xPowerY (x: Number, y: Number) {
  const res: Number = Number(x) ** Number(y);
  const hist: HTMLElement = document.getElementById("histLog");
  hist.innerHTML += x + " ^ " + y + " = " + res + "<br>";
  return res;
}
// x ^ 1/y
function yRootX (x: Number, y: Number) {
  const res: Number = Number(x) ** (1/Number(y));
  const hist: HTMLElement = document.getElementById("histLog");
    hist.innerHTML += x + " ^ 1/" + y + " = " + res + "<br>";
    return res;
}
// PI
function pi() {
  const x: HTMLElement = document.getElementById("output");
  x.innerHTML = '3.141592653589793';
}

// event and listeners
document.addEventListener("DOMContentLoaded", () => {

});
