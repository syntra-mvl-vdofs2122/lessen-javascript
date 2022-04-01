let $catSelectContainer = document.getElementById('cat-select-container');
let $catSelectForm = document.getElementById('cat-select-form');
let $catSelectSelect = document.getElementById('cat-select-select');
let $catSelectSubmit = document.getElementById('cat-select-submit');
let $catSelectCount = document.getElementById('cat-select-count');
let $catSelectDifficulty = document.getElementById('cat-select-difficulty');
let $quizContainer = document.getElementById('quiz-container');
let $quizTitle = document.getElementById('quiz-title');
let $quizAnswerContainer = document.getElementById('quiz-answer-container');
let $quizScore = document.getElementById('quiz-score');
let $quizQuestion = document.getElementById('quiz-question');
let $quizAside = document.getElementById('quiz-aside');

const QuestionCount = 15;

let state = {
    error: false,
    catFetchComplete: false,
    gameOver: false,
    selectedCatId: null,
    selectedCatText: null,
    score: 0,
    token: null,
    turn: 0,
    questionCount: null,
    difficulty: null,
    questions: null,
};

///////////////////
// Draw Function //
///////////////////

function drawLoadingQuestions() {
    $quizQuestion.innerHTML = 'Loading questions...';
    $quizAnswerContainer.childNodes.forEach((element) => {
        element.disabled = true;
    });
}

function drawLoadingQuestionsReady() {
    $quizAnswerContainer.childNodes.forEach((element) => {
        element.disabled = false;
    });
}

function drawQuestionAsideClasses(index, type) {
    $quizAside.childNodes[index].classList.add(
        'quiz__question-number--' + type,
    );
}

function drawQuestionCountClass() {
    $quizContainer.classList.add('quiz__container--' + state.questionCount);
}

function drawPage() {
    $quizContainer.classList.toggle('hidden', state.selectedCatId === null);
    $catSelectContainer.classList.toggle(
        'hidden',
        state.selectedCatId !== null,
    );
}

function disableCatForm() {
    $catSelectSelect.disabled = true;
    $catSelectSubmit.disabled = true;
}

function enableCatForm() {
    $catSelectSelect.disabled = false;
    $catSelectSubmit.disabled = false;
}

function drawOptions(categories) {
    let optionsHTML = categories.map((category) => {
        return `<option value="${category.id}">${category.name}</option>`;
    }, '');

    console.log(optionsHTML);
    $catSelectSelect.innerHTML = optionsHTML.join('');
}

function drawScore() {
    $quizScore.innerText = state.score;
}

function drawQuestion() {
    if (state.gameOver) {
        $quizQuestion.innerHTML = `Game over, you scored ${state.score}/${state.questionCount} points, play again?`;
        return;
    }

    let curQuestion = state.questions[state.turn];
    $quizQuestion.innerHTML = curQuestion.question;
}

function drawAside() {
    let asideHTML = '';

    for (let i = 1; i <= state.questionCount; i++) {
        asideHTML += `<div class="quiz__question-number ${
            i === state.turn + 1 ? 'quiz__question-number--active' : ''
        }">${i}</div>`;
    }

    asideHTML += `<div class="quiz__score"><span id="quiz-score">${state.turn}</span>/${state.questionCount}</div>`;

    $quizAside.innerHTML = asideHTML;

    $quizScore = document.getElementById('quiz-score');
}

function drawErrorQuestion() {
    $quizQuestion.innerHTML =
        'Could not find enough questions for this category, pick another category?';
}

function drawTitle() {
    $quizTitle.innerText = `${state.selectedCatText} Quiz`;
}

/////////////////////
// Fetch Functions //
/////////////////////

function fetchToken() {
    return fetch('https://opentdb.com/api_token.php?command=request')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Could not fetch questions');
            }

            return response.json();
        })
        .then((body) => {
            return body;
        })
        .catch((err) => {
            console.error(err);
        });
}

function fetchQuestions() {
    // returns Promise with body
    let queryParams = new URLSearchParams();
    queryParams.append('amount', state.questionCount);
    queryParams.append('category', state.selectedCatId);
    queryParams.append('difficulty', state.difficulty);
    queryParams.append('token', state.token);
    queryParams.append('type', 'boolean');

    return fetch('https://opentdb.com/api.php?' + queryParams.toString())
        .then((response) => {
            if (!response.ok) {
                throw new Error('Could not fetch questions');
            }

            return response.json();
        })
        .then((body) => {
            return body;
        })
        .catch((error) => {
            console.error(error);
        });
}

function fetchCategories() {
    return fetch('https://opentdb.com/api_category.php')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Could not fetch categories');
            }

            return response.json();
        })
        .then((body) => {
            return body.trivia_categories;
        })
        .catch((error) => {
            console.error(error);
        });
}

////////////////////
// Game functions //
////////////////////

function initCat() {
    state.selectedCatId = null;
    state.selectedCatText = null;
    state.difficulty = null;
    state.questionCount = null;

    drawPage();
    disableCatForm();

    if (!state.catFetchComplete) {
        let promises = [fetchCategories(), fetchToken()];

        Promise.all(promises)
            .then((bodies) => {
                let categories = bodies[0];
                let token = bodies[1].token;

                drawOptions(categories);
                state.token = token;
                state.catFetchComplete = true;
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                enableCatForm();
            });
    } else {
        fetchToken()
            .then((tokenBody) => {
                state.token = tokenBody.token;
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                enableCatForm();
            });
    }
}

function initQuiz() {
    drawPage();
    state.error = false;
    state.gameOver = false;
    state.score = 0;
    state.turn = 0;

    drawTitle();
    drawLoadingQuestions();
    drawAside();
    drawQuestionCountClass();

    fetchQuestions()
        .then((body) => {
            if (body.response_code !== 0) {
                drawErrorQuestion();
                state.error = true;
                return;
            }

            state.questions = body.results;
            drawQuestion();
        })
        .finally(() => {
            drawLoadingQuestionsReady();
        });
}

function answer(curAnswer) {
    if (state.error) {
        if (curAnswer === 'True') {
            initCat();
        }

        return;
    }

    if (state.gameOver) {
        if (curAnswer === 'True') {
            initQuiz();
        } else {
            initCat();
        }
        return;
    }

    let correctAnswer = state.questions[state.turn].correct_answer;

    if (curAnswer === correctAnswer) {
        state.score++;
        drawQuestionAsideClasses(state.turn, 'correct');
    } else {
        drawQuestionAsideClasses(state.turn, 'wrong');
    }

    state.turn++;
    state.gameOver = state.turn === state.questions.length;
    drawQuestion();
    drawScore();
    drawQuestionAsideClasses(state.turn, 'active');
}

////////////////////
// Event Handlers //
////////////////////

function submitCatSelect(event) {
    event.preventDefault();
    let activeOption = event.target.querySelector(
        '#cat-select-select option:checked',
    );

    state.selectedCatId = activeOption.value;
    state.selectedCatText = activeOption.innerText;

    state.difficulty = $catSelectDifficulty.value;
    state.questionCount = $catSelectCount.value;

    initQuiz();
}

function answerBtnClicked(event) {
    if (event.target.matches('.quiz__answer')) {
        let curAnswer = event.target.innerText;

        answer(curAnswer);
    }
}

/////////
// RUN //
/////////

$catSelectForm.addEventListener('submit', submitCatSelect);
$quizAnswerContainer.addEventListener('click', answerBtnClicked);

initCat();
