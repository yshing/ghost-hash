var express = require('express');
var path = require('path');
// var ghost = require('./ghost-middleware');
var ghost = require('ghost')

var app = express();
var parentApp = express();
var config = require('./config');

var server = app.listen(4096, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
ghost().then(function (ghostServer){
    app.use( ghostServer.rootApp);
    ghostServer.start(server);
})