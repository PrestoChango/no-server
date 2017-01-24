angular.module('noServer').service('serv', function ($http, $q) {

  this.getData = function(movie) {
    return $http({
      method: "GET",
      url: 'http://www.omdbapi.com/?s=' + movie
    }).then(function(response) {
      return response.data.Search;
    });
  };

  this.getMoreData = function(movie) {
    return $http({
      method: "GET",
      url: 'http://www.omdbapi.com/?i=' + movie + '&type=movie'
    }).then(function(response) {
      return response.data;
    })
  }

  this.pushData = function(movieObj) {
    var movies = JSON.parse(localStorage.getItem('Reviews'));
    for(var i = 0; i < movies.length; i++){
      if(movies[i].title === 'starwars'){
        movies.splice(i, 1);
      }
    }
    // movies.push(movieObj);
    localStorage.setItem('Reviews', JSON.stringify(movies));
   };

  this.getReviews = function() {
    var movies = JSON.parse(localStorage.getItem('Reviews'));

    if (!movies) {
      localStorage.setItem('Reviews', JSON.stringify([
      { movie: 'Star Wars: Episode IV - A New Hope', critic: 'Vern Perry', review: 'Star Wars is nothing short of pure unadulterated entertainment, something that has been sorely lacking in a great majority of recent films.', reviewDate: 'December 21, 2015', score: 86},
          { movie: 'Star Wars: Episode V - The Empire Strikes Back', critic: 'Rena Andrews', review: 'The Empire Strikes Back is the ultimate in fantasies, a visual wonder and a movie that should be recommended highly if only because it makes you feel good.', reviewDate: 'December 15, 2015', score: 89},
          { movie: 'Star Wars: Episode VI - Return of the Jedi', critic: 'Tim Brayton ', review: 'It\'s largely captivating at gigantic SFX and VFX spectacle; it\'s good at family movie and it\'s trivial at adult movie.', reviewDate: 'June 5, 2016', score: 72},
          { movie: 'Star Wars: Episode I - The Phantom Menace', critic: 'Joe Holleman', review: 'The movie is fun, for the most part, and several scenes are as good or better than anything Lucas created in the original films. The human characters, however, are not nearly as interesting as those in the earlier episodes.', reviewDate: 'December 14, 2015', score: 60},
          { movie: 'Star Wars: Episode II - Attack of the Clones', critic: 'Joshua Tyler', review: 'The second half of this film is almost a different movie. Everything about it is better. Everything.', reviewDate: 'August 12, 2002', score: 67},
          { movie: 'Star Wars: Episode III - Revenge of the Sith', critic: 'Garth Franklin ', review: 'The only one of the trilogy that actually works as both a good Summer movie and a solid sci-fi movie in its own right.', reviewDate: 'October 30, 2006', score: 73},
          { movie: 'Star Wars: Episode VII - The Force Awakens', critic: 'Alan Corr ', review: 'It\'s a big Star Wars universe out there and Abrams has just made it bigger again with this mix of fan boy homage and a fresh and quirky vision of his own.', reviewDate: 'July 19, 2016', score: 82},
          { movie: 'Troll Hunter', critic: 'Michael Wilmington', review: 'The film is shot with handheld cameras in the standard mockumentary style, but the content is often hilarious, especially when the trolls show up.', reviewDate: 'December 13, 2011', score: 67},
          { movie: 'The Princess Bride', critic: 'Mark R. Leeper ', review: 'All I can say is this is the most fun you will have in a film for quite a while.', reviewDate: 'January 1, 2000', score: 83},
          { movie: 'Back to the Future', critic: 'Scott Nash ', review: 'Crispin Glover and Christopher Lloyd are both standouts.', reviewDate: 'July 3, 1985', score: 87}
        ]))
    }

    var def = $q.defer();
    def.resolve(JSON.parse(localStorage.getItem('Reviews')));
    return def.promise;
  d};

});
