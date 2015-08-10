'use strict';

angular.module('meetadev-mobile')
  .factory('Freelancer', function ($http) {

    function search(projectId) {
      return $http.get('/api/users/match-freelancers', {params: {projectId: projectId}});
    }

    function ok(projectId, freelancerId) {
      return $http.post('/api/users/' + freelancerId + '/ok',{}, {params: {projectId: projectId}});
    }

    function nok(projectId, freelancerId) {
      return $http.post('/api/users/' + freelancerId + '/nok',{}, {params: {projectId: projectId}});
    }

    return {
      search: search,
      ok: ok,
      nok: nok,
    }

  });
