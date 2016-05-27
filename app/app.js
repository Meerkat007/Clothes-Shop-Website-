﻿angular.module('myClothingApp', ['ngRoute'])

    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                controller: 'MainViewController',
                templateUrl: 'app/main_view/mainview.html'
            })
            .when('/ladies/:category', {
                controller: 'LadiesController',
                templateUrl: 'app/product_area/product-main-view.html'
            })
            .when('/category-list/ladies', {
                controller: 'LadiesController',
                templateUrl: 'app/product_area/product-category.html'
            })
            .when('/men/:category', {
                controller: 'MenController',
                templateUrl: 'app/product_area/product-main-view.html'
            })
            .when('/category-list/men', {
                controller: 'MenController',
                templateUrl: 'app/product_area/product-category.html'
            })
            .when('/kids/:category', {
                controller: 'KidsController',
                templateUrl: 'app/product_area/product-main-view.html'
            })
            .when('/category-list/kids', {
                controller: 'KidsController',
                templateUrl: 'app/product_area/product-category.html'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
}]);
    