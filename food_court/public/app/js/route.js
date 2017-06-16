angular.module('foodCourt').config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl :'templates/stores.html',
            controller: 'stores'
        })
        .when('/control',{
            templateUrl :'templates/control.html',
            controller: 'stores'
        })
        .when('/stores/create',{
            templateUrl :'templates/createStore.html',
            controller: 'stores'
        })
        .when('/stores/:StoreID/edit',{
            templateUrl :'templates/editStore.html',
            controller: 'singleStore'
        })
        .when('/stores/:StoreID',{
            templateUrl :'templates/showStore.html',
            controller: 'singleStore'
        })
        .otherwise({
            templateUrl : 'templates/404.html'
        });

})
