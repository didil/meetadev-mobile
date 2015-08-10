'use strict';

angular.module('meetadev-mobile')
  .factory('Match', function ($http) {

    function getMatches() {
      return $http.get('/api/matches');
    }

    return {
      getMatches: getMatches
    }

  });
