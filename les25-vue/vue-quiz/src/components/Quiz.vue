<template>
    <div
        id="quiz-container"
        class="quiz__container"
        :class="`quiz__container--${catData.questionCount}`"
    >
        <h1 id="quiz-title" class="quiz__title">Something Quiz</h1>

        <aside class="quiz__aside" id="quiz-aside">
            <div
                v-for="(className, index) in asideItems"
                class="quiz__question-number"
                :class="`quiz__question-number--${className}`"
            >
                {{ index + 1 }}
            </div>

            <div class="quiz__score">
                {{ score }}/{{ catData.questionCount }}
            </div>
        </aside>

        <main v-if="gameOver" class="quiz__main">
            <p class="quiz__question">
                {{
                    `Game over, you scored ${score}/${catData.questionCount} points, play again?`
                }}
            </p>

            <div id="quiz-answer-container" class="quiz__answer-container">
                <button class="quiz__answer" @click="answer(true)">True</button>
                <button class="quiz__answer" @click="answer(false)">
                    False
                </button>
            </div>
        </main>

        <main v-else-if="questionsFetched" class="quiz__main">
            <p v-if="error" id="quiz-question" class="quiz__question">
                {{ error }}
            </p>
            <p
                v-else
                id="quiz-question"
                class="quiz__question"
                v-html="curQuestion.question"
            />

            <div id="quiz-answer-container" class="quiz__answer-container">
                <button class="quiz__answer" @click="answer(true)">True</button>
                <button class="quiz__answer" @click="answer(false)">
                    False
                </button>
            </div>
        </main>

        <main v-else class="quiz__main">
            <p class="quiz__question">Fetching questions...</p>
        </main>
    </div>
</template>

<script>
export default {
    name: 'Quiz',
    emits: ['endQuiz'],
    props: {
        catData: {
            type: Object,
            required: true,
        },
        token: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            gameOver: false,
            questionsFetched: false,
            score: 0,
            turn: 0,
            asideItems: [],
            questions: [],
            error: null,
        };
    },
    computed: {
        curQuestion() {
            if (this.questions.length === 0) {
                return null;
            }

            return this.questions[this.turn];
        },
        curAnswer() {
            if (this.curQuestion === null) {
                return false;
            }

            return this.curQuestion.correct_answer === 'True';
        },
    },
    methods: {
        answer(selectedAnswer) {
            if (this.error || this.gameOver) {
                if (selectedAnswer) {
                    this.$emit('endQuiz');
                }
                return;
            }

            if (selectedAnswer === this.curAnswer) {
                this.asideItems[this.turn] = 'correct';
                this.score++;
            } else {
                this.asideItems[this.turn] = 'wrong';
            }

            this.turn++;
            this.gameOver = this.turn === this.catData.questionCount;
            if (!this.gameOver) {
                this.asideItems[this.turn] = 'active';
            }
        },
        fetchQuestions() {
            // returns Promise with body
            let queryParams = new URLSearchParams();
            queryParams.append('amount', this.catData.questionCount);
            queryParams.append('category', this.catData.category);
            queryParams.append('difficulty', this.catData.difficulty);
            queryParams.append('token', this.token);
            queryParams.append('type', 'boolean');

            return fetch(
                'https://opentdb.com/api.php?' + queryParams.toString(),
            )
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
        },
        genAsideItems() {
            let newAsideItems = [];

            for (let i = 0; i < this.catData.questionCount; i++) {
                if (i === 0) {
                    newAsideItems.push('active');
                } else {
                    newAsideItems.push('');
                }
            }

            return newAsideItems;
        },
        init() {
            this.asideItems = this.genAsideItems();
            this.fetchQuestions().then((body) => {
                this.questionsFetched = true;
                if (body.response_code !== 0) {
                    this.error =
                        'Not enough questions in this category. Select another category?';
                    return;
                }

                this.questions = body.results;
            });
        },
    },
    created() {
        this.init();
    },
};
</script>

<style lang="scss">
.quiz {
    &__container {
        display: grid;
        grid-template-rows: 10rem 1fr;
        grid-template-columns: 30% 70%;
        width: 100vw;
        height: 100vh;
        background-color: deepskyblue;

        @media screen and (max-width: 1100px) {
            grid-template-columns: 25% 75%;
        }

        @media screen and (max-width: 840px) {
            grid-template-columns: 20% 80%;
        }

        @media screen and (max-width: 600px) {
            grid-template-rows: 6rem auto 1fr;
            grid-template-columns: 100%;
        }
    }

    &__title {
        grid-column: span 2;
        font-size: 5rem;
        line-height: 9rem;
        text-align: center;
        background-color: #fff;
        margin: 1rem;
        margin-bottom: 0;

        @media screen and (max-width: 840px) {
            font-size: 3rem;
        }

        @media screen and (max-width: 600px) {
            grid-column: span 1;
            line-height: 5rem;
        }
    }

    &__aside,
    &__main {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(11, 1fr);
        grid-gap: 1rem;
        padding: 1rem;
    }

    &__container {
        &--5 {
            .quiz__aside,
            .quiz__main {
                grid-template-rows: repeat(6, 1fr);
            }

            .quiz__aside {
                @media screen and (max-width: 600px) {
                    grid-template-columns: repeat(6, 1fr);
                    grid-template-rows: 5rem;
                }
            }

            .quiz__main {
                @media screen and (max-width: 600px) {
                    grid-template-rows: repeat(5, 1fr) 5rem;
                }
            }

            .quiz__question {
                grid-row: span 5;
            }

            .quiz__question-number,
            .quiz__score,
            .quiz__answer {
                font-size: 4rem;

                @media screen and (max-width: 600px) {
                    font-size: 3rem;
                }
            }
        }

        &--10 {
            .quiz__aside,
            .quiz__main {
                grid-template-rows: repeat(11, 1fr);
            }

            .quiz__aside {
                @media screen and (max-width: 600px) {
                    grid-template-columns: repeat(6, 1fr);
                    grid-template-rows: repeat(2, 5rem);
                }
            }

            .quiz__score {
                @media screen and (max-width: 600px) {
                    grid-column: span 2;
                }
            }

            .quiz__aside {
                @media screen and (max-width: 600px) {
                    grid-template-columns: repeat(6, 1fr);
                    grid-template-rows: repeat(2, 5rem);
                }
            }

            .quiz__question {
                grid-row: span 10;
            }

            .quiz__question-number,
            .quiz__score,
            .quiz__answer {
                font-size: 4rem;

                @media screen and (max-width: 600px) {
                    font-size: 3rem;
                }
            }
        }

        &--15 {
            .quiz__aside,
            .quiz__main {
                grid-template-rows: repeat(16, 1fr);
            }

            .quiz__aside {
                @media screen and (max-width: 600px) {
                    grid-template-columns: repeat(8, 1fr);
                    grid-template-rows: repeat(2, 5rem);
                }
            }

            .quiz__main {
                @media screen and (max-width: 600px) {
                    grid-template-rows: repeat(15, 1fr) 5rem;
                }
            }

            .quiz__score {
                @media screen and (max-width: 600px) {
                    grid-column: span 1;
                }
            }

            .quiz__question {
                grid-row: span 15;
            }

            .quiz__question-number,
            .quiz__score,
            .quiz__answer {
                font-size: 2.5rem;

                @media screen and (max-width: 600px) {
                    font-size: 2rem;
                }
            }
        }
    }

    &__aside {
    }

    &__main {
        padding-left: 0;

        @media screen and (max-width: 600px) {
            height: 100%;
            grid-template-rows: 1fr 4rem;
            grid-template-columns: 100%;
            padding: 1rem;
            padding-top: 0;
        }
    }

    &__question-number,
    &__score {
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;

        &--active {
            background-color: yellow;
        }

        &--correct {
            background-color: green;
        }

        &--wrong {
            background-color: red;
        }
    }

    &__question {
        font-size: 4rem;
        text-align: center;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        height: 100%;

        @media screen and (max-width: 600px) {
            grid-row: span 1;
            font-size: 2.5rem;
        }
    }

    &__answer {
        &-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 1rem;
        }

        background-color: green;
        border: none;
        color: white;

        &:last-child {
            background-color: red;
        }

        @media screen and (max-width: 600px) {
            font-size: 1rem;
        }
    }
}
</style>
