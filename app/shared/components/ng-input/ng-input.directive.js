(function(){


	var directive = function($swipe){
		
		var link = function(scope, element, attrs, ngModelCtrl){
			scope.required;

			ngModelCtrl.$render = function(){
				scope.model = ngModelCtrl.$viewValue;
				scope.inputBlur();
			};

			scope.init = function(){
				scope.optional = scope.optional ? true : false;
				scope.disable = scope.disable ? true : false;
				scope.inputBlur();
			};
			scope.inputFocus = function () {
				console.log('inputFocus');
                scope.empty = false;
            };

            scope.inputBlur = function () {
                if (scope.model === '' || scope.model === undefined) {
                    scope.empty = true; 
                } else {
                    scope.empty = false;
                }
            };
            scope.init();
		};

		return {
			restrict: 'E',
	        templateUrl: 'app/shared/components/ng-input/ng-input.template.html',
	        require: '?ngModel',
	        link: link,
			scope:{
				placeholder:"@?placeHolder",
				optional:"=?optional",
				disable:"=?disable"
			}
		};

	};
	


	angular.module('ngInput', []).directive('ngInput',directive);
})();