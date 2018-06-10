var app = angular.module("angularForm");
app.controller("voteSummaryController", function($scope, getDataFactory,$localStorage) {
    
    $scope.tableData = function() {
        url = '/list_poll';
        data={"id":$localStorage.token};
        getDataFactory.getData(url).get(data).$promise
        .then(function(response) {
        	console.log(response);
        	if(response.error==0){
        		$scope.data= response.data;             
            }           
        })
    }
    $scope.tableData();
})