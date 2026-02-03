// Functions for every action
function add(digit1, digit2) {
    return digit1 + digit2;
}

function subtract(digit1, digit2) {
    return digit1 - digit2;
}

function multiply(digit1, digit2) {
    return digit1 * digit2
}

function divide(digit1, digit2) {
    return digit1 / digit2
}

// Operation function
function operate(oper, num1, num2) {
    const number1 = Number(num1);
    const number2 = Number(num2);
    
    if (oper === '+') {
        return add(number1, number2);
    } else if (oper === '-') {
        return subtract(number1, number2);
    } else if (oper === '*') {
        return multiply(number1, number2);
    } else if (oper === '/') {
        return divide(number1, number2)
    }
}

let firstDigit = null;
let operator = '';
let shouldResetScreen = false;

const display = document.querySelector('#display');
const digitButtons = document.querySelectorAll('.digit');
const operatorButtons = document.querySelectorAll('.operator');

// Очистка экрана и ввод цифр
digitButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (display.textContent === '0' || shouldResetScreen) {
            display.textContent = button.textContent;
            shouldResetScreen = false; 
        } else {
            display.textContent += button.textContent;
        }
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (operator !== '' && !shouldResetScreen) {
            const result = operate(operator, firstDigit, display.textContent);
            display.textContent = result;
            firstDigit = result;
        } else {
            firstDigit = display.textContent;
        }
        
        operator = button.textContent;
        shouldResetScreen = true;
    });
});

equals.addEventListener('click', () => {
    if (operator === '' || shouldResetScreen) return;

    const result = operate(operator, firstDigit, display.textContent);
    
    if (result === Infinity || isNaN(result) || result === "Error") {
        display.textContent = "Error";
        firstDigit = null;
        operator = '';
    } else {
        display.textContent = result;
        firstDigit = result;
        operator = '';
    }
    
    shouldResetScreen = true;
});

clear.addEventListener('click', () => {
    display.textContent = '0';
    firstDigit = null;
    operator = '';
    shouldResetScreen = false;
});