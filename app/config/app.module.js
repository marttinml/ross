/*global angular*/
(function () {

    var angularModules      = ["ngRoute","ngTouch","ngResource"];
    var customModules       = ["home"];
    var componentsModules   = ["ngInput","ngMenu","ngAlert","ngSpin","ngSelect"];

    var modules = angularModules.concat(customModules,componentsModules);
    angular.module('app', modules);

})();