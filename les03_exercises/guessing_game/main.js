/**
 * Generate random number between 0 and 10
 * prompt for number
 * check if number is valid (between 0 and 10)
 *      > if not ask for new number
 * if number is too high
 *      > prompt for new number (with message: 'Too high, try again')
 * if number is too low
 *      > prompt for new number (with message: 'Too low, try again')
 * check if number is correct
 *      > player wins: alert 'You win, you guessed [x] times'
 *      > confirm 'Want to try again'
 */
function guessingGame() {
    let tryAgain = true;

    while (tryAgain) {
        let guessCount = 0;
        let question = NaN;
        let randomNumber = Math.floor(Math.random() * 11);

        while (randomNumber !== question) {
            question = parseInt(prompt('Guess a number between 0 and 10.'));

            while (!(question >= 0 && question <= 10)) {
                question = parseInt(
                    prompt('Invalid guess, guess a number between 0 and 10?'),
                );
            }

            if (question < randomNumber) {
                alert('Wrong, your guess is to low');
            }

            if (question > randomNumber) {
                alert('Wrong, your guess is to high');
            }

            guessCount++;
        }

        tryAgain = confirm(`You won in ${guessCount} guesses, play again?`);
    }
}

// VERSION 2
// Split some functionality off in seperate functions
// Use recursion instead of a while loop

function promptGuess() {
    let question = parseInt(prompt('Guess a number between 0 and 10.'));

    while (!(question >= 0 && question <= 10)) {
        question = parseInt(
            prompt('Invalid guess, guess a number between 0 and 10?'),
        );
    }

    return question;
}

function alertWrongNumber(question, randomNumber) {
    if (question < randomNumber) {
        alert('Wrong, your guess is to low');
    }

    if (question > randomNumber) {
        alert('Wrong, your guess is to high');
    }
}

function guessingGameTwo() {
    let guessCount = 0;
    let question = NaN;
    let randomNumber = Math.floor(Math.random() * 11);

    while (randomNumber !== question) {
        question = promptGuess();

        alertWrongNumber(question, randomNumber);
        guessCount++;
    }

    let tryAgain = confirm(`You won in ${guessCount} guesses, play again?`);

    if (tryAgain) {
        guessingGameTwo();
    }
}

// VERSION 3
// Add two parameters which determine the upper limit of the guess and the max number of guesses before the user loses

function guessingGameThree(lowerLimit, upperLimit, maxGuesses) {
    let tryAgain = true;

    while (tryAgain) {
        let guessCount = 0;
        let question = NaN;
        let randomNumber =
            Math.floor(Math.random() * upperLimit + 1 - lowerLimit) +
            lowerLimit;

        while (randomNumber !== question && guessCount < maxGuesses) {
            question = parseInt(
                prompt(
                    `Guess a number between ${lowerLimit} and ${upperLimit}.`,
                ),
            );

            while (!(question >= lowerLimit && question <= upperLimit)) {
                question = parseInt(
                    prompt(
                        `Invalid guess, guess a number between ${lowerLimit} and ${upperLimit}.`,
                    ),
                );
            }

            if (question < randomNumber) {
                alert('Wrong, your guess is to low');
            }

            if (question > randomNumber) {
                alert('Wrong, your guess is to high');
            }

            guessCount++;
        }

        if (randomNumber === question) {
            tryAgain = confirm(`You won in ${guessCount} guesses, play again?`);
        } else {
            tryAgain = confirm(
                `You lost the number was ${randomNumber}, play again?`,
            );
        }
    }
}

guessingGameThree(1, 5, 3);

