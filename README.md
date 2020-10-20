# express 
- Fast, unopinionated, minimalist web framework for node
- basic route
``` javascript
app.METHOD(PATH, HANDLER)
```

- static files
``` javascript
app.use(express.static('assess'));
app.use('/static', express.static('public'));
```
http://localhost:8000/images/onepiece.jpg