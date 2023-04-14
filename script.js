import { words } from './words.js';

var randomize;
var correctAnswer = 0;
var subWord = document.getElementById('submit-word');
var startBtn = document.getElementById('start-btn');
var timer = document.getElementById('timer');
var word = document.getElementById('word');
var seconds = 30;
var intervalId;
var textInput = document.getElementById('entry');
var tally = document.getElementById('scores');

  randomize = words[Math.floor(Math.random() * words.length)];
  document.getElementById('word').innerHTML = randomize; 


startBtn.addEventListener('click', function () {
  intervalId = setInterval(function () {
    seconds--;
    timer.innerHTML = seconds + ' seconds';
    if (seconds <= 0) {
      clearInterval(intervalId);

    }
  }, 1000);

  setTimeout(function () {
    clearInterval(intervalId);
     
  
 container.innerHTML = `Your score is ${correctAnswer}. Reload to play again!` ;


  }, 30000);

});


subWord.addEventListener("click", function () {
  let guess = textInput.value.trim().toLowerCase();
  let answer = randomize.trim().toLowerCase();

  if (guess === answer) { 
   correctAnswer++;
    console.log(correctAnswer);  
  } 
  
  else {
   correctAnswer--;
    console.log(correctAnswer);
  }

  tally.textContent = correctAnswer;

   randomize = words[Math.floor(Math.random() * words.length)];
  word.textContent = randomize;
  textInput.value = "";
 document.getElementById("submit-word").click();
  });

  textInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("submit-word").click();
  
     
      textInput.value = "";
    }
  });