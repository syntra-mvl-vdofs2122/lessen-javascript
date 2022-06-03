<template>
    <CatSelect v-show="showCatSelect" @categorySelected="categorySelected" />
    <Quiz
        v-if="!showCatSelect && token"
        :cat-data="catData"
        :token="token"
        @endQuiz="endQuiz"
    />
</template>

<script>
import CatSelect from '@/components/CatSelect.vue';
import Quiz from '@/components/Quiz.vue';

export default {
    name: 'App',
    components: {
        CatSelect,
        Quiz,
    },
    data() {
        return {
            showCatSelect: true,
            catData: null,
            token: null,
        };
    },
    methods: {
        categorySelected(catData) {
            this.catData = catData;
            this.showCatSelect = false;
        },
        endQuiz() {
            this.showCatSelect = true;
        },
        fetchToken() {
            return fetch('https://opentdb.com/api_token.php?command=request')
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Could not fetch questions');
                    }

                    return response.json();
                })
                .then((body) => {
                    return body.token;
                })
                .catch((err) => {
                    console.error(err);
                });
        },
    },
    created() {
        this.fetchToken().then((token) => {
            this.token = token;
        });
    },
};
</script>

<style></style>
