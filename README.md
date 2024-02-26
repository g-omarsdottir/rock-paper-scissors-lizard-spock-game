# Rock, Paper, Scissors, Lizard, Spock - Game

The game Rock, Paper, Scissors, Lizard, Spock, often referred to as the RPSLS-Game for short, is an online one-player game against the computer. It is much like the well-known classic game ["Rock, Paper, Scissors"](href="https://en.wikipedia.org/wiki/Rock_paper_scissors") game, but with a twist: 

Two exciting game variables have been added to the game, a *Lizard* and *Spock*. 

The old classic game is often used in real life as a tiebreaker, like flipping a coin, when trivial decisions need to be made. This online game was created just to have fun and since it is played against the computer. Although, one might use the game result as inspirational help with decision making, like choosing between two equally appealing options for dinner.

## Mockup

### How to play the game:

Both players, the user and the computer, make their move similtaniously by choosing one of the five variables. The user chooses a variable by clicking on a button while the computer's choice is randomly generated. This makes it impossible for the user to develop a strategy to foresee the opponent’s choice based on his or her previous behavior. 

Each variable can beat or be beaten by two other variables as described below. The winner of each round scores 1 point. It both players choose the same variable, it’s a tie and neither one gains a point.  After either one of the players, the user or the computer, has won 10 rounds, i.e. gained 10 points, the game is completed.

### Rules

![Rules](/documentation/rules.png)

### Origin of the Game

The RPSLS-Game was originally created by Sam Kass with Karen Brylan, who introduced two further variables into the game: a lizard and the character Spock from the renowned TV series Star Trek. Being familiar with the character Spock is not necessary to be able to play and enjoy the game.

The game was displayed on the TV sitcom [The Big Bang Theory](https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock), after which it gained popularity. 

The game can also be played in person using hand gestures. The player's count to three and depict their choices similtaniously  with hand gestures that each immitate the respective variable they represent, e.g. a fist represents a rock, the index and middle fingers form scissors, and so on, as depicted on the buttons in this online game. Being familiar with the character Spock certainly comes in handy since this particular hand gesture usually takes quite some practice to achieve.

## Table of Contents

### [Deployment and Local Development](#deployment-and-local-development-1)
- #### [Deployment](#deployment-1)
    - ##### [Deployment using GitHub pages](#deployment-using-github-pages-1)
- ### [Local Development](#local-development-1)
    - #### [Local Clone](#local-clone-1)
    - #### [Fork](#fork-1)



README content
## Project and Site Owner Goals

## User Experience

## Target Audience
### First Time Visitors Goals
### Returning Visitors Goals
### Frequent Visitors Goals

## Design
### Imagery
### Colors
### Fonts
### Layout

The website is a single page devided tino 3 sections. The sections are displayed alternately to user according to a logical flow of a game website.

![Layout Map](/documentation/layout-map.png)

1. Landing Page Section
- Welcome message.
- Introduction of the game and its origin.
- Instructions how to play the game.
- Game rules.
- Entry field for a username (pseudoname of user's choice) to display in a personalized message after user has completed the game.

2. Game Section
- This is the essence of the website, where user plays the game.
- Scoreboard displaying current scores of user and computer.
- Game buttons with user choices (predefined variables introduced in the game rules) to play the game.
- The user plays against the computer. The computer's choice is randomly generated.
- The game ends when one player, user or computer, has won 10 rounds, i.e. gained 10 scorepoints.

3. Game Completion Section
- Scoreboard displaying the end score of user. The end score is not always the same, since the computer can win, too.
- If user wins, a personalized message is displayed to congratulate.
- If user loses, a personalized message is displayed to console and urge to try again.
- Button to play the game again. The user returns directly to game section and skips the landing page for a better user experience. 

### Wireframes
The wireframes show designs for desktop and mobile devices. The website is responsive on all screen sizes.
1. Landing Page Section

![Landing Page Mobile](/documentation/landing-page.png)

2. Game Section

![Game Page Desktop](/documentation/game-page.png)

3. Game Completion Section

![End Page Desktop](/documentation/end-page.png)

## Features
### Interactive Elements
### General Features of Each Page
### Features Left to Implement

## Accessibility 

## Technology Used
### Languages Used

## Testing
### Validator Testing
- #### HTML
- #### CSS 
- #### Lighthouse Report
- Desktop analysis
- Mobile devices analysis
- #### WAVE Web Accessibility Evaluation Tool
### Manual Testing
- #### Testing User Stories
- #### Full Testing

## Bugs
### Known Bugs
### Resolved Bugs
Issue: CSS Styles not being displayed on live port despite clearing cache. Common issue using Gitpod.
Fix: deploy repository to confirm styles were applied. (Possibly switch to local dev.)

## Deployment and Local Development

### Deployment
The website was deployed using GitHub pages.

#### Deployment using GitHub pages
To deploy the repository:
- Log into GitHub and navigate to repository [of this game project](https://github.com/g-omarsdottir/rock-paper-scissors-lizard-spock-game).
- Navigate to settings of the repository on the top navigation menu.
- Navigate to Pages on the left sidebar navigation menu.
- In the section "Build and deployment”, go to Source and select "Deploy from a branch" from the navigation dropdown menu.
- In the section "Branch", select the following from the dropdown menus: "Main", "Root" and click "Save".
- The link to the deployed website will appear at the top of the section as soon as processed.
- The link is accessible from the main page of the depository on the right navigation menu under "Deployments".

### Local Development

#### Local Clone
To clone the repository:
- Log in to GitHub and navigate to repository [of this game project](https://github.com/g-omarsdottir/rock-paper-scissors-lizard-spock-game).
- Click on the green "Code" button to open dropdown menu, select "Clone with HTTPS, SSH or GitHub CLI" and copy the link provided.
- Open "Terminal" (or "Git Bash") in your code editor.
- Change the current working directory to the location where you want the cloned directory to be made.
- Type "git clone" in the terminal and then paste the URL copied on GitHub in step 2, above.
- Press "Enter" and your local clone will be created.

#### Fork
To fork the repository:
- Log in (or sign up) to Github.
- Navigate to the repository [of this game project](https://github.com/g-omarsdottir/rock-paper-scissors-lizard-spock-game).
- Click the "Fork" button in the top right corner to open dropdown menu and select "Create a new fork".

## Credits
### Content
### Imagery
- [Favicon](https://www.freefavicon.com/freefavicons/icons/iconinfo/video-game-controller-icon-152-227918.html)
- [Fontawesome](https://fontawesome.com/)
- [Game Rules depicted in this README](Image: https://en.wikipedia.org/wiki/File:Rock_paper_scissors_lizard_spock.png)