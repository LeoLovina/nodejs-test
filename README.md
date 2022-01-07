# NodeJs
```
Node.js = Runtime Environment + JavaScript Library
```

A Node.js application consists of the following important components -
- Import required modules 
- Crate server
- Read request and return response

Node.js is a single-threaded application, but it can support concurrency via the concept of event and callbacks.Every API of Node.js is asynchronous and being single-threaded, they use async function calls to maintain concurrency. 
- callback functions are called when an asynchronous function returns its result.
- event handling works on the observer pattern. The functions that listen to events act as Observers.

# Use ES6 imports
```
Add { "type": "module" } in the nearest package.json
```

# express 
- Fast, unopinionated, minimalist web framework for node
- basic route
``` javascript
app.METHOD(PATH, HANDLER)
```

- static files
If all static files are in folder assets, then you can 
``` javascript
app.use('/static', express.static('assets'));
```
To get the static file: http://localhost:8000/static/images/onepiece.jpg

``` javascript
app.use(express.static('assets'));
```
To get the static file: http://localhost:8000/images/onepiece.jpg

# Reference
https://www.tutorialspoint.com/nodejs/nodejs_first_application.htm
