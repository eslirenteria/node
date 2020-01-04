var async = require("async");
const fs = require('fs');
async.parallel(['example1.js', 'example2.js', 'example3.js'], fs.stat, function (err, results) {
    // results is now an array of stats for each file
})