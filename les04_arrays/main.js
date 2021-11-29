// new array

let anArray = [];
let otherArray = new Array();

let filledArray = ['test', 'test2'];
let otherFilledArray = new Array('test', 'test2');
let arrayWithLength = new Array(5);

console.log(arrayWithLength);
console.log(arrayWithLength.length);

filledArray[2] = 'new test';
filledArray[3] = 'new element';
filledArray[filledArray.length] = 'new new element';

// METHODS

let testArray = ['lorem', 'ipsum', 'latijn'];

console.log(testArray);
testArray.push('waarde'); // add value on end
console.log(testArray);
testArray.pop(); // remove last value
console.log(testArray);

testArray.unshift('begin'); // add at start
console.log(testArray);
testArray.shift(); // remove first value
console.log(testArray);

let newTestArray = testArray;

console.log({ newTestArray, testArray }); // > { newTestArray: newTestArray, testArray: testArray }
newTestArray.pop();
console.log({ newTestArray, testArray });

console.log(testArray === ['lorem', 'ipsum']);
console.log(testArray === newTestArray);
console.log(testArray);
console.log(testArray.slice());
console.log(testArray === testArray.slice());

let longArray = [];

longArray[100] = 'test';
console.log(longArray.length);

console.log(typeof longArray);
console.log(Array.isArray(longArray));

// MORE METHODS
// JOIN / SPLIT

console.log(testArray.join(' ')); // array to string
console.log('The mineral of avoiding sources is unconditional.'.split(' ')); // string to array

// SLICE / SPLICE

let someArray =
    'Marshmellow and tastes best and with joghurt and lots of parsley.'.split(
        ' ',
    );

let someOtherArray = someArray;

console.log(someArray);
console.log(someArray.slice(0, 3));
console.log(someArray.splice(2, 2, 'like', 'shit'));
console.log(someArray);
console.log(someArray.splice(3, 0, 'blabla'));
console.log(someArray);

// Concat

let arOne = [1, 2, 3];
let arTwo = [4, 5, 6];
let arThree = arOne.concat(arTwo);

console.log(arOne.concat(arTwo));
console.log(arTwo.concat(arOne));

console.log(arOne + arTwo);

// IndexOf / LASTINDEXOF / INCLUDES

console.log(someArray);
console.log(someArray.indexOf('and'));
console.log(someArray.lastIndexOf('and'));
console.log(someArray.indexOf('band'));

console.log(someArray.includes('and'));
console.log(someArray.includes('band'));
console.log(someArray.reverse());
console.log(someOtherArray);

// Exercises

/**
 * Given an array of numbers, return the sum of al the numbers
 * @param {number[]} arrayOfNumbers
 * @return {number}
 */
function sumOfNumbers(arrayOfNumbers) {}

console.log(sumOfNumbers([2, 4, 6, 7])); // 19

/**
 * Given a string and an array of string, return the number of times the string (needle)
 * occurs in the array (haystack)
 * @param {string} needle
 * @param {string[]} haystack
 * @return {number}
 */
function countOccurrences(needle, haystack) {}

console.log(
    countOccurrences('with', [
        'Try',
        'peeling',
        'chili',
        'soaked',
        'with',
        'red',
        'wine',
        'whisked',
        'with',
        'oregano',
    ]),
); // 2
