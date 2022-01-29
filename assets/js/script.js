//https://www.worldometers.info/geography/alphabetical-list-of-countries/ infor for countries
let geography = ['Argentina','Bahamas','Cambodia','Denmark', 'Ethiopia','England','Finland','Guatemala','Haiti','Ireland','Indonesia','Japan','Kazakhstan','Lebanon','Madagascar','Mauritius','Mozambique','Norway','Oman','Paraguay','Portugal','Romania','Senegal','Seychelles','Spain','Scotland','Thailand','Togo','Turkey','Uruguay','Vietnam','Wales','Yemen','Zimbabwe'];
//https://www.thoughtco.com/glossary-of-mathematics-definitions-4070804 infor for maths terms
let maths = ['Abacus','Algorithm','Array','Calculus','Cone','Decagon','Decimal','Diameter','Divide','Exponent','Formula','Fraction','Graph','Hexagon','Integer','Kilometer','Median','Multiply','Numerator','Octagon','Quadrant','Quotient','Radius','Ratio','Rectangle','Rhombus','Subtract','Tangent','Triangle','Variable','Volume','Unit'];
//https://www.yourschoolgames.com/taking-part/our-sports/  https://www.afpe.org.uk/physical-education/glossary-of-terms/
let pE = ['Agility','Balance','Cricket','Fitness','Flexibility','Dance','Rounders','Stallball','Shotput','Gymnastics','Archery','Football','Rugby','Hockey','Swimming','Javelin','Running','Aerobics','Muscles','Weights','Treadmill','Lacrosse','Netball','Basketball','Athletics','Tennis','Badminton','Judo','Squash','Vollyball'];


document.addEventListener("DOMContentLoaded",function() {
    let subjects = document.getElementsByClassName('subject');
    
    for (let subject of subjects) {
        subject.addEventListener('click',function() {
            let gameType = this.getAttribute('data-type');
            runGame(subjectType);
});

    }


function subjectType () {

    //https://css-tricks.com/snippets/javascript/select-random-item-array/

let randomGeography = geography[Math.floor(Math.random()*geography.length)];
let randomMaths = maths[Math.floor(Math.random()*maths.length)];
let randomPE = pE[Math.floor(Math.random()*pE.length)];

if (subjectType === geography) {
    let word = document.getElementsByClassName('letter');
    document.word.innerHTML=randomGeography;

};
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