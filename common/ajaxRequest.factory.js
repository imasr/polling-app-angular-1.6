var app = angular.module("angularForm");

app.factory("getDataFactory", function(configuration, $resource) {

    return {
        getData: function(url) {
            return $resource(configuration.apihost + url)
        }
    }
});