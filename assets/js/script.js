
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var feedbackEl = document.getElementById('feedback');
var questionsEl = document.getElementById('questions');
var landingEl = document.getElementById('landing');
var quiz = document.getElementById('quiz');
var saveAttempt = document.getElementById('saveAttempt');
var quizIndex = 0;
var correctCounter = 0;
var isCorrect = false;
var timerElement = document.querySelector(".timer-count");
var message ='Time is up!';
var inits = document.getElementById('inits').value;
var startButton = document.getElementsByClassName("startBtn");
var submitBtn = document.querySelector('.submit');
var sfxRight = new Audio('assets/sfx/correct.wav');
var sfxWrong = new Audio('assets/sfx/incorrect.wav');

if(localStorage.getItem('grade') == null) {
var scoreBoard = [];
} else {
  var scoreBoard = JSON.parse(localStorage.getItem('grade'));
}

console.log(scoreBoard);


var questions = [
  {
    title: 'Commonly used data types DO NOT include:',
    choices: ['strings', 'booleans', 'alerts', 'numbers'],
    answer: 'alerts',
  },
  {
    title: 'The condition in an if / else statement is enclosed within ____.',
    choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
    answer: 'parentheses',
  },
  {
    title: 'Arrays in JavaScript can be used to store ____.',
    choices: [
      'numbers and strings',
      'other arrays',
      'booleans',
      'all of the above',
    ],
    answer: 'all of the above',
  },
  {
    title:
      'String values must be enclosed within ____ when being assigned to variables.',
    choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
    answer: 'quotes',
  },
  {
    title:
      'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
    answer: 'console.log',
  },
];

var timeLeft = questions.length * 15;

function countdown() {
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
      feedbackEl.textContent="";
      
    } else if (timeLeft == 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      timeIsUpMessage();
    }
  }, 1000);
  
}

function timeIsUpMessage() {
  timerEl.textContent = message;
}

function checkAnswer(answer){
  if (answer == questions[quizIndex -1].answer){
    answer = true;
  } else {
    answer = false;
  }
  answerWasCorrect(answer)
}

function answerWasCorrect(answer) {
  if (answer === false) {
    feedbackEl.textContent="Sorry, your answer was incorrect";
    feedbackEl.className='incorrect';
    timeLeft = timeLeft - 15;
  } else {
    feedbackEl.textContent="Correct!";
    feedbackEl.className='feedback';
    correctCounter ++;
  }
}

function nextQuestion(answer) {
  if (answer == undefined){
    countdown();
    quiz.style.display = 'flex';
  } else {
    checkAnswer(answer)
  }
  landingEl.style.display = 'none';
  saveAttempt.style.display = 'none';
  if (quizIndex < questions.length) {
    var question = document.getElementById('question').innerHTML = questions[quizIndex].title;
    var firstChoice = document.getElementById('option1').innerHTML =questions[quizIndex].choices[0];
    var secondChoice = document.getElementById('option2').innerHTML = questions[quizIndex].choices[1];
    var thirdChoice = document.getElementById('option3').innerHTML = questions[quizIndex].choices[2];
    var fourthChoice = document.getElementById('option4').innerHTML = questions[quizIndex].choices[3];
    quizIndex++;
  } else {
    getScore();
  }
}

function getScore(){
  quiz.style.display = "none";
  saveAttempt.style.display = "flex"
  document.getElementById("score").innerHTML = correctCounter;
}

function saveScore(){
  inits = document.getElementById('inits').value;
  scoreBoard.push({initals: inits, score: correctCounter});
  localStorage.setItem('grade', JSON.stringify(scoreBoard));

}