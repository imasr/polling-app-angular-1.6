var app = angular.module("angularForm");
app.controller("templateController", function($scope,$location,$localStorage,$state){
$scope.toggleNav=function() {
        if ($scope.sidebar==true) {
            $scope.sidebar=false;
        }
        else{
            $scope.sidebar=true;
        }
    };

    $scope.isActive = function (viewLocation) { 
        var Active = (viewLocation === $location.path());
        return Active;
    };

    // sidebar ng-show
    window.onresize=function(){
        $scope.change();
        $scope.$digest();
    };
    $scope.change=function(){
        if (window.innerWidth<=998) {
            console.log(window.innerWidth)
            $scope.sidebar=false;
        }
        else{
            $scope.sidebar=true;
        }console.log('Sidebar->',$scope.sidebar)
    };

    $scope.logout=function(){
        $localStorage.role=null;
        $localStorage.id=null;
        $state.go('login'); 
    }

    $scope.change();
   
});
