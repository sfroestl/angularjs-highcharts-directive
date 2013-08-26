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
  .controller('MyCtrl2', ['$scope',function($scope) {
  	$scope.areaChartData = {
  		title: 'Average fruit consumption during one week',
  		series : [
        {
            name: 'John',
            data: [3, 4, 3, 5, 4, 10, 12]
        }, {
            name: 'Jane',
            data: [1, 3, 4, 3, 3, 5, 4]
        }],
        xAxis: {
            categories: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ],
            plotBands: [{ // visualize the weekend
                from: 4.5,
                to: 6.5,
                color: 'rgba(68, 170, 213, .2)'
            }]
        },
        yAxis: {
            title: {
                text: 'Fruit units'
            }
        }
  	};

  }]);