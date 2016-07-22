$(document).ready(function() {

  $(document).on('click', '.addReview', function () {
    $('.review').toggle();
  });

  $(document).on('click', '.submitReview', function () {
    $('.review').toggle();
    $('input').val('');
    $('textarea').val('');
  });


})
