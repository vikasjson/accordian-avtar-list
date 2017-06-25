/**
 * Created by Parken_Vikas on 1/20/2017.
 */
(function() {
  'use strict';
  angular.module('starter').config(function($stateProvider) {
    $stateProvider.state('app.ExpendableList', {
      url: '/ExpendableList',
      views: {
        'menuContent': {
          templateUrl: 'app/views/ExpendableList/ExpendableList.html',
          controller: 'ExpendableListCtrl'
        }
      }
    });
  });

  'use strict';

  angular.module('starter').controller('ExpendableListCtrl', function($scope,$state) {

    $scope.groups = [];
    for (var i=0; i<10; i++){
      $scope.groups[i] = {
        name: i,
        items: [],
        show: false
      };
      for (var j=0; j<1; j++) {
        $scope.groups[i].items.push(i + '-' + j);
      }
    }
    $scope.toggleGroup = function(group) {
      group.show = !group.show;
    };
    $scope.isGroupShown = function(group) {
      return group.show;
    };
  });
}).call(this);
