# Les 5 - Objects

## Construct objects

```javascript
let user = new Object(); // "object constructor" syntax
let user = {}; // "object literal" syntax
```

https://javascript.info/object

https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/

## Properties and methods

```javascript
let user = {
    name: 'Korneel',
    'full name': 'Korneel Eeckhout',
    age: 30,
    [newKey]: 'male',
    aMethod() {
        // do something
    },
    otherMethod: function () {
        // do something
    },
};
```

### Accessors

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors

### Square brackets

https://javascript.info/object#square-brackets

### Methods

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions

https://www.geeksforgeeks.org/difference-between-methods-and-functions-in-javascript/

## Object.keys() / Object.values()

```javascript
const object1 = {
    a: 'somestring',
    b: 42,
    c: false,
};

console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]

console.log(Object.values());
// expected outpur: Array ['somestring', 42, false]
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values

https://javascript.info/keys-values-entries

## for ... in loop

```javascript
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
    console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

https://www.javascripttutorial.net/javascript-for-in/
