

# Old Skool Hangman

![Meda Screens](assets/images/meda-screens.png)


[Old Skool Hangman Live Site](https://0osaraho0.github.io/Hangman//)

# Table of Contents

- [About](#about)
- [User Experience (UX)](#user-experience--ux-)
- [Wireframes](#wireframes)
  * [Colour Schemes](#colour-schemes)
  * [Typography](#typography)
  * [Imagery](#imagery)
- [Features](#features)
  * [Existing Features](#existing-features)
  * [Features left to implement](#features-left-to-implement)
- [Existing Bugs](#existing-bugs)
- [Fixed bugs.](#fixed-bugs)
- [Testing](#testing)
  * [Wave Test](#wave-test)
  * [Jigsaw test](#jigsaw-test)
  * [Lighthouse Tests](#lighthouse-tests)
  * [Nu Html Checker](#nu-html-checker)
- [References and Acknowledgments](#references-and-acknowledgments)
- [Technologies Used](#technologies-used)
- [Deployment](#deployment)
- [Personal Devlopment](#personal-devlopment)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>


# About

This is an interactive game based on the original style of hangman. I have taken a school theme with  similar to subjects learnt in school.  It is designed as if it is been played on an old school chalk board.  The user picks a subject from the 3 choices at the begining of the game and picks letters to guess a hidden word related to that subject.  Hopefully saving the hangman and guessing the word correctly.  the user has 1o tries to win the game and save the stickman from being hung.


# User Experience (UX)

## Initial Concept

The idea for this game is to create an online version of the pen and paper game hangman.  I have decided to keep to the original theme of hanging the stick man.  Giving it the name 'Old Skool Hangman' I have played on the idea that this is the original 'old school' version with a back to school theme played on a virtual blackboard.

I have used javascript, CSS and HTML to create this game.

The game is targeted at adults who might rememeber playing hangman at school as a child and want to spend a few minutes of their day taking their mind of other things testing their knowlege guessing words related to subjects taught in school.

The game could be easily addapted with different subject choices by changing the random words to be guessed.

## Site Goals

- To provide a fun game that is to navigate and intuative to use.
- To be interactive and fun to play.
- To be fully responsive on all devices.
- To provide a choice of subjects for the user to choose from.

## User Goals

The site will be based on the following user needs.

- I want the site to be easy to use.
- I want the game to be chalenging.
- I want the each game to only take a few minutes so I can play over my morning coffee or during a lunch break.
- I want the game to be similar to how i played as a child to gain a feeling of nostalga.

# Wireframes

I drew my wireframes using Balsamiq.

![Large Screen Wireframe](assets/images/wireframe-large-screen.png)
![Small Screen Wireframe](assets/images/wireframe-small-screen.png)

---

## Colour Schemes

I went for a simple colour scheme.  

I wanted the game to look like it was being played on an old blackboard as part of the back to school theme. 

I chose #406343 for the background because it is the colour of an old chalk board.

![#406343](assets/images/board-colour.png)

For the text colour I chose #FAEDF0 because it looks like chalk writing on the board.

![#FAEDF0](assets/images/text-colour.png)

I have used #663300 because it looks like a wooden frame surrounding the chalkboard.

![#663300](assets/images/border-brown.png)

------

## Typography
for this website i chose the font 'finger-paint' for all of the text.  I chose this because it has the look and feel of handwriting on a chalkboard.  This will help provide that feeling of nostalga at being back at school.
---

## Imagery

For the image of the Hangman I went for a simple stickman image just like it would have been drawn when playing as a kid.  The image is made out of separate divs and spans so that they can appear separately as the game is played.

![Hangman](assets/images/hangman-figure.png)

The main game board is made to look like a chalk board that the game is being played on.

![Blackboard](assets/images/gameboard-and-title.png)

---

# Features

## Existing Features

The title Old Skool Hangman writting in 'finger paint' font that conveys handwriting on a chalkboard.

![Blackboard](assets/images/gameboard-and-title.png)

The subject choice screen appears first advising the player to 'pick a subject.  When the player hovers over the subject hey show a negative image button that can be clicked.  This gives the user a clear idea that they can click that choice.

![Subject Choice Screen](assets/images/subject-choice-screen.png)

---

## Features left to implement


# Existing bugs
 I noticed that it was possible to input a blank space on the game and it would give give a false value and loose a life.  I tried to fix it by putting a min length of 1 onthe input box but this didn't work.  i will need to look into this further.


 the hidden word currently accpets capital and lower case letters as different guesses. it also does not accept the furst letter of each word as correct unless it is a capital

i fixed part of this problem but adding the code below.  this ensures only lower case letters are entered into the hidden word.

 for (let i = 0; i < randomWord.length; i++) {
        let currentWord = randomWord.toLowerCase();
        let newLetter = document.createElement('span');
        
        however this did not fix the problem as the initial letter was still only letting a capital letter be input.  i have now fixed the problem with the following code.  it turned out the .toLowerCase() was being added after i had split the word so it needed to be added a little earlier when the word taken from the array.

 function displayWord(theArray) {
    let randomWord = theArray[Math.floor(Math.random() * theArray.length)].toLowerCase();
    document.getElementById('word').innerHTML = "";


        bug with mobiles. the keypad wants to input every letter as a capital but the word ony accepts lower case letters.  it is annoying having to switch it to lower case every time you enter a letter.

        but with letters.  you can hightlight the word to cheat.
# Fixed bugs
 

---

# Testing



## Wave Test




---

## Jigsaw test



---

## Lighthouse Tests



---

##  Nu Html Checker



---

# References and Acknowledgments



# Technologies Used

- Balsamiq wireframes were used to create my wireframes
- [Color Hunt] (https://colorhunt.co/) was used to help find my colour scheme
- Chrome Dev Tools was used to modify website once the main structure was in.
- [https://wave.webaim.org/] was used to check the accessibility of my site
- [https://jigsaw.w3.org/css-validator/] was used to check the css on my site.
- [https://web.dev/measure/] was used to check the UX and performance of my site
- [https://validator.w3.org/] was used to check the html on my website.
-https://ecotrust-canada.github.io/markdown-toc/ to make my contents links.

# Deployment  - make sure you update this with new pics

- My website was deployed to GitHub Pages 
- First go to the GitHub repository and select settings
![GitHub Settings](assets/images/github-settings.png).
- Then scroll down to the GitHub pages section and click the link.
![GitHub Pages](assets/images/github-pages.png)
- Then click on the dropdown box below source and pick Branch Main and, indicated in the red circle and click save.
- You will then be deployed, your web address will show in the green banner, in the blue circle.
![GitHub Pages 2](assets/images/github-pages2.png).
- It can take a couple of minutes for your website to deploy.



# Personal Devlopment

