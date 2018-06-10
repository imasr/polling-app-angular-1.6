var app = angular.module("angularForm");
app.controller("registrationController", function($scope, getDataFactory, $timeout, $state) {
    $scope.user={username:'',password:'',role:''};
    $scope.alertsuccess=false;
    $scope.alerterror=false;
    // $scope.spinner= false;
    $scope.errmsg='';
    $scope.entity = {
        name : "Form Data", 
        fields :[
                {type: "text", name: "Username", label: "User Name" , required: true, data:""}, 
                {type: "password", name: "password", label: "Password" , min: 6, max:20, required: true, data:""},
                {type: "select", name: "role", label: "Role" ,  options:[{name: "admin"},{name: "user"},{name: "guest"}], required: true, data:""},
            ],
        button: "Submit"
    };
    
    $scope.change=function(){
        $scope.alerterror = false;
    };

    $scope.submit = function(Obj,spin) {
        var data={
            'username':Obj[0].data,
            'password':Obj[1].data,
            'role':Obj[2].data.name
        }
        $scope.spinner=spin;
        url='/add_user';
        getDataFactory.getData(url).get(data).$promise
        .then(function(response) {
            $scope.spinner= false;
            if (response.error==0) {
                $scope.alertsuccess = true;
                $timeout(function() {
                    for (var i = 0; i <Object.keys($scope.entity.fields).length; i++) {
                        $scope.entity.fields[i].data=null;
                    }
                    $scope.alertsuccess = false;
                    $state.go('login');
                }, 3000)
            }else{
                $scope.alerterror = true;
                $scope.errmsg = response.message;
            }
        })
    };
});
