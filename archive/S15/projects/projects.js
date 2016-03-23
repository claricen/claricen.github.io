'use strict';

angular.module('myApp.projects', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/projects', {
    templateUrl: 'projects/projects.html',
    controller: 'ProjectsCtrl'
  });
}])

.controller('ProjectsCtrl', ['$scope', function($scope) {
	$scope.projects = [
	{
		name: 'Math Orientation 2015 Website',
		imageUrl: 'assets/img/mathorient.png',
		url: 'http://orientation.math.uwaterloo.ca/',
		desc: 'Heavily involved with the design of the site, including making various wireframes and mockups and gathering requirements.',
		tools: 'Photoshop, Illustrator'
	},
	{
		name: 'Personal website',
		imageUrl: 'assets/img/mysite.png',
		url: 'http://claricen.github.io/',
		desc: 'A project to learn some AngularJS and Sass.',
		tools: 'HTML5, CSS3, Sass, AngularJS'}
	// },
	// {
	// 	name: 'Women in Computer Science Website [WIP]',
	// 	imageUrl: 'assets/img/mysite.png',
	// 	desc: 'Co-designed and implemented a new design for the club site.',
	// 	tools: 'HTML5, CSS3, Sass, Pelican (Python framework)'
	// },
	// {
	// 	name: 'Love Letter Card Game',
	// 	imageUrl: 'assets/img/mysite.png',
	// 	desc: 'Made a C++ version of <a href="LINK TO GAME SITE HERE">this fun little card game</a> for practicing OOP skills.',
	// 	tools: 'C++'
	// }
	];
}]);