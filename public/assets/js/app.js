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
					$scope.path = $location.path();
					// $scope.request = closeForm('a.button.request','div#request-sample-box');
					// $scope.openForm = closeForm('div.close','div#request-sample-box');

				}],
				link: function(scope, elem, attrs) {
					anifade('div.headline',500,800);
					anifade('div.hero img',400,1500);
					window.sr = ScrollReveal({ reset: true });
					sr.reveal('.hand', {rotate: {z: 20 }});
					sr.reveal('#powered-by-chromecast .holder');
					openAnswer('li.question span.q');

					var cells = [];

					$.each($('table#comparison tr td:last-of-type'), function(i) {
						cells.push(this.innerHTML);
					});


					$.each($('table#comparison tr td:first-of-type'), function(i){
						$(this).append(cells[i]);
					});


					$('form#RoomCast').on('submit', function(e){
						e.preventDefault();
						$.ajax({
							type: "GET",
							url: "http://analytics.clickdimensions.com/forms/h/aU2xh5ahBx0SIibIBaQksw&c=?",
							data: $('form#RoomCast').serialize(),
							contentType: "application/x-www-form-urlencoded",
							Referer: "http://mysite.com/",
							success: function(data){
								alert(data)
							}
						});
					});
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

	var openAnswer = function(x){
		$(x).on('click', function(){
			if($(this).hasClass('open')) {
				$(this).removeClass('open');
				$(this).find('.arrow').html('<i class="material-icons">keyboard_arrow_right</i>');
			} else {
				$(this).addClass('open');
				$(this).find('.arrow').html('<i class="material-icons">keyboard_arrow_down</i>');
			}
		});
	}

	var requestSample = function(x) {
		$(x).on('click', function(){
			alert('open');
		});
	}

	var closeForm = function(x, y) {
		$(x).on('click', function(){
			if($(y).hasClass('open')){
				$(y).removeClass('open');
			} else {
				$(y).addClass('open');
			}
		});
	}


})();