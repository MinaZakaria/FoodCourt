angular.module('foodCourt').config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl :'templates/stores.html',
        controller: 'stores'
    })
    $routeProvider.when('/control',{
        templateUrl :'templates/control.html',
        controller: 'stores'
    })
    $routeProvider.when('/stores/create',{
        templateUrl :'templates/formStore.html',
        controller: 'singleStore'
    })
    $routeProvider.when('/stores/:StoreID/edit',{
        templateUrl :'templates/formStore.html',
        controller: 'singleStore'
    })
    $routeProvider.when('/stores/:StoreID',{
        templateUrl :'templates/showStore.html',
        controller: 'singleStore'
    })

})
