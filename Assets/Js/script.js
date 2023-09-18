var app = angular.module('myProfileApp', []);
app.controller('myProfileCtrl', function($scope) {
    $scope.showhome = true;
    $scope.showAbout = false;
    $scope.showProjects = false;
    $scope.name = "mahesh";
    $scope.showHomeDiv=function(){
        $scope.showhome = true;
        $scope.showAbout = false;
        $scope.showProjects = false;
    }
    $scope.showAboutDiv=function(){
        $scope.showhome = false;
        $scope.showAbout = true;
        $scope.showProjects = false;
    }
    $scope.showProjectsDiv=function(){
        $scope.showhome = false;
        $scope.showAbout = false;
        $scope.showProjects = true;
    }
});
$(document).ready(function(){
    $(".button-collapse").sideNav();
    $('.parallax').parallax();
  });