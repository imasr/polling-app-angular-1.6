var app = angular.module("angularForm");
app.controller("viewPollController", function($scope,$location, getDataFactory,$localStorage) {
    
    $scope.record={}
    $scope.showDeleteBtn=false;
    if ($localStorage.role == "admin") {
        console.log("kjndsvkjnxj")
        $scope.showDeleteBtn = true;
    }

    $scope.tableData = function() {        
        url = '/list_polls';
        getDataFactory.getData(url).get().$promise
        .then(function(response) {
        	console.log(response)
        	if(response.error==0) {
        		$scope.record = response.data;
				console.log($scope.record);
            }           
        })
    };
    
    $scope.delete=function(data){
        console.log(data)

        url ='/delete_poll';
        var newdata={'id':data._id}
        console.log(newdata)
        getDataFactory.getData(url).get(newdata).$promise
        .then(function(response) {
            console.log(response)
            if(response.error==0) {
                $scope.tableData();
                console.log($scope.record);
            }           
        })
    };
    $scope.tableData();   
})