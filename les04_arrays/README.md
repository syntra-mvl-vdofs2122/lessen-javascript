# Les 4 - Arrays

## Initialize a new array

```javascript
let anArray = [];
let otherArray = new Array();
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array

https://javascript.info/array#declaration

## Passed by reference

https://www.geeksforgeeks.org/pass-by-value-and-pass-by-reference-in-javascript/

https://www.dyn-web.com/javascript/arrays/value-vs-reference.php

## Compare arrays

https://javascript.info/array#don-t-compare-arrays-with

https://www.geeksforgeeks.org/how-to-compare-two-arrays-in-javascript/

https://masteringjs.io/tutorials/fundamentals/compare-arrays

## Push / Pop and Shift / Unshift

```javascript
anArray.push('some value'); // add 'some value' at end
anArray.pop(); // remove last element

anArray.shift('some value'); // add 'some value' at start
anArray.unshift(); // remove first element
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift

https://javascript.info/array#methods-pop-push-shift-unshift

https://codesource.io/array-pop-push-shift-and-unshift-methods-in-javascript/

## Join / Split

```javascript
let anArray = ['Cum', 'adiurator', 'manducare', 'omnes', 'talis'];
anArray.join(' '); // 'Cum adiurator manducare omnes talis'
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

```javascript
let aString = 'Lord yellow fever!';
aString.split(' '); // ['Lord', 'yellow', 'fever!']
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

## Slice / Splice

```javascript
let anArray = ['Cum', 'adiurator', 'manducare', 'omnes', 'talis'];
anArray.slice(2, 4); // ['manducare', 'omnes']
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

https://www.geeksforgeeks.org/javascript-array-slice-method/

```javascript
let anArray = ['Cum', 'adiurator', 'manducare', 'omnes', 'talis'];
anArray.slice(1, 2); // returns ['adiurator', 'manducare']
console.log(anArray); // ['Cum', 'omnes', 'talis']
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

https://www.javascripttutorial.net/javascript-array-splice/

## Concat

```javascript
let anArray = ['Cum', 'adiurator', 'manducare', 'omnes', 'talis'];
let otherArray = ['Lord', 'yellow', 'fever!'];

anArray.concat(otherArray); // ['Cum', 'adiurator', 'manducare', 'omnes', 'talis', 'Lord', 'yellow', 'fever!']
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

https://javascript.info/array-methods#concat

https://www.javascripttutorial.net/javascript-array-concat/

## IndexOf / LastIndexOf / Includes

```javascript
let anArray = [1, 5, 6, 3, 4, 5, 7, 8, 5, 1];
anArray.indexOf(5); // 1
anArray.lastIndexOf(5); // 8
anArray.includes(5); // true
anArray.includes(9); // false
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
