var im = angular.module('im', [
    'ngRoute', 
    'allctrls'
]);


im.config([
    '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
        
        $routeProvider.when(
            '/newadmin',
            {
                templateUrl:'view/newadmin.html',
                controller:'adminSignupCtrl'
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
        $routeProvider.when(
            '/dashboard',
            {
                templateUrl:'view/dashboard.html',
                controller:'chatroomCtrl'
            }
        )
    }
]);
