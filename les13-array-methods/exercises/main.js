/*
 * ARRAY MAP EXERCISES
 */

// Make an array of numbers that are doubles of the first array
// Example:
// input: [1,2,3]
// expected output: [2,4,6]

function doubleNumbers(arr) {
    // function callback(element, index, array) {}
    //
    // return arr.map(callback);
    //
    // return arr.map(function() {
    //
    // })

    return arr.map((element) => element * 2);

    // return arr.map(function (element) {
    //     return element * 2;
    // });
}

// Take an array of numbers and make them strings
// Example:
// input: [1,2,3]
// expected output: ['1','2','3']

function stringItUp(arr) {
    return arr.map(function (element) {
        return element.toString();
        // return element + '';
    });

    // return arr.map(String);
}

// Capitalize each of an array of names
// Example:
// input: ['jan', 'AN', 'Ben']
// expected output: ['Jan', 'An', 'Ben']

function capitalizeNames(arr) {
    return arr.map(function (element) {
        let firstLetter = element[0].toUpperCase();
        let otherLetters = element.substring(1).toLowerCase();

        return firstLetter + otherLetters;

        // return `${element
        //     .charAt(0)
        //     .toUpperCase()}${element.substring(1).toLowerCase()}`;
    });
}

// Make an array of strings of the names
// Example:
// input: [{name: 'Jan', age: 12}, {name: 'An', age: 33}]
// expected output: ['Jan', 'An']

function namesOnly(arr) {
    return arr.map((element) => element.name);

    return arr.map(function (element) {
        return element.name;
    });
}

// Make an array of strings of the names saying whether or not they can go to The Matrix (older than 18)
// Example:
// input: [{name: 'Jan', age: 12}, {name: 'An', age: 33}]
// expected output: ['Jan is under age!!', 'An can go to The Matrix']

function makeStrings(arr) {
    // return arr.map((element) => {
    //     if (element.age > 18) {
    //         return `${element.name} can go to The Matrix`;
    //     }
    //
    //     return `${element.name} is under age!!`;
    // });

    return arr.map((element) =>
        element.age > 18
            ? `${element.name} can go to The Matrix`
            : `${element.name} is under age!!`,
    );
}

/*
 * ARRAY REDUCE EXERCISES
 */

// Turn an array of numbers into a total of all the numbers
// Example:
// input: [1,2,3]
// expected output: 6

function total(arr) {
    return arr.reduce(function (prevVal, element) {
        return prevVal + element;
    });

    // return arr.reduce((prevVal, element) => prevVal + element);
}

// Turn an array of numbers into a long string of all those numbers.
// Example:
// input: [1,2,3]
// expected output: '123'

function stringConcat(arr) {
    return arr.reduce((prevVal, element) => prevVal + element, '');

    // return arr.reduce(function (prevVal, element) {
    //     return prevVal + element.toString();
    // });
}

// Turn an array of voter objects into a count of how many people voted
// Example:
// input: [{name: 'Jan', age: 12, voted: false}, {name: 'An', age: 33, voted: true}, {name: 'Ben', age: 21, voted: true}]
// expected output: 2

function totalVotes(arr) {
    // return arr.reduce(function (prevVal, element) {
    //     if (element.voted) {
    //         prevVal++;
    //     }
    //
    //     return prevVal;
    // }, 0);

    return arr.reduce(
        (prevVal, element) => (element.voted ? prevVal + 1 : prevVal),
        0,
    );
}

// Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
// Example:
// input: [{ title: "Snoep", price: 500 }, { title: "Brood", price: 200 },]
// expected output: 700

function shoppingSpree(arr) {
    // return arr.reduce(function (totalPrice, wishlistItem) {
    //     return totalPrice + wishlistItem.price;
    // }, 0);

    return arr.reduce(
        (totalPrice, wishlistItem) => totalPrice + wishlistItem.price,
        0,
    );
}

// Given an array of arrays, flatten them into a single array
// Example:
// input: [[1,2,3],[6,5,4]]
// expected output: [1,2,3,6,5,4]

function flatten(arr) {
    return arr.reduce(function (prevVal, element) {
        console.log({ prevVal, element });

        return prevVal.concat(element);
    });
}

/*
 * ARRAY FILTER EXERCISES
 */

// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
// Example:
// input: [1,2,3,6,5,4]
// expected output: [6,5]

function fiveAndGreaterOnly(arr) {
    return arr.filter((element) => element >= 5);
}

// Given an array of numbers, return a new array that only includes the even numbers.
// Example:
// input: [1,2,3,6,5,4]
// expected output: [2,6,4]

function evensOnly(arr) {
    return arr.filter((element) => element % 2 === 0);

    // return arr.filter(function (element) {
    //     return element % 2 === 0;
    // });
    //
    // return arr.filter(function (element) {
    //     if (element % 2 === 0) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // });
}

// Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
// Example:
// input: ['lange string', 'kort']
// expected output: ['kort']

function fiveCharactersOrFewerOnly(arr) {
    return arr.filter((element) => element.length <= 5);

    // return arr.filter(function (element) {
    //     return element.length <= 5;
    // });
}

// Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
// Example:
// input: [{name: 'Jan', age: 12, member: false}, {name: 'An', age: 33, member: true}, {name: 'Ben', age: 21, member: true}]
// expected output: [{name: 'An', age: 33, member: true}, {name: 'Ben', age: 21, member: true}]

function peopleWhoBelongToTheIlluminati(arr) {
    return arr.filter((element) => element.member);

    // return arr.filter(function (element) {
    //     return element.member;
    // });
}

// Make a filtered list of all the people who are old enough to see The Matrix (older than 18)
// Example:
// input: [{name: 'Jan', age: 12}, {name: 'An', age: 33}]
// expected output: [{name: 'An', age: 33}]

function ofAge(arr) {
    return arr.filter((element) => element.age > 18);
}
