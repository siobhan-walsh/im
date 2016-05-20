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
            '/chat/:id',
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
                templateUrl:'view/mychatrooms.html',
                controller:'mychatroomsCtrl'
                
            }
        ).when(
            '/new',
            {
                templateUrl:'view/newchatroom.html',
                controller:'newchatroomCtrl'
                
           
                }
        ).when(
            '/viewusers',
            {
                templateUrl:'view/viewusers.html',
                controller:'viewusersCtrl'
                
            }
        )
    }
]);
