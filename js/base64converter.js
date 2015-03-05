/**
* merusSupport Module
*
* Description
*/
angular.module('base64Converter', ['ab-base64'])
	.controller('base64Controller',['$scope','base64', function($scope, base64){
		$scope.data = {
			input: "",
			output: ""
		};
		$scope.decoder = function(input){
			$scope.data.output =  base64.urldecode(input);
		}
		$scope.encoder = function(input){
			$scope.data.output =  base64.urlencode(input);
		}
	}])
