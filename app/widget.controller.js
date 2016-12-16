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










