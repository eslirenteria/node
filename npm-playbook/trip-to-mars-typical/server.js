var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('Hello world');
});

var server = app.listen(3000, () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App runninc on port ' + port);
});
