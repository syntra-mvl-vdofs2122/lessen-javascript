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
            lettersFound: 0,
            gameOver: false,
            turn: 1,
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
            this.turn = 1;
            this.winLoseMessage = '';
            this.word = this.randomWord();
            this.lettersFound = 0;
            this.userWord = this.word.split('').map(() => '');

            Object.keys(this.letters).forEach((letter) => {
                this.letters[letter] = '';
            });

            // let wordArray = this.word.split('');
            // let userWord = wordArray.map(function () {
            //     return '';
            // });
        },
        letterClicked(letter, curClass) {
            console.log(letter);

            if (
                this.gameOver ||
                curClass === 'success' ||
                curClass === 'failed'
            ) {
                return;
            }

            let letterFound = false;

            for (let i = 0; i < this.word.length; i++) {
                if (letter === this.word[i]) {
                    letterFound = true;
                    this.userWord[i] = letter;
                    this.lettersFound++;
                }
            }

            if (letterFound) {
                this.letters[letter] = 'success';
            } else {
                this.letters[letter] = 'failed';
                this.turn++;
            }

            if (this.lettersFound === this.word.length) {
                this.winLoseMessage = `you won, the word was ${word}
            Play again? Click here!`;

                this.gameOver = true;
            }

            if (this.turn === 9) {
                this.winLoseMessage = `You lost, the word was ${this.word}. You have guessed ${this.lettersFound}
                                        letters, click here to play again`;
                this.gameOver = true;
            }
        },
    },
    created() {
        this.init();
    },
}).mount('#app');
