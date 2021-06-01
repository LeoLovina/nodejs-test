// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// Spread syntax (...)

// the declation max(...values: number[]) : number
let number = [1,2,3,4,5];

console.log(...number);
console.log(Math.max(...number));

// NaN is returned 
console.log(Math.max(number));

let myString = function (a,b,c){
    console.log ('a=' + a);
    console.log ('b=' + b);
    console.log ('c=' + c);
}
let str = "This is a test";
// only assign the first argument
// a = This is a test
// b=undefined
// c=undefined
myString(str);

// ...str will expend the value to arguments
// a='T' 
// b='h'
// c='i'
myString(...str);

// It is commonly used when you want to add a new item to a local data store, or display all stored items plus a new addition.
let numberStore = [0,1,2]
let newNumber = 3;
numberStore = [...numberStore, newNumber];
console.log(numberStore);
console.log([...numberStore,'4', 1]);

// use spread operator to clone object or merge objects into one.
let obj1 = {x:1, y:2}
let clonedObj = {...obj1}
let obj2 = {a:1, b:2}
let mergedObj = {...obj1, ...obj2}
console.log(mergedObj);