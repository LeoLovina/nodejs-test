// to execute a nodejs that uses import: node -r esm readfile.js
import fs from 'fs';

let data = fs.readFileSync("sample.txt");
fs.readFile("sample.txt", (error, data) =>{
    console.log('1');
    console.log(data);
});
console.log(data);
