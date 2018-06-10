var app = angular.module("angularForm");
app.controller("createPollController", function($scope, getDataFactory,$timeout,$localStorage,$state) {
   
    $scope.alertSuccess = false;
    $scope.alertError = false;
    $scope.object={ques:'',opt1:'',opt2:'',opt3:'',opt4:''}
    $scope.entity = {
        name : "Form Data", 
        fields :[
                {type: "text", name: "question", label: "Question" , required: true, data:""}, 
                {type: "text", name: "option1", label: "Option 1" , required: true, data:""},
                {type: "text", name: "option2", label: "Option 2" , required: true, data:""}, 
                {type: "text", name: "option3", label: "Option 3" , required: true, data:""},
                {type: "text", name: "option4", label: "Option 4" , required: true, data:""}, 
            ],
        button: "Submit"
    };
        
    $scope.submit= function(Obj,spin) {
        $scope.object.ques=Obj[0].data,
        $scope.object.opt1=Obj[1].data,
        $scope.object.opt2=Obj[2].data,
        $scope.object.opt3=Obj[3].data,
        $scope.object.opt4=Obj[4].data
        console.log('>>>>>>>>',spin)
        $scope.spinner=spin;        
        var options=$scope.object.opt1+'____'+$scope.object.opt2+'____'+$scope.object.opt3+'____'+$scope.object.opt4;
        data={"title":$scope.object.ques,"options":options};
        url ='/add_poll?'
        getDataFactory.getData(url).get(data).$promise
        .then(function(response) {
            $scope.spinner=false;
            if (response.error==0){
                $scope.alertSuccess = true;                
                $timeout(function() {
                    for (var i = 0; i <Object.keys($scope.entity.fields).length; i++) {
                        $scope.entity.fields[i].data=null;
                    }
                    $scope.alertSuccess = false;
                }, 3000)
            }
            else{
                $scope.alertCreatePollError= true;
                $scope.errorMsg=response.data;
            }
        })            
    }  
})
