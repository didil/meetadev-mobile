'use strict';

angular.module('meetadev-mobile')
  .controller('ClientProjectSelectCtrl', function ($scope, $state, Project, $rootScope) {

    var initialize = function () {
      $scope.projects = [];
      $scope.errors = {};

      $scope.getProjects();
    };


    $scope.getProjects = function () {
      Project.getOwnProjects().then(function (response) {
        $scope.projects = response.data;
      }).catch(function (err) {
        console.log('Failed to fetch projects: ' + err);
      });
    };

    initialize();

    $scope.selectProject = function (project) {
      $rootScope.clientProject = project;
      $state.go('tab.client-dash');
    }

  });
