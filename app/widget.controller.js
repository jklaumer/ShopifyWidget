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
                vm.ruleArray = response.data;
                console.log(vm.ruleArray);
            });

        }

       

/////////////////////////////////////////////////////////////////////


    }
})();










