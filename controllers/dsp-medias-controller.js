findmediaApp.controller('DspMediasController', ['$scope','Api', 'dataShare',
            function($scope,Api,dataShare){
                    Api.all()
                    .then(function(data){
                        $scope.items = angular.fromJson(data);
                        $scope.items = $scope.items.data;
                        dataShare.setProperty($scope.items);
                        console.log(dataShare.getProperty());
                    });
  }]);

