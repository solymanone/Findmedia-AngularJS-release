findmediaApp.factory('Api',['$http','vURI', function ApiFactory($http,vURI) {

    return {
        all: function() {
                return $http({method: "GET",url: vURI.server + vURI.port + vURI.url + 'listLastRef'});
            }
    };
}]);

