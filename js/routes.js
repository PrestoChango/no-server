angular.module('noServer')
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './no-server/views/homePage.html'
      })
      .state('movie', {
        url: '/movieSearch',
        templateUrl: './no-server/views/movieSearch.html'
      })
      .state('watch', {
        url: '/reviews',
        templateUrl: './no-server/views/reviews.html'
      });


  });
