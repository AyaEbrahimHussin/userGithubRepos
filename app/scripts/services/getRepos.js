'use strict';
/**
 * Created by Omnia_html on 3/7/2016.
 */


goEuroTaskApp
  .factory('getUserRepos',['$http', '$rootScope', function($http, $rootScope) {

    return{
      getData : function(user) {
        return $http.get('https://api.github.com/users/'+user+'/repos');
      }
    };



  }]);
