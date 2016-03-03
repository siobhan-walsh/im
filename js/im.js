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
            '/chat',
            {
                templateUrl:'view/chat.html',
                controller:'chatCtrl'
            }
        )
        $routeProvider.when(
            '/profile',
            {
                templateUrl:'view/profile.html',
                controller:'profileCtrl'
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
