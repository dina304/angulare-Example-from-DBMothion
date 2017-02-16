angular.module('orgApp').controller('EmployeeDetailsCtrl', function ($scope, $http, $routeParams,$q,$log,$uibModal,employeeDetailsFactory)
{
    $scope.employeeId = $routeParams.empId;

    employeeDetailsFactory.getEmployeeDetails($scope.employeeId).then(function (response) {
        var employeeDetails = response.data;
        angular.forEach(employeeDetails, function (value, key) {
            if (value.Id == $scope.employeeId) {
                $scope.person = value;
            }
        });
        $q.all($scope.person).then(
            angular.forEach(employeeDetails, function (value, key) {
                if ($scope.person.managerId == value.Id) {
                    $scope.manager = value;
                }
            })
        );
    });
	//dialog START
 $scope.animationsEnabled = true;

	$scope.open = function (size,templateUrl,instanceController,selectedEmployee) {
		var modalInstance = $uibModal.open({
		  animation: $scope.animationsEnabled,
		  templateUrl: templateUrl,
		  controller: instanceController,
		  size: size,
		  resolve: {
			selectedEmp: selectedEmployee
		  }
		});

		modalInstance.result.then(function (selectedItem) {
		  $scope.selected = selectedItem;
		}, function () {
		  $log.info('Modal dismissed at: ' + new Date());
		});
	  };

	  $scope.toggleAnimation = function () {
		$scope.animationsEnabled = !$scope.animationsEnabled;
	  };
       /* employeeDetailsFactory.getManagerDetails($scope.employeeId).then(function(response)
        {
            $scope.manager = response.data;
            console.log($scope.manager);
        });
        employeeDetailsFactory.getAllTasks($scope.employeeId).then(function (response) {
            $scope.taskList = response.data;
            console.log($scope.taskList);
        });
        employeeDetailsFactory.getEmployeeTasksByManager($scope.employeeId).then(function (response) {
            $scope.subTaskList = response.data;
            console.log($scope.subTaskList);
        });*/
       

});