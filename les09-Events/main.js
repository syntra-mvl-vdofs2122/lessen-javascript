let $btnContainer = document.getElementById('btn-container');
let $btnOne = document.getElementById('one');
let $btnTwo = document.getElementById('two');
let $btnThree = document.getElementById('three');
let $btnFour = document.getElementById('four');
let $numberContainer = document.getElementById('number-container');

function handler(event) {
    console.log('click');
    console.log(event.target);

    if (event.target.matches('#btn-container button')) {
        console.log(event.target.dataset);
        $numberContainer.innerText = event.target.innerText;
    }
}

$btnContainer.addEventListener('click', handler);

// function fakeEventListener(eventName, callback) {
//     let eventData = {
//         target: $btnOne,
//         eventName: eventName,
//     };
//
//     callback(eventData);
// }
//
// fakeEventListener('click', handler);