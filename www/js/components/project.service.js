'use strict';

angular.module('meetadev-mobile')
  .factory('Project', function ($http, API_ENDPOINT) {

    function search() {
      return $http.get(API_ENDPOINT + '/api/projects/match');
    }

    function ok(projectId) {
      return $http.post(API_ENDPOINT + '/api/projects/' + projectId + '/ok');
    }

    function nok(projectId) {
      return $http.post(API_ENDPOINT + '/api/projects/' + projectId + '/nok');
    }

    function getOwnProjects() {
      return $http.get(API_ENDPOINT + '/api/projects');

    }

    return {
      search: search,
      ok: ok,
      nok: nok,
      getOwnProjects: getOwnProjects
    }

  });
