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
        vm.rule.productDescriptionRuleSetHas = [];
        vm.rule.comparisonType = [];
        vm.rule.position = [];
        vm.rule.fact = [];
        vm.rule.comparisonValue = [];
        vm.rule.comparisonDataType = [];
        vm.rule.injectableDisplaySetting = [];
        vm.rule.injectableFragment = [];

        vm.ruleArray = [];
        
        activate();

/////////////////////////////////////////////////////////////////////

        function activate() {

            WidgetService.getRule().then(function(response){

                vm.ruleArray = response;
                console.log(vm.ruleArray);

            }, function(error){

                console.log(error);

            });

        }

       

/////////////////////////////////////////////////////////////////////

        vm.addText = function(){
            
            WidgetService.addRule(ruleInput, option).then(function(response){
                vm.ruleArray.push(response.data);
                console.log(vm.ruleArray);
            });
        }

        vm.editRule = function(){
            vm.changeButton = true;
            vm.id = id;
            vm.index = index;
            vm.ruleInput = item;
            vm.priority = vm.options[priority-1].value;
            //console.log(, , );
        }

        vm.commitEdits = function(){
            vm.changeButton = false;
            console.log(item, vm.id);

            WidgetService.updateRule(item, vm.id).then(function(response){
                
                console.log(response);
                vm.ruleArray.splice(vm.index, 1, response);
                console.log(vm.ruleArray);
                
                
            });

        }

        vm.deleteRule = function(item, index){
            WidgetService.deleteRule(item).then(function(response){
                console.log(index);
            });
            vm.ruleArray.splice(index,1);
            console.log(vm.ruleArray);

        }

/////////////////////////////////////////////////////////////////////


    }
})();










