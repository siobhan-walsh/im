var im = angular.module('im', [
    'ngRoute', 
]);


im.config([
    '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
        
        $routeProvider.when(
            '/admin',
            {
                templateUrl:'view/admin.html'
            }
        )
        
    }
]);
