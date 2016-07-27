$(document).ready(function() {

  var max = 250;
  $(document).on('keyup', '.leaveReview', function () {
    var length = $('.leaveReview').val().length;
    length = max - length;

    if (length < 0) {
      $('.submitReview').css('cursor', "not-allowed");
      $('.submitREview').css('opacity', '.5');
    } else {
      $('.submitReview').css('opacity', '1')
      $('.submitReview').css('cursor', "pointer");
    }

    $('.charCount').text(length);

  });

  $(document).on('click', '.addReview', function () {
    $('.review').animate({'opacity': 'show', height: 'toggle'}, 500);
  });

  $(document).on('click', '.submitReview', function () {
    var length = $(document).find('textarea.leaveReview').val().length;
    var score =  $(document).find('input.scoreInput').val();
    score = parseInt(score);
    if (length <= 250 && length > 0 && score > 0 && score <= 100){
      $('.review').toggle();
      $('input').val('');
      $('textarea').val('');
      $('.submitReview').css('opacity', '1')
      $('.submitReview').css('cursor', "pointer");
      $('.charCount').text(250);
    }
  });

  $(document).on('click', '.titleMovie', function() {
      $(this).siblings('.reviewContent').animate({'opacity': 'show', height: 'toggle'}, 500);
  });

  $(document).on('mouseenter', '.titleMovie', function () {
    $(this).css('color', 'teal');
    $(this).css('cursor', 'pointer')
    $(this).parent('.reviewBox').css('border-color', 'teal');
  });

  $(document).on('mouseleave', '.titleMovie', function () {
    $(this).css('color', 'black');
    $(this).parent('.reviewBox').css('border-color', '#38c9c9');
  });

  $(document).on('mouseenter', 'a', function () {
    $(this).css('color', '#f2f245');
  })

  $(document).on('mouseleave', 'a', function () {
    $(this).css('color', 'white');
  })

});
