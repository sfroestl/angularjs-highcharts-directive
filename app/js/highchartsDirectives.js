/* High Chart Directives used at Small Improvements https://www.small-improvements.com
 * Created by Sebastian Fröstl
 * Contact: sfroestl.@small-improvements.com
 * 26.08.2013
 */


angular.module('myApp.directives').directive('chart', [function () {
    return {
        restrict: 'E',
        template: '<div class="pieChart"></div>',
        replace:true,        
        link: function (scope, element, attrs) {

            // Whatch the chart values for changes
            scope.$watch(attrs.values, function(value, oldValue) {
                if (!value) {
                    return;
                }

                // Parsing the data
                var chartData = value;                
                var type = attrs.type; // Chart type
                var width = attrs.width || null; // Chart width | default
                var height = attrs.height || null; // Chart height | default
                
                // Create the chart config with private method
                if (type === "pie") {
                    var chartConfig = _createPieChart(element, type, width, height, chartData.series, chartData.title);            
                }            
                console.log(chartConfig)
                // Create the chart and draw it to the element
                var chart = new Highcharts.Chart(chartConfig);                
            });

        }
    };
}]);

/*
 * Private Method for creating the PieChart configuration
 * @param {_element} The elemnt the chart is rendered to
 * @param {_type} The chart type (default = pie)
 * @param {_width} Container width
 * @param {_height} Container height
 * @param {_seriesData} The series data for the chart
 * @param {_title} Chart title
 * @return {object} Chart configuration
 */
var _createPieChart = function(_element, _type, _width, _height, _seriesData, _title) {    
    return {
        chart: {
            renderTo: _element[0],
            type: _type || 'pie',
            width: _width || null,
            height: _height || null,
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: _title
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            type: _seriesData.type,
            name: _seriesData.name,
            data: _seriesData.data
        }]
    };
};
