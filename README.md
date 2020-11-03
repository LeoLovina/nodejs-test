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