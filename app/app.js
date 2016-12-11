var express = require('express');
var path = require('path');
var request = require('request');
var app = express();

//************************************************************
// NEEDS ATTENTION! Added the REST URL below from the 
// 'connection settings' at https://app.graphenedb.com/dbs/ShopifyWidgetJKL/connection on 12/7/16
//************************************************************
var txUrl = "http://hobby-dghjcgliojekgbkeaknjnkol.dbs.graphenedb.com:24789/db/data/";
//************************************************************


//normal index page output
	app.get('/', function(req, res) {
	    res.send('<h2>NEO4J TESTING TESTING</h2>');
	});


// data get route returns the node we created
	app.get('/data', function(req, res) {
	    var query = "MATCH (n:JJJJJJJ) RETURN n LIMIT 100";

	    var promise = doDatabaseOperation(query);
	    promise.then(function(data) {
	        res.send(data)
	    })

	});

// data post route to create a node of type "JJJJJJJ" and name attribute as "Jeff"
	app.post('/data', function(req, res) {
	    var query = "CREATE (n:JJJJJJJ {name:'Jeff'}) RETURN n";

	    var promise = doDatabaseOperation(query)
	    promise.then(function(data) {
	        res.send(data)
	    })

	});


// data get route returns the node with name=given parameter
	app.get('/data/:name', function(req, res) {
	    var query = "MATCH (n:JJJJJJJ {name: {nameParam}}) RETURN n LIMIT 100";
	    var params = {
	        nameParam: req.params.name
	    }

	    var promise = doDatabaseOperation(query, params);
	    promise.then(function(data) {
	        res.send(data)
	    })

	});

// data post route to create a node of type "JJJJJJJ" and name attribute as given parameter
	app.post('/data/:name', function(req, res) {
	    var query = "CREATE (n:JJJJJJJ {name:{nameParam}}) RETURN n";

	    var params = {
	        nameParam: req.params.name
	    }

	    var promise = doDatabaseOperation(query, params);
	    promise.then(function(data) {
	        res.send(data)
	    })

	});





var doDatabaseOperation = function(query, params) {
    return new Promise(function(resolve, reject) {
        request.post({
                uri: txUrl,
                headers: {
                	
//************************************************************
// NEEDS ATTENTION! Added the REST username and REST password below from the 
// 'connection settings' at https://app.graphenedb.com/dbs/ShopifyWidgetJKL/connection on 12/7/16
//************************************************************

                    "Authorization": "ShopifyWidgetJKL aQHo0i0snqSDQKzytpgn"

//************************************************************


                },
                json: {
                    statements: [{
                        statement: query,
                        parameters: params
                    }]
                }
            },
            function(err, res) {
                if (err)
                    reject(err)
                else
                    resolve(res.body)
            })
    });
}

module.exports = app;





