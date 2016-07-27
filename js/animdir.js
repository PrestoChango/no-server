angular.module('noServer')
  .directive('animate', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attr) {

        element.on('dblclick', function() {
          if (element[0].className === 'blue'){
            jQuery(element[0]).fadeOut(300, 'swing', easterEgg());
            scope.eggs += 1;
          } else if(element[0].className === "red") {
            jQuery(element[0]).fadeOut(300, 'swing', easterEgg());
            scope.eggs += 1;
          } else if(element[0].className === "orange") {
            jQuery(element[0]).fadeOut(300, 'swing', easterEgg());
            scope.eggs += 1;
          } else if(element[0].className === "green") {
            jQuery(element[0]).fadeOut(300, 'swing', easterEgg());
            scope.eggs += 1;
          }
        })

        function easterEgg() {
          if(scope.eggs === 6) {
            setTimeout(activateEasterEgg, 1000);
          }
        }

        function activateEasterEgg() {
          jQuery('body').css('background', 'none');
          jQuery('body').css('background-color', '#1f1f14');
          jQuery('.green').addClass('flickG');
          jQuery('.blue').addClass('flickB');
          jQuery('.orange').addClass('flickO');
          jQuery('.red').addClass('flickR');
          jQuery('.red').fadeIn(600, 'swing');
          jQuery('.blue').fadeIn(600, 'swing');
          jQuery('.orange').fadeIn(600, 'swing');
          jQuery('.green').fadeIn(600, 'swing');
        }
      }
    }


});
