'use strict';

angular.module('meetadev-mobile')
  .factory('Match', function ($http, API_ENDPOINT) {

    function getMatches() {
      return $http.get(API_ENDPOINT + '/api/matches');
    }

    return {
      getMatches: getMatches
    }

  });
