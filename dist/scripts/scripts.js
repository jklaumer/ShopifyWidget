

var myApp = angular.module('myApp', ['ui.router'])
	.value ('obraryAPIurl','http://kit005.obrary.com/api/')

	.config(function($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/home");
        //
        // Now set up the states
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "/ruleTable.html",
                controller: 'WidgetController',
                controllerAs: 'vm'
                
            })
            
    });


(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('WidgetController', WidgetController);

    WidgetController.$inject = ['$http' , 'WidgetService'];

    /* @ngInject */
    function WidgetController($http , WidgetService) {
        var vm = this;
        vm.title = 'WidgetController';        
        vm.rule = {};
        vm.rule.name = [];
        vm.rule.productDescriptionRuleSetHas = {};
        vm.rule.productDescriptionRuleSetHas.id;
        vm.rule.comparisonType = [];
        vm.rule.position = [];
        vm.product = 'product';
        vm.title = 'title';
        vm.rule.fact = [vm.product,vm.title];
        vm.rule.comparisonValue = [];
        vm.rule.comparisonDataType = '';
        vm.rule.injectableFragment = [];

        vm.ruleArray = [];
        
        activate();

/////////////////////////////////////////////////////////////////////

        function activate() {

            // get the existing rules
            WidgetService.getRule().then(function(response){

                vm.ruleArray = response;
                console.log(vm.ruleArray);

            }, function(error){

                console.log(error);

            });

            // get the rule sets

            WidgetService.getRuleSets().then(function(response){

                vm.ruleSetArray = response;
                console.log(vm.ruleSetArray);

            }, function(error){

                console.log(error);

            });
        }

       

/////////////////////////////////////////////////////////////////////

        vm.addRule = function(){

            WidgetService.addRule(vm.rule).then(function(response){

                vm.ruleArray.push(response.data);
                console.log(vm.ruleArray);
                
            }, function(error){
                console.log(error);
            });
        }

        // vm.commitEdits = function(){
        //     vm.changeButton = false;
        //     console.log(item, vm.id);

        //     WidgetService.updateRule(item, vm.id).then(function(response){
                
        //         console.log(response);
        //         vm.ruleArray.splice(vm.index, 1, response);
        //         console.log(vm.ruleArray);
                
                
        //     });

        // }

        // vm.deleteRule = function(item, index){
        //     WidgetService.deleteRule(item).then(function(response){
        //         console.log(index);
        //     });
        //     vm.ruleArray.splice(index,1);
        //     console.log(vm.ruleArray);

        // }

/////////////////////////////////////////////////////////////////////


    }
})();











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

























