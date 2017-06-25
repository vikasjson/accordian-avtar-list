/**
 * Created by Parken_Vikas on 1/20/2017.
 */
(function() {
  'use strict';
  angular.module('starter').config(function($stateProvider) {
    $stateProvider.state('app.Home', {
      url: '/Home',
      views: {
        'menuContent': {
          templateUrl: 'app/views/Home/Home.html',
          controller: 'HomeCtrl'
        }
      }
    });
  });

  'use strict';

  angular.module('starter').controller('HomeCtrl', function($scope,$state) {

    $scope.gotoList=function()
    {
      $state.go('app.ExpendableList');
    }
  });
}).call(this);
