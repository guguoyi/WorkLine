(function () {
    'use strict';

    angular.module('pokemon-app', ['ngRoute', 'pokemon-app.pokemon'])
    .controller('AppController', AppController)
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.otherwise({
            redirectTo: '/pokemons'
        });

    $locationProvider.html5Mode(true);
    }]);

    function AppController($scope) {
       
    } 
    
    AppController.$inject = ['$scope'];
})();