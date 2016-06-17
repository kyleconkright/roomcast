(function () {
	angular.module('app', ['ngRoute','ngProgressLite','ngAnimate']);

	angular.module('app')
		.controller('MainController', function(){

		});

	angular.module('app')
		.directive('navbar', function(){
			return {
				restrict: "E",
				controller: ['$scope', function($scope) {
					$scope.mobileMenu = function() {
						var menu = 'header .menu';
						var menuTrigger = '.mobile-menu-trigger';
						if($(menu).hasClass('open')) {
							$(menu).removeClass('open');
							$(menuTrigger).html('<i class="material-icons">menu</i>');
						} else {
							$(menu).addClass('open');
							$(menuTrigger).html('<i class="material-icons">chevron_right</i>');
						}
					}
				}],
				templateUrl: 'app/components/nav/nav.html',
				link: function(scope, element, attrs) {
					$(window).scroll(function() {
						checkScroll($(element).find('header'));
					});
				}
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
					sr.reveal('.hand', {rotate: {z: 20 }});
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

	var checkScroll = function(a) {
		var scroll = $(window).scrollTop();
		if (scroll >= 100) {
			a.addClass("dark");
		} else {
			a.removeClass("dark");
		}
	}




})();