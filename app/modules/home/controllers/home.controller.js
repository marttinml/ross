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
                },
                {
                    item:"item 2"
                },
                {
                    item:"item 3"
                },
                {
                    item:"item 1"
                },
                {
                    item:"item 2"
                },
                {
                    item:"item 3"
                },
                {
                    item:"item 1"
                },
                {
                    item:"item 2"
                }
            ]

        };
        $scope.alertActive = false;
        $scope.spin = false;
        $scope.eventButton = function(){
            alert();
        };

        $scope.showAlert = function(){
            $scope.alertActive = true;
        };

        $scope.showSpin = function(){
           $scope.spin = true;
           setTimeout(function(){
                $scope.spin = false;
                $scope.$apply();
           },2000);
        };

        $scope.ngSelectOptions = [
            {id:1,name:"item 1"},
            {id:2,name:"item 2"},
            {id:3,name:"item 3"}
        ];
        $scope.ngCheckboxOptions = [
            {id:1,name:"item 1"},
            {id:2,name:"item 2"},
            {id:3,name:"item 3"}
        ];
        $scope.ngRadiobuttonOptions = [
            {id:1,name:"item 1"},
            {id:2,name:"item 2"},
            {id:3,name:"item 3"}
        ];
        $scope.ngSelectModel = $scope.ngSelectOptions[0];


    };
    controller.$inject = ['$scope','$rootScope','$routeParams','Home'];
    angular.module('home').controller('HomeController', controller);

})();