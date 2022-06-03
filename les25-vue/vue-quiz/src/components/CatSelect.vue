<template>
    <div id="cat-select-container" class="cat-select__container">
        <form
            id="cat-select-form"
            class="cat-select__form"
            @submit.prevent="submit"
        >
            <h1 class="cat-select__title">Select Category</h1>
            <select
                name="question-count"
                id="cat-select-count"
                class="cat-select__select"
                v-model="questionCount"
            >
                <option
                    v-for="(val, label) in questionCountOptions"
                    :value="val"
                >
                    {{ label }}
                </option>
            </select>
            <select
                id="cat-select-select"
                class="cat-select__select"
                name="category"
                v-model="category"
            >
                <option v-if="!categoriesFetched" value="0">Loading</option>
                <option
                    v-for="categoryOption in categoryOptions"
                    :value="categoryOption.id"
                >
                    {{ categoryOption.name }}
                </option>
            </select>
            <select
                class="cat-select__select"
                id="cat-select-difficulty"
                name="difficulty"
                v-model="difficulty"
            >
                <option v-for="(val, label) in difficultyOptions" :value="val">
                    {{ label }}
                </option>
            </select>
            <button
                id="cat-select-submit"
                class="cat-select__submit"
                type="submit"
                :disabled="!categoriesFetched"
            >
                Start Quiz
            </button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'CatSelect',
    emits: ['categorySelected'],
    data() {
        return {
            categoriesFetched: false,
            questionCount: 10,
            category: 0,
            difficulty: 'medium',
            questionCountOptions: {
                '5 Questions': 5,
                '10 Questions': 10,
                '15 Questions': 15,
            },
            categoryOptions: [],
            difficultyOptions: {
                Easy: 'easy',
                Medium: 'medium',
                Hard: 'hard',
            },
        };
    },
    methods: {
        submit() {
            this.$emit('categorySelected', {
                questionCount: this.questionCount,
                category: this.category,
                difficulty: this.difficulty,
            });
        },
        fetchCategories() {
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
        },
        init() {
            if (this.categoriesFetched) {
                return;
            }

            this.fetchCategories().then((categories) => {
                this.categoriesFetched = true;
                this.categoryOptions = categories;
                this.category = categories[0].id;
            });
        },
    },
    mounted() {
        this.init();
    },
};
</script>

<style lang="scss">
.cat-select {
    &__container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background-color: deepskyblue;
    }

    &__form {
        display: flex;
        flex-direction: column;
        width: 30rem;
        background-color: #fff;
        padding: 3rem;
    }

    &__title {
        font-size: 3rem;
        line-height: 3rem;
        padding-bottom: 3rem;
        text-align: center;
    }

    &__select {
        height: 4rem;
        font-size: 2rem;
        text-align: center;
        margin-top: 1rem;
    }

    &__submit {
        height: 4rem;
        font-size: 2rem;
        line-height: 4rem;
        margin-top: 1rem;
        background-color: #075479;
        color: white;

        &:disabled {
            cursor: not-allowed;
            background-color: rgba(7, 84, 121, 0.48);
        }
    }
}
</style>
