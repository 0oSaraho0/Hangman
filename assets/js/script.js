
//https://www.worldometers.info/geography/alphabetical-list-of-countries/ infor for countries
let geographyArray = ['Argentina','Bahamas','Cambodia','Denmark', 'Ethiopia','England','Finland','Guatemala','Haiti','Ireland','Indonesia','Japan','Kazakhstan','Lebanon','Madagascar','Mauritius','Mozambique','Norway','Oman','Paraguay','Portugal','Romania','Senegal','Seychelles','Spain','Scotland','Thailand','Togo','Turkey','Uruguay','Vietnam','Wales','Yemen','Zimbabwe'];
//https://www.thoughtco.com/glossary-of-mathematics-definitions-4070804 infor for maths terms
let mathsArray = ['Abacus','Algorithm','Array','Calculus','Cone','Decagon','Decimal','Diameter','Divide','Exponent','Formula','Fraction','Graph','Hexagon','Integer','Kilometer','Median','Multiply','Numerator','Octagon','Quadrant','Quotient','Radius','Ratio','Rectangle','Rhombus','Subtract','Tangent','Triangle','Variable','Volume','Unit'];
//https://www.yourschoolgames.com/taking-part/our-sports/  https://www.afpe.org.uk/physical-education/glossary-of-terms/
let pEArray = ['Agility','Balance','Cricket','Fitness','Flexibility','Dance','Rounders','Stallball','Shotput','Gymnastics','Archery','Football','Rugby','Hockey','Swimming','Javelin','Running','Aerobics','Muscles','Weights','Treadmill','Lacrosse','Netball','Basketball','Athletics','Tennis','Badminton','Judo','Squash','Vollyball'];
let secretWord = "";
let tries = 7;
let letter = [];


document.addEventListener("DOMContentLoaded",function() {
    let subjects = document.getElementsByClassName('subject');
    
    for (let subject of subjects) {
        subject.addEventListener('click',function() {
            let gameType = this.getAttribute('data-type');
            subjectType(gameType);
})


    }

function subjectType (theArray) {

    //https://css-tricks.com/snippets/javascript/select-random-item-array/

    let randomWord = theArray[Math.floor(Math.random()*theArray.length)];
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





