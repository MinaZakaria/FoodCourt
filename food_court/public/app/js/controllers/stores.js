angular.module("foodCourt").controller('stores',function($scope,$rootScope,Stores){

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
            if (data.status =="200") {
                alert('data deleted successfully')
            }else {
                alert('sry there is a problem deleting the data')
            }
        },function(err){
            console.log(err);
        })
    }
})
