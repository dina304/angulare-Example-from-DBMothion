angular.module('orgApp').factory('employeeDetailsFactory', function ($http) {
    return {
        getEmployeeDetails: function (empId) {
           // return $http.get('/api/employee/' + empId);
            return $http.get('/data/person.json');
        },
        getManagerDetails: function (empId) {
            return $http.get('/api/employee/'+empId+'/manager');
        },
        getAllTasks: function (empId) {
           // return $http.get('/api/tasks/' + empId);
            return $http.get('/data/tasks.json');
        },
        getEmployeeTasksByManager: function (managerId) {
            return $http.get('/api/tasks/manager/' + managerId);
        },
        getSubEmployee: function (managerId) {
            return $http.get('/api/employee/allEmp/manager/' + managerId);
        },
        addTask: function (empId,task){
            return $http({
                url: 'add/task/' + empId,
                method: "POST",
                data: task
            });

        },
		  addReport: function (report){
            return $http({
                url: 'add/report/',
                method: "POST",
                data: report
            });

        }
    }
});