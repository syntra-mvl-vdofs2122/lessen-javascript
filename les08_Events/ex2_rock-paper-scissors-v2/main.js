let $rockBtn = document.getElementById('rock');
let $paperBtn = document.getElementById('paper');
let $scissorsBtn = document.getElementById('scissors');
let $userChoice = document.getElementById('user-choice');
let $aiChoice = document.getElementById('ai-choice');
let $messageContainer = document.getElementById('message-container');
let $userScore = document.getElementById('user-score');
let $aiScore = document.getElementById('ai-score');

let userScore = 0;
let aiScore = 0;

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
    clearChoiceImages();

    $messageContainer.innerText = '';

    userScore = 0;
    aiScore = 0;
    updateScores();

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

    thinkingTimeout = setTimeout(startThinking, 2500);
}

function choose(currentChoice) {
    stopThinking();
    let aiChoice = Math.floor(Math.random() * 3) + 1;

    clearChoiceImages();
    $userChoice.classList.add(generateChoiceClass(currentChoice));
    $aiChoice.classList.add(generateChoiceClass(aiChoice));

    if (aiChoice === currentChoice) {
        $messageContainer.innerText = `It's a tie`;
    } else if (
        (currentChoice === 1 && aiChoice === 3) ||
        (currentChoice === 2 && aiChoice === 1) ||
        (currentChoice === 3 && aiChoice === 2)
    ) {
        userScore++;
        $messageContainer.innerText = `You won`;
    } else {
        aiScore++;
        $messageContainer.innerText = 'You lost';
    }

    updateScores();
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

init();
