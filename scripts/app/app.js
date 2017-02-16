var orgApp = angular.module('orgApp', ['ngRoute','ngAnimate', 'ui.bootstrap']);
orgApp.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/employee', {
            templateUrl: '/Views/EmployeeList.html',
            controller: 'EmployeeCtrl'
        }).
        when('/employeeDetails/:empId', {
            templateUrl: '/Views/EmployeeDetails.html',
            controller: 'EmployeeDetailsCtrl'
        }).
        otherwise({
            redirectTo: '/employee'
        });
  }]);