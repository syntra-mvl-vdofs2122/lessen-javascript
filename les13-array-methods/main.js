// Array methods

let anArray = [1, 2, 3, 4, 5];

// forEach
Array.prototype.myForEach = function (cbFunction) {
    for (let i = 0; i < this.length; i++) {
        cbFunction(this[i], i, this);
    }
};

function logItem(element, index, array) {
    console.log({ element, index, array });
    // console.log({
    //     element: element,
    //     index: index,
    //     array: array,
    // });
}

anArray.forEach(logItem);

anArray.myForEach(logItem);

function doubleItem(element) {
    console.log(element * 2);
}

anArray.forEach(doubleItem);
anArray.myForEach(doubleItem);

// filter

Array.prototype.myFilter = function (cbFunction) {
    let filteredArray = [];

    for (let i = 0; i < this.length; i++) {
        let cbReturn = cbFunction(this[i], i, this);
        console.log({ cbReturn, element: this[i] });

        if (cbReturn) {
            filteredArray.push(this[i]);
        }
    }

    return filteredArray;
};

function onlyEven(element, index, array) {
    return element % 2 === 0;
}

function onlyOdd(element, index, array) {
    return element % 2 > 0;
}

console.log(anArray.filter(onlyEven));
console.log(anArray.myFilter(onlyEven));
console.log(anArray.myFilter(onlyOdd));

// map

Array.prototype.myMap = function (cbFunction) {
    let mappedArray = [];

    for (let i = 0; i < this.length; i++) {
        let cbReturn = cbFunction(this[i], i, this);

        mappedArray.push(cbReturn);
    }

    return mappedArray;
};

function returnDoubleItem(element, index, array) {
    return element * 2;
}

console.log(anArray.map(returnDoubleItem));

let peopleArray = [
    {
        firstName: 'Lennart',
        lastName: 'Verschelden',
        age: 15,
    },
    {
        firstName: 'Bram',
        lastName: 'Dieudonne',
        age: 2,
    },
    {
        firstName: 'Ernest',
        lastName: 'Debruyne',
        age: 8,
    },
];

function fullName(element, index, array) {
    return element.firstName + ' ' + element.lastName;
}

console.log(peopleArray.map(fullName));
console.log(peopleArray.myMap(fullName));

// reduce

Array.prototype.myReduce = function (cbFunction, initialVal) {
    let reduceResult = initialVal;
    let startLoop = 0;

    if (initialVal === undefined) {
        reduceResult = this[0];
        startLoop = 1;
    }

    for (let i = startLoop; i < this.length; i++) {
        reduceResult = cbFunction(reduceResult, this[i], i, this);
    }

    return reduceResult;
};

function sum(prevVal, element, index, array) {
    console.log({ prevVal, element });
    return prevVal + element;
}

console.log(anArray.reduce(sum));
console.log(anArray.myReduce(sum));

function countOverSix(prevVal, element, index, array) {
    if (element.age > 6) {
        prevVal++;
    }

    return prevVal;
}

console.log(peopleArray.reduce(countOverSix, 0));
console.log(peopleArray.myReduce(countOverSix, 0));

// console.log(
//     anArray.map(function (element, index, array) {
//         console.log({ element, index, array });
//     }),
// );
//
// let testArrowFun = (element, index, array) => {
//     console.log({ element, index, array });
// };
//
// anArray.map((element, index, array) => {
//     return element + index;
// });
//
// anArray.map((element, index, array) => element + index)

// let testArray = [3, 6, 2, 8, 12, 13]; // > 44

// for (let i = 0; i < testArray.length; i++) {
//     let double = testArray[i] * 2;
//     console.log(double);
// }
//
// function doubleNumbers(element, index, array) {
//     let double = element * 2;
//     console.log(double);
// }
//
// let doubleNumbersTwo = (element, index, array) => {
//     let double = element * 2;
//     console.log(double);
// };
//
// testArray.forEach(doubleNumbers);
//
// testArray.forEach(function (element, index, array) {
//     let double = element * 2;
//     console.log(double);
// });
//
// testArray.forEach((element, index, array) => {
//     let double = element * 2;
//     console.log(double);
// });

// let doubleArray = [];
//
// for (let i = 0; i < testArray.length; i++) {
//     let double = testArray[i] * 2;
//     doubleArray.push(double);
// }
//
// console.log(doubleArray);
//
// function doubleElement(element, index, array) {
//     let double = element * 2;
//
//     return double;
// }
//
// let doubleArrayMap = testArray.map(doubleElement);
// console.log(doubleArrayMap);

// let evenArray = [];
//
// for (let i = 0; i < testArray.length; i++) {
//     let isEven = testArray[i] % 2 === 0;
//
//     if (isEven) {
//         evenArray.push(testArray[i]);
//     }
// }
//
// console.log(evenArray);
//
// function onlyEven(element, index, array) {
//     let isEven = element % 2 === 0;
//
//     return isEven;
// }
//
// let evenArrayFilter = testArray.filter(onlyEven);
//
// console.log(evenArrayFilter);

// let sum = 0;
//
// for (let i = 0; i < testArray.length; i++) {
//     sum += testArray[i];
// }
//
// console.log(sum);
//
// function sumElements(prevVal, element, index, array) {
//     console.log({ prevVal, element, index });
//
//     prevVal += element;
//
//     return prevVal;
// }
//
// let sumReduce = testArray.reduce(sumElements);
//
// console.log(sumReduce);
