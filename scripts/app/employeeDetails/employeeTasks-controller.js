angular.module('orgApp').controller('EmployeeTasksCtrl', function ($scope, $http, $routeParams,employeeDetailsFactory)
{
    $scope.employeeId = $scope.$parent.employeeId;
    $scope.taskList=[];
    $scope.task = {};
	
    employeeDetailsFactory.getAllTasks($scope.employeeId).then(function (response) {
        var allTaskList = response.data;
        angular.forEach(allTaskList, function (value, key) {
            if ($scope.employeeId == value.AssignedTo) {
                $scope.taskList.push(value);
            }
        });
    });
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