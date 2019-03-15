angular.module('personsDiretivas', [])
    .directive('personPainel', function() {

        var ddo = {};

        ddo.restrict = "AE";
        ddo.transclude = true;

        ddo.scope = {
            titulo: '@name'
        };

       ddo.templateUrl = '<div class="panel-heading">'
            +'<h3 class="panel-title">{{name}}</h3>'
            +'</div>';        

        return ddo;
    });