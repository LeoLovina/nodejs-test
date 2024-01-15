import fs from 'fs';

let data = '';

//create a readable stream
let readStream = fs.createReadStream('sample.txt', );
readStream.setEncoding('utf8');

// create a writable stream
let writeStream = fs.createWriteStream('output.txt','utf-8');

// handle stream events -->
readStream.on('data', (chunk)=>{
    data += chunk;
    console.log(data);
})

writeStream.on('end', ()=>{
    console.log('writeStream end');
})

writeStream.on('finish', ()=>{
    console.log('writeStream finish');
})

readStream.on('end', ()=>{
    console.log('readStream end');    
    writeStream.write(data,'utf-8');
    writeStream.end();
})

readStream.on('finish', ()=>{
    console.log('readStream finish');    
})


console.log('Program stop');