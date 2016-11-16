/*global angular*/
(function () {

    var router = function ($routeProvider) {

        
        var baseUrl = 'app/modules/';


        // Home
        $routeProvider.when('/', {
            templateUrl: baseUrl + 'home/views/home.view.html',
            controller: 'HomeController'
        });

    };

    router.$inject = ['$routeProvider'];
    angular.module('app').config(router);

})();