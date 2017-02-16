angular.module('orgApp').controller('AddTaskDialogCtrl', function ($scope, $uibModalInstance,selectedEmp,employeeDetailsFactory) {

  $scope.save = function () {
  $scope.task.AssignedDate=new Date();
  $scope.task.AssignedTo=selectedEmp.Id;
  console.log($scope.task);
  employeeDetailsFactory.addTask(selectedEmp,$scope.task);
    $uibModalInstance.close($scope.task);
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});