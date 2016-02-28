var im = angular.module('im', [
    'ngRoute', 
    'allctrls'
]);


im.config([
    '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
        
        $routeProvider.when(
            '/admin',
            {
                templateUrl:'view/admin.html',
                controller:'chatroomCtrl'
            }
        )
        $routeProvider.when(
            '/signup',
            {
                templateUrl:'view/signup.html',
                controller:'signupCtrl'
            }
        )
        $routeProvider.when(
            '/profile',
            {
                templateUrl:'view/profile.html'
            }
        )
    }
]);
