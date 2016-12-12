var http = require('http');
var app = require('./app');
var port = 1111;
var myApp = angular.module('myApp');

var server = http.createServer(app);
server.listen(port);
server.on('error', function () {
	console.log("error occured");
});
server.on('listening', function () {
	console.log("listening to port "+port);
});




// var http = require('http');
// var app = require('./app');
// var port = 1111;

//************************************************************
// NEEDS ATTENTION! Added the snippet below from the heroku devcenter - node.js & neo4j
// https://devcenter.heroku.com/articles/graphenedb#using-with-node-js-and-node-neo4j on 12/7/16
// used the REST URL from graphenedb.com
//************************************************************

// var neo4j = require('neo4j');
// var db = new neo4j.GraphDatabase(
//     process.env['http://hobby-dghjcgliojekgbkeaknjnkol.dbs.graphenedb.com:24789/db/data/'] ||
//     'http://localhost:7474'
// );

//************************************************************


// var server = http.createServer(app);
// server.listen(port);
// server.on('error', function () {
//     console.log("error occured");
// });
// server.on('listening', function () {
//     console.log("listening to port "+port);
// });