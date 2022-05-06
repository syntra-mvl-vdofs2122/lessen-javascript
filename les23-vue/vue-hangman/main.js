const randomWords = [
    'condition',
    'bottom',
    'lineage',
    'trip',
    'reporter',
    'paper',
    'colorful',
    'agent',
    'justify',
    'torture',
    'cap',
    'earthflax',
    'payment',
    'research',
    'picture',
    'garage',
    'honor',
    'memorial',
    'planet',
    'biography',
    'profound',
    'rumor',
    'gear',
    'bedroom',
    'orthodox',
    'penalty',
    'grief',
    'promote',
    'roof',
    'suite',
    'moving',
    'killer',
    'museum',
    'essay',
    'fever',
    'dignity',
    'shadow',
    'enjoy',
    'kill',
    'shy',
    'counter',
    'pawn',
    'button',
    'bullet',
    'skin',
    'rate',
    'shop',
    'consider',
    'other',
    'prospect',
    'pipootje',
];

let word;
let playerWord = [];
let split;
let counter;
let letter;
let gameOver = false;
let click;
let correct = 0;

let $letterContainer = document.getElementById('letter-container');
let $imageContainer = document.getElementById('image-container');
let $winLoseContainer = document.getElementById('win-lose-container');
let $solutionContainer = document.getElementById('solution-container');
let $letters = document.querySelectorAll('.letter');
let $solutionLetters = document.querySelectorAll('.solution-letter');
let $countChildren = document.getElementById('solution-container').children;

function init() {
    gameOver = false;
    counter = 1;
    $imageContainer.innerHTML = "'<img src='images/hangman01.png' alt=''/>'";
    $winLoseContainer.innerHTML = '';
    $solutionContainer.innerHTML = '';
    playerWord = [];
    for (let i = 0; i < $letters.length; i++) {
        $letters[i].classList.remove('success', 'failed');
    }

    word = randomizeWord();
    split = word.split('');
    for (let i = 0; i < word.length; i++) {
        $solutionContainer.insertAdjacentHTML(
            'beforeend',
            '<div class="solution-letter"> </div>',
        );
        playerWord.push(' ');
    }
}
function randomizeWord() {
    word = randomWords[Math.floor(Math.random() * randomWords.length)];
    return word;
}

function hangman(event) {
    click = event.target;

    if (gameOver) {
        return;
    }
    if (click.matches('.failed') || click.matches('.success')) {
        return;
    }
    if (click.matches('.letter')) {
        letter = click.innerText.toLowerCase();
    }

    let letterFound = false;
    for (let i = 0; i < split.length; i++) {
        if (letter === split[i]) {
            letterFound = true;
            playerWord.splice(i, 1, letter);
        }
    }
    if (letterFound) {
        correct++;
        success();
    } else {
        failed();
    }
}

function success() {
    click.classList.add('success');

    for (let i = 0; i < playerWord.length; i++) {
        console.log($countChildren[i]);
        $countChildren[i].innerHTML = playerWord[i];
    }
    if (playerWord.indexOf(' ') === -1) {
        $winLoseContainer.innerText = `you won, the word was ${word}
            Play again ? Click here !`;
        gameOver = true;
    }
}

function failed() {
    click.classList.add('failed');
    click.disabled = true;

    counter++;
    $imageContainer.innerHTML = `<img src='images/hangman0${counter}.png' alt='' /> `;

    if (counter === 9) {
        $winLoseContainer.innerText = `You lost, the word was ${word}. You have guessed ${correct}
                                        letters, click here to play again`;
        $imageContainer.innerHTML = `<img src='images/hangman0${counter}.png' alt='' /> `;
        gameOver = true;
        showWord();
    }
}

function showWord() {
    for (let i = 0; i < word.length; i++) {
        if (playerWord[i] === word[i]) {
            $solutionContainer.children[i].classList.add('green');
        } else {
            $solutionContainer.children[i].classList.add('red');
            $solutionContainer.children[i].innerText = word[i];
        }
    }
}
// init();
// $letterContainer.addEventListener('click', hangman);
// $winLoseContainer.addEventListener('click', init);

Vue.createApp({
    data() {
        return {
            randomWords: [
                'condition',
                'bottom',
                'lineage',
                'trip',
                'reporter',
                'paper',
                'colorful',
                'agent',
                'justify',
                'torture',
                'cap',
                'earthflax',
                'payment',
                'research',
                'picture',
                'garage',
                'honor',
                'memorial',
                'planet',
                'biography',
                'profound',
                'rumor',
                'gear',
                'bedroom',
                'orthodox',
                'penalty',
                'grief',
                'promote',
                'roof',
                'suite',
                'moving',
                'killer',
                'museum',
                'essay',
                'fever',
                'dignity',
                'shadow',
                'enjoy',
                'kill',
                'shy',
                'counter',
                'pawn',
                'button',
                'bullet',
                'skin',
                'rate',
                'shop',
                'consider',
                'other',
                'prospect',
                'pipootje',
            ],
            letters: {
                a: 'success',
                b: 'failed',
                c: '',
                d: '',
                e: '',
                f: '',
                g: '',
                h: '',
                i: '',
                j: '',
                k: '',
                l: '',
                m: '',
                n: '',
                o: '',
                p: '',
                q: '',
                r: '',
                s: '',
                t: '',
                u: '',
                v: '',
                w: '',
                x: '',
                y: '',
                z: '',
            },
            word: '',
            userWord: [],
            gameOver: false,
            counter: 1,
            winLoseMessage: '',
        };
    },
    methods: {
        randomWord() {
            return this.randomWords[
                Math.floor(Math.random() * this.randomWords.length)
            ];
        },
        init() {
            this.gameOver = false;
            this.counter = 1;
            this.winLoseMessage = '';
            this.word = this.randomWord();
            this.userWord = this.word.split('').map(() => '');
            Object.keys(this.letters).forEach((letter) => {
                this.letters[letter] = '';
            });

            // let wordArray = this.word.split('');
            // let userWord = wordArray.map(function () {
            //     return '';
            // });
        },
    },
    created() {
        this.init();
    },
}).mount('#app');
