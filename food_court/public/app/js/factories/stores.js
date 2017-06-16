angular.module('foodCourt').factory('Stores',function($http,$q,$rootScope){

    return {
        getAllStores : function(){
            var def = $q.defer();
                $http({
                    url:'http://localhost:8000/api/stores',
                    method:'GET',

                }).then(function(res){
                    console.log(res.data)
                    if(res.data.stores.length){
                        def.resolve(res.data)
                    }else{
                        def.reject('there is no data')
                    }
                },function(err){
                    def.reject(err)
                })
            return def.promise;
        },
        getSingleStore : function(storeID){
            var def = $q.defer();
                $http({
                    url:'http://localhost:8000/api/stores/'+storeID,
                    method:'GET'
                }).then(function(res){
                    console.log(res.data)
                    if(res.data.store){
                        def.resolve(res.data)
                    }else{
                        def.reject('there is no data')
                    }
                },function(err){
                    def.reject(err)
                })
            return def.promise;
        },
        delete : function(storeID){
            var def = $q.defer();
                $http({
                    url:'http://localhost:8000/api/stores/'+storeID,
                    method:'DELETE',

                }).then(function(res){
                    console.log(res.data)
                    def.resolve(res.data)

                },function(err){
                    def.reject(err)
                })
            return def.promise;
        },
        update : function(storeID,new_data){
            console.log(new_data);
            var def = $q.defer();
                $http({
                    url:'http://localhost:8000/api/stores/'+storeID,
                    method:'post',
                    data: new_data,

                    transformRequest: function (data) {
                        var formData = new FormData();
                        formData.append("image", $rootScope.filesuploaded);
                        formData.append("StoreName", data.StoreName);
                        formData.append("StoreDescription", data.StoreDescription);
                        return formData;
                    },
                    headers: {
                        'Content-Type': undefined,
                        'Process-Data': false
                    }
                }).then(function(res){
                    $rootScope.filesuploaded=""
                    console.log(res.data)
                    def.resolve(res.data)

                },function(err){
                    def.reject(err)
                })
            return def.promise;
        },
        create : function(new_data){
            console.log(new_data);
            var def = $q.defer();
                $http({
                    url:'http://localhost:8000/api/stores',
                    method:'POST',
                    data: new_data,

                    transformRequest: function (data) {
                        var formData = new FormData();
                        formData.append("image", $rootScope.filesuploaded);
                        formData.append("StoreName", data.StoreName);
                        formData.append("StoreDescription", data.StoreDescription);
                        return formData;
                    },
                    headers: {
                        'Content-Type': undefined,
                        'Process-Data': false
                    }
                }).then(function(res){
                    console.log(res.data)
                    def.resolve(res.data)

                },function(err){
                    def.reject(err)
                })
            return def.promise;
        },
    }
})
