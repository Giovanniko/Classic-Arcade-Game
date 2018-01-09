# Project Overview
You will be provided visual assets and a game loop engine; using these tools you must add a number of entities to the game including the player characters and enemies to recreate the classic arcade game Frogger.

## Why This Project?
Games have a lot of objects and those objects do a lot of different things; but sometimes they do some very similar things as well. This creates a great opportunity to practice object-oriented programming, an important programming paradigm that influences your application architecture and provides performance optimization.

## What Will I Learn?
You will learn JavaScript’s object oriented programming features to write eloquently designed classes capable of creating countless instances of similarly functioning objects. You will discover a variety of ways inheritance and delegation can be used to create well architected and performant applications.

## How Does This Help My Career?
* JavaScript enables the development of complex applications on the web.
* JavaScript runs on normal web browsers, which makes it one of the most accessible and flexible programming languages.
* Complex applications that must be “broken down” into simpler entities that manage their own properties and functionality

## How Do I Complete This Project?

1. If you need a refresher on [Object Oriented JavaScript](https://classroom.udacity.com/courses/ud015), review our course and [OOJS Notes](https://docs.google.com/document/d/1F9DY2TtWbI29KSEIot1WXRqqao7OCd7OOC2W3oubSmc/pub?embedded=true).
2. If you'd like a more detailed explanation as to how the game engine works, see our [HTML5 Canvas](https://www.udacity.com/course/ud292) course.
3. Read the detailed instructions for the project.
4. Download the [art assets and provided](https://github.com/udacity/frontend-nanodegree-arcade-game) game engine.
5. Review the video of the completed game below and take note of the game's rules.
6. Review the code and comments provided in `app.js`
7. Identify the various classes you will need to write.
8. Identify and code the properties each class must have to accomplish its tasks.
9. Write the functions that provide functionality to each of your class instances.
10. Review the project rubric to make sure your project is up to spec. For example make sure the functions you write are object-oriented - either class functions (like Player and Enemy) or class prototype functions such as `Enemy.prototype.checkCollisions`, and that the keyword 'this' is used appropriately within your class and class prototype functions. Also be sure that the `readme.md` file is updated with your instructions on both how to 1. Run and 2. Play your arcade game.

# Frogger Game Description
Your implementation must at minimum follow the basic functionality, but you can add additional optional functionality to your game, if you wish.

## Basic Functionality

In this game you have a Player and Enemies (Bugs). The goal of the player is to reach the water, without colliding into any one of the enemies. The player can move left, right, up and down. The enemies move in varying speeds on the paved block portion of the scene. Once a the player collides with an enemy, the game is reset and the player moves back to the start square. Once the player reaches the water the game is won.


## Additional Functionality

In addition to the basic functionality, you can add more cool functionality to your game. For example, here are some additional features that you can add:

* Player selection: allow the user to select the image for the player character before starting the game. You can use the different character images provided in the images folder (we’ll get to that below).
* Score: you can implement a score for the game. For example, the score can increase each time the player reaches the water, and it can be reset to 0 when collision occurs (or it can be reduced).
* Collectibles: you can add gems to the game, allowing the player to collect them to make the game more interesting.
* Anything else you like!

# Getting Started

You won’t have to build the game from scratch. We have provided the [art assets and game engine](https://www.google.com/url?q=https://github.com/udacity/frontend-nanodegree-arcade-game&sa=D&ust=1496438325981000&usg=AFQjCNHZChhjotWSnxbqtSYsHnkg_jEkog_) for you. You can download or clone them from our repository.

The repository contains css, images, and js folders, as well as an `index.html` and a `README.md` file. Once you have downloaded the files we have provided, you will have to edit `app.js` to build the game.

* The css folder contains a style.css file which you do not need to edit
* The images folder contains the png image files, which are used when displaying the game. The images for the player and enemy character are going to be loaded from this folder.
* The js folder also contains the app engine needed to run the game and a `resources.js` file. You do not need to edit these files.
* `index.html` - opening `index.html` should load the game
* `README.md` should contain instructions on how to load and play the game (you will need to add those instructions).

Inside the `app.js` file, you will need to implement the `player` and the `enemy` classes, using Object-Oriented JavaScript. Part of the code for the Enemy is provided to you, and you will need to complete the following:

* The Enemy function, which initiates the Enemy by:
    * Loading the image by setting `this.sprite` to the appropriate image in the image folder (already provided)
    * Setting the Enemy initial location (you need to implement)
    * Setting the Enemy speed (you need to implement)
    
* The update method for the Enemy
    * Updates the Enemy location (you need to implement)
    * Handles collision with the Player (you need to implement)
    
* You can add your own Enemy methods as needed

You will also need to implement the Player class, and you can use the Enemy class as an example on how to get started. At minimum you should implement the following:

* The Player function, which initiates the Player by:
    *Loading the image by setting `this.sprite` to the appropriate image in the image folder (use the code from the Enemy function as an example on how to do that)
    * Setting the Player initial location

* The update method for the Player (can be similar to the one for the Enemy)
* The render method for the Player (use the code from the render method for the Enemy)
* The handleInput method, which should receive user input, allowedKeys (the key which was pressed) and move the player according to that input. In particular:
    * Left key should move the player to the left, right key to the right, up should move the player up and down should move the player down.
    * Recall that the player cannot move off screen (so you will need to check for that and handle appropriately).
    * If the player reaches the water the game should be reset by moving the player back to the initial location (you can write a separate reset Player method to handle that).

* You can add your own Player methods as needed.

Once you have completed implementing the Player and Enemy, you should instantiate them by:

* Creating a new Player object
* Creating several new Enemies objects and placing them in an array called allEnemies

## Adding your own

If you would like you can add additional functionality to the game. You can add more code to the `app.js` file and to the Enemy and Player classes to accomplish that.

## Evaluation
Your project will be evaluated by a Udacity reviewer according to the [Classic Arcade Game Clone Rubric](https://review.udacity.com/#!/projects/2696458597/rubric). Be sure to review it thoroughly before you submit. All criteria must "meet specifications" in order to pass.