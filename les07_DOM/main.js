// Herhaling

console.log(document.body.childNodes);
console.log(document.body.children);

console.log(document.body.firstChild);
console.log(document.body.firstElementChild);

console.log(document.body.lastChild);
console.log(document.body.lastElementChild);

let parOne = document.getElementById('par-one');

console.log(parOne.previousElementSibling);
console.log(parOne.previousSibling);

console.log(parOne.nextElementSibling);
console.log(parOne.nextSibling);

console.log(parOne.parentNode);
console.log(parOne.parentElement);

console.log(document.querySelector('h1'));
console.log(document.querySelectorAll('li'));

parOne.style.backgroundColor = 'goldenrod';

console.log(parOne.innerHTML);
console.log(parOne.innerText);

parOne.innerHTML =
    'When heatting <em>cored seaweeds</em>, be sure they are room temperature.';

function later() {
    console.log('now');
}

// setTimeout(later, 3000);
// setInterval(later, 3000);

function colourLi() {
    // let ul = document.querySelector('ul');
    // let li = ul.children;

    let li = document.querySelectorAll('li');

    for (let i = 0; i < li.length; i++) {
        if (i % 2) {
            li[i].style.backgroundColor = 'blue';
        } else {
            li[i].style.backgroundColor = 'green';
        }
    }
}

colourLi();

// Attributes

let aLink = document.getElementById('a-link');

console.log(aLink.href);

aLink.href = 'https://yahoo.com';

aLink.target = '_self';

aLink.id = 'iets anders';

aLink.blabla = 'test';

console.log(aLink.hasAttribute('target'));
console.log(aLink.getAttribute('href'));
aLink.setAttribute('blabla', 'https://bing.com');
console.log(aLink.blabla);
console.log(aLink.getAttribute('blabla'));
aLink.removeAttribute('target');

let numberInput = document.getElementById('number-input');

console.log(typeof numberInput.max);

// class

console.log(numberInput.className);

console.log(numberInput.classList);

numberInput.classList.add('full-width');
numberInput.classList.add('full-width', 'dark');

numberInput.classList.remove('dark', 'green');

console.log(numberInput.classList.contains('full-width'));

numberInput.classList.replace('full-width', 'half-width');
numberInput.classList.replace('red', 'blue');

numberInput.classList.toggle('rounded');
numberInput.classList.toggle('rounded');

// Creating Elements

let newP = document.createElement('p');

newP.innerText = 'Why does the machine yell?';
newP.classList.add('green');

// Insert Elements

// append / prepend

// document.body.append(newP);
// document.body.prepend(newP);

let container = document.getElementById('container');

// before / after

// container.before(newP);
container.after(newP);

// replaceWith

// container.replaceWith(newP);

// remove

container.remove();

// insertAdjacentHTML
let otherContainer = document.getElementById('other-container');
let htmlString =
    '<h2>Our searious relativity for core is to need others qabalistic.</h2>';

otherContainer.insertAdjacentHTML('afterend', htmlString);


