angular.module('listperson').controller('CadastroController', function($scope, $http) {
    $scope.person = {};

    $scope.mensagem = '';

    $scope.submeter = function() {
        if ($scope.formulario.$valid) {
            $http.post('http://localhost:8080/api/person', $scope.person)
            .success(function() {
                $scope.mensagem = "Pessoa cadastrada com sucesso!";
                $scope.person = {};
            })
            .error(function(error) {
                $scope.mensagem = "Não foi possivel cadastrar a pessoa!";
                console.log(error);
            });
        }
    };

    
});