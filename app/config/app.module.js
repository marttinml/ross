/*global angular*/
(function () {

    var angularModules      = ["ngRoute","ngTouch","ngResource"];
    var customModules       = ["home"];
    var componentsModules   = ["ngInput","ngMenu"];

    var modules = angularModules.concat(customModules,componentsModules);
    angular.module('app', modules);

})();