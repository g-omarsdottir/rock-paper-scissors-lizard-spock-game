# Rock, Paper, Scissors, Lizard, Spock - Game

The game Rock, Paper, Scissors, Lizard, Spock, often referred to as the RPSLS-Game for short, is an online one-player game against the computer. It is much like the well-known classic game ["Rock, Paper, Scissors"](href="https://en.wikipedia.org/wiki/Rock_paper_scissors") game, but with a twist: 

Two exciting game variables have been added to the game, a *Lizard* and *Spock*. 

This is an easy and enjoyable game that requires no previous knowledge and is played against the computer. The old classic game is often used in real life as a tiebreaker, like flipping a coin, when trivial decisions need to be made. Although the goal here is just to have fun, one might use the game result as inspirational help with decision making, like choosing between two equally appealing options for dinner.

## Mockup

### How to play the game:

Both players, the user and the computer, make their move similtaniously by choosing one of the five variables. The user chooses a variable by clicking on a button while the computer's choice is randomly generated. This makes it impossible for the user to develop a strategy to foresee the opponent’s choice based on his or her previous behavior. 

Each variable can beat or be beaten by two other variables as described below. The winner of each round scores 1 point. It both players choose the same variable, it’s a tie and neither one gains a point.  After either one of the players, the user or the computer, has won 10 rounds, i.e. gained 10 points, the game is completed.

### Rules

![Rules](/documentation/rules.png)

### Origin of the Game

The RPSLS-Game was originally created by Sam Kass with Karen Brylan, who introduced two further variables into the game: a lizard and the character Spock from the renowned Star Trek media franchise. Being familiar with the character Spock is not necessary to be able to play and enjoy the game.

The game was displayed on the TV sitcom [The Big Bang Theory](https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock), after which it gained popularity. 

The game can also be played in person using hand gestures. The player's count to three and depict their choices similtaniously  with hand gestures that represent the respective variable, e.g. a fist form a rock, the index and middle fingers form scissors, etc. The hand gestures are depicted on the buttons in the game section of the website. Being familiar with the character Spock certainly comes in handy since this particular hand gesture usually takes quite some practice to achieve.

## Table of Contents

### [Deployment and Local Development](#deployment-and-local-development-1)
- #### [Deployment](#deployment-1)
    - ##### [Deployment using GitHub pages](#deployment-using-github-pages-1)
- ### [Local Development](#local-development-1)
    - #### [Local Clone](#local-clone-1)
    - #### [Fork](#fork-1)


## Project and Site Owner Goals
- The goal is to create an easy and enjoyable game that requires no previous knowledge. Since the game is played against the computer, the user does not require a counterpart and can play whenever and wherever he or she likes.

## User Experience

## Target Audience
- People who enjoy playing online games. 
- People who don't have or do not wish to have a counterpart to play with.
- Fans of the sitcom The Big Bang Theory.
- Fans of the Star Trek franchise.

### First Time Visitors Goals
- To play a game for fun.
- To play a familiar game that introduces additional variables and to enjoy learning new things.
- To be able to easily understand and follow rules of the game.
- To get instant positive feedback when playing the game because it doesn't require investing a lot of time to learn rules, to play the game or to plan a game strategy.

### Returning Visitors Goals
- To have fun playing the game without having to read and understand a lot of rules.

### Frequent Visitors Goals
- To play a familiar game to pass time in a fun way and/or to clear the head between long working sessions.
- To see if it's possible to create a strategy to win randomly generated play moves of the computer.

## Design
### Imagery
### Colors
### Fonts
### Layout

The website is a single page devided tino 3 sections: landing page section, game section, and completion of game section. The sections displayed alternately to the user according to a logical flow of a game website.
The website was designed first for mobile devices, i.e. smaller screens and the step wise progressed to large mobile devices, tablets, and desktops. Design was targeted and adapted to larger screens by applying CSS media queries. A quick search online gave a rough overview of which screen sizes are popular and which are no longer in use. 

Mobile Device
The choice buttons for the game variables are placed at the flex-bottom. The user can conveniently reach all buttons using the thumb while securily holding the mobile device in one hand.

![Layout Map](/documentation/layout-map.png)

### Wireframes
The wireframes show designs for desktop and mobile devices. The website is responsive on all screen sizes.
1. Landing Page Section

![Landing Page Mobile](/documentation/landing-page.png)

2. Game Section

![Game Page Desktop](/documentation/game-page.png)

3. Game Completion Section

![End Page Desktop](/documentation/end-page.png)

## Features
-  The website is responsive on all device sizes.
- The user lands on a landing page. After entering a username and submitting it, the user is automatically forwarded to the game section. 
- After completing the game, the user has the option to return to game page to play again. 
- The user does not have the option to navigate between the pages.
- Buttons have the pseudo-class active to give users feedback when a choice button for a game variable is clicked with a box-shadow effect. On desktop screens operated with a 
- mouse, there is also the pseudo-class hover at mouse-over, i.e. when the mouse is hovered over the buttons by a slight change of color.

### Interactive Elements
- Input element for username. The user cannot move forward to playing game without entering a username. 
- Buttons to choose which variable the user wants to play for each round.
- Button to return to game and play again. After completing the game, the user is presented with a return button to return to the game and play again and is automatically forwarded to the game section.
to-do:    A link to access the rules again, which open in a new window / OR blend rules in and out when clicked and then return to game button so that the game can resume.

### General Features of Each Page
- Landing page
- The landing page contains 
    - A welcome message 
    - Introduction of the game and its origin
    - Instructions on how to play the game
    - Game rules that establish the criteria for winning and the victor of each round.
    - Input field for username (pseudonym of user's choice) to display in a personalized message after user has completed the game. Efter entering a username within the limit of 10 charachters and clicking submit, the user it automatically forwared to the game section.
- The username is store with JavaScript local storage to display in a personalized message after game completion.
- The sections are displayed alternately to user according to a logical flow of a game website and the other sections are visibly hidden.
- A footer is not necessary.


2. Game Section
- This is the essence of the website, where user plays the game.
- Scoreboard displaying current scores of user and computer.
- Game buttons with user choices (predefined variables introduced in the game rules) to play the game.
- The user plays against the computer. The computer's choice is randomly generated.
- The game ends when one player, user or computer, has won 10 rounds, i.e. gained 10 scorepoints.

3. Game Completion Section
- Scoreboard displaying the end score of user. The end score is not always the same, since the computer can win, too.
- If user wins, a personalized message containing the username provided the landing page section to congratulate the user is displayed.
- If user loses, a personalized message to console the user to try again is displayed.
- Button to play the game again. The user returns directly to game section and skips the landing page for a better user experience. 



### Features Left to Implement
- Option to switch between ligt and dark mode.

## Accessibility 

## Technology Used

### Languages Used
- JavaScript
- HTML5
- CSS3

### Frameworks, Libraries and Programs Used
- [GitHub](https://github.com/) to store code files and deploy website.
- [Git](https://git-scm.com/) for version control.
- [Gitpod](https://www.gitpod.io/) as a Cloud Development Environment (CDE).
- [Google Chrome developer tools](https://developer.chrome.com/docs/devtools) to analize code, identify possible issues, temporarily edit code and test responsiveness on various sizes.
- [JSFiddle](https://jsfiddle.net/) to create and test JavaScript functions without affecting the actual code.
- [Code Institue template](https://github.com/Code-Institute-Org/gitpod-full-template) for Gitpod and this README.
- [Google AI language model](https://gemini.google.com/app) to find references for troubleshooting.
- [Google Fonts](https://fonts.google.com/).
- [Fontawesome](https://fontawesome.com/).
- Am I Responsive for mockup for this README.
- http://www.responsinator.com/ to show the website layout on various devices for this README.

- [Canva](Canva.com) to edit images for the website and this README
- [Balsamiq](https://balsamiq.com/wireframes/desktop/) to create wireframes and layout map of the website for this README.
- [Pixelied](https://pixelied.com/convert/jpg-converter/jpg-to-webp) to convert images from PNG to WEBP format.

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

| Bug                                                         | Description                                                                                                                                                                                                                                                                                                                          | Solution Applied                                                                                                                                                                                                                                                                                                                                                           | Result            |
|-------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|
| Submit username and enter game section.                     | Button **Submit Username and Play Game** not working: <br> - Username was not validated <br> - Event listener for username submission to enter the game section was not triggered.                                                                                                                                                   | Because submission was triggered before Javascript could process: <br> - Changed *input type=”submit”* to a *button* with attribute *type="button"* to submit the form using JavaScript to manage form submission (validate and store username in local storage; trigger display of the Game Section). | Partly Solved     |
| Button not focusable.                                       | Button **Submit Username and Play Game** not focusable using keyboard.                                                                                                                                                                                                                                                               | Changed button *type="button"* to *type=”submit”* to allow focus. <br> - Added a standard JavaScript function *event.preventDefault();* to event listener for form submission to prevent the default submission of form before JavaScript can manage form submission.                                                                                                      | Completely Solved |
| HTML *input* attribute *required* not consistently applied. | Form submission managed with JavaScript occasionally processed before HTML validation using attribute *required* could process and a username consisting of less than one character was submitted.                                                                                                                                   | Added an *OR* statement to JavaScript validation of username to handle all cases (less than 1 OR more than 10 characters).                                                                                                                                                                                                                                                 | Solved            |
| Retrieving username from local storage.                     | Username value was stored but not retrievable (neither displayed on website nor on console in Dev Tools). <br> - Variables to store object (method *setItem*) and retrieve  i.e. read (method *getItem*) the username value were being re-declared within a function.  <br> - Variable for stored username was a constant (*const*). | Moved variable with method *getItem* and display *textContent* in the DOM outside of the function and re-declared it on a global scope. <br> - Changed *const* to *let* (changeable) to update username value to the most recent stored value.                                                                                                                             | Solved            |

## Deployment and Local Development

### Deployment
The website was deployed using GitHub pages.

#### Deployment using GitHub pages
To deploy the repository:
- Log into GitHub and navigate to the [repository of this project](https://github.com/g-omarsdottir/rock-paper-scissors-lizard-spock-game).
- Navigate to settings of the repository on the top navigation menu.
- Navigate to Pages on the left sidebar navigation menu.
- In the section "Build and deployment”, go to Source and select "Deploy from a branch" from the navigation dropdown menu.
- In the section "Branch", select the following from the dropdown menus: "Main", "Root" and click "Save".
- The link to the deployed website will appear at the top of the section as soon as processed.
- The link is accessible from the main page of the depository on the right navigation menu under "Deployments".

### Local Development

#### Local Clone
To clone the repository:
- Log in to GitHub and navigate to the [repository of this project](https://github.com/g-omarsdottir/rock-paper-scissors-lizard-spock-game).
- Click on the green "Code" button to open dropdown menu, select "Clone with HTTPS, SSH or GitHub CLI" and copy the link provided.
- Open "Terminal" (or "Git Bash") in your code editor.
- Change the current working directory to the location where you want the cloned directory to be made.
- Type "git clone" in the terminal and then paste the URL copied on GitHub in step 2, above.
- Press "Enter" and your local clone will be created.

#### Fork
To fork the repository:
- Log in (or sign up) to Github.
- Navigate to the [repository of this project](https://github.com/g-omarsdottir/rock-paper-scissors-lizard-spock-game).
- Click the "Fork" button in the top right corner to open dropdown menu and select "Create a new fork".

## Credits
### Content
- [table-magic](https://stevecat.net/table-magic/) to create table for section [Bugs](#resolved-bugs) in this README.
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage ) for local storage, i.e. store and retrieve username value.
- [W3 schools](https://www.w3schools.com/jsref/prop_text_value.asp) for displaying username value in personalized user feedback.
- [Delay with setTimout()](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) to display the visual feedback of pushing submit and play button for improved UX.  
- [inclusive-components.design](https://inclusive-components.design/toggle-button/) for css style of a pressed button with 3D effect using box-shadow.
- [timonweb.com](randomly generated computer's choice: https://timonweb.com/javascript/how-to-get-a-random-value-from-a-javascript-array/) for randomly generated computer's choice.
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) for default behavior of HTML attribute *type"submit"* and overwrite this with *type="button"* to script event handlers in JavaScript. See [Bugs](#resolved-bugs) for details of possible complications using each attribute. 
- My friend Stephan Reich, Software Developer, for showing me a way to solve a bug using the standard JavaScript function *event.preventDefault();*. See [Bugs](#resolved-bugs) for details.

### Imagery
- [Favicon](https://www.freefavicon.com/freefavicons/icons/iconinfo/video-game-controller-icon-152-227918.html)
- Pixabay: by user [Benjamin Balazs](https://pixabay.com/photos/spock-star-trek-vulcan-1541528/) 
- Freeimages by users:
    - [sascha](https://www.freeimages.com/photo/lizard-1462478)
    - [kraaft](https://www.freeimages.com/photo/pebble-series-1-1517634)
    - [createsime](https://www.freeimages.com/photo/old-paper-1191767)
    - [PhotoObjects.net](https://www.freeimages.com/photo/stainless-steel-scissors-1940007)