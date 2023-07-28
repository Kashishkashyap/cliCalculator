"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = require("readline-sync"); // this question always returns a string
function main() {
    const firstinput = (0, readline_sync_1.question)("Enter first no.\n");
    const operator = (0, readline_sync_1.question)("Enter operator\n");
    const secondinput = (0, readline_sync_1.question)("Enter second no.\n");
    const validInput = isNum(firstinput) && isOperator(operator) && isNum(secondinput);
    if (validInput) {
        const num1 = parseInt(firstinput);
        const num2 = parseInt(secondinput);
        const result = calculate(num1, operator, num2);
        console.log(result);
    }
    else {
        console.log("\nInvalid Input");
        main();
    }
}
function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
    }
}
function isOperator(str) {
    switch (str) {
        case "+":
        case "-":
        case "*":
        case "/":
            return true;
        default:
            return false;
    }
}
function isNum(str) {
    const maybenum = parseInt(str);
    const ans = (!isNaN(maybenum));
    return ans;
}
main();
