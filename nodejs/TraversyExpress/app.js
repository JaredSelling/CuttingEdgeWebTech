var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');

var app = express();


//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//set static path
app.use(express.static(path.join(__dirname,'public')));

//global vars
app.use(function(req, res, next) {
    res.locals.errors = null; 
    next();
});

//Express Validator Middleware
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

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

app.post('/users/add', function(req, res) {
    
    req.checkBody('first_name', 'First Name is required').notEmpty();
    
    req.checkBody('last_name', 'Last Name is required').notEmpty();

    req.checkBody('email', 'Email is required').notEmpty();
    
    var errors = req.validationErrors();
    if(errors) {
        res.render('index', {
            title: 'Customers',
            users: users,
            errors: errors
        });
    } else {
        var newUser = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
        }
        console.log(newUser);
    }
    

});

app.listen(3000, function() {
   console.log('Server started on Port 3000...'); 
});