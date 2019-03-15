angular.module('listperson').controller('PersonController', function($scope, $http) {
    
    $scope.persons = [];
    $scope.mensagem = '';

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

    $scope.remove = function(person) {
        $http.delete('http://localhost:8080/api/person/' + person.id)
        .success(function() {
            var indice = $scope.persons.indexOf(person);
            $scope.persons.splice(indice, 1);
            $scope.mensagem = person.name + ' removido com sucesso!';
        })
        .error(function(error) {
            $scope.mensagem = 'Não foi possivel remover ' + person.name;
            console.log(error);
        });
    };
});