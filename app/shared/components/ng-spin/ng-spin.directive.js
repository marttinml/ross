(function(){


	var directive = function($swipe){
		
		var link = function(scope, element, attrs, ngModelCtrl){
			
		};

		return {
			restrict: 'E',
	        templateUrl: 'app/shared/components/ng-spin/ng-spin.template.html',
	        transclude: true,
	        link: link,
			scope:{
				show:"=show",
				title:"@title"
			}
		};

	};
	

	angular.module('ngSpin', [])
		.directive('ngSpin',directive);
})();