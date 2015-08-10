'use strict';

angular.module('meetadev-mobile').config(function ($stateProvider) {

  $stateProvider.state('tab.freelancer-dash', {
    url: '/freelancer/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/freelancer/dash.html',
        controller: 'FreelancerDashCtrl'
      }
    }
  })

});