/*global angular*/
(function () {

    var controller = function ($scope, $rootScope, $routeParams, Home) {
        //code
        // $scope.homeList = [];
        // $scope.name = "Martin";
        // $scope.get = function(){
        //     var home = new Home();
        //     home.$get({id:$scope.id}).then(function(home){
        //         console.log(home);
        //     },function(e){
        //         console.log(e);
        //     });
        // };
        // $scope.getAll = function(){
        //     $scope.homeList = Home.getAll(function(){
        //         console.log($scope.homeList);
        //     });
        // };
        // $scope.save = function(){
        //     var home = new Home();
        //     home.title = $scope.title;
        //     home.description = $scope.description;
        //     home.$save().then(function(home){
        //         console.log(home);
        //         $scope.homeList.push(home);
        //     },function(e){
        //         console.log(e);
        //     });
        // };
        // $scope.update = function(){
        //     var home = new Home();
        //     home.title = $scope.title;
        //     home.description = $scope.description;
        //     home.$update({id:$scope.id}).then(function(home){
        //         $scope.homeList = [];
        //         $scope.homeList.push(home);
        //     },function(e){
        //         console.log(e);
        //     });
        // };
        // $scope.delete = function(){
        //     var home = new Home();
        //     home.DOMID =15;
        //     home.$delete({id:$scope.id} ).then(function(home){
        //         console.log(data);
        //         $scope.homeList = [];
        //         $scope.homeList.push(home);
        //     },function(e){
        //         console.log(e);
        //     });
        // };

        $scope.menu = {
            user:{
                name:"Martín",
                picture:""
            },
            options:[
                {
                    item:"item 1"

                }
            ]

        }

    };
    controller.$inject = ['$scope','$rootScope','$routeParams','Home'];
    angular.module('home').controller('HomeController', controller);

})();