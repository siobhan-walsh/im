var MessageApp = angular.module("MessageApp", [
    "ngRoute",
    "AllControllers"
]);

MessageApp.config([
    "$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
        $routeProvider.when(
            "/user",
            {
                templateUrl:"view/user.html"
            }
        ).when(
            "/send",
            {
                templateUrl:"view/message.html"
            }
        ).when(
            "/chat",
            {
                templateUrl:"view/amsg.html",
                controller:"chatCtrl"
            }
        )
    }
]);