var fs = require('fs');
var path = require('path');



module.exports = function(myDir, ext, callback) {
    fs.readdir(myDir, function(err, list) {
        if(err) return callback(err);
        list = list.filter(function(file) {
            if(path.extname(file) === '.' + ext) return true;
        })
        return callback(null, list)
    });
} 