var path = require('path');
var module = require('./module.js');
var mydir = process.argv[2];
var ext = process.argv[3];

var callback = function(err, list) {
    if(err) throw err;
    list.forEach(function(file) {
        console.log(file);
    });
};

module(mydir, ext, callback);