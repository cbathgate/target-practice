# Target Practice - React Challenge
Coding challenge in React

# Prerequisites 
Install [node.js](https://nodejs.org)
Install [Sass](http://sass-lang.com/install)

# Installing dependencies
In the project root, run `npm install`. 

# Working with Sass
If you want to edit any css, you can do so in styles/main.scss. You can either write in regular css, or in [Sass](http://sass-lang.com/). In order to process the Sass file into regular css, run the following command in your terminal once you have Sass properly installed: `sass --watch styles/main.scss:styles/bundle.css`

# User Stories

![Gif showing game run-through](/assets/target-practice.gif?raw=true "Target Practice Runthrough")

Build out the game using the following user stories. Use the gif above as a guide

- As a user, I would like to see a 5 x 5 board with arrows in it
- As a user, I would like to reset the board, so that every time I reset, each arrow in each square in rotated in a random different direction (up, down, right, left)
- As a user, I want to be able to click a square to set as my starting position
- As a user, when I hit reset, I would like the target to be on a random location on the board
- As a user, I want to move the marker in the direction of the arrow it’s on every time I hit play
- As a user, I want the game to tell me when I’m off the board
- As a user, I want the game to tell me when I’m in a cycle
- As a user, I only want to hit the play button once, and have the marker move until it either reaches the target, goes off the board, or is in a cycle
- As a user, I would like the ability to resize the board
- As a user, I would like to stop the marker movement

Prompt inspire by [https://github.com/wwlib/programming-challenge](https://github.com/wwlib/programming-challenge)