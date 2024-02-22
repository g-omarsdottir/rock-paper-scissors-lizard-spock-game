// Choice buttons variables
const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
// Variables for adding event listeners to choice buttons when clicked
const rockVar = document.getElementById("rock");
const paperVar = document.getElementById("paper");
const scissorsVar = document.getElementById("scissors");
const lizardVar = document.getElementById("lizard");
const spockVar = document.getElementById("spock");

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

// Event listeners for choice buttons when clicked
rockVar.addEventListener("click", function () {
    compareChoices(choices[0]);
    console.log("You clicked Rock");
  });
  
  paperVar.addEventListener("click", function () {
    compareChoices(choices[1]);
    console.log("You clicked Paper");
  });
  
  scissorsVar.addEventListener("click", function () {
    compareChoices(choices[2]);
    console.log("You clicked Scissors");
  });
  
  lizardVar.addEventListener("click", function () {
    compareChoices(choices[3]);
    console.log("You clicked Lizard");
  });
  
  spockVar.addEventListener("click", function () {
    compareChoices(choices[4]);
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