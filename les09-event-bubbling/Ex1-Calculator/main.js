let $btnContainer = document.getElementById('btn-container');
let $screen = document.getElementById('screen');

let clearNumbers = false;
let numOne = null;
let numTwo = null;
let curOperator = null;

function addNumber(number) {
    if (clearNumbers) {
        $screen.innerText = '';
        clearNumbers = false;
    }

    $screen.innerText += number;
}

function doOperation() {
    let result;

    switch (curOperator) {
        case 'plus':
            result = numOne + numTwo;
            break;
        case 'min':
            result = numOne - numTwo;
            break;
    }

    numOne = result;
    numTwo = null;
    curOperator = null;
    $screen.innerText = result;
}

function setOperation(operation) {
    if (curOperator === null) {
        numOne = parseInt($screen.innerText);
    } else {
        numTwo = parseInt($screen.innerText);
    }

    if (numTwo !== null) {
        doOperation();
    }

    switch (operation) {
        case 'plus':
        case 'min':
            curOperator = operation;
            clearNumbers = true;
    }
}

function calculate(event) {
    if (event.target.matches('.number')) {
        console.log('number');
        let curNumber = event.target.dataset.number;
        addNumber(curNumber);
    }

    if (event.target.matches('.operator')) {
        console.log('operator');
        let curOperator = event.target.dataset.operator;
        setOperation(curOperator);
    }
}

$btnContainer.addEventListener('click', calculate);
