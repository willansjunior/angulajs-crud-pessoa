angular.module('listperson', ['ngRoute'])
    .config(function($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider.when('/persons', {
            templateUrl:'partials/principal.html',
            controller:'PersonController'
        });

        $routeProvider.when('/person/create', {
            templateUrl:'partials/cadastro.html'
        });

        $routeProvider.otherwise({
            redirectTo:'/persons'
        })
    });