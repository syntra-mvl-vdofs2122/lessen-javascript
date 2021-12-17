let $guessInput = document.getElementById('guess-input');
let $guessConfirm = document.getElementById('guess-confirm');
let $guessContainer = document.getElementById('guess-container');
let $messageContainer = document.getElementById('message-container');
let $playAgainBtn = document.getElementById('play-again-btn');
let $countContainer = document.getElementById('count-container');

let randomNumber;
let gameOver = false;
let count = 0;

function init() {
    // gen random number
    // empty guess container
    // empty message container
    // hide play again btn
    randomNumber = Math.floor(Math.random() * 11);

    $guessContainer.innerHTML = '';
    $messageContainer.innerText = '';
    $playAgainBtn.classList.add('hide');
    $guessInput.value = '';
    gameOver = false;
    count = 0;
    $countContainer.innerText = count;

    console.log(randomNumber);
}

function guessBtnClicked() {
    console.log('Guess btn clicked');

    if (gameOver) {
        return;
    }

    // input ophalen
    // vergelijken met random number
    // add guess line in $guessContainer
    // if correct add message and activate $playAgainBtn

    let currentGuess = parseInt($guessInput.value);

    if (!(currentGuess >= 0 && currentGuess <= 10)) {
        $messageContainer.innerText =
            'Wrong input, guess a number between 0 and 10';

        return;
    }

    count++;
    $countContainer.innerText = count;

    if (currentGuess > randomNumber) {
        let html = `<p class="guess"><span>${currentGuess}</span> - <span>Too high</span></p>`;
        $guessContainer.insertAdjacentHTML('beforeend', html);
    }

    if (currentGuess < randomNumber) {
        let html = `<p class="guess"><span>${currentGuess}</span> - <span>Too low</span></p>`;
        $guessContainer.insertAdjacentHTML('beforeend', html);
    }

    if (currentGuess === randomNumber) {
        let html = `<p class="guess"><span>${currentGuess}</span> - <span>Correct</span></p>`;
        $guessContainer.insertAdjacentHTML('beforeend', html);
        $messageContainer.innerText = 'You won, try again?';
        $playAgainBtn.classList.remove('hide');
        gameOver = true;
    }
}

$guessConfirm.addEventListener('click', guessBtnClicked);
$playAgainBtn.addEventListener('click', init);

init();
