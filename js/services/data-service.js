findmediaApp.service('dataShare', function ($rootScope) {
    var service = {};
    this.data = false;
    this.sendData = function(data) {
        this.data = data;
        $rootScope.$broadcast('data_shared');
    };
    this.getData = function() {
        return this.data;
    };
    //return service;
});