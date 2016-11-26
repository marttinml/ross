(function(){


	var directive = function($swipe){
		
		var link = function(scope, element, attrs, ngModelCtrl){

			ngModelCtrl.$render = function(){
				scope.model = ngModelCtrl.$viewValue;
				scope.inputBlur();
			};

			scope.init = function(){
				scope.optional = scope.optional ? true : false;
				scope.disable = scope.disable ? true : false;
				scope.inputBlur();
			};
			scope.selectFocus = function () {

				if(!scope.disable && !scope.focus){
	                scope.empty = false
	                scope.focus = true;
	            }
            };


            scope.selectBlur = function(){
            	scope.focus = false;
            };

            scope.inputBlur = function () {
                if (scope.model === '' || scope.model === undefined) {
                    scope.empty = true; 
                } else {
                    scope.empty = false;
                }
                scope.focus = false;
            };
            scope.init();
		};

		return {
			restrict: 'E',
	        templateUrl: 'app/shared/components/ng-select/ng-select.template.html',
	        require: '?ngModel',
	        link: link,
			scope:{
				placeholder:"@?placeHolder",
				optional:"=?optional",
				disable:"=?disable",
				focus:"=?focus",
				options:"=options"
			}
		};

	};


	angular.module('ngSelect', [])
		.directive('ngSelect',directive);
})();