angular.module('listperson').controller('PersonController', function($scope, $http) {
    
    $scope.persons = [];

    var promise = $http.get('http://localhost:8080/api/person')
    .success(function(persons) {
        $scope.persons = persons;
    })
    .error(function(error) {
        console.log(error);
    });



    promise.then(function(retorno) {
        $scope.persons = retorno.data;
    }).catch(function(error) {
        console.log(error);
    });
});