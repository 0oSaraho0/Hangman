// Subject Arrays
const geographyArray = ['Atlas', 'Bahamas', 'Continent', 'Denmark', 'Ethiopia', 'England', 'Equator', 'Finland', 'Guatemala', 'Globe', 'Haiti', 'Hemisphere', 'Ireland', 'Indonesia', 'Japan', 'Kazakhstan', 'Lebanon', 'Longitude', 'Latitude', 'Madagascar', 'Mozambique', 'Mountain', 'Meridian', 'Map', 'Norway', 'Oman', 'Paraguay', 'Portugal', 'River', 'Romania', 'Senegal', 'Seychelles', 'Scotland', 'Tributary', 'Topography', 'Thailand', 'Togo', 'Turkey', 'Uruguay', 'Vietnam', 'Wales', 'Yemen', 'Zimbabwe'];
const mathsArray = ['Abacus', 'Algorithm', 'Array', 'Calculus', 'Cone', 'Decagon', 'Decimal', 'Diameter', 'Divide', 'Exponent', 'Formula', 'Fraction', 'Graph', 'Hexagon', 'Integer', 'Kilometer', 'Median', 'Multiply', 'Numerator', 'Octagon', 'Quadrant', 'Quotient', 'Radius', 'Ratio', 'Rectangle', 'Rhombus', 'Subtract', 'Tangent', 'Triangle', 'Variable', 'Volume', 'Unit'];
const pEArray = ['Agility', 'Balance', 'Cricket', 'Fitness', 'Flexibility', 'Dance', 'Rounders', 'Stallball', 'Shotput', 'Gymnastics', 'Archery', 'Football', 'Rugby', 'Hockey', 'Swimming', 'Javelin', 'Running', 'Aerobics', 'Muscles', 'Weights', 'Treadmill', 'Lacrosse', 'Netball', 'Basketball', 'Athletics', 'Tennis', 'Badminton', 'Judo', 'Squash', 'Vollyball'];
//Global attributes
const rulesButton = document.getElementById('button-rules');
const rules = document.getElementsByClassName('rules')[0];
const choiceButtonsContainer = document.getElementsByClassName('subject-choice-screen')[0];
const outsideSubjectButton = document.getElementById('subject-choice-button');
let guessedLetter = document.getElementById('letter-guess');
let wrongCount = 0;
let word = [];
let guessedLetters = [];

/**
 * toggles the hide class on hidden element
 * @param {HTMLElement} hiddenElement 
 */
function toggleHide(hiddenElement) {
    hiddenElement.classList.toggle('hide');
}
// loads subject choices when DOM loads.
document.addEventListener("DOMContentLoaded", function () {
    rulesButton.addEventListener('click', function () {
        toggleHide(rules);
    });
    toggleHide(choiceButtonsContainer);
    outsideSubjectButton.addEventListener('click', function () {
        toggleHide(choiceButtonsContainer);
    });

});

/**
 *Hides choice buttons and plays chosen category.
 * @param {Event} e 
 */
function clickButton(e) {
    let category = (e.target.dataset.type);
    toggleHide(choiceButtonsContainer);
    if (category === "maths") {
        displayWord(mathsArray);
    } else if (category === "pe") {
        displayWord(pEArray);
    } else if (category === "geography") {
        displayWord(geographyArray);
    }
}

/**
 * adds event listner to click selected subject
 * :@param
 */
function pickSubject() {
    let picks = document.getElementsByClassName('subject');
    for (let pick of picks) {
        pick.addEventListener('click', clickButton);
    }
}
pickSubject();

// picks random word from the subject array and inputs it into separate spans in the html as a hidden word.  
function displayWord(theArray) {
    let randomWord = theArray[Math.floor(Math.random() * theArray.length)].toLowerCase();
    document.getElementById('word').innerHTML = "";
    word = randomWord.split('');
    guessedLetters = randomWord.split('');

    for (let i = 0; i < randomWord.length; i++) {
        let newLetter = document.createElement('span');
        newLetter.setAttribute('class', 'hidden-word hidden-letter');
        newLetter.textContent = randomWord[i];
        document.getElementById('word').appendChild(newLetter);
    }
}

// check letter is a letter and not a number.
function checkLetter() {
    let lettersInputIntoBox = /^[a-zA-Z]/;
    if (guessedLetter.value.match(lettersInputIntoBox)) {
        return true;
    } else {
        return false;
    }
}
checkLetter();

const form = document.querySelector('#form');
const usedLetters = [];

// listen to submit event
form.addEventListener('submit', function (event) {
//stop form from reloading the page    
    event.preventDefault();
//get the input letter
    const letter = event.target.letterInput.value;
//clear the form  for the next guess
    form.reset();
//Stops letters that are accidently entered twice to cause a life to be lost.
    if (usedLetters.includes(letter)) {
        return;
    }
/**adds the entered letters into teh used letters arrah and them adds them to the inner HTML to be seen
 * during game play */   
    usedLetters.push(letter);
    document.getElementById('used-letters-box').innerHTML += letter;
//checks if the input letter is in the hidden word and removes the class 'hidden-letter' if it is
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            document.getElementById('word').children[i].classList.remove('hidden-letter');
        }
    }
/*draws part of hangman when incorrect letter is entered, adds one to wrongCount and filters the correct
letters from the word to calculate the win*/
    if (!word.includes(letter)) {
        ++wrongCount;
        drawHangman();
    } else if (word.includes(letter)) {
        guessedLetters = guessedLetters.filter(element => element !== letter);
    }
    if (guessedLetters.length === 0) {
        gameWin();
    }

// Displays the hangman pieces on each wrong entry and runs gameover() when wrongCount = 10
    function drawHangman() {
        let hangmanPieces = document.querySelectorAll('.life');
        for (let j = 0; j < wrongCount; j++) {
            hangmanPieces[j].style.display = 'block';
        }
    }
    if (wrongCount === 10) {
        gameOver();
    }
});
// displays loser screen and disables letter input box when the game is lost.
function gameOver() {
    let loser = document.getElementById('loser-screen');
    loser.classList.toggle('hide');
    guessedLetter.disabled = 'true';
}
//displays winner screen and disables letter input box when the game is won.
function gameWin() {
    let winner = document.getElementById('winner-screen');
    winner.classList.toggle('hide');
    guessedLetter.disabled = 'true';
}