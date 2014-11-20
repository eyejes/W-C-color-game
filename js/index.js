$(function(){
  // var coolColors = ["#00FFFF","#7FFFD4","#000080","#007FFF","#008080","#4b0082"];
  // var warmColors = ["#800000","#Fc0fc0","#ffd700","#cc8899","#ff7f50","#228b22"];

  var coolColors = ["cyan.jpg","aquamarine.jpg","navyblue.jpg","azure.jpg","teal.jpg","indigo.jpg"];
  var warmColors = ["maroon.jpg","hotpink.png","golden.jpg","puce.jpg","coral.jpg","forestgreen.jpg"];
  var i = 0;
  i = Math.round(Math.random()*5);
  console.log(i);
  var index = Math.floor(Math.random()*6);
  var windex = Math.floor(Math.random()*6);
  
  MakeGame(i);
  $('.board').on('click', 'div', function(){
    if (CheckChoice($(this))) {
      CorrectChoice();
      if (i === 10) {
        GameOver();
      }
      else {
        MakeGame(i);
      }
    }
    else {
      IncorrectChoice();
    }
  });
  
  function MakeGame() {
    
    $('.correct').removeClass('correct');
    // var w = warmColors.pop();
    // var c = coolColors.pop();
    if (i % 2 === 0) {
      $('.temperature').text('Warm Color');
      if (i % 4 === 0) {
        // $('.right').addClass('correct').css('background-color', w);
        $('.right').addClass('correct').css('background-image', "url("+ warmColors[Math.floor(Math.random()*6)] +")");
        // $('.left').css('background-color', c);
        $('.left').css('background-image', "url("+ coolColors[Math.floor(Math.random()*6)] +")");
      }
      else {
        // $('.left').addClass('correct').css('background-color', w);
        $('.left').addClass('correct').css('background-image', "url("+ warmColors[Math.floor(Math.random()*6)]+")");
        // $('.right').css('background-color', c);
        $('.right').css('background-image', "url("+ coolColors[Math.floor(Math.random()*6)] +")");
      }
    }
    else {
      $('.temperature').text('Cool Color');
      if (i % 3 === 0) {      
        console.log(index)
         // $('.left').addClass('correct').css('background-color', c);
        $('.left').addClass('correct').css('background-image', "url("+ coolColors[Math.floor(Math.random()*6)] +")");
        // $('.right').css('background-color', w);
        $('.right').css('background-image', "url("+warmColors[Math.floor(Math.random()*6)]+")");
      }
      else {
        $('.right').addClass('correct').css('background-image', "url("+ coolColors[Math.floor(Math.random()*6)] +")");
        // $('.left').css('background-color', w);
        $('.left').css('background-image', "url("+warmColors[Math.floor(Math.random()*6)]+")");
      }
    }
    i++;
  }
  
  function CheckChoice(c) {
    if (c.hasClass('correct')) {
      return true;
    }
    else {
      return false;
    }
  }
  
  function CorrectChoice() {
    $('.feedback').text('Great job!');
  }
  
  function IncorrectChoice() {
    $('.feedback').text('Not quite :(')
  }

  function GameOver() {
    $('.instructions').empty().html('<span class="done">Game Over!</span>');
    $('.board').fadeTo(600, 0.3);
  }
});