let buf =  Buffer.alloc(250);
let len = buf.write("1234567890台");
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());

// get a size of a node buffer in bytes
console.log(len);