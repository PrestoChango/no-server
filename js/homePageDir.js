angular.module('noServer')
  .directive('homePage', function() {

    return {
      restrict: 'E',
      templateUrl: 'views/homePage.html'
    };

  });
