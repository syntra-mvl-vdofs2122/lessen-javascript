// naming conventions
let camelCase = 'test';
const SCREAMING_CASE = 'test';

// logging to console
console.log(camelCase);

// documentation
// https://developer.mozilla.org/en-US/

// primitive data types
// boolean
let bool = true;
let otherBool = false;

// number
let aNumber = 12;
let otherNumber = 1.1;

// string
let aString = 'iets';

// null
let nullVal = null;

// undefined
let undefinedVal = undefined;
let otherUndefined;

//check type
console.log(typeof aNumber);

// type coercion

// variables
// let
let aVariable = 'test';
// const
const A_CONST = 'test';

// functions
function aFunction(aParameter) {
    // do something
    let double = aParameter * 2;

    return double;

    // return aParameter * 2;
}

let returnVal = aFunction(2);
console.log(returnVal);

function helloName(name) {
    console.log('Hello ' + name);
}

helloName('Korneel');

// alert
// alert('Hello World');

// prompt
// let yourName = prompt('What is your name?');
// console.log(yourName);

function helloNamePrompt() {
    let yourName = prompt('What is your name?');
    console.log(yourName);
    alert('Hello ' + yourName);
}

// helloNamePrompt();

// Strings

let someString = 'Hier Kan Je Tekst Kwijt';
let someMoreString = 'Hier ook';

//length
console.log(someString.length);

// toUpperCase()
console.log(someString.toUpperCase());

// toLowerCase()
console.log(someString.toLowerCase());

// substring()

function getIerKan() {
    return someString.substring(1, 8);
}

console.log(getIerKan());

// get character on index
console.log(someString[5]);

// concatenate strings
console.log(someString + ' ' + someMoreString);

console.log(12 + '2');
// > '122'

console.log(12 + 4 + '6');
// > '166'

someMoreString += ' nog wat tekst';
// someMoreString = someMoreString + ' nog wat tekst';
console.log(someMoreString);

// template literals
let aTemplateLiteral = `Test 123
test 456
test 789`;

let templateString = 'Template';
let helloTemplate = `Hello ${templateString}`;

console.log(helloTemplate);

function helloFullNamePrompt() {
    let firstName = prompt('What is your first name?');
    let lastName = prompt('What is your last name?');

    alert('Hello ' + firstName + ' ' + lastName);
}

// ooMbeu > Oombeu
function capitalize(text) {
    let firstLetter = text[0];
    let firstLetterUpper = firstLetter.toUpperCase();
    let otherLetters = text.substring(1);
    let otherLettersLower = otherLetters.toLowerCase();

    return firstLetterUpper + otherLettersLower;

    // return text[0].toUpperCase() + text.substring(1).toLowerCase();
}

function helloFullNamePromptCapitalized() {
    let firstName = prompt('What is your first name?');
    let firstNameCapitalized = capitalize(firstName);
    let lastName = prompt('What is your last name?');
    let lastNameCapitalized = capitalize(lastName);

    alert('Hello ' + firstNameCapitalized + ' ' + lastNameCapitalized);
}

// Boom > oomB
function firstLast(word) {
    let firstLetter = word[0];
    let otherLetters = word.substring(1);

    return otherLetters + firstLetter;
}

// Boom > mBoo
function lastFirst(word) {
    let lastLetter = word[word.length - 1];
    let otherLetters = word.substring(0, word.length - 1);

    return lastLetter + otherLetters;
}

// Boom > mooB
function lastFirstLast(word) {
    let firstLetter = word[0];
    let lastLetter = word[word.length - 1];
    let otherLetters = word.substring(1, word.length - 1);

    return lastLetter + otherLetters + firstLetter;
}

// 'Een lange string'
// 5
// > 'Een l...'
function ellipser(sentence, length) {
    let shortSentence = sentence.substring(0, length);
    return shortSentence + '...';
}

console.log(ellipser('Een lange string', 5));
