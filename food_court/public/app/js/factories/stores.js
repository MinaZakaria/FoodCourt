angular.module('foodCourt').factory('Stores',function($http,$q,$rootScope){
    var headers = {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
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
            console.log($rootScope.filesuploaded);
            var def = $q.defer();
                $http({
                    url:'http://localhost:8000/api/stores/'+storeID,
                    method:'PUT',
                    // data: new_data,
                    data: {"media_url": "uploads/files" + $rootScope.filesuploaded.name, "media_type": $rootScope.filesuploaded.type},

                    transformRequest: function (data) {
                        var formData = new FormData();
                        formData.append("file", $rootScope.filesuploaded);
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
        // update : function(storeID,new_data){
        //     var def = $q.defer();
        //         $http({
        //             url:'http://localhost:8000/api/stores/'+storeID,
        //             method:'PUT',
        //             data: new_data
        //
        //         }).then(function(res){
        //             console.log(res.data)
        //             def.resolve(res.data)
        //
        //         },function(err){
        //             def.reject(err)
        //         })
        //     return def.promise;
        // },
    }
})
