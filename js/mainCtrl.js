angular.module('noServer')
  .controller('mainCtrl', function ($scope, serv) {

  $scope.reviews = serv.getReviews();

  $scope.submits = {};

  $scope.getMovie = function (movie){
      serv.getData(movie).then(function(response) {
        $scope.move = response;
      });
  };

  $scope.submit = function(name, movie, review, score) {
    if (name !== undefined && movie !== undefined && review !== undefined && score !== undefined){
      date = new Date();
      serv.pushData(name, movie, review, date, score);
      $scope.submits = {};
    }
  };

});
