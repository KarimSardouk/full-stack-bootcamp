function addNumbers(num1, num2) {
    return num1 + num2;
}
const result= addNumbers(17,19);
console.log(result);
function findMax(num3, num4) {
    if (num3 > num4) {
        console.log("num3 is the largest");
    } else if (num3 === num4) {
        console.log("Both are equal");
    } else {
        console.log("num4 is the largest");
    }
}

let num3 = 16;
let num4 = 16;

findMax(num3, num4);

function compute(num0, num6, operation) {
    // Perform arithmetic operations based on the 'operation' parameter
    function add() {
        return num0 + num6;
    }

    function subtract() {
        return num0 - num6;
    }

    function multiply() {
        return num0 * num6;
    }

    function divide() {
        if (num6 === 0) {
            return "Cannot divide by zero";
        }
        return num0 / num6;
    }

    // Use a switch statement to determine which operation to perform
    switch (operation) {
        case "add":
            return add();
        case "subtract":
            return subtract();
        case "multiply":
            return multiply();
        case "divide":
            return divide();
        default:
            return "Invalid operation";
    }
}

// Example usage:
const result0 = compute(14, 27, "add");
console.log(result0); // This will log the result of adding 14 and 27
