'use strict';

angular.module('meetadev-mobile')
  .factory('User', function ($resource,API_ENDPOINT) {
    return $resource(API_ENDPOINT + '/api/users/:id/:controller', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      }
	  });
  });
