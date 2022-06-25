"use strict";
// unknown is a bit more restricted than any
let userInput;
let userName;
userInput = 1;
userInput = 'string';
if (typeof userInput === 'string') {
    userName = userInput;
}
