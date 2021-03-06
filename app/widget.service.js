(function() {
    'use strict';

    angular
        .module('myApp')
        .service('WidgetService', WidgetService);

    WidgetService.$inject = ['$http', 'obraryAPIurl', '$q'];

    /* @ngInject */
    function WidgetService($http, obraryAPIurl, $q) {
        var service = {
        	getRuleSets: getRuleSets,
            getRule: getRule,
            addRule: addRule,
            updateRule: updateRule,
            deleteRule: deleteRule,
        };
        // var obraryAPIurl = 'http://kit005.obrary.com/api/';
        return service;

        ////////////////
        
        var dummyRecord = {
        "name": "TEST RULE 3",
        "productDescriptionRuleSetHas":{"id": "5f2518abbcac48c8b823654e37c43306"},
        "comparisonType": "startsWith",
        "position": 2,
        "fact": ["product","title"],
        "comparisonValue": "In the Beginning",
        "comparisonDataType": "bool",
        "injectableFragment": "<p align=\"center\">and then he said, \"this is a quote inside a JSON object\" and then all was quiet</p>"
        }

//GET ALL RULE SETS 
        function getRuleSets() {

            var defer = $q.defer();

            $http({
                method: 'GET',
                url: obraryAPIurl + 'product-rules/rulesets',
                header:{
                    'Content-Type': 'application/json'
                }
            })
            .then(function(response) {
                    if (typeof response.data === "object") {
                        defer.resolve(response.data);
                    } else {
                        defer.reject(response);
                    }
            },
                function(error) {
                    defer.reject(error);
                });

            return defer.promise;                  
        }

//READ
         function getRule() {

            var defer = $q.defer();

            $http({
                method: 'GET',
                url: obraryAPIurl + 'product-rules/rules',
                header:{
                    'Content-Type': 'application/json'
                }
            })
            .then(function(response) {
                    if (typeof response.data === "object") {
                        defer.resolve(response.data);
                    } else {
                        defer.reject(response);
                    }
            },
                function(error) {
                    defer.reject(error);
                });

            return defer.promise;                  
        }
//CREATE
        function addRule(rule) {
            console.log(rule);
            var defer = $q.defer();

            obraryAPIurl = obraryAPIurl + 'product-rules/rules';

            $http({
                method: 'POST',
                url: obraryAPIurl,
                data: rule,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(function(response) {
                    if (typeof response.data === "object") {
                        defer.resolve(response.data);
                    } else {
                        defer.reject(response);
                    }
            },
                function(error) {
                    defer.reject(error);
                });

            return defer.promise;                  
        }
//UPDATE
        function updateRule(rule) {

            var defer = $q.defer();

            $http({
                method: 'PUT',
                url: obraryAPIurl,
                header:{
                    'Content-Type': 'application/json'
                }
            })
            .then(function(response) {
                    if (typeof response.data === "object") {
                        defer.resolve(response.data);
                    } else {
                        defer.reject(response);
                    }
            },
                function(error) {
                    defer.reject(error);
                });

            return defer.promise;                  
        }
//DELETE
        function deleteRule(rule) {

            var defer = $q.defer();

            $http({
                method: 'DELETE',
                url: obraryAPIurl,
                header:{
                    'Content-Type': 'application/json'
                }
            })
            .then(function(response) {
                    if (typeof response.data === "object") {
                        defer.resolve(response.data);
                    } else {
                        defer.reject(response);
                    }
            },
                function(error) {
                    defer.reject(error);
                });

            return defer.promise;                  
        }
 
    }
})();

























