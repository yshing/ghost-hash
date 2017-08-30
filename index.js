var express = require('express');
var path = require('path');
// var ghost = require('./ghost-middleware');
var ghost = require('ghost')

var app = express();
var parentApp = express();
var config = require('./config');

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// app.use( '/blog', ghost({
//     config: path.join(__dirname, 'config.js')
// }) );

var server = app.listen(4096, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
ghost({
    "url": "http://localhost:4096/",
    "database": {
        "client": "sqlite3",
        "connection": {
            "filename": "content/data/ghost-local.db"
        },
        "debug": true
    },
    "server": {
        "host": "127.0.0.1",
        "port": "4096"
    },
    "paths": {
        "contentPath": "content/"
    }
}).then(function (ghostServer){
    app.use( ghostServer.rootApp);
    ghostServer.start(server);
})