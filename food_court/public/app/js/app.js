angular.module("foodCourt",["ngRoute"]);

angular.module("foodCourt").run(function($rootScope,$location){
    $rootScope.searchStores = function(){
    $location.url('/')
    }
})
