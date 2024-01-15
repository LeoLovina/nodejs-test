import fs from "fs";
import zlib from "zlib";


// Compress the file input.txt to input.txt.gz
fs.createReadStream('sample.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('sample.txt.gz'));
  

fs.createReadStream('sample.txt')
   .pipe(fs.createWriteStream('output.txt'));
console.log("File Compressed.");