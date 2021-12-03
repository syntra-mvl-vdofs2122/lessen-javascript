/**
 * Given an array, return the same array but make sure no value occurs more than once
 * @param {array} anArray
 * @return {array}
 */
function removeDoubles(anArray) {
    let noDoublesArray = [];

    for (let i = 0; i < anArray.length; i++) {
        let val = anArray[i];

        if (!noDoublesArray.includes(val)) {
            noDoublesArray.push(val);
        }
    }

    return noDoublesArray;
}

/**
 * Given an array of numbers, return the same array containing only even numbers
 * @param {number[]} anArray
 * @return {number[]}
 */
function onlyEven(anArray) {
    let even = [];

    for (let i = 0; i < anArray.length; i++) {
        if (anArray[i] % 2 === 0) {
            even.push(anArray[i]);
        }
    }

    return even;
}

/**
 * Sort an array from low to high, write the logic yourself
 * @param {number[]} anArray
 * @return {number[]}
 */
function sort(anArray) {
    // let sorted = false;
    //
    // while (!sorted) {
    //     sorted = true;
    //     for (i = 0; i < anArray.length; i++) {
    //         if (anArray[i] > anArray[i + 1]) {
    //             let temp = anArray[i];
    //             anArray[i] = anArray[i + 1];
    //             anArray[i + 1] = temp;
    //
    //             sorted = false;
    //         }
    //         console.log(JSON.stringify(anArray));
    //     }
    // }
    //
    // return anArray;

    // for (let i = 0; i < anArray.length - 1; i++) {
    //     if (anArray[i] > anArray[i + 1]) {
    //         anArray.splice(i + 2, 0, anArray[i]);
    //         anArray.splice(i, 1);
    //         i = 0;
    //     }
    // }
    //
    // return anArray;

    let sortedArray = [];
    let count = 0;

    while (anArray.length) {
        let lowest = Infinity;
        let lowestIndex = -1;

        for (let i = 0; i < anArray.length; i++) {
            if (lowest > anArray[i]) {
                lowest = anArray[i];
                lowestIndex = i;
            }

            count++;
        }
        sortedArray.push(lowest);
        anArray.splice(lowestIndex, 1);
    }

    return sortedArray;
}

/**
 * Reverse the string
 * Try to keep the same casing (if first letter is
 * uppercase, make sure it is still uppercase in the reversed word
 * @param {string} aString
 * @return {string}
 */
function reverseString(aString) {
    // const indexArray = [];
    //
    // for (let i = 0; i < aString.length; i++) {
    //     if (aString.charAt(i) === aString.charAt(i).toUpperCase()) {
    //         indexArray.push(i);
    //     }
    // }
    //
    // const reverseStringArray = aString.toLowerCase().split('').reverse();
    //
    // for (let i = 0; i < indexArray.length; i++) {
    //     reverseStringArray.splice(
    //         indexArray[i],
    //         1,
    //         reverseStringArray[indexArray[i]].toUpperCase(),
    //     );
    // }
    //
    // return reverseStringArray.join('');

    let stringArray = aString.toLowerCase().split('').reverse();

    for (let i = 0; i < stringArray.length; i++) {
        if (aString[i] === aString[i].toUpperCase()) {
            stringArray[i] = stringArray[i].toUpperCase();
        }
    }

    return stringArray.join('');
}

/**
 * Given two arrays of values, return an array with only the values that occur in both arrays
 * @param {array} anArray
 * @param {array} otherArray
 * @return {array}
 */
function findSimilars(anArray, otherArray) {
    let newArray = [];
    for (let i = 0; i < anArray.length; i++) {
        let otherIndex = otherArray.indexOf(anArray[i]);

        if (otherIndex > -1) {
            newArray.push(anArray[i]);
            otherArray.splice(otherIndex, 1);
        }
    }
    return newArray;
}

/**
 * Given an array return an array with the same values but in a random order
 * @param anArray
 */
function scramble(numberArray) {
    // for (let i = numberArray.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * numberArray.length);
    //     const number = numberArray[i];
    //
    //     numberArray[i] = numberArray[j];
    //     numberArray[j] = number;
    // }
    //
    // console.log(numberArray);
    //
    // return numberArray;

    let scrambledArray = [];

    while (numberArray.length) {
        const randomIndex = Math.floor(Math.random() * numberArray.length);

        let randomVal = numberArray.splice(randomIndex, 1)[0];
        scrambledArray.push(randomVal);
    }

    return scrambledArray;
}

/**
 * Given two arrays, check if the second array (subArray) is a sublist of the first (bigArray)
 * @param {array} bigArray
 * @param {array} subArray
 * @return {boolean}
 */
function isSublist(bigArray, subArray) {
    // let bigString = bigArray.join('');
    // let subString = subArray.join('');
    //
    // return bigString.includes(subString);

    let subArrayFound = false;

    for (let i = 0; i < bigArray.length; i++) {
        if (bigArray[i] === subArray[0]) {
            subArrayFound = true;
            for (let j = 1; j < subArray.length; j++) {
                if (subArray[j] !== bigArray[i + j]) {
                    subArrayFound = false;
                    break;
                }
            }

            if (subArrayFound) {
                return true;
            }
        }
    }

    return false;
}
