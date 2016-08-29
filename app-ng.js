(function () {
    console.log("self executing anonymous function");
}());

// 1. declare angular module
// the second parameter is needed to declare for the first time.
var app = angular.module("AngGettingStarted", []);

var displayClass = {
    message: "Hello World, GitHub Viewer",
    username: "angular",
    repos:[]
};

//2. add a controller : add to the module variable
app.controller("mainController", function ($scope) {
    console.log("in main controller with" + JSON.stringify(displayClass));
    $scope.data = displayClass;
});


// 3. create a function
var UserController = function ($scope, $http) {
    console.log("in user controller with " + JSON.stringify(displayClass));
    $scope.data = displayClass;
    var onUserComplete = function (response) {
        console.log("Search result " + JSON.stringify(response.data));
        $scope.user = response.data;
        $http.get($scope.user.repos_url)
            .then(onRepos, onError);
    };


    var onError = function (reason) {
        console.log(reason);
        $scope.error = reason.statusText;
    };

    var searchFunction = function (uname) {
        console.log("searching for " + uname);
        $http.get("https://api.github.com/users/" + uname)
            .then(onUserComplete, onError);
    };

    var onRepos = function (response) {
        console.log("repos result " + JSON.stringify(response.data));
        $scope.data.repos = response.data;
    };

    $scope.search = searchFunction;
    $scope.repoSortOrder = "-language";
};
//add a controller by add to the module variable.
app.controller("userController", ["$scope", "$http", UserController]);