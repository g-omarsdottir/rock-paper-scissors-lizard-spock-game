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

// Event listeners for choice buttons when clicked
rockVar.addEventListener("click", function () {
    console.log("You clicked Rock")
  });
  
  paperVar.addEventListener("click", function () {
    console.log("You clicked Paper")
  });
  
  scissorsVar.addEventListener("click", function () {
    console.log("You clicked Scissors")
  });
  
  lizardVar.addEventListener("click", function () {
    console.log("You clicked Spock")
  });
  
  spockVar.addEventListener("click", function () {
    console.log("You clicked Spock")
  });

  // Generate random computer choice
  function generateComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
  }
  console.log(computerChoice);