(function(){
	var factory = function(){
        return { path: 'http://localhost:2000/v0/'};
        // return { path: 'http://14.128.82.183:14501/ITBook/'};
	};
	angular.module('app').factory('$singleton',factory);
})();