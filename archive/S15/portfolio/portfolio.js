'use strict';

angular.module('myApp.portfolio', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/portfolio', {
    templateUrl: 'portfolio/portfolio.html',
    controller: 'PortfolioCtrl'
  });
}])

.controller('PortfolioCtrl', ['$scope', function($scope) {
	$scope.projects = [
	{
		name: 'Math Orientation 2015 Website',
		desc: 'Heavily involved with the design of the site.',
		tools: 'Photoshop, Illustrator'
	},
	{
		name: 'Personal website',
		desc: 'A project to learn some AngularJS.',
		tools: 'HTML5, CSS3, Sass, AngularJS'
	},
	{
		name: 'Women in Computer Science Website [WIP]',
		desc: 'Co-designed and implemented a new design for the club site.',
		tools: 'HTML5, CSS3, Sass, Pelican (Python framework)'
	},
	{
		name: 'Love Letter Card Game',
		desc: 'Made a C++ version of <a href="LINK TO GAME SITE HERE">this fun little card game</a> for practicing OOP skills.',
		tools: 'C++'
	}
	];
}]);