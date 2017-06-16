angular.module("foodCourt").controller('singleStore',function($routeParams,$scope,$rootScope,$location,$route,Stores){

    $scope.StoreID = $routeParams['StoreID'];
    // $scope.filesuploaded =
    if ($scope.StoreID) {
        Stores.getSingleStore($scope.StoreID).then(function(data){
            $scope.store=data.store
            if (data.store.StoreLogo) {
                $scope.image_exists = 1;
            }else {
                $scope.image_exists = 0;
            }
            console.log('all stores',$scope.store);
        },function(err){
            console.log(err);
        })
    }


    $scope.updateStore=function(){
        console.log('DATA AFTER EDITING',$scope.store.StoreLogo);
        if ($rootScope.filesuploaded) {
            $scope.store.StoreLogo = $rootScope.filesuploaded.name
        }
        Stores.update($scope.StoreID,$scope.store).then(function(data){
            if (data.status =="200") {
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
        var fd = new FormData();
        //Take the first selected file
        fd.append("file", element.files[0]);

         console.log("element is ",element.files[0].name)
         $rootScope.filesuploaded = element.files[0];
        //  $scope.filesuploaded.push(element.files[0]);
        //  $(element).parent().parent().parent().find('.form-control').val($(element).val().replace(/C:\\fakepath\\/i, ''));
     }

})
