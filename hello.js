var http = require("http");

//create HTTP server and listen to port 8000
http.createServer(function (request, response) {

   // Set the response HTTP header with HTTP status and Content type
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body "Hello World"
   response.end('Hello World\n');
}).listen(process.env.PORT || 8000);

// Print URL for accessing server
console.log('Server running at http://127.0.0.1/:8000')
