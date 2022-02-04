

//https://www.worldometers.info/geography/alphabetical-list-of-countries/ infor for countries
let geographyArray = ['Argentina','Bahamas','Cambodia','Denmark', 'Ethiopia','England','Finland','Guatemala','Haiti','Ireland','Indonesia','Japan','Kazakhstan','Lebanon','Madagascar','Mauritius','Mozambique','Norway','Oman','Paraguay','Portugal','Romania','Senegal','Seychelles','Spain','Scotland','Thailand','Togo','Turkey','Uruguay','Vietnam','Wales','Yemen','Zimbabwe'];
//https://www.thoughtco.com/glossary-of-mathematics-definitions-4070804 infor for maths terms
let mathsArray = ['Abacus','Algorithm','Array','Calculus','Cone','Decagon','Decimal','Diameter','Divide','Exponent','Formula','Fraction','Graph','Hexagon','Integer','Kilometer','Median','Multiply','Numerator','Octagon','Quadrant','Quotient','Radius','Ratio','Rectangle','Rhombus','Subtract','Tangent','Triangle','Variable','Volume','Unit'];
//https://www.yourschoolgames.com/taking-part/our-sports/  https://www.afpe.org.uk/physical-education/glossary-of-terms/
let pEArray = ['Agility','Balance','Cricket','Fitness','Flexibility','Dance','Rounders','Stallball','Shotput','Gymnastics','Archery','Football','Rugby','Hockey','Swimming','Javelin','Running','Aerobics','Muscles','Weights','Treadmill','Lacrosse','Netball','Basketball','Athletics','Tennis','Badminton','Judo','Squash','Vollyball'];
/*
let secretWord = "";
let tries = 7;
let letter = [];

function screens () {
    let screenNames = ["subject-choice-screen","winner-screen","looser-screen"];
        for (let screenName of ScreenNames){
            toggleScreen(screenName(screenName === screen))   
        }
}


document.addEventListener("DOMContentLoaded",function() {
    let subjects = document.getElementsByClassName('subject-choice-screen');    
    for (let subject of subjects) {
        subjects.style.display = "block";
        subject.addEventListener('click',function() {
            let gameType = this.getAttribute('data-type');
            subjectType(gameType);
})


    }

function subjectType (theArray) {

    //https://css-tricks.com/snippets/javascript/select-random-item-array/

    let randomWord = theArray[Math.floor(Math.random()*theArray.length)];
    return theArray[randomWord];
// let randomGeography = geographyArray[Math.floor(Math.random()*geographyArray.length)];
// let randomMaths = mathsArray[Math.floor(Math.random()*mathsArray.length)];
// let randomPE = pEArray[Math.floor(Math.random()*pEArray.length)]; 

    let word = document.getElementsByClassName('letter');

    let single = randomWord.length;
    for (let i = 0; i < single; i++){

    word[0].innerHTML=randomWord[0];
    }
};

});

function correctLetter () {

}

function incorrectLetter () {

}

function playGeography () {

}

function playMaths () {

}

function playPE () {
}

*/
//https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
/*
function subjectType (theArray) {

    let randomWord = theArray[Math.floor(Math.random()*theArray.length)];
    return theArray[randomWord];
}
*/
let button = document.getElementById('button-rules');
let rules = document.getElementsByClassName('rules')[0];
let choiceButtonsContainer = document.getElementsByClassName('subject-choice-screen')[0];

function toggleHide () {
    rules.classList.toggle('hide');
}
function toggleHideTest (hiddenElement) {
    hiddenElement.classList.toggle('hide');
}

button.addEventListener('click', toggleHide);

document.addEventListener("DOMContentLoaded",function() {
    
        toggleHideTest(choiceButtonsContainer);
    });

function displayWord(theArray) {
    
    let randomWord = theArray[Math.floor(Math.random()*theArray.length)];
    

    document.getElementById('word').innerHTML = "";
    
    for (let i = 0; i < randomWord.length; i++){
        let newLetter = document.createElement('span');
        newLetter.setAttribute('class', 'hidden-word');
        newLetter.textContent = randomWord[i];
        document.getElementById('word').appendChild(newLetter);

    }
   // let guessWord = document.getElementById('word');
   // guessWord.innerText = randomWord;
}

function clickButton(e) {
    
    let category = (e.target.dataset.type);
    toggleHideTest(choiceButtonsContainer);
    if (category === "maths") {
        displayWord(mathsArray);
        console.log("woohoo im great");
    }else if (category === "pe"){
        displayWord(pEArray);
        console.log("pe is poo");
    }else if ( category === "geography"){ 
        displayWord(geographyArray);
        console.log('rocks and shiz');
    }


}
    //getting correct array


function pickSubject () {    
let picks = document.getElementsByClassName('subject');
    console.log(picks);
    for (let pick of picks){
        pick.addEventListener('click', clickButton);
    }
        /*
        if(this.getAttribute('data-type') === 'geography');
        runArray(geographyArray);
        
    }
*/
}

pickSubject();

function submit () {
    let submitLetter = document.getElementsByClassName('submit-buton')[0];
console.log(submitLetter);
    submitLetter.addEventListener('click', checkLetter);
}

submit();

function checkLetter () {
    let guessedLetter = document.getElementById('letter-guess');
    console.log(guessedLetter);

    let lettersInputIntoBox = /^[a-zA-Z]/;
   // console.log(lettersInputIntoBox)
        if (guessedLetter.value.match(lettersInputIntoBox)) {
            return true;
        }else {
            alert ('Please enter letters only.');
            return false;
        }
        if (guessedLetter.value.match(randomWord[i](displayWord)));
            return true;
        console.log(true);
        }
checkLetter();
