'use strict';

angular.module('meetadev-mobile')
  .controller('LoginCtrl', function ($scope, Auth, $state,$ionicPopup) {
    $scope.user = {};

    $scope.login = function (loginForm) {
      $scope.submitted = true;

      if (loginForm.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        }).then(function () {
          $scope.user = {};
          $state.go('tab.dash');
        }).catch(function (err) {
          $ionicPopup.alert({
            title: 'Login Failed',
            template: err.message
          });
        });
      }
    };
  });
