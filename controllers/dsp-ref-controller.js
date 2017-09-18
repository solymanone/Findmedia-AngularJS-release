var vURI = "http://158.168.146.151:8888/API/FM/CRUD/api.cfc?method=";


findmediaApp.controller('DspRefController', ['$scope','dataShare', function ($scope, dataShare, $routeParams) {
  $scope.dynamicPopover = {
    content: 'Hello, World!',
    //templateUrl: 'myPopoverTemplate.html',
    templateUrl: 'views/ref_items.html',
    title: 'Title'
  };

 /*   $scope.setCurrentMediaId = function(mediaId){
       // alert(dataShare.getProperty().MEDIAS);
        $scope.currentMedia = dataShare.getProperty().MEDIAS[mediaId];
        $scope.currentFilesList = dataShare.getProperty().RELATION[mediaId];
        $scope.currentFiles = dataShare.getProperty().FILES;
       // console.log(dataShare.getProperty());
       // console.log(dataShare.getProperty().FILES[mediaId]);
       
    }*/
       
}]);





/*findmediaApp.controller('DspRefController',
            function($scope,$http,$routeParams){
                var APIURI = vURI + 'getReference';
                alert($routeParams.refId);
                    
            }); */