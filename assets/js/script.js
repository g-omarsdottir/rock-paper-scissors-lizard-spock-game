// Choice buttons array
const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

// Outcome variables
const winMessage = "You win! Yay!";
const tieMessage = "It's a tie! Everybody wins!";
const loseMessage = "Yaiks, you lose!";

// Scoreboard variables for functions to increment scores and display updated scores in the DOM
// Default scores at game start are 0
let userScore = 0;
let userScoreElement = document.getElementById("user-score");
let computerScore = 0;
let computerScoreElement = document.getElementById("computer-score");
 
// Variables for user feedback to game status to improve UX.
// Apply method (document.getElementByID) to retrieve references for elements from the DOM 
//  for functions to update the displayed variables in the DOM.
// Using let because the choices and results are dynamic.
let userChoiceElement = document.getElementById("user-choice");
let computerChoiceElement = document.getElementById("computer-choice");
let resultElement = document.getElementById("result");

// Event listeners for choice-buttons - a method to retrieve references for button elements from the DOM (document.getElementByID) and 
//  add button references to event listener method (addEventListeners). 
// When buttons are clicked, the function compareChoices, the game logic, is called.
// The string for each choice button from the array choices is passed as an argument to the function compareChoices.
document.getElementById("rock").addEventListener("click", function () {
    compareChoices("Rock");
  });
  
  document.getElementById("paper").addEventListener("click", function () {
    compareChoices("Paper");
  });
  
  document.getElementById("scissors").addEventListener("click", function () {
    compareChoices("Scissors");
  });
  
  document.getElementById("lizard").addEventListener("click", function () {
    compareChoices("Lizard");
  });
  
  document.getElementById("spock").addEventListener("click", function () {
    compareChoices("Spock");
  });

// Generate random computer choice
function generateComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// Functions to increment scores
function incrementUserScore() {
  userScore++;
  updateScoreElement(userScoreElement, userScore);
}

function incrementComputerScore() {
  computerScore++;
  updateScoreElement(computerScoreElement, computerScore);
}

// Function to update the displayed score in the DOM.
function updateScoreElement(element, score) {
  element.innerHTML = score;
}

// Function to update the displayed user and computer choices in the DOM.
function updateChoiceElements(userChoiceElement, computerChoiceElement, userChoice, computerChoice) {
  userChoiceElement.innerHTML = "Your choice:" + "<br>" + userChoice;
  computerChoiceElement.innerHTML = "Computer choice:" + "<br>"  + computerChoice;
}

// Function to update the displayed game result (win, lose, tie) in the DOM.
function updateResultElement(resultElement, result) {
  resultElement.innerHTML = result;
}

// Functions for actions depending on results of compareChoices
function userWins() {
  incrementUserScore();  
  updateResultElement(result, winMessage);
  console.log(winMessage);
}

function userTies() {
  updateResultElement(result, tieMessage);
    console.log(tieMessage);
}

function userLoses() {
    incrementComputerScore();
    updateResultElement(result, loseMessage);
  console.log(loseMessage);
}

// Function to compare choices based on game rules
function compareChoices(userChoice) {
  let computerChoice = generateComputerChoice();
  console.log(computerChoice);
  updateChoiceElements(userChoiceElement, computerChoiceElement, userChoice, computerChoice);
    if (userChoice === computerChoice) {
        userTies(userChoice, computerChoice);
    } else if (
      (userChoice === "Rock" &&
        (computerChoice === "Scissors" || computerChoice === "Lizard")) ||
      (userChoice === "Paper" &&
        (computerChoice === "Rock" || computerChoice === "Spock")) ||
      (userChoice === "Scissors" &&
        (computerChoice === "Paper" || computerChoice === "Lizard")) ||
      (userChoice === "Lizard" &&
        (computerChoice === "Paper" || computerChoice === "Spock")) ||
      (userChoice === "Spock" &&
        (computerChoice === "Scissors" || computerChoice === "Rock"))
    ) {
  userWins(userChoice, computerChoice);
    } else {
        userLoses(userChoice, computerChoice);
  }
}