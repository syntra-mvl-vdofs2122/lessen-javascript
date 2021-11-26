# Les 01 - Introduction Part One

## History JavaScript

-   https://launchschool.com/books/javascript/read/introduction#briefhistory
-   https://www.springboard.com/blog/data-science/history-of-javascript/

## Naming conventions

-   variables and functions -> camelCase
-   constants -> SCREAMING_SNAKE_CASE

## Formatting code

We'll use Prettier to auto format our code.
Create a new file in the root of your project and name it: `.prettierrc`.
Copy following snippet into that file, prettier will automatically use the correct settings.

```json
{
    "semi": true,
    "trailingComma": "all",
    "tabWidth": 4,
    "singleQuote": true
}
```

See https://prettier.io/ for more info.

## Browser

All javascript classes will be about javascript as a client-side language.
More specifically we'll always run our code inside a browser.

### How to include javascript:

https://www.digitalocean.com/community/tutorials/how-to-add-javascript-to-html

### Console and Devtools

We'll mainly use Chrome browser and it's console and other developer tools:
https://developer.chrome.com/docs/devtools/overview/

## MDN Web Docs

MDN Web Docs will be our main source of documentation:

https://developer.mozilla.org/en-US/docs/Web/JavaScript

## Primitive Data Types

-   String
-   Number
-   _BigInt_
-   Undefined
-   Null
-   Boolean
-   Objects (and Arrays)
-   _Symbols_

https://javascript.info/types

## Type Coercion

https://javascript.info/type-conversions

## Variables

Use the keywords let and const to create variables:

```javascript
let aVariable = 'Test';
const aConstant = 'Other Test';
```

https://javascript.info/variables

https://launchschool.com/books/javascript/read/variables

## Functions

We use functions to create reusable bit of code.
A function has following parts:

-   A name
-   Parameters (optional)
-   Functionality
-   Return value (optional)

```javascript
function aFunction(aParameter) {
    let doubleParameter = aParameter * 2;
    return doubleParameter;
}
```

https://launchschool.com/books/javascript/read/functions

https://javascript.info/function-basics

### Some browser built-in functions

You can use the following functions to interact with the user:

-   Prompt
-   Alert
-   Confirm

https://javascript.info/alert-prompt-confirm

## String

We'll discuss some string methods and properties:

-   .length: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
-   .toUpperCase(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
-   .toLowerCase(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
-   Character access with []: https://dev.to/charlesamakoye/three-ways-of-accessing-string-characters-in-javascript-3gbn
-   .substring(start, end): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
-   String concatenation: https://javascript.info/operators#string-concatenation-with-binary
-   Template literals: https://css-tricks.com/template-literals/
