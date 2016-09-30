$(function() {
  console.log( "ready!" );

  var numOfBoxes = 10;
  var colors = ['red', 'green', 'blue'];
  var interval;

  var randomiseBoxes = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var keypress = function(event){
    if (event.which === 65 && $(".container").find('div').first().hasClass('boxred')) {
      $(".container").children().first().remove();
      checkWinner();
    }
    if (event.which === 83 && $(".container").find('div').first().hasClass('boxgreen')) {
      $(".container").children().first().remove();
      checkWinner();
    }
    if (event.which === 68 && $(".container").find('div').first().hasClass('boxblue')) {
      $(".container").children().first().remove();
      checkWinner();
    }

  };

  $(document).on('keydown', keypress);

  var generateBoxes = function(){
    for (var i = 0; i <= numOfBoxes; i++) {
      $('.container').append('<div class="box' + colors[randomiseBoxes(0, 2)] + '"></div>');
    }
  };

  var timer = 0.00;

  var stopWatch = function() {
    $('.timer').html(timer.toFixed(2));
    interval = setInterval(function() {
      timer += 0.01;
      $('.timer').html(timer.toFixed(2));
    }, 10);
  };

  var checkWinner = function(){
    if ($('.container').children().length === 0) {
      alert('game over!');
      clearInterval(interval);
    }
  };

  // run this function to start new game
  // -generate new set of boxes
  // -starts timer
  var startGame = function(){
    generateBoxes();
    stopWatch();
  };

  startGame();

});
