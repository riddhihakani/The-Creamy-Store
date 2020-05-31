var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);

myApp.controller("ContactController", ['$scope', '$location', function($scope, $location){
  $scope.sendMessage = function(){
    $location.path('/contact-success');
  }
}]);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

 $locationProvider.html5Mode(true);


  $routeProvider
    .when('/', {
      templateUrl:'views\\home.html',
      controller: 'myController'
    })
    .when('/contact', {
      templateUrl:'views\\contact.html',
      controller: 'ContactController'
    })
    .when('/contact-success', {
      templateUrl:'views\\contact-success.html',
      controller: 'ContactController'
    })
    .when('/directory', {
      templateUrl:'views\\directory.html',
      controller: 'myController'
    })
    .otherwise({
      redirectTo: '/'
    })
}]);

myApp.directive('randomIcecream', [function(){

  return {
    restrict: 'E',
    scope: {
      icecreams: '=',
      title: '='
    },
    templateUrl: 'views\\random.html',
    transclude: true,
    replace: true,
    controller: function($scope){
      $scope.random = Math.floor(Math.random() * 4);

    }

  };
}]);


myApp.controller('myController', ['$scope', '$http', function($scope, $http){
  $scope.message = "Hello from controller";

  $scope.removeIcecream = function(icecream) {
    var removedIcecream  = $scope.icecreams.indexOf(ninja);
    $scope.icecreams.splice(removedIcecream, 1);
  }

  $scope.addIcecream = function(){
    $scope.icecreams.push({
      name: $scope.newicecream.name,
      color: $scope.newicecream.belt,
      rate: parseInt($scope.newicecream.rate),
      available: true
    });

    $scope.newicecream.name = '';
    $scope.newicecream.belt = '';
    $scope.newicecream.rate = '';
  }

  $scope.removeAll = function() {
    console.log("remove all");
    $scope.icecreams = [];
  };

  $http.get('data\\icecreams.json').then(
      function(response){
        $scope.icecreams = response.data;
      },
      function errorCallback(error){
        console.log(error);}
    );
}]);

myApp.config(function (){

});

myApp.run(function(){

});

// myNinjaApp.controller
