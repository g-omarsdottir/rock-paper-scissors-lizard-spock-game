# Rock, Paper, Scissors, Lizard, Spock - Game

The game Rock, Paper, Scissors, Lizard, Spock, often referred to as the RPSLS-Game for short, is an online one-player game against the computer. It is much like the well-known classic game ["Rock, Paper, Scissors"](href="https://en.wikipedia.org/wiki/Rock_paper_scissors") game, but with a twist: 

Two exciting game variables have been added to the game, a *Lizard* and the renowned character *Spock*. 

This is an easy and enjoyable game that requires no previous knowledge and is played against the computer. The old classic game is often used in real life as a tiebreaker, like flipping a coin, when trivial decisions need to be made. Although the goal here is just to have fun, one might use the game result as inspirational help with decision making, like choosing between two equally appealing options for dinner.

![Mockup](/documentation/mockup.png)

[View the live project here.](https://g-omarsdottir.github.io/rock-paper-scissors-lizard-spock-game/)

### How to play the game:

Both players, the user and the computer, make their move simultaneously by choosing one of the five variables. The user chooses a variable by clicking on a button while the computer's choice is randomly generated. This makes it impossible for the user to develop a strategy to foresee the opponent’s choice based on his or her previous behavior. 

The rules are explained on the website in text form and as an illustration displaying which variable beats which. The winner of each round scores 1 point. It both players choose the same variable, it’s a tie and neither one gains a point.  After either one of the players, the user or the computer, has won 10 rounds, i.e. gained 10 points, the game is completed.

### Rules

![Rules](/documentation/rules.png)

### Origin of the Game

The RPSLS-Game was originally created by Sam Kass with Karen Brylan, who introduced two further variables into the game: a lizard and the character Spock from the renowned Star Trek media franchise. Being familiar with the character Spock is not necessary to be able to play and enjoy the game.

The game became quite popular after being broadcasted the TV sitcom [The Big Bang Theory](https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock).  

The game can also be played in person using hand gestures. The player's count to three and depict their choices simultaneously with hand gestures that represent the respective variable, e.g. a fist form a rock, the index and middle fingers form scissors, etc. The hand gestures are depicted on the buttons in the game section of the website. Being familiar with the character Spock certainly comes in handy here, since this particular hand gesture usually takes quite some practice to achieve.

## Table of Contents

- [Project and Site Owner Goals](#project-and-site-owner-goals)
- [User Experience](#user-experience)
- [Design](#design)
- [Features](#features)
- [Accessibility](#accessibility)
- [Technology Used](#technology-used)
- [Testing](#testing)
    - [Validator Testing](#validator-testing)
    - [Manual Testing](#manual-testing)
- [Bugs](#bugs)
- [Deployment and Local Development](#deployment-and-local-development-1)
    - [Deployment](#deployment-1)
    - [Local Development](#local-development-1)
- [Credits](#credits)

## Project and Site Owner Goals
- The goal is to create an easy and enjoyable game that requires no previous knowledge. Since the game is played against the computer, the user does not require a counterpart and can play whenever and wherever on all screen sizes, mobile and desktop devices.

## User Experience

### Target Audience
- People who enjoy playing online games. 
- People who don't have or do not wish to have a counterpart to play with.
- Fans of the sitcom The Big Bang Theory.
- Fans of the Star Trek franchise.

### First Time Visitors Goals
As a firs time user, 
- I can play a familiar game that introduces additional variables so I can enjoy learning new things without straining myself.
- I can easily understand and follow the simple rules of the game, even if without reading much text, since the rules are depicted as an illustration, too.
- I get instant positive feedback while playing the game because it doesn't require investing a lot of time to learn rules, to play the game or to develop a game strategy.
- I don’t have to organize an opponent player or even have friends to play the game because I’m playing against the computer.

### Returning Visitors Goals
As a returning visitor, 
- I enjoy getting detailed feedback of the game results and can enjoy the amusing characteristics of the two additional variables without having to read the rules again.
- I still find the game exciting because it's impossible to predict the computer's next move.

### Frequent Visitors Goals
As a frequent visitor, 
- I can play a familiar game to pass time in a fun way and/or to clear my head between long working sessions.
- I find it exciting to find out 
    - if it's possible to create a strategy to win the randomly generated play moves of the computer.
    - if it is indeed impossible to foresee the computer's next play move or if I can detect a pattern.

## Design
The game was designed for mobile devices with a minimum width of 320px first. The styles were then adjusted to larger mobile device screens, tablets and desktop screens. The game is responsive on all screen sizes. 

### Imagery
The buttons to play the game display an image of the variable they represent.  

### Color Scheme 
- The following color palette displays the colors used for this website. The colors were detected from the lizard and the Spock image used as choice buttons background.

    ![Color-palette](/documentation/colors.png)

- #F9F5C6 as background color. The color is easy on the eyes while ensuring excellent color contrast with the dark text color for readability web accessibility.
- #060A39 as font color and border color. The color was suggested on [Artyclick.com](https://colors.artyclick.com/color-shades-finder/?color=#F9F5C6) as a complementary color to the background color. The color provides excellent contrast for readability and web accessibility without being harsh on the eyes.
- #D9EE3E (transparent version) as background color for buttons to start game ('Submit Username & Play Game*; 'Play Again').
- #7B8246 (transparent version) for hover effect of buttons.
- #FFF as background of images for choice buttons.

### Color Contrast Check

Testing results of color contrast checks for readability and web accessibility:

- Font color for all text elements: #060A39 on main background color: #F9F5C6  

    [Link to Coolors Color Contrast Checker Report](https://coolors.co/contrast-checker/060a39-f9f5c6)

    ![Font color contrast report](/documentation/contrast-text.png)

- Font color #060A39 on background color to start game ('Submit Username & Play Game'; 'Play Again'): #

    [Link to Coolors Color Contrast Checker Report](https://coolors.co/contrast-checker/060a39-d9ee3e)

    ![Button color contrast report](/documentation/contrast-button.png)

### Fonts
Both font types were chosen after researching online, which fonts are popular to use in computer-games, while offering excellent readability for improved web accessibility.
- Play, sans-serif, were used for headings and buttons to play the game. The font has a fun computer-game like touch.
- Work Sans, sans-serif, was used for all other text.
- Fontawesome were applied for a playful touch and visually complement the game buttons, as well as the farewell greeting quoting the character Spock, displaying his signature hand sign.

### Layout

The website is a single page devided tino 3 sections: landing page section, game section, and completion of game section. The sections displayed alternately to the user according to a logical flow of a game website.
The website was designed first for mobile devices, i.e. smaller screens and the step wise progressed to large mobile devices, tablets, and desktops. Design was targeted and adapted to larger screens by applying CSS media queries. A quick search online gave a rough overview of which screen sizes are popular and which are no longer in use. 

Mobile Device
The choice buttons for the game variables are placed at the flex-bottom. The user can conveniently reach all buttons using the thumb while securely holding the mobile device in one hand.

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
- The website is responsive on all devices and screen sizes.
- The user lands on the landing page. 
- The Header is linked/anchored to the landing page, so the user can return to home at all times.
- The user does not have the option to navigate between the website sections, except for navigate to landing page by clicking the anchored header.

### Interactive Elements
- Input element for username. The user cannot move forward to playing game without entering a username. 
- The username must meet a criteria: consist of characters between one and 10
    - If the user enters an invalid username, the user is informed
        - Less than 1 character: alert 

        ![alert input-field](/documentation/alert-inputfield.png)
        - More than 10 characters: alert 
        
        ![alert invalid](/documentation/alert-invalid.png)
        - Input field is automatically cleared.
- Buttons to choose which variable the user wants to play for each round.
- Button to return to game and play again. After completing the game, the user is presented with a return button to return to the game and play again and is automatically forwarded to the game section, skipping the landing page and having to enter a username.
- Button to return to landing page and enter a new username.
- All buttons have a pseudo-class for active and hover to give users feedback when a button is pushed.
    - Hover/mouse-over, i.e. when the mouse curser hovers over the buttons:
        - Slight change of background color.
        - Cursor is a pointer, i.e. a hand.
        - Choice buttons additionally get a thicker border and larger font size.
    - Active: a box-shadow for 3D effect when button is pushed.

### General Features of Each Page
- Landing page
- The landing page contains 
    - A welcome message 
    - Introduction of the game and its origin
    - Instructions on how to play the game
    - Game rules that establish the criteria for winning and the victor of each round.
    - Input field for username (pseudonym of user's choice) to display in a personalized message after user has completed the game. After entering a username within the limit of 10 characters and clicking submit, the user it automatically forwarded to the game section.
- The username is store with JavaScript local storage to display in a personalized message after game completion.
- The sections are displayed alternately to user according to a logical flow of a game website and the other sections are visibly hidden.
- A footer is not necessary.

2. Game Section
- This is the essence of the website, where user plays the game.
- The user plays against the computer. The computer's choice is randomly generated.
- Scoreboard displaying two fields for the user and the computer
    - The user's chosen username
    - current score
    - the choice each player made, in case the user forgets which buttons was pushed
- A field for game results announcing the winner of the round and explanation why the choice won referencing the rules.
- Game buttons with user choices (predefined variables introduced in the game rules) to play the game.
- The game ends when one player, user or computer, has won 10 rounds, i.e. gained 10 score points.

3. Game Completion Section
- Scoreboard displaying the end score of the user. The end score is not always the same, since the computer can win, too.
- If user wins, a personalized message containing the username provided the landing page section to congratulate the user is displayed.
- If user loses, a personalized message to console the user to try again is displayed.
- Button to play the game again. The user returns directly to game section and skips the landing page for a better user experience. 
- Button to return to home, navigates to the landing page.
- A famous quote from the character Spock showing his signature hand gesture.

### Features Left to Implement
- Option to switch between ligt and dark mode.

## Accessibility 
Web Accessibility was ensured by:
- Using semantic HTML elements to structure the content of each section.
- Applying alternative text to the only image used, the illustration of the game rules.
- Thoroughly testing the website using a screen reader test all interactive elements using keyboard focus to improve user experience using assisting technology.
- Adding visibly hidden text for screen readers only for a structured overview of the game section and additional description where needed.
- This was necessary because some content is dynamically displayed using JavaScript and is not present from the beginning.
- To ensure the logical and undisturbed flow of the game, no alternative text was added for the background images of the choice buttons and the fontawesome icons depicting the hand gestures used when the game is played in person.
- The dynamic content was emphasized using `aria-live=”polite”`.
- The current scores were not attributed with `aria-live=”polite”` because this stirred the natural flow of the game.
- Formatting: the text was not justified to ensure readability for persons with reading disorders.
- The colors for background and text were chosen for maximum readability and tested with color contrast checker.
- The username form to submit the username has the appropriate label. 
- The website was tested with an accessibility validator.

## Technology Used

### Languages Used
- JavaScript
- HTML5
- CSS3

### Frameworks, Libraries and Programs Used
- [GitHub](https://github.com/) to store code files and deploy website.
- [Git](https://git-scm.com/) for version control.
- [Gitpod](https://www.gitpod.io/) as a Cloud Development Environment (CDE).
- [Google Chrome developer tools](https://developer.chrome.com/docs/devtools) to analyze code, identify possible issues, temporarily edit code and test responsiveness on various sizes.
- [JSFiddle](https://jsfiddle.net/) to create and test JavaScript functions without affecting the actual code.
- [Code Institue template](https://github.com/Code-Institute-Org/gitpod-full-template) for Gitpod and this README.
- [Diffchecker.com](https://www.diffchecker.com/) to compare versions for troubleshooting.
- [Google AI language model](https://gemini.google.com/app) to find references for troubleshooting.
- [Google Fonts](https://fonts.google.com/).
- [Fontawesome](https://fontawesome.com/).
- Am I Responsive for mockup for this README.
- http://www.responsinator.com/ to show the website layout on various devices for this README.
- [Optimizilla](https://imagecompressor.com/) to optimize image size.   
- [Canva](Canva.com) to edit images and create the rules illustration for the website and this README.
- [Balsamiq](https://balsamiq.com/wireframes/desktop/) to create wireframes and layout map of the website for this README.
- [Pixelied](https://pixelied.com/convert/jpg-converter/jpg-to-webp) to convert images from PNG to WEBP format.
- [ArtyClick](https://colors.artyclick.com/color-name-finder/) to detect colors from images for color palette.
- [Coolors](https://coolors.co/) contrast checker.
- [iColorpalette](https://icolorpalette.com/) to create color palette.
- [table-magic](https://stevecat.net/table-magic/) to create table for section [Bugs](#resolved-bugs) in this README.

## Testing
### Validator Testing
#### HTML

The HTML passed through the official W3C Markup Validator without errors: [W3C Validator Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fg-omarsdottir.github.io%2Frock-paper-scissors-lizard-spock-game%2F)

![html-validator-results](/documentation/html-validator.png)

#### CSS 

The CSS passed through the official W3C CSS Validator without erros: [W3C CSS Validator Results](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fg-omarsdottir.github.io%2Frock-paper-scissors-lizard-spock-game%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

![css-validator-results](/documentation/css-validator.png)

#### JavaScript

The JavaScript passed through the JSHint Validator without errors:

![javascript-validator](/documentation/javascript-validator.png)

#### Lighthouse Report

- Desktop analysis

    ![lighthouse-report-desktop](/documentation/lighthouse-desktop.png)

- Mobile devices analysis

    ![lighthouse-report-mobile](/documentation/lighthouse-mobile.png)

#### WAVE Web Accessibility Evaluation Tool


### Manual Testing

| Feature                | Test case                                                                        | Outcome                                                                                                  |
|------------------------|----------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| Heading anchor element | Click on heading                                                                 | Navigates to landing page                                                                                |
| Link                   | Click on Link *Rock Paper Scissors game*                                         | Link opens in a new window: Wikipedia article about the original game                                    |
| Link                   | Click on link  *the TV sitcom The Big Bang Theory*                               | Link opens in a new window: Fandom article about the origin and history of the game                      |
| Username input field   | Submit invalid username: more than 10 characters                                 | Browser alert informing the user that the username is invalid and shows the criteria of a valid username |
| Username input field   | Submit with empty field                                                          | Form alert is displayed and form submission prevented                                                    |
| Submit button          | Submit valid username                                                            | Navigates to game section                                                                                |
| Buttons                | Click choice buttons                                                             | Result message displayed                                                                                 |
| Buttons                | Click choice buttons                                                             | Scores incremented                                                                                       |
| Button Play Again      | Click button                                                                     | user navigates to game section                                                                           |
| Button Return to Home  | user navigates to landing page section                                           |                                                                                                          |
| Screen reader          | Perform all aforementioned tests using screen reader                              | Add attributes to improve use with assisting technology (see section [accessibility](#accessibility))                      |
| Use keyboard control   | Use tab key to navigate between links (header - articles - username input field) | successful                                                                                               |
| Use Keyboard control   | Open links using enter key                                                       | successful                                                                                               |
| Use Keyboard control   | Submit username using enter key                                                  | successful                                                                                               |
| Use Keyboard control   | Close browser alert window using enter key                                       | successful                                                                                               |
| Use keyboard control   | Activate link in header to navigate to landing page using enter key              | Successful                                                                                               |
| Use keyboard control   | Press choice buttons using enter key `type=”button”` was missing                 | Successful after adding attribute                                                                        |
| Use keyboard control   | Press buttons on completed section *Play Again* and *Return to Home*             | successful                                                                                               |
| Pseudo-class hover     | Test hover effect on desktop version                                             | successful                                                                                               |
| Pseudo-class           | active Test active effect on buttons on desktop and mobile version               | successful                                                                                               |

#### Testing User Stories

- The game was tested by friends and family on various mobile devices, iPhone and Android, and desktop using Windows, iOS. 
- No issues were reported.

- #### Full Testing

## Bugs

### Known Bugs



### Resolved Bugs

| Bug                                     | Description                | Solution Applied                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Result |
|-----------------------------------------|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|
| Submit username and enter game section.    | Invalid username submitted | Because submission was triggered before Javascript could process: Changed `<input type="submit">` to a `<button>` with attribute `type="button"` to submit the form using JavaScript to manage form submission (validate and store username in local storage; trigger display of the Game Section).| Solved 
|Button not focusable.   | Button **Submit Username and Play Game** not focusable using keyboard.| Changed button `type="button"` to `type=”submit"` to allow focus. | Solved
|Invalid username submitted.  | `type=”submit"` caused invalid username to be submitted.  | Added a standard JavaScript function `event.preventDefault();` to event listener for `<form>` submission to prevent the default submission of `<form>`  before JavaScript can manage form submission.| Solved
|HTML `input` attribute `required` not consistently applied.| Form submission managed with JavaScript occasionally processed before HTML validation using attribute `required` could process and the form was submitted with an empty input field.| Added an `OR` statement to JavaScript validation of username to handle all cases (less than 1 OR more than 10 characters).| Solved
|Local storage | The value of the username was not the most recent value.| Moved the method (method `getItem`) from global to local scope (moved to function playGame()) to ensure a logical order of storing (method `setItem`) and retrieving  the username (method `getItem`).| Solved

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