// const toggle = document.getElementById('toggle');
// const body = document.body;

// toggle.addEventListener('change', (e) => {
//     if (e.target.checked) {
//         body.classList.add('theme-blue');
//         body.classList.remove('theme-light');
//         body.classList.remove('theme-dark');
//     } else {
//         body.classList.add('theme-light');
//         body.classList.remove('theme-blue');
//         body.classList.remove('theme-dark');
//     }
// const numberButtons = document.querySelectorAll('.number-buttons button');
// const calculationsInput = document.getElementById('calculations');
// const equalButton = document.querySelector('.number-buttons button[=]');
// const resetButton = document.querySelector('.number-buttons button[del]');

// let currentNumber = '';
// let previousNumber = null;
// let operator = null;

// function calculate(num1, num2, op) {
//     switch (op) {
//         case '+':
//             return parseFloat(num1) + parseFloat(num2);
//         case '-':
//             return parseFloat(num1) - parseFloat(num2);
//         case '*':
//             return parseFloat(num1) * parseFloat(num2);
//         case '/':
//             return parseFloat(num1) / parseFloat(num2);
//         default:
//             return num1; // Handle invalid operator or no calculation
//     }
// }

// function displayResult(result) {
//     calculationsInput.value = result;
//     currentNumber = result;
//     previousNumber = null;
//     operator = null;
// }

// // Handle number button clicks
// numberButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const buttonValue = button.textContent;

//         if (buttonValue === 'C') { // Clear
//             currentNumber = '';
//             previousNumber = null;
//             operator = null;
//             calculationsInput.value = '';
//         } else if (buttonValue === '=') { // Equal
//             if (previousNumber !== null && operator !== null) {
//                 const result = calculate(previousNumber, currentNumber, operator);
//                 displayResult(result);
//             }
//         } else { // Numbers and decimal
//             currentNumber += buttonValue;
//             calculationsInput.value = currentNumber;
//         }
//     });
// });

// // Handle operator button clicks (not present in the original code)
// const operatorButtons = document.querySelectorAll('.number-buttons button[+-*/]');
// operatorButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         if (currentNumber !== '') {
//             previousNumber = currentNumber;
//             currentNumber = '';
//             operator = button.textContent;
//         }
//     });
// });

// // Basic error handling (e.g., consecutive operator clicks)
// calculationsInput.addEventListener('keydown', (event) => {
//     if (isNaN(event.key) && event.key !== '.') {
//         event.preventDefault();
//     }
// });