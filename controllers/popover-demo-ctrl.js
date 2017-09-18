findmediaApp.controller('PopoverDemoCtrl', ['$scope','dataShare', function ($scope, dataShare) {
  $scope.dynamicPopover = {
    content: 'Hello, World!',
    //templateUrl: 'myPopoverTemplate.html',
    templateUrl: 'views/dsp_popup.html',
    title: 'Title'
  };
console.log($scope.dynamicPopover);
    $scope.setCurrentMediaId = function(mediaId){
       // alert(dataShare.getProperty().MEDIAS);
        $scope.currentMedia = dataShare.getProperty().MEDIAS[mediaId];
        $scope.currentFilesList = dataShare.getProperty().RELATION[mediaId];
        $scope.currentFiles = dataShare.getProperty().FILES;
       // console.log(dataShare.getProperty());
       // console.log(dataShare.getProperty().FILES[mediaId]);
       
    }
       
}]);



