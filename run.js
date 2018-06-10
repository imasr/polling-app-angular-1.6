var app=angular.module("angularForm");
app.run(function($rootScope, $location,$localStorage, $state) {
    $rootScope.$on('$locationChangeStart', function (event, next, current) {
    	var arrayOuterPages=['/login', '/register']
        var innerPages = arrayOuterPages.indexOf($location.path()) === -1;
        if (innerPages && $localStorage.id==null) {
            $location.path('/login');
        }

        var arrayInnerPage=['/menuTemplate/createPoll', '/menuTemplate/viewPoll', '/menuTemplate/takePoll', '/menuTemplate/voteSummary']
    	var outerPages= arrayInnerPage.indexOf($location.path()) === -1;
    	if (outerPages && $localStorage.id!=null) {
    	  $location.path('/menuTemplate/createPoll');
    	}
           
    });    
});
