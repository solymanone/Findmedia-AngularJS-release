findmediaApp.service('dataShare', function ($q) {
    var service = {};
   // this.data = false;
    service.getProperty = function(){
        return service.value;
    }
    service.setProperty = function(data){
        service.value = data;
    }
    return service;
    /*return {
            getProperty: function () {
                return this;
            },
            setProperty: function(data) {
                this.service = data;
            }
        };*/
   
    
});