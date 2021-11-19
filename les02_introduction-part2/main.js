let aVariable = 'test';
const aConst = 'test';

function aFunction(aParam) {
    // we doen iets
    return 'iets';
}

// alert('Hello');
// let val = prompt('Hello?');

aVariable.length;
console.log(aVariable[1]); // > e

let someString = 'een lange zin';
console.log(someString.substring(10)); // > zin
console.log(someString.substring(0, 3)); // > een

console.log(someString + aVariable);

let aTempLit = `multi line

${someString}`;

// CONDITIONS

let aNum = 12;
let aNumString = '12';

console.log(aNum == aNumString);
console.log(aNum === aNumString);

console.log(aNum != aNumString);
console.log(aNum !== aNumString);

// < <= > >=

if (aNum >= aNumString) {
    console.log('test');
}

if (0) {
    console.log('true');
} else {
    console.log('false');
}

if (-55) {
    console.log('true');
}

if ('') {
    console.log('true');
} else {
    console.log('false');
}

if ('iets') {
    console.log('true');
}

if (0) {
    console.log('true');
} else if (1) {
    console.log('nu wel true');
}

// AND en OR

if ('iets' && 'iets anders') {
    console.log('true');
}

if ('' || 'iets') {
    console.log('true');
}

// OEFENINGEN CONDITIONS

// 'Een lange string'
// 5
// > 'Een l...'
// 'Kort'
// 7
// > 'Kort'
function ellipser(sentence, length) {
    if (sentence.length <= length) {
        return sentence;
    } else {
        let shortSentence = sentence.substring(0, length);
        return shortSentence + '...';
    }
}

console.log(ellipser('Een lange string', 5));
console.log(ellipser('Kort', 6));

// prompt for name
// if name is longer than 6 > alert '[name] is a long name'
// if name is shorter than 7 > alert '[name] is a short name'
function longNameOrNot() {
    let name = prompt('What is your name?');

    if (name.length >= 7) {
        alert(name + ' is a long name');
    } else {
        alert(name + ' is a short name');
    }

    // if (name.length >= 7) {
    //     return alert(name + ' is a long name');
    // }
    //
    // return alert(name + ' is a short name');
}

function capitalize(text) {
    return text[0].toUpperCase() + text.substring(1).toLowerCase();
}
/**
 * Check is word is capitalized
 * @param {string} word
 * @return {boolean}
 */
function isCapitalized(word) {
    // if (word === capitalize(word)) {
    //     return true;
    // } else {
    //     return false;
    // }

    return word === capitalize(word);
}

console.log(isCapitalized('Korneel')); // true
console.log(isCapitalized('kOrneel')); // false
console.log(isCapitalized('KOrneel')); // false
// console.log(isCapitalized(12));

/**
 * Prompt for name
 * Alert 'Hello [name]' only if the name is capitalized and longer than 6 letters
 * If the name is not capitalized alert 'Learn to type'
 * If the name is too short alert 'Your name is way too short'
 */
function pickyHelloName() {
    let name = prompt('What is your name?');

    if (!isCapitalized(name)) {
        alert('Learn to type');
    } else if (name.length < 7) {
        alert('Your name is way too short');
    } else {
        alert('Hello ' + name);
    }

    // if (!isCapitalized(name)) {
    //     return alert('Learn to type');
    // }
    //
    // if (name.length < 7) {
    //     return alert('Your name is way too short');
    // }
    //
    // return alert('Hello ' + name);
}

// NUMBERS

let someNumber = 123;
let otherString = '678';

// convert to string
console.log(someNumber.toString(10));
console.log(someNumber + '');

console.log(parseInt(otherString));
console.log(parseInt('123.55'));
console.log(parseFloat('456.77'));
console.log(parseInt('test'));

// NaN
let aNan = NaN;

console.log(parseInt('test') === NaN);
console.log(Number.isNaN(parseInt('test')));

console.log(Infinity);
console.log(-Infinity);
console.log(100 / 0);

// Bewerkingen

console.log(1 + 2); // > 3
console.log(4 - 2); // > 2
console.log(3 * 5); // > 15
console.log(6 / 2); // > 3
console.log(15 % 4); // > 3

someNumber += 5; // someNumber = someNumber + 5;
someNumber *= 5; // someNumber = someNumber * 5;
someNumber -= 5; // someNumber = someNumber - 5;
someNumber /= 5; // someNumber = someNumber / 5;
someNumber %= 5; // someNumber = someNumber % 5;

// Random numbers
console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 11)); // random getal tussen 0 en 10

// Math.floor()
// Math.ceil()

// OEFENINGEN NUMBERS

/**
 * Calculate sum of numOne and numTwo
 * @param {number} numOne
 * @param {number} numTwo
 * @return {number}
 */
function sum(numOne, numTwo) {
    return numOne + numTwo;
}

/**
 * Check if num is odd or even
 * @param {number} num
 * @return {'odd' | 'even'}
 */
function oddOrEven(num) {}

/**
 * Check if num is divisible by div
 * @param {number} num
 * @param {number} div
 * @return {boolean}
 */
function isDivisible(num, div) {}

/**
 * Calculate square of numOne
 * @param {number} numOne
 * @return {number}
 */
function square(numOne) {}

/**
 * Return the lowest number
 * @param {number} numOne
 * @param {number} numTwo
 * @param {number} numThree
 * @return {number}
 */
function min(numOne, numTwo, numThree) {}

/**
 * Return the highest number
 * @param {number} numOne
 * @param {number} numTwo
 * @param {number} numThree
 * @return {number}
 */
function max(numOne, numTwo, numThree) {}

/**
 * Perform the given operation on the two numbers
 * @param {'sum' | 'divide' | 'product' | 'subtract' } opp
 * @param {number} numOne
 * @param {number} numTwo
 * @return {number}
 */
function calculate(opp, numOne, numTwo) {}

/**
 * Generate a random number between 0 and 10
 * Prompt for a number
 *    > if number is same as random number alert 'You win'
 *    > if number is higher alert: 'Too high'
 *    > if number is lower alert: 'Too low'
 */
function guessNumber() {}
