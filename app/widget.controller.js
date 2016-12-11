(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('WidgetController', WidgetController);

    WidgetController.$inject = ['$http' , 'WidgetService'];

    /* @ngInject */
    function WidgetController($http , WidgetService) {
        var vm = this;
        


        vm.injectableDisplayOrder
        vm.attributeDisplay
        vm.condition
        vm.comparisonValue
        vm.datatypeComparison
        vm.injectableFragment
        

        // array 

        vm.XXXXXX = [];


// controller function list
		vm.
        vm.
        vm.
        vm.
        vm.
        vm.
        vm.
        vm.



        activate();

/////////////////////////////////////////////////////////////////////

        function activate() {

        	WidgetService.XXXXXX().then(

        		function (response) {

        			vm.XXXXXX = response;

        		},

        	);

        }

/////////////////////////////////////////////////////////////////////


    }
})();