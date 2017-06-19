var http = require('http');
var bl = require('bl');
var url = process.argv[2];

var charCount = 0;
var string;

http.get(url, function(response) {
    response.pipe(bl(function(err, data) {
        if(err) throw err;
        console.log(data.toString().length);
        console.log(data.toString());
    }));
});
