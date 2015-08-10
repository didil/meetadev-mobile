'use strict';

angular.module('meetadev-mobile')
  .factory('Project', function ($http) {

    function search() {
      return $http.get('/api/projects/match');
    }

    function ok(projectId) {
      return $http.post('/api/projects/' + projectId + '/ok');
    }

    function nok(projectId) {
      return $http.post('/api/projects/' + projectId + '/nok');
    }

    function getOwnProjects() {
      return $http.get('/api/projects');

    }

    return {
      search: search,
      ok: ok,
      nok: nok,
      getOwnProjects : getOwnProjects
    }

  });
