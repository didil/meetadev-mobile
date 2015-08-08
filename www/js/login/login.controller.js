'use strict';

angular.module('meetadev-mobile')
  .controller('LoginCtrl', function ($scope, Auth, $state,$ionicPopup,$http) {
    $scope.user = {};

    $http.get("http://ip.jsontest.com/ ").then(function(response){
      $ionicPopup.alert({
        title: 'Call ok',
        template: response.data.ip
      });
    });

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
