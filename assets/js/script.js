// Variables for landing page: to collect username at form submission and store in local storage.
let usernameInput = document.getElementById("username-input"); // Reference for validation of username. 
let username = document.getElementById("username");
let usernameForm = document.getElementById("username-form"); // Reference of submission form for event listener "submit".

// Variables for game section: Game variables array, possible choices for playing game.
const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

// Variables for user feedback to game status. Apply method (document.getElementByID) to retrieve references for elements from the DOM for functions to update the displayed variables in the DOM.
// Using let because the choices and results are dynamic.
let userChoiceElement = document.getElementById("user-choice");
let computerChoiceElement = document.getElementById("computer-choice");
let resultElement = document.getElementById("result");
// Detailed result feedback referencing game rules. Constant variable because game rules are unchangeable.
const winConditions = {
  Rock: {
    Scissors: "crushes",
    Lizard: "crushes"
  },
  Paper: {
    Rock: "covers",
    Spock: "disproves"
  },
  Scissors: {
    Paper: "cuts",
    Lizard: "decapitates"
  },
  Lizard: {
    Spock: "poisons",
    Paper: "eats"
  },
  Spock: {
    Scissors: "smashes",
    Rock: "vaporizes"
  }
};

// Variables for scoreboard: to increment scores and display updated scores in the DOM. Default scores at game start are 0.
let userScore = 0;
let userScoreElement = document.getElementById("user-score");
let computerScore = 0;
let computerScoreElement = document.getElementById("computer-score");

// Variables for game completed section: for user feedback.
let finalResultMessage = document.getElementById("final-result");
let finalUserScore = document.getElementById("final-score");

// Variables for displaying or hiding sections according to logical flow of the game.
const landingSection = document.getElementById("landing-section");
const gameSection = document.getElementById("game-section");
const completedSection = document.getElementById("completed-section");

// Default display settings: display landing page, hide game section and game completed section as default.
gameSection.style.display = "none";
completedSection.style.display = "none";

// Event listeners for interactive features in the DOM: buttons

// Event listener landing page section: for button 'submit username'. Triggers function to validate username. 
usernameForm.addEventListener("submit", function (event) {
  // Prevents the default submission of form before JavaScript can handle the username submission, while allowing submit button to be focusable using type="submit".
  event.preventDefault();
  if (usernameInput.value.length > 10 || usernameInput.value.length < 1) {
    alert("Please choose a username between 1 and 10 characters.");
    usernameInput.value = "";  // Clear form input field if username is invalid
    return false; // to prevent submission if username is invalid (less than one or more than 10 characters).
    // less than 1 character is handled with the required attribute in the html input field for username.
  } else {
    collectUsername(); // If username is valid, triggers local storage.
    setTimeout(() => {
      playGame(); // If username is valid, triggers display of game section.
    }, 500);
  }
});

// Event listeners game section: for 'choice-buttons' to play game and references for button elements from the DOM (document.getElementByID) for function compareChoices. 
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

// Event listener completed game section: for button 'play again'.
document.getElementById("play-again").addEventListener("click", function () {
  resetGame(); 
  playGame();  
  });

// Function to collect username and and store in local storage.
function collectUsername() {
  localStorage.setItem(username, usernameInput.value); // To store the username in local storage.
}

// Display game section (user sees buttons and can play game) and hide the landing page section and game completed section for a logical flow of the website/game.
function playGame() {
  landingSection.style.display = "none";
  gameSection.style.display = "block";
  completedSection.style.display = "none";
  console.log("play game function activated");
}

// Generate random computer choice
function generateComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// Functions to increment scores
function incrementUserScore() {
  userScore++;
  handleScores(userScoreElement, userScore);
}

function incrementComputerScore() {
  computerScore++;
  handleScores(computerScoreElement, computerScore);
}

// Function to handle scores (display in the DOM and set score limit to end the game). Using "element" provides flexibility and concise code, updating both user and computer score at once.
function handleScores(element, score) {
  element.innerHTML = score;
  if (score === 10) {
    setTimeout(() => {
      completedGame();
      }, 300);
  }
}

// Function to update the displayed user and computer choices in the DOM for user feedback.
function updateChoiceElements(userChoiceElement, computerChoiceElement, userChoice, computerChoice) {
  userChoiceElement.innerHTML = "Your choice:" + "<br>" + userChoice;
  computerChoiceElement.innerHTML = "Computer choice:" + "<br>" + computerChoice;
}

// Function to update the displayed game result (win, lose, tie) in the DOM.
function updateResultElement(resultElement, result) {
  resultElement.innerHTML = result;
}

// Functions for game results of each round according to comparison of choices (compareChoices) for user feedback.
function userWins(userChoice, computerChoice) {
  incrementUserScore();
  const reason = winConditions[userChoice][computerChoice];
  const resultMessageWins = userChoice + " " + reason + " " + computerChoice + "!" + "<br>" + " You win!";
  updateResultElement(result, resultMessageWins);
}

function userTies(userChoice, computerChoice) {
  const resultMessageTies = userChoice + " " + "equals" + " " + computerChoice + "!" + "<br>" + "It's a tie! Everybody wins!";
  updateResultElement(result, resultMessageTies);
}

function userLoses(userChoice, computerChoice) {
  incrementComputerScore();
  const reason = winConditions[computerChoice][userChoice]; 
  const resultMessageLoses = computerChoice + " " + reason + " " + userChoice + "!" + "<br>" + " You lose!";
  updateResultElement(result, resultMessageLoses);
}

// Function to compare choices based on game rules to decide which variable wins the round.
function compareChoices(userChoice) {
  let computerChoice = generateComputerChoice();
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

function completedGame() {
  landingSection.style.display = "none";
  gameSection.style.display = "none";
  completedSection.style.display = "block";
if (userScore === 10) {
  finalUserScore.innerHTML = "Your score: " + userScore;
  finalResultMessage.innerHTML = "Congratulations, " + localStorage.getItem(username) +  "<br>" + ", you win!";
} else {
  finalUserScore.innerHTML = "Your score: " + userScore;
  finalResultMessage.innerHTML = "Too bad, " + localStorage.getItem(username) + "<br>" + ", you lost this time around." + "<br>" + "Better luck next time!";
}
}

function resetGame() {
  // Scores and display of scores in the DOM
  userScore = 0;
  computerScore = 0;
  computerScoreElement.innerHTML = 0;
  userScoreElement.innerHTML = 0;
  // Display of choices and game results of each round in the DOM
  userChoiceElement.innerHTML = "";
  computerChoiceElement.innerHTML = "";
  resultElement.innerHTML = "";
  gameSection.style.display = "none";
}