(function () {
    'use strict';
    app.controller('productsController', function ($scope, $http) {
       
       $scope.Products = [];
        $scope.GetProducts = function()
        {
            $http.get("http://localhost:3000" + '/products').success(success).error(error)
        }

        var success = function(data){
            $scope.Products = data.products;
        }

        var error = function(data){
            alert("Não foi possível carregar os produtos");
        }
        $scope.GetProducts();

    });
})();