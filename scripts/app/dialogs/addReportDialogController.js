angular.module('orgApp').controller('AddReportDialogCtrl', function ($scope, $uibModalInstance,selectedEmp,employeeDetailsFactory) {

  $scope.save = function () {
  $scope.report.Date=new Date();
  $scope.report.EmployeeId=selectedEmp.Id;
  $scope.report.EmployeeId=selectedEmp.managerId;
  console.log($scope.report);
  employeeDetailsFactory.addReport($scope.report);
    $uibModalInstance.close($scope.report);
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});