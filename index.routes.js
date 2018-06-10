var app = angular.module("angularForm", ['ui.router', 'ngStorage', 'angularUtils.directives.dirPagination', 'ngResource']);
app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('register', {
            url: '/register',
            templateUrl: 'components/registration/registrationForm.html',
            controller: 'registrationController',
        })
        .state('login', {
            url: '/login',
            templateUrl: 'components/login/loginForm.html',
            controller: 'loginController',
        })
        .state('menuTemplate.voteSummary', {
            url: '/voteSummary',
            templateUrl: 'components/viewVote/voteSummary.html',
            controller: 'voteSummaryController',
        })
         .state('menuTemplate', {
            url: '/menuTemplate',
            templateUrl: 'menuTemplate.html',
            controller: 'templateController',
        })
        .state('menuTemplate.createPoll', {
            url: '/createPoll',
            templateUrl: 'components/createPoll/createPoll.html',
            controller: 'createPollController',
        })
        .state('menuTemplate.viewPoll', {
            url: '/viewPoll',
            templateUrl: 'components/viewPoll/viewPoll.html',
            controller: 'viewPollController',
        })
        .state('menuTemplate.takePoll', {
            url: '/takePoll',
            templateUrl: 'components/takePoll/takePoll.html',
            controller: 'takePollController',
        })
})
