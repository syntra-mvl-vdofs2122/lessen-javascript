/*
let $solutionContainer = document.getElementById('solution-container');
let $triesContainer = document.getElementById('tries-container');
let $tryInputContainer = document.getElementById('try-input-container');
let $trySubmitBtn = document.getElementById('try-submit-btn');
let $winnerMessageContainer = document.getElementById(
    'winner-message-container',
);
let $winnerSubmitBtn = document.getElementById('winner-submit-btn');

const MinNum = 0;
const MaxNum = 4;
const NumCount = 7;
const MaxGuesses = 10;

let gameState = {
    solution: null,
    won: false,
    lost: false,
    guessCount: 0,
};

/**
 * Generate an array with NumCount random numbers between MinNum and MaxNum
 * @return {Number[]}

function genSolution() {
    let solution = [];

    for (let i = 0; i < NumCount; i++) {
        let randomNumber =
            Math.floor(Math.random() * (MaxNum - MinNum + 1)) + MinNum;
        solution.push(randomNumber);
    }

    return solution;
}

/**
 * Get values from '.try-input' elements
 * If all values are valid return an Array with all numbers
 * Otherwise return false
 * @return {false | Number[]}

function getGuess() {
    let newGuess = [];

    for (let i = 0; i < $tryInputContainer.children.length; i++) {
        let val = parseInt($tryInputContainer.children[i].value);

        if (!(val >= MinNum && val <= MaxNum)) {
            return false;
        }

        newGuess.push(val);
    }

    return newGuess;
}

/**
 * Count all matching numbers between curGuess and gameState.solution
 * @param {Number[]} curGuess
 * @return {number}

function countCorrectNumAndPlace(curGuess) {
    let count = 0;

    for (let i = 0; i < curGuess.length; i++) {
        if (curGuess[i] === gameState.solution[i]) {
            count++;
        }
    }

    return count;
}

/**
 * Count all numbers from curGuess which occur in gameState.solution
 * @param {Number[]} curGuess
 * @return {number}

function countCorrectNum(curGuess) {
    let count = 0;
    let localSol = [...gameState.solution];

    // let localSolTwo = JSON.parse(JSON.stringify(gameState.solution));

    // for (let j = 0; j < gameState.solution.length; j++) {
    //     localSol.push(gameState.solution[j]);
    // }

    for (let i = 0; i < curGuess.length; i++) {
        let indexFound = localSol.indexOf(curGuess[i]);

        if (indexFound > -1) {
            localSol.splice(indexFound, 1);
            count++;
        }
    }

    return count;
}

/**
 * Clear $triesContainer, add '.hidden' to $solutionContainer
 * Add '.dont-show' to $winnerMessageContainer

function writeCleanGame() {
    $triesContainer.innerHTML = '';
    $solutionContainer.classList.add('hidden');
    $winnerMessageContainer.classList.add('dont-show');
    $trySubmitBtn.disabled = false;

    for (let i = 0; i < $tryInputContainer.children.length; i++) {
        $tryInputContainer.children[i].value = '';
    }
}

/**
 * Write solution to '.solution-option' elements

function writeSolution() {
    for (let i = 0; i < $solutionContainer.children.length; i++) {
        $solutionContainer.children[i].innerText = gameState.solution[i];
    }
}

/**
 * Generate and add '.try' div to container
 * @param {Number[]} guess
 * @param {Number} correctNumAndPlace
 * @param {Number} correctNum

function writeTry(guess, correctNumAndPlace, correctNum) {
    let html = `
        <div class="try">
            <div class="try-option-container">`;

    for (let i = 0; i < guess.length; i++) {
        html += `<div class="try-option">${guess[i]}</div>`;
    }

    html += `
            </div>
            <p>Juiste nummer op foute plaats: <span class="correct-color">${correctNum}</span></p>
            <p>
                Juiste nummer op juiste plaats:
                <span class="correct-place">${correctNumAndPlace}</span>
            </p>
        </div>
    `;

    $triesContainer.insertAdjacentHTML('beforeend', html);
}

function writeGameOver() {
    if (gameState.won || gameState.lost) {
        $winnerMessageContainer.classList.remove('dont-show');
        $trySubmitBtn.disabled = true;
        $solutionContainer.classList.remove('hidden');

        if (gameState.won) {
            $winnerSubmitBtn.innerText = 'You won, try again?';
        } else {
            $winnerSubmitBtn.innerText = 'You lost, try again?';
        }
    }
}

function writeFirstLoad() {
    $solutionContainer.innerHTML = '';
    $tryInputContainer.innerHTML = '';

    let solutionOptionHTML = '';
    let tryInputContainerHTML = '';

    for (let i = 0; i < NumCount; i++) {
        solutionOptionHTML += `<div class="solution-option">1</div>`;
        tryInputContainerHTML += `<input
                        class="try-input"
                        type="number"
                        min="0"
                        max="4"
                        step="1"
                    />`;
    }

    $solutionContainer.insertAdjacentHTML('beforeend', solutionOptionHTML);
    $tryInputContainer.insertAdjacentHTML('beforeend', tryInputContainerHTML);
}

function init(firstLoad) {
    gameState.solution = genSolution();
    gameState.won = false;
    gameState.lost = false;
    gameState.guessCount = 0;

    if (firstLoad === true) {
        writeFirstLoad();
    }

    writeCleanGame();
    writeSolution();
}

function trySubmitBtnClicked() {
    let guess = getGuess();

    if (!guess) {
        $trySubmitBtn.innerText = 'Invalid input, try again';
        return;
    }

    let correctNumAndPlace = countCorrectNumAndPlace(guess);
    let correctNum = countCorrectNum(guess) - correctNumAndPlace;

    gameState.guessCount++;

    if (correctNumAndPlace === NumCount) {
        gameState.won = true;
    }

    if (gameState.guessCount === MaxGuesses && !gameState.won) {
        gameState.lost = true;
    }

    $trySubmitBtn.innerText = 'Try';
    writeTry(guess, correctNumAndPlace, correctNum);
    writeGameOver();

    console.log(gameState);
}

$trySubmitBtn.addEventListener('click', trySubmitBtnClicked);
$winnerSubmitBtn.addEventListener('click', init);

init(true);
*/

Vue.createApp({
    data() {
        return {
            gameSettings: {
                MinNum: 0,
                MaxNum: 4,
                NumCount: 7,
                MaxGuesses: 10,
            },
            gameOver: false,
            solution: [1, 2, 3, 4, 5],
            curTry: ['', '', '', '', ''],
            tries: [
                {
                    try: [1, 2, 3, 4, 5],
                    correctPlace: 3,
                    correctNumber: 2,
                },
                {
                    try: [1, 2, 3, 4, 5],
                    correctPlace: 3,
                    correctNumber: 2,
                },
                {
                    try: [1, 2, 3, 4, 5],
                    correctPlace: 3,
                    correctNumber: 2,
                },
                {
                    try: [1, 2, 3, 4, 5],
                    correctPlace: 3,
                    correctNumber: 2,
                },
            ],
            winLoseMessage: '',
        };
    },
    methods: {},
    computed: {},
    created() {},
}).mount('#app');
