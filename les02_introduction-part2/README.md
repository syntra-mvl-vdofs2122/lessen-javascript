# Les 2 - Intro part two

## Conditions

### Comparison operators

`== and ===`
`!= and !==`
`< and <=`
`> and >=`

https://www.geeksforgeeks.org/javascript-vs-comparision-operator/
https://flaviocopes.com/javascript-equality-operators/
https://flaviocopes.com/javascript-comparison-operators/
https://www.javascripttutorial.net/javascript-comparison-operators/
https://javascript.info/comparison
https://launchschool.com/books/javascript/read/flow_control#comparisons

### if / else

```javascript
if (something) {
    // do something
} else if (other) {
    // do something other
} else {
    // do something else
}
```

https://javascript.info/ifelse
https://launchschool.com/books/javascript/read/flow_control#conditionals

### && / ||

https://launchschool.com/books/javascript/read/flow_control#logicaloperators
https://javascript.info/logical-operators

## Numbers

`let aNumber = 12;`

https://www.javascripttutorial.net/javascript-number/
https://flaviocopes.com/javascript-number/

### Arithmetic operators

`+ - * / %`
`+= ++`

https://javascript.info/operators
https://flaviocopes.com/javascript-math-operators/

### toString

`aNumber.toString(10)`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

### parseInt / parseFloat

`parseInt(aString)`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt

`parseFloar(aString)`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat

## Switch

```javascript
switch (someVal) {
    case 'iets':
        // do something
        break;
    case 'anders':
    case 'zelfde':
        // do something
        break;
    default:
    // do something
}
```

https://www.javascripttutorial.net/javascript-switch-case/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

## Loops

https://flaviocopes.com/javascript-loops/

### For loop

```javascript
for (let i = 0; i < 10; i++) {
    // do something 10 times
}
```

https://www.javascripttutorial.net/javascript-for-loop/
https://javascript.info/while-for#the-for-loop
https://launchschool.com/books/javascript/read/loops_iterating#forloops

### While loop

```javascript
let i = 0;

while (i < 10) {
    // do something 10 times
    i++;
}
```

https://www.javascripttutorial.net/javascript-while-loop/
https://javascript.info/while-for#the-while-loop
https://launchschool.com/books/javascript/read/loops_iterating#whileloops

### Do while loop

```javascript
let j = 0;
do {
    // do something 10 times
    j++;
} while (j < 10);
```

https://www.javascripttutorial.net/javascript-do-while/
https://javascript.info/while-for#the-do-while-loop
