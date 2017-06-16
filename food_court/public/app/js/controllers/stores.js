angular.module("foodCourt").controller('stores',function($scope,$rootScope,$location,Stores,$route){

    console.log('inside stores controller');
    Stores.getAllStores().then(function(data){
        $scope.stores=data.stores
        console.log('all stores',data.stores);
    },function(err){
        console.log(err);
    })

    $scope.deleteStore=function(storeID,index){
        console.log(storeID,index);
        Stores.delete(storeID).then(function(data){
            console.log("data after delete",data);
            if (data.status ==200) {
                $route.reload();
            }else {
                alert('sry there is a problem deleting the data')
            }
        },function(err){
            console.log(err);
        })
    }


    $scope.createStore=function(valid){
        if($rootScope.filesuploaded && $rootScope.filesuploaded.name != ""){
            $scope.pass=true;
        }
        if (valid && $scope.pass) {
            console.log('DATA AFTER FORM SUBMIT',$scope.store);
            Stores.create($scope.store).then(function(data){
                if (data.status ==200) {
                    $location.url('/control')
                }else {
                    alert('sry there is a problem adding the data')
                }
            },function(err){
                console.log(err);
            })
        }

    }

    $scope.uploadedFile = function(element) {

         console.log("element is ",element.files[0])
         $scope.pass=true;
         $rootScope.filesuploaded = element.files[0];
     }

})
