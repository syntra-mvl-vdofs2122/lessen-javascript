let btn = document.getElementById('btn');
let p = document.getElementById('counter');

let counter = 0;

function clickEventHandler() {
    console.log('Clicked');
    counter++;

    p.innerText = counter;
}

btn.addEventListener('click', clickEventHandler);
