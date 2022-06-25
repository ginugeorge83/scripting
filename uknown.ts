// unknown is a bit more restricted than any
let userInput: unknown;
let userName: string;

userInput = 1;
userInput = 'string'

if(typeof userInput === 'string')
{
    userName = userInput;
}