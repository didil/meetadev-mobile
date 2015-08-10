angular.module('meetadev-mobile')

  .controller('DashCtrl', function ($scope, Auth, $state, $ionicHistory) {
    $scope.$on('$ionicView.enter', function (e) {
      $ionicHistory.nextViewOptions({
        disableAnimate: true,
        disableBack: true
      });

      // make sure current user is resolved before rerouting
      Auth.getCurrentUserAsync(function () {
        if (Auth.isFreelancer()) {
          $state.go('tab.freelancer-dash');
        }
        else if (Auth.isClient()) {
          $state.go('client-project-select');
        }
      });
    });
  })

  .controller('MatchesCtrl', function ($scope, Match) {
    $scope.matches = [];

    $scope.$on('$ionicView.enter', function (e) {
      Match.getMatches().then(function (response) {
        $scope.matches = response.data;
      });
    });
  })


  .controller('AccountCtrl', function ($scope, Auth, $state) {
    $scope.settings = {
      enableFriends: true
    };

    $scope.logout = function () {
      Auth.logout();
      $state.go('login');
    };
  });
