var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'home.html'
        })

        .state('webhosting', {
            url: '/webhosting',
            templateUrl: 'webhosting.html'
        })
        // nested list with custom controller
        .state('webhosting.linux', {
            url: '/list',
            templateUrl: 'linux.html'
        })
        
        // nested list with just some random string data
        .state('webhosting.windows', {
            url: '/windows',
            templateUrl: 'windows.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('company', {
            url: '/company',
            templateUrl: 'company.html'            
        });
        
});

routerApp.controller('scotchController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];
    
});