"use strict";
function combine(input1, input2, resultConversion) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinedAges = combine(10, 20, 'as-number');
console.log(combinedAges);
const combinedAgesInText = combine('12', '45', 'as-number');
console.log(combinedAgesInText);
const combinedNames = combine("Ginu ", "George", 'as-text');
console.log(combinedNames);
