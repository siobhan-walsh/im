var im = angular.module('im', [
    'ngRoute', 
    'allctrls'
    
]);


im.config([
    '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
        
        $routeProvider.when(
            
            '/',
            {
                templateUrl:'view/login.html',
                controller:'loginCtrl'
            }
        ).when(
            '/admin',
            {
                templateUrl:'view/admin.html',
                controller:'adminCtrl'
            }
        ).when(
            '/signup',
            {
                templateUrl:'view/signup.html',
                controller:'signupCtrl'
            }
        ).when(
            '/chat',
            {
                templateUrl:'view/chat.html',
                controller:'chatCtrl'
            }
        ).when(
            '/profile',
            {
                templateUrl:'view/profile.html',
                controller:'profileCtrl'
            }
        ).when(
            '/mychats',
            {
                templateUrl:'view/mychats.html',
                controller:'mychatsCtrl'
                
            }
        ).when(
            '/new',
            {
                templateUrl:'view/newchat.html',
                controller:'newchatCtrl'
                
           
                }
        ).when(
            '/viewusers',
            {
                templateUrl:'view/viewusers.html',
                controller:'newchatCtrl'
                
            }
        )
    }
]);
