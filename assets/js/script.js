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
 
// Variables for improved UX - method (document.getElementByID) to retrieve references for elements from the DOM 
//  for functions to display the updated choices in the DOM.
// Using let because the choices are dynamic.
let userChoiceElement = document.getElementById("user-choice");
let computerChoiceElement = document.getElementById("computer-choice");

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

// Function to update the displayed user and computer choices in the DOM
//  to increase UX
function updateChoiceElements(userChoiceElement, computerChoiceElement, userChoice, computerChoice) {
  userChoiceElement.innerHTML = "Your choice: " + userChoice;
  computerChoiceElement.innerHTML = "Computer choice: " + computerChoice;
}

// Functions for actions depending on results of compareChoices
function userWins(userChoice, computerChoice) {
  incrementUserScore();  
  console.log(winMessage);
}

function userTies(userChoice, computerChoice) {
    console.log(tieMessage);
}

function userLoses(userChoice, computerChoice) {
    incrementComputerScore();
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