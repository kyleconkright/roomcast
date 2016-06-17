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
				}],
				link: function(scope, elem, attrs) {
					anifade('div.headline',500,800);
					anifade('div.hero img',400,1500);
					window.sr = ScrollReveal({ reset: true });
					sr.reveal('.hand');
				}
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

	var anifade = function(x,y,z) {
		$(x).delay(y).animate({'opacity': 1, 'top':'0px'}, z);
	}






})();