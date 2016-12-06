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

        function getRule() {

        	var attributeDisplay
        	var condition
        	var datatypeComparison
        	var comparisonValue
        	var injectableFragment
        	var injectableDisplayOrder
        }
    }
})();

var neo4j = require('neo4j-driver').v1;