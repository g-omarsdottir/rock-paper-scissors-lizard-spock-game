// Choice buttons array
const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

// Randomly generated computer choice
let computerChoice = generateComputerChoice();

// Outcome variables
const winMessage = "You win! Yay!";
const tieMessage = "It's a tie! Everybody wins!";
const loseMessage = "Yaiks, that plan backfired! Better luck next time!";

 // Generate random computer choice
 function generateComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
  }
  console.log(computerChoice);

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

function userWins(userChoice, computerChoice) {
    console.log("Your choice: " + userChoice + " " + winMessage);
    console.log("Computer's choice: " + computerChoice);
}

function userTies(userChoice, computerChoice) {
    console.log("Your choice: " + userChoice + " " + "Computer's choice: " + " " + tieMessage);
}

function userLoses(userChoice, computerChoice) {
    console.log("Your choice: " + userChoice + " " + "Computer's choice: " + " " + computerChoice + " " + loseMessage)
}

  // Compare choices: deciding which choice wins
function compareChoices(userChoice, computerChoice) {
    computerChoice = generateComputerChoice();
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