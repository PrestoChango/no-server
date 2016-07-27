angular.module('noServer')
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/homepage.html'
      })
      .state('movie', {
        url: '/movieSearch',
        templateUrl: 'views/movieSearch.html'
      })
      .state('watch', {
        url: '/reviews',
        templateUrl: 'views/reviews.html'
      });


  });
