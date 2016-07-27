angular.module('noServer')
  .controller('mainCtrl', function ($scope, serv, $q) {

  $scope.eggs = 1;

  $scope.reviews = {};

  $scope.submits = {};

  $scope.submitsLast = {};

  function pullReviews() {
    serv.getReviews().then(function (response) {
      $scope.reviews = response;
    })
  };

  $scope.getMovie = function (movie){
    if(typeof movie == "undefined") {
    } else {
      serv.getData(movie).then(function(response) {
        $scope.move = response;

        var cntr = 0;

        function count() {
          next();
          function next(){
            if (cntr < $scope.move.length) {
              serv.getMoreData($scope.move[i].imdbID).then(function(moreData) {
                $scope.move[cntr].plot = moreData.Plot;
                $scope.move[cntr].score = moreData.Metascore;
                cntr++;
              });
            }
          }
        }
        for (var i = 0; i < $scope.move.length; i++){
          if (cntr < $scope.move.length) {
            count();
          }
        }
      });
    }
  };

  $scope.submit = function(movie, critic, review, score) {
    var length = review.length;
    score = parseInt(score);

    if (JSON.stringify($scope.submitsLast) === JSON.stringify($scope.submits)){
      $scope.submits = {};
      movie = undefined;
    }

    if (name !== undefined && movie !== undefined && review !== undefined && score !== undefined && length <= 250 && length > 0 && score > 0 && score <= 100){
      reviewDate = new Date();
      serv.pushData({movie, critic, review, reviewDate, score});
      pullReviews();
      };
    $scope.submitsLast.name = critic;
    $scope.submitsLast.movie = movie;
    $scope.submitsLast.review = review;
    $scope.submitsLast.score = score.toString();
    }

  pullReviews();

});
