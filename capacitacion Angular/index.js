angular.module('fvl_front', [])
    .controller('fvl_get', ['$scope', '$http', fvl_get]);

function fvl_get($scope, $http) {

    var configUrl;

    $scope.iniciar=function(){
        configUrl = $http.get('./config.json').then(function(response){
            return response.data;
        });
    }

    $scope.suma = function () {
        $scope.resultado = parseInt($scope.n1) + parseInt($scope.n2);
    }

    $scope.obtener_datos=function(){

        var url = configUrl;

        $http.get(url,{
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(success,error);

        function success(res){
            debugger;
            $scope.fvl_datos = res.data;
        }

        function error(res){
            debugger;
        }


    }

}