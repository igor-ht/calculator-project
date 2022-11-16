window.firstNumber = undefined;
window.secondNumber = undefined;
window.mathOperation = undefined;

// reset button
function resetButton() {
  const x = document.getElementById("output");
  x.innerHTML = "<p></p>"
  window.firstNumber = undefined;
  window.secondNumber = undefined;
  window.mathOperation = undefined;
}

// numbers click
function clickNumber (n) {
  const x = document.getElementById("output");
  if (n === '.'){
    const str = x.textContent;
    const check = str.includes(n);
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
function operation (e) {
  const x = document.getElementById("output");
  globalThis.firstNumber = x.textContent;
  globalThis.mathOperation = e;
  x.innerHTML = '';
}
function checkOperator (e) {
  if (window.mathOperation === undefined) {
    return operation(e);
  } if (window.secondNumber === undefined) {
    mathOperation = e;
  } else {
    result();
    const x = document.getElementById('output');
    x.innerHTML = '';
    mathOperation = e;
  }
}

// operation result
function result () {
  const x = document.getElementById("output");
  globalThis.secondNumber = x.textContent;
  if (secondNumber.length === 0) {
    x.innerHTML = firstNumber;
  } else {
    const res = mathOperation(firstNumber, secondNumber);
    mathOperation = undefined;
    secondNumber = undefined;
    x.innerHTML = res;
}}
// add operation to hist log
function histLog(res) {
  const hist = document.getElementById("histLog");
  hist.innerHTML += firstNumber + mathOperation + '<br>';
}

// BackSpace click
function backSpace (){
  let x = document.getElementById("output");
  let paragraph = x.textContent;
  paragraph = paragraph.slice(0, -1);
  x.innerHTML = paragraph;
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


// event and listeners
// variables
const zero = document.querySelectorAll('#zero');
const one = document.querySelectorAll('#one');
const two = document.querySelectorAll('#two');
const three = document.querySelectorAll('#three');
const four = document.querySelectorAll('#four');
const five = document.querySelectorAll('#five');
const six = document.querySelectorAll('#six');
const seven = document.querySelectorAll('#seven');
const eight = document.querySelectorAll('#eight');
const nine = document.querySelectorAll('#nine');
// adding listeners
zero[0].addEventListener("click", console.log(0));
one[0].addEventListener('click', console.log(1));
two[0].addEventListener('click', console.log(2));
three[0].addEventListener('click', console.log(3));
four[0].addEventListener('click', console.log(4));
five[0].addEventListener('click', console.log(5));
six[0].addEventListener('click', console.log(6));
seven[0].addEventListener('click', console.log(7));
eight[0].addEventListener('click', console.log(8));
nine[0].addEventListener('click', console.log(9));