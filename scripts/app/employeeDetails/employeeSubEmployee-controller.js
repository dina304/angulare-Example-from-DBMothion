angular.module('orgApp').controller('SubEmployeeCtrl', function ($scope, $http, $routeParams,$log,$uibModal,employeeDetailsFactory)
{
    $scope.employeeId = $scope.$parent.employeeId;
	$scope.subEmployeeList=[];
	$scope.items = ['item1', 'item2', 'item3'];
	employeeDetailsFactory.getEmployeeDetails($scope.employeeId).then(function (response) {
	var employeeDetails = response.data;
    angular.forEach(employeeDetails, function (value, key) {
                if($scope.person.Id == value.managerId)
                {
                    $scope.subEmployeeList.push(value)
                }
            })
		});
		
});