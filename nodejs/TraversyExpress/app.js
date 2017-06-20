var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

/*
//middle ware
var logger = function(req, res, next) {
    console.log('logging...');
    next();
}

//to use middle ware
app.use(logger); */

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//set static path
app.use(express.static(path.join(__dirname,'public')));

var person = [
    {
        name: 'Jared',
        age: 21
    },
    {
        name: 'John',
        age: 30
    }
]

app.get('/', function(req, res) {
    res.json(person);
});

app.listen(3000, function() {
   console.log('Server started on Port 3000...'); 
});