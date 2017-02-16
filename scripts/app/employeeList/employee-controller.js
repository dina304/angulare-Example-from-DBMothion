angular.module('orgApp').controller('EmployeeCtrl', function ($scope, $http,$location, employeeListFactory) {
    
    employeeListFactory.getEmployessList().then(function (response) {
        $scope.persons=response.data;
        console.log($scope.persons);
    });
    $scope.viewEmployee = function (empId)
    {
        $location.url('/employeeDetails/' + empId);
    }

});