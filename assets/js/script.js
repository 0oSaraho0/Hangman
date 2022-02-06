//https://www.worldometers.info/geography/alphabetical-list-of-countries/ infor for countries
const geographyArray = ['Argentina', 'Bahamas', 'Cambodia', 'Denmark', 'Ethiopia', 'England', 'Finland', 'Guatemala', 'Haiti', 'Ireland', 'Indonesia', 'Japan', 'Kazakhstan', 'Lebanon', 'Madagascar', 'Mauritius', 'Mozambique', 'Norway', 'Oman', 'Paraguay', 'Portugal', 'Romania', 'Senegal', 'Seychelles', 'Spain', 'Scotland', 'Thailand', 'Togo', 'Turkey', 'Uruguay', 'Vietnam', 'Wales', 'Yemen', 'Zimbabwe'];
//https://www.thoughtco.com/glossary-of-mathematics-definitions-4070804 infor for maths terms
const mathsArray = ['Abacus', 'Algorithm', 'Array', 'Calculus', 'Cone', 'Decagon', 'Decimal', 'Diameter', 'Divide', 'Exponent', 'Formula', 'Fraction', 'Graph', 'Hexagon', 'Integer', 'Kilometer', 'Median', 'Multiply', 'Numerator', 'Octagon', 'Quadrant', 'Quotient', 'Radius', 'Ratio', 'Rectangle', 'Rhombus', 'Subtract', 'Tangent', 'Triangle', 'Variable', 'Volume', 'Unit'];
//https://www.yourschoolgames.com/taking-part/our-sports/  https://www.afpe.org.uk/physical-education/glossary-of-terms/
const pEArray = ['Agility', 'Balance', 'Cricket', 'Fitness', 'Flexibility', 'Dance', 'Rounders', 'Stallball', 'Shotput', 'Gymnastics', 'Archery', 'Football', 'Rugby', 'Hockey', 'Swimming', 'Javelin', 'Running', 'Aerobics', 'Muscles', 'Weights', 'Treadmill', 'Lacrosse', 'Netball', 'Basketball', 'Athletics', 'Tennis', 'Badminton', 'Judo', 'Squash', 'Vollyball'];

const rulesButton = document.getElementById('button-rules');
const rules = document.getElementsByClassName('rules')[0];
const choiceButtonsContainer = document.getElementsByClassName('subject-choice-screen')[0];

/**
 * toggles the hide class on hidden element
 * @param {HTMLElement} hiddenElement 
 */
function toggleHide(hiddenElement) {
    hiddenElement.classList.toggle('hide');
}

document.addEventListener("DOMContentLoaded", function () {
    rulesButton.addEventListener('click', function(){
        toggleHide(rules);
    });
    toggleHide(choiceButtonsContainer);
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
let word = [];

function displayWord(theArray) {
    let randomWord = theArray[Math.floor(Math.random() * theArray.length)];
    document.getElementById('word').innerHTML = "";
    word = randomWord.split('');
    console.log(word);

    for (let i = 0; i < randomWord.length; i++) {
        let newLetter = document.createElement('span');
        newLetter.setAttribute('class', 'hidden-word hidden-letter');
        newLetter.textContent = randomWord[i];
        document.getElementById('word').appendChild(newLetter);
    }
}

let guessedLetter = document.getElementById('letter-guess');
function checkLetter() {
    let lettersInputIntoBox = /^[a-zA-Z]/;
    if (guessedLetter.value.match(lettersInputIntoBox)) {
        return true;
    } else {
        alert('Please enter letters only.');
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
    console.log(letter);
    //clear the form  for the next guess
    form.reset();
    console.log(word.includes(letter));

    if (usedLetters.includes(letter)){
        return;
    }
this.errorsLeft = 10;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            document.getElementById('word').children[i].classList.remove('hidden-letter');
        } else {
            drawHangman();
        }
    }
    usedLetters.push(letter);

function drawHangman () {
    let hangman = document.getElementById('hangman');
    console.log(hangman)
}
});












    // TODO: Check answer here
    // remove all correctly guessed letter from the word array
/*   let guessedCorrectly = false;
    word = word.filter((l, i) => {
        
        let hiddenWord = document.getElementById('word');
        for (let l = 0; l < hiddenWord.length; l++) {
            if (guessedCorrectly === hiddenWord.length);
            guessedCorrectly
        }

        // if its a not correct letter, keep it
        if (l !== letter) {
            return l;
        }
        else {
            guessedCorrectly = true;
        }
    });

    console.log("The users guess was: " + guessedCorrectly)
*/





