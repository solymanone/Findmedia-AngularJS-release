var findmediaApp = angular.module("findmedia", ['ngRoute','ngAnimate', 'ngSanitize', 'ui.bootstrap']);
//var vURI = "http://ec.europa.eu/avservices/findmedia/CRUD/api.cfc?method=listLastRef";
findmediaApp.constant('vURI',
                {
                    server: 'http://ec.europa.eu/',
                    port: '',
                    url: 'avservices/findmedia/CRUD/api.cfc?method='
                });

findmediaApp.constant('applicationName','Findmedia Mourad');

//var vURI = "http://localhost:8500/API/FM/CRUD/api.cfc?method=";
findmediaApp.config(['$routeProvider', function($routeProvider){
                    $routeProvider
                    .when('/', {
                        templateUrl: 'views/dsp_items.html',
                        controller: 'DspMediasController',
                        resolve: {
                            shareD: function (dataShare) {
                                return dataShare.getProperty();
                                }
                            }
                    })
                    .when('/ref/:refId?', {
                        templateUrl: 'views/ref_items.html',
                        controller: 'DspRefController'
                    })
                    .when('/media/:mediaId?', {
                        templateUrl: 'views/dsp_media.html',
                        controller: 'DspFileDetailController'
                    });
                 
                   }]);


findmediaApp.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);


findmediaApp.directive("fmFileStatus", function() {
//console.log(attr);    
   var directive= {
        restrict: 'EA',
        replace: true,
   //     template: '<span class="label label-warning">ERROR</span>',
        link: function(scope,element,attr){
         
                       switch(attr.fmFileStatus){
                                    case '1':
                                        var lcolor = '#3c8dbc';
                                        var lClass = 'label label-info';
                                        var lText = "QUEUE";
                                        break;
                                    case '2':
                                        var lcolor = 'RED';
                                        var lClass = 'label label-danger';
                                        var lText = "ERROR";
                                        break;
                                    case '3':     
                                        var lcolor = 'GREEN';
                                        var lClass = 'label label-success';
                                        var lText = "DONE";
                                        break;
                                    case '6':
                                        var lcolor = 'ORANGE';
                                        var lClass = 'label label-warning';
                                        var lText = "BUSY";
                                        break;
                                    case '7':
                                        var lcolor = 'ORANGE';
                                        var lClass = 'label label-warning';
                                        var lText = "BUSY";
                                        break;
                                    case '8':
                                        var lcolor = 'ORANGE';    
                                        var lClass = 'label label-warning';
                                        var lText = "BUSY";
                                        break;
                                    default:
                                        var lcolor = 'black';    
                                        var lClass = 'label label-info';
                                        var lText = "BUSY";
                                        break;
                                }
           
            element.css('background-color', lcolor);
            element.css('className', lClass);
            element[0].innerHTML=lText;
        }
			
     
   } 
    return directive;
});


findmediaApp.directive("fileStatusColor",function($log){
            var directive={
                restrict: 'A',
                link: function(scope,element,attr,ctrl){ 
                           
                            for (var i=0; i < scope.items.RELATION[attr.id].length; i++){
                                switch(scope.items.FILES[scope.items.RELATION[attr.id][i]].FMFILESTATUSID){
                                    case 1:
                                        var lcolor = '#3c8dbc';
                                        break;
                                    case 2:
                                        var lcolor = 'RED';
                                        break;
                                    case 3:    
                                        var lcolor = 'GREEN';
                                        break;
                                    case 6:
                                        var lcolor = 'ORANGE';
                                        break;
                                    case 7:
                                        var lcolor = 'ORANGE';
                                        break;
                                    case 8:
                                        var lcolor = 'ORANGE';    
                                        break;
                                    default:
                                        var lcolor = 'black';    
                                        break;
                                }
                                                 
                            }
                     
                                element.css({
                                        color:lcolor
                                });
                    }
        
            }
       
          return directive;
        });


findmediaApp.filter('filterRefByLang', function() {
        return function(input,currentid) {
            var filtered = [];
            for (var i=0; i<items.length;i++){
                var item = items[i];
                if (item.FMREFERENCEID === currentid)
                    {
                        filtered.push(item);    
                       // console.log(1);
                    }    
               
                    
                    
            }
            return filtered;
    }
});

findmediaApp.filter('upper', function() {
    return function(data,refid,mediaid){
       // console.log(refid + '-' + mediaid);
        if (refid === mediaid)
            {
            return data;    
            }
            
        
    }
});

findmediaApp.filter('toArray', function () {
  return function (obj, addKey) {
    if (!angular.isObject(obj)) return obj;
    if ( addKey === false ) {
      return Object.keys(obj).map(function(key) {
        return obj[key];
      });
    } else {
      return Object.keys(obj).map(function (key) {
        var value = obj[key];
        return angular.isObject(value) ?
          Object.defineProperty(value, '$key', { enumerable: false, value: key}) :
          { $key: key, $value: value };
      });
    }
  };
});


findmediaApp.controller('DspPaginationController',
                            function($scope){
                           // console.log($scope);
                    });



    