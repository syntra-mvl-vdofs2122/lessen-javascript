window.test = 'test123';

console.log(window.test);
console.log(test);

let anObject = { test: 'test' };

console.log(Object.keys(anObject));
console.log(window.Object.keys(anObject));

console.log(window.document);
console.log(document);

// body / head

console.log(document.body);
console.log(document.head);

// childNodes / children

console.log(document.body.childNodes);
console.log(document.body.children);

// firstChild / firstElementChild
console.log(document.body.firstChild);
console.log(document.body.firstElementChild);

// lastChild / lastElementChild
console.log(document.body.lastChild);
console.log(document.body.lastElementChild);

// parentNode / parentElement
let divEl = document.body.firstElementChild;
console.log(divEl.parentNode);
console.log(divEl.parentElement);

// nextSibling / nestElementSibling

console.log(divEl.nextSibling);
console.log(divEl.nextElementSibling);

// previousSibling / previousElementSibling

console.log(divEl.previousSibling);
console.log(document.body.previousElementSibling);

// getElementById

console.log(document.getElementById('title'));

// getElementsByClassName

console.log(document.getElementsByClassName('green'));
console.log(document.getElementsByClassName('yellow'));

// getElementsByTagName

let pTag = document.getElementsByTagName('p');
console.log(document.getElementsByTagName('p'));

console.log(pTag[0]);
console.log(pTag.length);

// querySelector / querySelectorAll

console.log(document.querySelector('.green'));
console.log(document.querySelectorAll('.green'));

console.log(document.querySelectorAll('p:nth-child(odd)'));

let pTags = document.querySelectorAll('p');
console.log(pTags);

let newPTag = document.createElement('p');
document.body.append(newPTag);

console.log(pTags);

// style

let h1 = document.getElementById('title');
// background-color
h1.style.backgroundColor = 'goldenrod';

console.log(h1.style);

h1.style.padding = '1rem 2rem';

console.log(h1.style.padding);

// setTimeOut / setInterval

function afterOneSecond() {
    console.log('Timeout has passed');
}

// setTimeout(afterOneSecond, 1000);

// setInterval(afterOneSecond, 1000);

// Exercise

function randomBackgroundColor() {
    let colorArray = [
        'goldenrod',
        'lawngreen',
        'indianred',
        'deepskyblue',
        'yellow',
    ];

    let currentColor = h1.style.backgroundColor;
    let currentColorIndex = colorArray.indexOf(currentColor);

    colorArray.splice(currentColorIndex, 1);

    let randomIndex = Math.floor(Math.random() * colorArray.length);

    h1.style.backgroundColor = colorArray[randomIndex];
}

// setInterval(randomBackgroundColor, 50);

function toggleBackgroundColor() {
    let ul = document.getElementById('first-list');
    let li = ul.children;

    let oddColoured = li[0].style.backgroundColor === 'deepskyblue';

    for (let i = 0; i < li.length; i++) {
        if (i % 2 === 0) {
            if (oddColoured) {
                li[i].style.backgroundColor = '';
            } else {
                li[i].style.backgroundColor = 'deepskyblue';
            }
        } else {
            if (!oddColoured) {
                li[i].style.backgroundColor = '';
            } else {
                li[i].style.backgroundColor = 'deepskyblue';
            }
        }
    }
}

// setInterval(toggleBackgroundColor, 1000);

// innerHTML / innerText

let firstDiv = document.body.firstElementChild;
console.log(firstDiv);

console.log(firstDiv.innerHTML);

console.log(firstDiv.innerText);

// firstDiv.innerText = '<h1>Iets nieuws</h1><p>Ho-ho-ho! life of horror.</p>';

function colorLongWords() {
    let pEl = document.getElementById('long-text');
    let text = pEl.innerText;

    let textArr = text.split(' ');

    for (let i = 0; i < textArr.length; i++) {
        if (textArr[i].length > 8) {
            textArr[i] = `<span class='green'>${textArr[i]}</span>`;
        }
    }

    pEl.innerHTML = textArr.join(' ');
}

colorLongWords();
