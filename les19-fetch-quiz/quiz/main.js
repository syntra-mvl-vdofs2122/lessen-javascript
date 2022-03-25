let $catSelectContainer = document.getElementById('cat-select-container');
let $catSelectForm = document.getElementById('cat-select-form');
let $catSelectSelect = document.getElementById('cat-select-select');
let $catSelectSubmit = document.getElementById('cat-select-submit');
let $quizContainer = document.getElementById('quiz-container');
let $quizTitle = document.getElementById('quiz-title');
let $quizAnswerContainer = document.getElementById('quiz-answer-container');
let $quizQuestionNumbers = document.querySelectorAll('.quiz__question-number');
let $quizScore = document.getElementById('quiz-score');
let $quizQuestion = document.getElementById('quiz-question');

const QuestionCount = 10;

let state = {
    error: false,
    catFetchComplete: false,
    gameOver: false,
    selectedCatId: null,
    selectedCatText: null,
    score: 0,
    turn: 0,
    questions: null,
};

///////////////////
// Draw Function //
///////////////////

function resetQuestionNumberClasses() {}

function drawQuestionNumberClass(index, type) {}

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

function drawScore() {}

function drawQuestion() {}

function drawEndQuestion() {}

function drawErrorQuestion() {}

/////////////////////
// Fetch Functions //
/////////////////////

function fetchQuestions() {
    let queryParams = new URLSearchParams();
    queryParams.append('amount', QuestionCount);
    queryParams.append('category', state.selectedCatId);
    queryParams.append('difficulty', 'medium');
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

    drawPage();

    if (!state.catFetchComplete) {
        disableCatForm();

        fetchCategories()
            .then((categories) => {
                drawOptions(categories);
                state.catFetchComplete = true;
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
}

function answer(curAnswer) {}

////////////////////
// Event Handlers //
////////////////////

function submitCatSelect(event) {
    event.preventDefault();
    let activeOption = event.target.querySelector(
        '.cat-select__select option:checked',
    );

    state.selectedCatId = activeOption.value;
    state.selectedCatText = activeOption.innerText;

    initQuiz();
}

function answerBtnClicked(event) {}

/////////
// RUN //
/////////

$catSelectForm.addEventListener('submit', submitCatSelect);
$quizAnswerContainer.addEventListener('click', answerBtnClicked);

initCat();
