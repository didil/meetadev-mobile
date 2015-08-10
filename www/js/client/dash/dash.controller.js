'use strict';

angular.module('meetadev-mobile')
  .controller('ClientDashCtrl', function ($scope,$rootScope, Auth, $state, $ionicLoading, Freelancer) {

    $scope.freelancers = [];
    $scope.searching = false;
    $scope.clientProject = $rootScope.clientProject;

    $scope.$on('$ionicView.enter', function (e) {
      if ($scope.freelancers.length === 0) {
        $scope.searching = true;
        $ionicLoading.show({
          template: 'Loading Freelancers...'
        });
        Freelancer.search($rootScope.clientProject._id).then(function (response) {
          $scope.freelancers = response.data;
          $scope.searching = false;
          $ionicLoading.hide();
        }).catch(function (err) {
          console.log(err);
          $scope.searching = false;
          $ionicLoading.hide();
        })
      }
    });

    $scope.okFreelancer = function (freelancer) {
      Freelancer.ok($rootScope.clientProject._id,freelancer._id).then(function (response) {
        console.log("Liked freelancer: " + freelancer.title)
      });
    };

    $scope.nokFreelancer = function (freelancer) {
      Freelancer.nok($rootScope.clientProject._id,freelancer._id).then(function (response) {
        console.log("DisLiked freelancer: " + freelancer.title)
      });
    };

    $scope.cardDestroyed = function (index) {
      $scope.freelancers.splice(index, 1);
    };

    $scope.likeClicked = function (index) {
      var freelancer = $scope.freelancers[index];
      $scope.cardDestroyed(index);
      $scope.okFreelancer(freelancer);
    };

    $scope.dislikeClicked = function (index) {
      var freelancer = $scope.freelancers[index];
      $scope.cardDestroyed(index);
      $scope.nokFreelancer(freelancer);
    };

    $scope.cardSwipedLeft = function (freelancer) {
      $scope.okFreelancer(freelancer);
    };

    $scope.cardSwipedRight = function (freelancer) {
      $scope.nokFreelancer(freelancer);
    };

  });
