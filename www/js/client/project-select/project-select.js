'use strict';

angular.module('meetadev-mobile').config(function ($stateProvider) {

  $stateProvider.state('client-project-select', {
    url: '/client/project-select',
    templateUrl: 'templates/client/project-select.html',
    controller: 'ClientProjectSelectCtrl'
  })

});