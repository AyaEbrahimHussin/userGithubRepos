'use strict';

/**
 * @ngdoc function
 * @name goEuroTaskApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the goEuroTaskApp
 */
goEuroTaskApp
  .controller('repos',
  ['$scope','$rootScope','$http', '$window','$routeParams','getUserRepos',
  function ($scope, $rootScope, $http, $window,$routeParams,getUserRepos) {


    $scope.showAlert=false;
    $scope.userName=$routeParams.userName;

    //======= if user types another user name to get repos (stay on same screen) =========
    if($routeParams.userName != localStorage.getItem('userName')){
      window.location.href='#/repos/'+localStorage.getItem('userName') ;
    }


    var res =  getUserRepos.getData($scope.userName);
    res.success(function (data, status, headers, config) {
      if(status == '404'){
        $scope.errorMessage='A server error has occurred. Try again!';
        $scope.showAlert=true;
      }
      //============= if success (set local storage for user and view repos ==========
      else if(status == '200'){
        $scope.repoCount = data.length;
        //====== get length of repos ===========
        if(data.length > 0){
          $scope.userRepos = data;
        }
       else{
          $scope.errorMessage='No repositories found for this user!';
          $scope.showAlert=true;
        }
      }
    });
    res.error(function (data, status, headers, config) {
        $scope.errorMessage='A server error has occurred. Try again!'
        $scope.showAlert=true;
    });

    //=========== call when user logs out and set local storage ===============
    $scope.logout = function(){
      localStorage.setItem('status', 'LoggedOut');
      localStorage.setItem('userName', '');
      window.location.href='#/enterName' ;
    }

    //============== check if user logged in (get repos) else (show form) =============
    function checkUserStatus(){
      var userStatus = localStorage.getItem('status');
      if(userStatus == 'LoggedOut'){
        window.location.href='#/enterName' ;
      }
    }

    checkUserStatus();

  }]);
