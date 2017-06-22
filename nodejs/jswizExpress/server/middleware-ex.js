var express = require('express');
var app = express();
var port = 8000;

app.get('/',log, hello );

function log(req, res, next) {
    console.log(new Date(), eq.method, req.url);
    next();
};

function hello(req, res, next) {
    console.log('Hello \n'+ 'World');
    res.end();
    next();
};

app.listen(port, function() {
    console.log('server started');
});