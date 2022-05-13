Vue.createApp({
    data() {
        return {
            gameSettings: {
                MinNum: 0,
                MaxNum: 4,
                NumCount: 5,
                MaxGuesses: 10,
            },
            gameOver: false,
            solution: [1, 2, 3, 4, 5],
            curTry: ['', '', '', '', ''],
            tries: [],
            winLoseMessage: '',
        };
    },
    methods: {
        init(firstLoad) {
            this.solution = this.genSolution();
            this.gameOver = false;
            this.tries = [];

            this.curTry = [];
            for (let i = 0; i < this.gameSettings.NumCount; i++) {
                this.curTry.push('');
            }
        },
        submit() {
            if (!this.validTry || this.gameOver) {
                return;
            }

            let correctNumAndPlace = this.countCorrectNumAndPlace();
            let correctNum = this.countCorrectNum() - correctNumAndPlace;

            this.tries.push({
                try: [...this.curTry],
                correctPlace: correctNumAndPlace,
                correctNumber: correctNum,
            });

            if (correctNumAndPlace === this.gameSettings.NumCount) {
                this.gameOver = true;
                this.winLoseMessage = 'You won, play again?';
            }

            if (
                this.tries.length === this.gameSettings.MaxGuesses &&
                !this.gameOver
            ) {
                this.gameOver = true;
                this.winLoseMessage = 'You lost, play again?';
            }
        },
        genSolution() {
            let solution = [];

            for (let i = 0; i < this.gameSettings.NumCount; i++) {
                let randomNumber =
                    Math.floor(
                        Math.random() *
                            (this.gameSettings.MaxNum -
                                this.gameSettings.MinNum +
                                1),
                    ) + this.gameSettings.MinNum;
                solution.push(randomNumber);
            }

            return solution;
        },
        countCorrectNum() {
            let count = 0;
            let localSol = [...this.solution];
            for (let i = 0; i < this.curTry.length; i++) {
                let indexFound = localSol.indexOf(this.curTry[i]);

                if (indexFound > -1) {
                    localSol.splice(indexFound, 1);
                    count++;
                }
            }

            return count;
        },
        countCorrectNumAndPlace() {
            let count = 0;

            for (let i = 0; i < this.curTry.length; i++) {
                if (this.curTry[i] === this.solution[i]) {
                    count++;
                }
            }

            return count;
        },
    },
    computed: {
        validTry() {
            for (let i = 0; i < this.curTry.length; i++) {
                if (
                    typeof this.curTry[i] !== 'number' ||
                    this.curTry[i] < this.gameSettings.MinNum ||
                    this.curTry[i] > this.gameSettings.MaxNum
                ) {
                    return false;
                }
            }

            return true;
        },
    },
    created() {
        this.init();
    },
}).mount('#app');
