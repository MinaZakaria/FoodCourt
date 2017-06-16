angular.module("foodCourt").controller('singleStore',function($routeParams,$scope,$rootScope,$location,$route,Stores){

    $scope.StoreID = $routeParams['StoreID'];

    Stores.getSingleStore($scope.StoreID).then(function(data){
        $scope.store=data.store
        $scope.image_exists = 1;
        console.log('all stores',$scope.store);
    },function(err){
        console.log(err);
    })


    $scope.updateStore=function(){
        console.log('DATA AFTER EDITING',$scope.store.StoreLogo);
        if ($rootScope.filesuploaded) {
            $scope.store.StoreLogo = $rootScope.filesuploaded.name
        }
        Stores.update($scope.StoreID,$scope.store).then(function(data){
            if (data.status ==200) {
                $location.url('/stores/'+$scope.StoreID)
            }else {
                alert('sry there is a problem updating the data')
            }
        },function(err){
            console.log(err);
        })
    }

    $scope.image_deleted=function(){
        $scope.image_exists = 0;
        $scope.store.StoreLogo=""
        console.log('DATA AFTER deleting',$scope.store);
    }

    $scope.uploadedFile = function(element) {

        console.log("element is ",element.files[0])
        $rootScope.filesuploaded = element.files[0];
     }

})
