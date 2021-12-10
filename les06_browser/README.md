# Les 6 - Browser

https://javascript.info/browser-environment

https://www.w3docs.com/learn-javascript/browser-environment-specs.html

## DOM

https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/

https://javascript.info/dom-nodes

### Traversing the DOM

#### Children

```javascript
document.body.childNodes;
document.body.children;
document.body.firstChild;
document.body.firstElementChild;
document.body.lastChild;
document.body.lastElementChild;
```

#### Parent

```javascript
document.body.parentNode;
document.body.parentElement;
```

#### Siblings

```javascript
document.body.previousSibling;
document.body.previousElementSibling;
document.head.nextSibling;
document.head.nextElementSibling;
```

https://javascript.info/dom-navigation

https://www.digitalocean.com/community/tutorials/how-to-traverse-the-dom

### Searching the DOM

```javascript
document.getElementsByTagName('p');
document.getElementsByClassName('green');
document.getElementById('title');
```

```javascript
document.querySelector('p.green');
document.querySelectorAll('body > *');
```

https://javascript.info/searching-elements-dom

https://www.digitalocean.com/community/tutorials/how-to-access-elements-in-the-dom

http://xahlee.info/js/js_get_elements.html

https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors

### Style

```javascript
let h1 = document.getElementById('title');
h1.style.backgroundColor = 'goldenrod';
h1.style.fontSize = '60px';
```

https://www.javascripttutorial.net/javascript-dom/javascript-style/

https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style

### .innerHTML and .innerText

```javascript
const content = element.innerHTML;
element.innerHTML = content;

const renderedText = htmlElement.innerText;
htmlElement.innerText = string;
```

https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText

https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML

https://www.javascripttutorial.net/javascript-dom/javascript-innerhtml/

## setTimeout() and setInterval()

```javascript
function delayColour() {
    setInterval(colourOddCols, 4000);
}

setInterval(colourEvenCols, 4000);

setTimeout(delayColour, 2000);
```

https://developer.mozilla.org/en-US/docs/Web/API/setTimeout

https://developer.mozilla.org/en-US/docs/Web/API/setInterval

https://javascript.info/settimeout-setinterval
