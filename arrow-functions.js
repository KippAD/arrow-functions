/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a,b) {
    return a + b
}

// Arrow Function With Parameters

const addTwoNumbers2 = (a,b) => {
    return a + b
}

// Single Line Arrow Function With Parameters
const addTwoNumbers3 = (a,b) => a + b

// Implicit Returns

const printMsg = msg => console.log(msg)

// Returning Multiple Lines
const sum = num.reduce((partialSum, a) => partialSum + a, 0);