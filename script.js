// Add variables for digits

let firstDigit = 0
let secondDigit = 0
let operator = ''

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

// DOM Operations
const display = document.querySelector('#display');
const digitButtons = document.querySelectorAll('.digit')
const operatorButtons = document.querySelectorAll('.operator')

let currentValue = '0';

digitButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentValue === '0') {
            currentValue = button.textContent;
        } else {
            currentValue += button.textContent;
        }

        display.textContent = currentValue
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (operator !== '' && display.textContent !== '0') {
            secondDigit = display.textContent;
            const result = operate(operator, firstDigit, secondDigit);
            firstDigit = result;
            display.textContent = result;
        }
        if (operator === '') {
            firstDigit = display.textContent;
        }
        operator = button.textContent;
        display.textContent = '0';
        currentValue = '0';
    });
});

const equals = document.querySelector('#equals')
const clear = document.querySelector('#clear')

clear.addEventListener('click', () => {
    currentValue = '0';
    display.textContent = '0';
    firstDigit = 0;
    secondDigit = 0;
    operator = ''
});

equals.addEventListener('click', () => {
    if (operator === '' || display.textContent === '0') {
        return;
    }

    secondDigit = display.textContent;
    const result = operate(operator, firstDigit, secondDigit);

    display.textContent = result;
    firstDigit = result;

    operator = '';
    currentValue = '0';
});
