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
if (previousNum != "") {
    operator = op;
    previousDisplay.textContent = previousNum + operator;
    currentNum = "";
    currentDisplay.textContent = currentNum;
} else {
    operator = op;
    previousNum = currentNum;
    previousDisplay.textContent = previousNum + operator;
    currentNum = "";
    currentDisplay.textContent = "";
}};



equalBtn.addEventListener('click', () => {
let result = 0;
previousNum = Number(previousNum);
    currentNum = Number(currentNum);
    if (operator === '+') {
        result = currentNum + previousNum;
    } else if (operator === '-') {
        result = previousNum - currentNum;
    } else if (operator === 'x') {
         result = previousNum * currentNum;
    } else if (operator === '÷') {
        if(currentNum === 0) {
            operator = "";
            previousNum = "";
            currentNum = "ERROR";
            previousDisplay.textContent = "";
            currentDisplay.textContent = currentNum;
            return;
        }
        result = previousNum / currentNum;
    } else (
        currentDisplay.textContent = "ERROR"
    )
    previousNum = previousNum.toString();
    previousNum = result;
    previousDisplay.textContent = "";
    currentDisplay.textContent = Math.round((result + Number.EPSILON)* 1000) /1000;


});
    

clearBtn.addEventListener('click', () => {
    previousDisplay.textContent = "";
    currentDisplay.textContent = "0";
    previousNum = "";
    currentNum = "";
});