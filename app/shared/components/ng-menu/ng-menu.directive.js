(function(){


	var directive = function($swipe){
		
		var link = function(scope, element, attrs, ngModelCtrl){

			scope.init = function(){

			};

			scope.show = function(){
				scope.active = true;
			};
			scope.hide = function(){
				scope.active = false;
			};
			
            scope.init();
		};

		return {
			restrict: 'E',
	        templateUrl: 'app/shared/components/ng-menu/ng-menu.template.html',
	        require: '?ngModel',
	        link: link,
			scope:{
				source:"=?source"
			}
		};

	};
	

	angular.module('ngMenu', [])
		.directive('ngMenu',directive);
})();