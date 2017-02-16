angular.module('orgApp').factory('employeeListFactory', function ($http) {
    return{
    getEmployessList :function () {
       return  $http.get('/data/person.json');
    }
}
});