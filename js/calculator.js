window.firstNumber = undefined;
window.secondNumber = undefined;
window.mathOperation = undefined;

// reset button
function resetButton() {
  let x = document.getElementById("output");
  x.innerHTML = ''
  firstNumber = undefined;
  secondNumber = undefined;
  mathOperation = undefined;
}

// numbers click
function clickNumber (n) {
  let x = document.getElementById("output");
  if (n === '.'){
    let str = x.textContent;
    let check = str.includes(n);
    if (str.length == 0) {
      return;
    } else {
    if (check === false) {
      x.innerHTML += n;
      return;
    } else { return }
  }} else {
  x.innerHTML += n;
}}

// operator selection
function clickOperator (e) {
  let output = document.getElementById('output');
  if (output.textContent.length > 0) {
    if (firstNumber === undefined) {
      firstNumber = output.textContent;
      output.innerHTML = '';
      mathOperation = e;
      return;
    } else {
      if (secondNumber === undefined) {
        secondNumber = output.textContent;
        output.innerHTML = '';
        return result(e);
      } else {
        mathOperation = e;
        return;
      }
    }
  } else {
    mathOperation = e;
    return;
  }
}

// operation result
function result (e) {
  let ans = mathOperation(firstNumber, secondNumber);
  firstNumber = ans;
  secondNumber = undefined;
  mathOperation = e;
}
function equal() {
  let output = document.getElementById('output');
  let num = output.textContent
  if (firstNumber !== undefined){
    if (secondNumber === undefined) {
      if (num !== '') {
        secondNumber = num;
        let ans = mathOperation(firstNumber, secondNumber);
        firstNumber = ans;
        let output = document.getElementById('output');
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
function backSpace (){
  let x = document.getElementById("output");
  let paragraph = x.textContent;
  if (paragraph !== '') {
    paragraph = paragraph.slice(0, -1);
    x.innerHTML = paragraph;
  } else {
    if (mathOperation !== undefined) {
      mathOperation = undefined;
    }
  }
}

// addition function
function plus (x,y) {
  x = Number(x);
  y = Number(y);
  const res = x + y
  const hist = document.getElementById('histLog');
  hist.innerHTML += x + ' + ' + y + ' = ' + res + '<br>';
  return res
}
// sub function
function minus (x,y) {
  const res = x - y;
  const hist = document.getElementById('histLog');
  hist.innerHTML += x + ' - ' + y + ' = ' + res + '<br>';
  return res
}
// product function
function mult (x,y) {
  const res = x * y;
  const hist = document.getElementById('histLog');
  hist.innerHTML += x + ' x ' + y + ' = ' + res + '<br>';
  return res
}
// division function
function div (x,y) {
  const res = x / y;
  const hist = document.getElementById('histLog');
  hist.innerHTML += x + ' / ' + y + ' = ' + res + '<br>';
  return res
}

//scientific calculator functions:
// mod function
function mod () {
  const x = document.getElementById('output');
  const p = x.textContent;
  const hist = document.getElementById('histLog');
  const res = Number(x.textContent) % 2;
  x.innerHTML = res
  hist.innerHTML += p + ' mod 2 = ' + res + '<br>';
  return res
}
//square power
function sqrPower() {
  let output = document.getElementById('output');
  let paragraph = output.textContent;
  if (paragraph !== '') {
    let ans = Number(paragraph) ** 2;
    output.innerHTML = ans;
    const hist = document.getElementById('histLog');
    hist.innerHTML += paragraph + '&#178 = ' + ans + '<br>';
  }
}
//square root
function sqrRoot() {
  let output = document.getElementById('output');
  let paragraph = output.textContent;
  if (paragraph !== '') {
    let ans = Number(paragraph) ** 0.5;
    output.innerHTML = ans;
    const hist = document.getElementById('histLog');
    hist.innerHTML += '&#178&#8730 ' + paragraph + ' = ' + ans + '<br>';
  }
}


// event and listeners
document.addEventListener('DOMContentLoaded', () => {
  console.log('page loaded');
})