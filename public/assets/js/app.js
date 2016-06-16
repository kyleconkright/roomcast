(function () {
	angular.module('app', ['ngRoute','ngProgressLite','ngAnimate']);

	angular.module('app')
		.controller('MainController', function(){

		});

	angular.module('app')
		.directive('navbar', function(){
			return {
				restrict: "E",
				templateUrl: 'app/components/nav/nav.html'
			}
		});	

	angular.module('app')
		.directive('home', function(){
			return {
				restrict: "E",
				controller: ['$scope', 'ngProgressLite', '$location', function($scope, ngProgressLite, $location) {
					// $scope.features = 'hi';
					$scope.path = $location.path();
				}]
			}
		});

	angular.module('app')
		.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

			$locationProvider.html5Mode(true);

			$routeProvider.when('/', {
				templateUrl: 'app/components/home/index.html'
			})
			.otherwise({redirectTo: '/'});
	}]);	


})();