const express = require('express');
const bodyParser = require("body-parser");

let port = process.env.PORT || 8000;
const app = express();

app.use('/static', express.static('assets'));
app.listen(port, ()=>{
    console.log(`web server is listening on ${port}`);
});

// route
app.get('/', (req, res)=>{
    console.log(`Url: ${req.url}`);
    res.send(`Start...`);
});