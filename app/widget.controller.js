(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('WidgetController', WidgetController);

    WidgetController.$inject = ['$http' , 'WidgetService'];

    /* @ngInject */
    function WidgetController($http , WidgetService) {
        var vm = this;        
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
        
        activate();

/////////////////////////////////////////////////////////////////////

        function activate() {
        }

        vm.getRule = function(ProductDescriptionRule) {
            console.log(ProductDescriptionRule);

        
            widgetService.getRule(ProductDescriptionRule).then(function (response) {
                    
                    console.log(response);

                    vm.PPPPPP = response;
                    
                    console.log(vm.PPPPPP);
                })	

        }

/////////////////////////////////////////////////////////////////////


    }
})();