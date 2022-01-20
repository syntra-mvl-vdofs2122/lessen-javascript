let $rockBtn = document.getElementById('rock');
let $paperBtn = document.getElementById('paper');
let $scissorsBtn = document.getElementById('scissors');
let $userChoice = document.getElementById('user-choice');
let $aiChoice = document.getElementById('ai-choice');
let $messageContainer = document.getElementById('message-container');
let $userScore = document.getElementById('user-score');
let $aiScore = document.getElementById('ai-score');
let $playAgainBtn = document.getElementById('play-again-btn');
let $bestOfContainers = document.querySelectorAll('.best-of-container');

let userScore = 0;
let aiScore = 0;
let bestOf = 2;
let gameOver = false;

let thinkingTimeout;
let thinkingInterval;
let curAiThought = 1;

function clearChoiceImages() {
    $userChoice.classList.remove(
        'choice--rock',
        'choice--paper',
        'choice--scissors',
    );

    $aiChoice.classList.remove(
        'choice--rock',
        'choice--paper',
        'choice--scissors',
    );
}

function generateChoiceClass(choice) {
    if (choice === 1) {
        return 'choice--rock';
    }
    if (choice === 2) {
        return 'choice--paper';
    }
    if (choice === 3) {
        return 'choice--scissors';
    }
}

function updateScores() {
    $userScore.innerText = userScore;
    $aiScore.innerText = aiScore;
}

function init() {
    gameOver = false;
    clearChoiceImages();

    $messageContainer.innerText = '';

    for (let i = 0; i < $bestOfContainers.length; i++) {
        $bestOfContainers[i].innerText = bestOf;
    }

    userScore = 0;
    aiScore = 0;
    updateScores();

    $playAgainBtn.classList.add('hide');
    startThinking();
}

function nextAiThought() {
    clearChoiceImages();
    $aiChoice.classList.add(generateChoiceClass(curAiThought));

    if (curAiThought < 3) {
        curAiThought++;
    } else {
        curAiThought = 1;
    }
}

function startThinking() {
    thinkingInterval = setInterval(nextAiThought, 200);
}

function stopThinking() {
    clearTimeout(thinkingTimeout);
    clearInterval(thinkingInterval);

    thinkingTimeout = setTimeout(startThinking, 2000);
}

function choose(currentChoice) {
    if (gameOver) {
        return;
    }

    stopThinking();
    let aiChoice = Math.floor(Math.random() * 3) + 1;

    clearChoiceImages();
    $userChoice.classList.add(generateChoiceClass(currentChoice));
    $aiChoice.classList.add(generateChoiceClass(aiChoice));

    if (aiChoice === currentChoice) {
        $messageContainer.innerText = `This round is a tie`;
    } else if (
        (currentChoice === 1 && aiChoice === 3) ||
        (currentChoice === 2 && aiChoice === 1) ||
        (currentChoice === 3 && aiChoice === 2)
    ) {
        userScore++;
        $messageContainer.innerText = `You won this round`;
    } else {
        aiScore++;
        $messageContainer.innerText = 'You lost this round';
    }

    updateScores();

    if (
        userScore > bestOf / 2 ||
        aiScore > bestOf / 2 ||
        userScore + aiScore === bestOf
    ) {
        clearTimeout(thinkingTimeout);
        let message = 'You won this match';

        if (aiScore > userScore) {
            message = 'You lost this match';
        }

        if (aiScore === userScore) {
            message = 'This match is a tie';
        }

        $messageContainer.innerText = message;
        gameOver = true;
        $playAgainBtn.classList.remove('hide');
    }
}

function chooseRock() {
    choose(1);
}

function choosePaper() {
    choose(2);
}

function chooseScissors() {
    choose(3);
}

$rockBtn.addEventListener('click', chooseRock);
$paperBtn.addEventListener('click', choosePaper);
$scissorsBtn.addEventListener('click', chooseScissors);
$playAgainBtn.addEventListener('click', init);

init();
