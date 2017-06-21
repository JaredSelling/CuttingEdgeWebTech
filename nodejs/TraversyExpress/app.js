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

//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//set static path
app.use(express.static(path.join(__dirname,'public')));

var users = [
    {
        id: 1,
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@gmail.com'
    },
    {
        id: 2,
        first_name: 'Jane',
        last_name: 'Doe',
        email: 'janedoe@gmail.com'
    },
    {
        id: 3,
        first_name: 'Jared',
        last_name: 'Selling',
        email: 'jaredselling@gmail.com'
    }
]
app.get('/', function(req, res) {
    res.render('index', {
        title: 'Customers',
        users: users
    });
});

app.listen(3000, function() {
   console.log('Server started on Port 3000...'); 
});