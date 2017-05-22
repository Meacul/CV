'use strict';

var ListApp = angular.module('myApp.view2List', []);

ListApp.controller('ListController', function ListController($scope) {
	$scope.positions = [
	{
		time: '06/2016-08/2016',
		info: 'Wholesale worker at Metro-Pikatukku Tampere'
	},
	{
		time: '06/2015–08/2015',
		info: 'Salesperson at Veljekset Keskinen'
	},
	{
		time: '08/2013',
		info: 'Information security consultant at Onnibus OY'
	},
	{
		time: '07/2010–07/2011',
		info: 'NCO at Suomen Puolustusvoimat'
	}
	];
});