"use strict";
// Function Types
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
    return;
}
// CALLBACK FUNCTION
function addAndHandler(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult(add(3, 9));
//let combineValue: Function;
// combineValue accepts any function without parameters that returns a number.
// let combineValue: () => number;
// combineValue accepts any function with 2 parameters where p1 is a number and p2 is a number and returns a number.
let combineValue;
combineValue = add;
combineValue = printResult;
console.log(combineValue(9, 4));
addAndHandler(3, 9, (result) => {
    console.log(result);
});
