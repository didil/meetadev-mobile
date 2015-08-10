'use strict';

angular.module('meetadev-mobile')
  .controller('FreelancerDashCtrl', function ($scope, Auth, $state, $ionicLoading, Project) {

    $scope.projects = [];
    $scope.searching = false;

    $scope.$on('$ionicView.enter', function (e) {
      if ($scope.projects.length === 0) {
        $scope.searching = true;
        $ionicLoading.show({
          template: 'Loading Projects...'
        });
        Project.search().then(function (response) {
          $scope.projects = response.data;
          $scope.searching = false;
          $ionicLoading.hide();
        }).catch(function (err) {
          console.log(err);
          $scope.searching = false;
          $ionicLoading.hide();
        })
      }
    });

    $scope.okProject = function(project){
      Project.ok(project._id).then(function(response){
        console.log("Liked project: " + project.title)
      });
    };

    $scope.nokProject = function(project){
      Project.nok(project._id).then(function(response){
        console.log("DisLiked project: " + project.title)
      });
    };

    $scope.cardDestroyed = function(index) {
      $scope.projects.splice(index, 1);
    };

    $scope.likeClicked = function(index){
      var project = $scope.projects[index];
      $scope.cardDestroyed(index);
      $scope.okProject(project);
    };

    $scope.dislikeClicked = function(index){
      var project = $scope.projects[index];
      $scope.cardDestroyed(index);
      $scope.nokProject(project);
    };

    $scope.cardSwipedLeft = function(project){
      $scope.okProject(project);
    };

    $scope.cardSwipedRight = function(project){
      $scope.nokProject(project);
    };

  });
