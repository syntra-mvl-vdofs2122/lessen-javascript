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
function oddOrEven(num) {
    if (num % 2 === 0) {
        return 'even';
    }

    return 'odd';

    // if (num % 2) {
    //     return 'odd';
    // }
    //
    // return 'even';
}

/**
 * Check if num is divisible by div
 * @param {number} num
 * @param {number} div
 * @return {boolean}
 */
function isDivisible(num, div) {
    return num % div === 0;
}

/**
 * Calculate square of numOne
 * @param {number} numOne
 * @return {number}
 */
function square(numOne) {
    return numOne * numOne;
    // return numOne ** 2;
}

/**
 * Return the lowest number
 * @param {number} numOne
 * @param {number} numTwo
 * @param {number} numThree
 * @return {number}
 */
function min(numOne, numTwo, numThree) {
    if (numOne < numTwo && numOne < numThree) {
        return numOne;
    } else if (numTwo < numThree) {
        return numTwo;
    } else {
        return numThree;
    }

    //     if (numOne < numTwo && numOne < numThree) {
    //         return numOne;
    //     }

    //     if (numTwo < numThree) {
    //         return numTwo;
    //     }
    //
    //     return numThree;
}

/**
 * Return the highest number
 * @param {number} numOne
 * @param {number} numTwo
 * @param {number} numThree
 * @return {number}
 */
function max(numOne, numTwo, numThree) {
    if (numOne > numTwo && numOne > numThree) {
        return numOne;
    }

    if (numTwo > numThree) {
        return numTwo;
    }

    return numThree;
}

/**
 * Perform the given operation on the two numbers
 * @param {'sum' | 'divide' | 'product' | 'subtract' } opp
 * @param {number} numOne
 * @param {number} numTwo
 * @return {number}
 */
function calculate(opp, numOne, numTwo) {
    if (opp === 'sum') {
        return numOne + numTwo;
    }

    if (opp === 'divide') {
        return numOne / numTwo;
    }

    if (opp === 'product') {
        return numOne * numTwo;
    }

    if (opp === 'subtract') {
        return numOne - numTwo;
    }

    return numOne;

    // switch (opp) {
    //     case 'sum':
    //         return numOne + numTwo;
    //     case 'subtract':
    //         return numOne - numTwo;
    //     case 'divide':
    //         return numOne / numTwo;
    //     case 'product':
    //         return numOne * numTwo;
    //     default:
    //         return numOne;
    // }
}

/**
 * Generate a random number between 0 and 10
 * Prompt for a number
 *    > if number is same as random number alert 'You win'
 *    > if number is higher alert: 'Too high'
 *    > if number is lower alert: 'Too low'
 */
function guessNumber() {
    let input = parseInt(prompt('Guess a number between 1 and 10'));
    let randomNumber = Math.ceil(Math.random() * 10);

    if (input === randomNumber) {
        alert('You win');
    } else if (input < randomNumber) {
        alert('Too low');
    } else {
        alert('Too high');
    }
}

// LOOP

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}

let j = 0;
do {
    console.log(j);
    j++;
} while (j < 10);

// OEFENINGEN LOOP

/**
 * If num = 4 > 1 + 2 + 3 + 4 = 10
 * @param {number} num
 * @return {number}
 */
function sumUntil(num) {
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumUntil(4)); // 10
console.log(sumUntil(6)); // 21

/**
 * Count the number of words in text
 * @param {string} text
 * @return {number}
 */
function countWords(text) {
    let count = 1;

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (char === ' ') {
            if (i !== 0 && text[i - 1] !== ' ' && i !== text.length - 1) {
                count++;
            }
        }
    }

    return count;
}

console.log(countWords('Hier schrijf ik enkele woorden.')); // 5
console.log(countWords(' Hier ik  ook nog    een paar.')); // 6

/**
 * Return string with only first letter of each word
 * @param {string} text
 * @return {string}
 */
function firstLetterOfEachWord(text) {
    let letters = '';

    if (text[0] !== ' ') {
        letters += text[0];
    }

    for (let i = 1; i < text.length; i++) {
        let previousChar = text[i - 1];
        let curChar = text[i];

        if (previousChar === ' ' && curChar !== ' ') {
            letters += curChar;
        }
    }

    return letters;
}

console.log(
    firstLetterOfEachWord(
        'Roasted melon can be made aromatic by decorating with chicory sauce.',
    ),
); // > 'Rmcbmabdwcs'
console.log(
    firstLetterOfEachWord(
        ' Roasted   melon  can be made aromatic by decorating with chicory sauce.',
    ),
); // > 'Rmcbmabdwcs'

/**
 * Generate random number between 0 and 10
 * prompt for number
 * check if number is valid (between 0 and 10)
 *      > if not ask for new number
 * if number is too high
 *      > prompt for new number (with message: 'Too high, try again')
 * if number is too low
 *      > prompt for new number (with message: 'Too low, try again')
 * check if number is correct
 *      > player wins: alert 'You win, you guessed [x] times'
 *      > confirm 'Want to try again'
 */
function guessingGame() {}

/**
 * Prompt for rock, paper of scissors
 * Check if valid input
 *      > if not ask again
 * Convert input to number > rock = 1, paper = 2, scissors = 3
 * Generate random number between 1 and 3
 * Check if tie
 *      > confirm 'It was a tie, try again?'
 *          > if true > start over
 *          > if false alert score
 * Determine winner
 *      > player = 1 - AI = 2 > AI wins
 *      > player = 1 - AI = 3 > Player wins
 *      > player = 2 - AI = 1 > Player wins
 *      > player = 2 - AI = 3 > AI wins
 *      > player = 3 - AI = 1 > AI wins
 *      > player = 3 - AI = 2 > Player wins
 *          > confirm '[winner] won, try again'
 *              > if true > start over
 *              > if false alert score
 */
function rockPaperScissors() {}
