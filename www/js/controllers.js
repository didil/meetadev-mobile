angular.module('meetadev-mobile')

  .controller('DashCtrl', function ($scope, Auth, $state,$ionicHistory) {
    $scope.$on('$ionicView.enter', function (e) {
      $ionicHistory.nextViewOptions({
        disableAnimate: true,
        disableBack: true
      });

      if (Auth.isFreelancer()) {
        $state.go('tab.freelancer-dash');
      }
      else if (Auth.isClient()) {
        $state.go('client-project-select');
      }
    });
  })

  .controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
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
