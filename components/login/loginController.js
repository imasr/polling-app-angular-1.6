var app = angular.module("angularForm");
app.controller("loginController", function($scope, $localStorage, $state, getDataFactory,$timeout){
    $scope.user={username:'',password:''};
    // $scope.spinner= false;
    $scope.entity = {
                name : "Form Data", 
                fields :[
                        {type: "text", name: "Username", label: "User Name" ,autocomplete:"off", required: true, data:""}, 
                        {type: "password", name: "password", label: "Password" ,autocomplete:"off", min: 6, max:20, data:"", required: true,},
                    ],
                    button: "Login"
            };

    $scope.submit = function(Obj,spin) { 
        var data={
            'username':Obj[0].data,
            'password':Obj[1].data,
        }
        url = '/login'; 
        $scope.spinner=spin;      
        getDataFactory.getData(url).get(data).$promise
        .then(function(response) {
            $scope.spinner=false;
            if (response.error==0) {
                console.log(response.data)
                $localStorage.role= response.data.role;
                $localStorage.id= response.data._id;
                $state.go('menuTemplate.createPoll');                
            }
            else{
                $scope.alertLoginError = true;
                $scope.loginErrrMsg = response.data;
            }
        })
    };
    
    $scope.change = function() {
        $scope.alertLoginError = false;
    };
    // if ($localStorage.id){
    //     $state.go('menuTemplate.createPoll')
    // }
});


