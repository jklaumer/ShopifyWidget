

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

