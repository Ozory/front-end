(function () {
    'use strict';
    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/login', {
                    templateUrl: 'templates/login.html',
                    controller: 'loginController'
                }).
                when('/products', {
                    templateUrl: 'templates/products.html',
                    controller: 'productsController'
                }).
                otherwise({
                    redirectTo: '/login'
                })
        }
    ]);
})();