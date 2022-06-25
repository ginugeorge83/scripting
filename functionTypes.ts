// Function Types

function add(n1: number, n2: number)
{
    return n1 + n2;
}

function printResult(num: number): undefined
{
    console.log('Result: ' + num);
    return;
}

printResult(add(3, 9));

//let combineValue: Function;
// combineValue accepts any function without parameters that returns a number.
// let combineValue: () => number;

// combineValue accepts any function with 2 parameters where p1 is a number and p2 is a number and returns a number.
let combineValue: (a: number, b:number) => number

combineValue = add;
combineValue = printResult;

console.log(combineValue(9, 4));