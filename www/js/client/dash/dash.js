'use strict';

angular.module('meetadev-mobile').config(function ($stateProvider) {

  $stateProvider.state('tab.client-dash', {
    url: '/client/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/client/dash.html',
        controller: 'ClientDashCtrl'
      }
    }
  })

});