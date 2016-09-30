$(document).ready(function(){
  console.log('linked');

  var boxLength = 10;
  var boxColors = ['red', 'green', 'blue'];

  var initGame = function(){
    generateBoxes();
  };

  var generateBoxes = function(){
    for (var i = 0; i <= boxLength; i++) {
      $(".container").append('<div class="box'+ boxColors[randomiseBoxes(0,2)] + '"></div>');
    }
  };

  var randomiseBoxes = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var keyPress = function(event){
    if (event.which == 65 && $('.container').children().first().hasClass('boxred')) {
      console.log('a');
      $('.container').children().first().remove();
      checkWinner();
    }
    if (event.which == 83 && $('.container').children().first().hasClass('boxgreen')) {
      console.log('s');
      $('.container').children().first().remove();
      checkWinner();
    }
    if (event.which == 68 && $('.container').children().first().hasClass('boxblue')) {
      console.log('w');
      $('.container').children().first().remove();
      checkWinner();
    }
  };

  $(document).on('keydown',keyPress);

  var checkWinner = function(){
    if ($('.container').children().length === 0 ) {
      alert('game over');
    }
  };

initGame();

});
