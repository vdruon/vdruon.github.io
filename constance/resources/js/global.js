$.stellar({
            horizontalScrolling: false,
            scrollProperty: 'scroll',
            positionProperty: 'position'
        });

$(document).ready(function() {
  var ids = ["#romeo-1", "#romeo-2", "#romeo-3", "#english-text"];

  var index = Math.floor((Math.random() * 3) + 1);
  var element = $(ids[index]);

  element.css('display', 'block');
});