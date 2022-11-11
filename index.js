var readlineSync = require("readline-sync");

var score = 0;

const chalk = require('chalk'); 

//data of high score 
var highScores = [
  {
    name: "Jayesh",
    score: 3,
  },

  {
    name: "Raj",
    score: 2,

  }]

var questions = [
  {
    question: chalk.blue.italic("Where was Shivaji Maharaj born? "),
    answer: "Shivneri"
  },
  {
    question: chalk.blue.italic("What year was Shivaji born? "),
    answer: "1630"
  },
  {
    question: chalk.blue.italic("Which Maratha clan did Shivaji belong to? "),
    answer: "Bhosle"
  },
  {
    question: chalk.blue.italic("What is the name of Shivaji's father? "),
    answer: "Shahaji"
  },
  {
    question: chalk.blue.italic("Who was Shivaji's mother? "),
    answer: "Jijabai"
  },
  {
    question: chalk.blue.italic("Shivaji Maharaj lived for how many years?  "),
    answer: "50 years"
  }
];

function welcome() {
  var userName = readlineSync.question("What is your name ? ");
  console.log(" ")
  console.log(chalk.inverse.bold("Welcome ") + chalk.bgGreen.bold(userName + " to") + chalk.bgCyan.bold.italic("History Quiz!"));
  console.log(" ")
}

function initiate() {

  options = ['YES', 'NO'];
  console.log('Are you ready to play the game ?');
  index = readlineSync.keyInSelect(options, '');

  if (options[index] === options[0]) {
    console.log(" ")
    readlineSync.keyInPause('HERE WE GOOOOO ! ')
    console.log(" ");
    game();
    displayScore();
  }

  if (options[index] === options[1]) {

    console.log(" ")
    console.log("OK you can play the game now !")
    console.log(" ")
  }
}


function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.bgGreen("RIGHT !"));
    score = score + 1;
  }
  else {
    console.log(chalk.bgRed("WRONG !"));
  }
  console.log("current score: ", score);
  console.log(" ");
}

function game() {
  for (var i = 0; i < questions.length; i++){
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}

function displayScore() {
  console.log(chalk.inverse("Congratulations ! Your SCORE is : ", score + " "));
  console.log(" ");
  console.log("Check out the high scores, if you should be there then ping me and I'll update it");
  highScores.map(score => console.log(score.name, " : ", score.score));
}

welcome();
initiate();