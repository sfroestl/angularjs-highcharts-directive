'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope',function($scope) {

  	$scope.pieChartData =  {
  		title: 'Browser market shares at a specific website, 2010',
		series: 
			{
				name: 'Browser Share',
				type: 'pie',
				data: [
					{name: 'Firefox', y: 45.0},
					{name: 'IE', y: 26.8},                				
					{name: 'Chrome', y: 12.8},
					{name: 'Safari', y: 8.5},
					{name: 'Opera', y: 6.2},
					{name: 'Others', y: 0.7}
				]
			}			
		
	};

  }])
  .controller('MyCtrl2', [function() {

  }]);