(function () {
    console.log("self executing anonymous function");
}());

// 1. declare angular module
// the second parameter is needed to declare for the first time.
var app = angular.module("AngGettingStarted", []);

//2. add a controller : add to the module variable
app.controller("mainController", function ($scope) {
    var displayClass = {
        message: "Hello Rana Das"
    };


    console.log(displayClass.message);
    $scope.data = displayClass;
});


// 3. create a function
var UserController = function ($scope, $http) {
    console.log("in user controller");
    var onUserComplete = function (response) {
        $scope.user = response.data;
    };


    var onError = function (reason) {
        console.log(reason);
        $scope.error = reason.statusText;
    };


    $http.get("https://api.github.com/users/ranadas")
        .then(onUserComplete, onError);
};
//add a controller by add to the module variable.
app.controller("userController", ["$scope", "$http", UserController]);