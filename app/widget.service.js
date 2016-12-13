(function() {
    'use strict';

    angular
        .module('myApp')
        .service('WidgetService', WidgetService);

    WidgetService.$inject = ['$http', 'obraryAPIurl'];

    /* @ngInject */
    function WidgetService($http, obraryAPIurl) {
        var service = {
        	getRule: getRule
        };
        return service;

        ////////////////
        
        var dummyRecord = {
        "name": "This is a test rule",
        "productDescriptionRuleSetHas":{"id": "5f2518abbcac48c8b823654e37c43306"},
        "comparisonType": "startsWith",
        "position": 2,
        "fact": ["product","title"],
        "comparisonValue": "In the Beginning",
        "comparisonDataType": "bool",
        "injectableDisplaySetting": 1,
        "injectableFragment": "<p align=\"center\">and then he said, \"this is a quote inside a JSON object\" and then all was quiet</p>"
        };

        function newRule(rule) {
            return $http({
                method: 'POST',
                url: obraryAPIurl,
                data: dummyRecord,
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
 
    }
})();

