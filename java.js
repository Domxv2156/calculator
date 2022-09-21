let currentNum = "";
let operator = "";
let previousNum = "";

const operatorBtn = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('.equal');
const numberBtn = document.querySelectorAll('.number');
const clearBtn = document.querySelector('.clear');
const currentDisplay = document.querySelector('.currentDisplay');
const previousDisplay = document.querySelector('.previousNum');

numberBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        handleNumber(e.target.textContent);
    });
});

function handleNumber(number) {
    if (currentNum.length <= 4) {
        currentNum += number;
        currentDisplay.textContent = currentNum;
    }
};


operatorBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        handleOperator(e.target.textContent);
    });
});

function handleOperator(op) {
    operator = op;
    previousNum = currentNum;
    previousDisplay.textContent = previousNum + operator;
    currentNum = "";
    currentDisplay.textContent = "";
};

function add(previousNum, currentNum) {
    return previousNum + currentNum;
};
function substract(previousNum, currentNum) {
    return previousNum - currentNum;
};

function multiply (previousNum, currentNum) {
    return previousNum * currentNum;
};

function divide(previousNum, currentNum) {
    return (previousNum / currentNum);
};

equalBtn.addEventListener('click', (e) => {
    calculate(e.target.textContent);
});

//calculate() {
  //  previousNum = Number(previousNum);
  //  currentNum = Number(currentNum);
  
