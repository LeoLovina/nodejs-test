// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

// Syntax
/*
function f(a, b, ...theArgs) {
    // ...
}
*/

// Rest parameters are real arrays; the arguments object is not.
let avg = function(...arr){
    // the arr is an array
    console.log(arr)

    // the arguments represent original paramenters
    console.log(arguments);

    let sum = 0;
    for(let i=0; i< arr.length; i++){
        sum += arr[i];
    }
    return sum/arr.length;
}

console.log(avg(1,3,5,7,9));
