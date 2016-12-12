(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('WidgetController', WidgetController);

    WidgetController.$inject = ['$http' , 'WidgetService'];

    /* @ngInject */
    function WidgetController($http , WidgetService) {
        var vm = this;
        
        //BELOW: (6) VALUES INPUTTED FROM USER ADMIN UI
        vm.injectableDisplayOrder = [];
        vm.attributeDisplay = [];
        vm.comparisonTypes = [];
        vm.comparisonValue = [];
        vm.datatypeComparison = [];
        vm.injectableFragment = [];
        

        activate();

/////////////////////////////////////////////////////////////////////

        function activate() {
        }

        vm.getRules = function(ProductDescriptionRule) {
            console.log(ProductDescriptionRule);

        
            widgetService.getRules(ProductDescriptionRule).then(function (response) {
                    
                    console.log(response);

                    vm.PPPPPP = response;
                    
                    console.log(vm.PPPPPP);
                })	

        }

/////////////////////////////////////////////////////////////////////


    }
})();