// Choice buttons array
const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

// Outcome variables
const winMessage = "You win! Yay!";
const tieMessage = "It's a tie! Everybody wins!";
const loseMessage = "Yaiks, that plan backfired! Better luck next time!";

// Scoreboard variables for functions to increment scores and display updated scores in the DOM
// Default scores at game start are 0
let userScore = 0;
let userScoreElement = document.getElementById("user-score");
let computerScore = 0;
let computerScoreElement = document.getElementById("computer-score");
 
// Event listeners for choice-buttons - a method to retrieve references for button elements from the DOM (document.getElementByID) and 
//  add button references to event listener method (addEventListeners). 
// When buttons are clicked, the function compareChoices, the game logic, is called.
// The string for each choice button from the array choices is passed as an argument to the function compareChoices.

document.getElementById("rock").addEventListener("click", function () {
    compareChoices("Rock");
    console.log("You clicked Rock");
  });
  
  document.getElementById("paper").addEventListener("click", function () {
    compareChoices("Paper");
    console.log("You clicked Paper");
  });
  
  document.getElementById("scissors").addEventListener("click", function () {
    compareChoices("Scissors");
    console.log("You clicked Scissors");
  });
  
  document.getElementById("lizard").addEventListener("click", function () {
    compareChoices("Lizard");
    console.log("You clicked Lizard");
  });
  
  document.getElementById("spock").addEventListener("click", function () {
    compareChoices("Spock");
    console.log("You clicked Spock");
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

// Function to display incremented, i.e. updated, scores in the DOM
function updateScoreElement(element, score) {
  element.innerHTML = score;
}

// Functions for actions depending on outcome of compareChoices
function userWins(userChoice, computerChoice) {
  incrementUserScore();  
  console.log("Your choice: " + userChoice + " " + winMessage);
    console.log("Computer's choice: " + computerChoice);
    console.log("Your score" + userScore);
}

function userTies(userChoice, computerChoice) {
    console.log("Your choice: " + userChoice + " " + "Computer's choice: " + computerChoice + " " + tieMessage);
}

function userLoses(userChoice, computerChoice) {
    incrementComputerScore();
  console.log("Your choice: " + userChoice + " " + "Computer's choice: " + " " + computerChoice + " " + loseMessage);
  console.log("Computer score" + computerScore);
}

  // Compare choices: deciding which choice wins
function compareChoices(userChoice) {
  let computerChoice = generateComputerChoice();
  console.log(computerChoice);
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