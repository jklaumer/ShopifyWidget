(function() {
    'use strict';

    angular
        .module('myApp')
        .service('WidgetService', WidgetService);

    WidgetService.$inject = ['$http'];

    /* @ngInject */
    function WidgetService($http) {
        var service = {
        	getRule: getRule
        };
        return service;

        ////////////////

        function getRule(ProductDescriptionRule) {

            return $http({
                method: 'GET',
                url: '',
                params: {
                    key: 'name',
                    type: 'ProductDescriptionRule',

                }
            })
            .then(function(response) {

                console.log(response.data.Search);
                return response.data.Search;

            });  
        }  

        	
        }
    }
})();

var neo4j = require('neo4j-driver').v1;

            // var attributeDisplay
            // var comparisonTypes
            // var datatypeComparison
            // var comparisonValue
            // var injectableFragment
            // var injectableDisplayOrder