'use strict';

/**
 * @ngdoc function
 * @name goEuroTaskApp.controller:MainCtrl
 * @description
 * @description
 * # MainCtrl
 * Controller of the goEuroTaskApp
 */


    goEuroTaskApp
      .controller('enterName',[

        '$scope','$rootScope','$http', '$window','$routeParams','getUserRepos',
        function ($scope, $rootScope, $http, $window,$routeParams,getUserRepos) {

          //=====hide alert in the beginning =======
          $scope.showAlert=false;

          //============== check if user logged in (get repos) else (show form) =============
          function checkUserStatus(){
            var userStatus = localStorage.getItem('status');
            if(userStatus == 'loggedIn'){
              var loggedInUser = localStorage.getItem('userName');
              window.location.href='#/repos/'+loggedInUser;
            }
          }

          //============= get all repos if form is valid ============
          $scope.getRepos = function (isValid) {
            if(isValid){
              var res =  getUserRepos.getData($scope.userName);
              res.success(function (data, status, headers, config) {
                if(status == '404'){
                  $scope.errorMessage='The username you entered is not found!';
                  $scope.showAlert=true;
                }
                //============= if success (set local storage for user and view repos ==========
                else if(status == '200'){
                  localStorage.setItem('status', 'loggedIn');
                  localStorage.setItem('userName', $scope.userName);
                  window.location.href='#/repos/'+$scope.userName ;
                }
                console.log(data)
              });
              res.error(function (data, status, headers, config) {
                if(status == '404'){
                  $scope.errorMessage='The username you entered is not found!'
                  $scope.showAlert=true;
                }
                else{
                  $scope.errorMessage='A server error has occurred. Try again!'
                  $scope.showAlert=true;
                }


              });
            }
          };


          checkUserStatus()

        }]);
