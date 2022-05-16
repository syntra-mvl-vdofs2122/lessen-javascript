<template>
    <h1>Tabasco soup.</h1>
    <p>
        Combine melon, strawberries and bagel. mix with puréed lime and serve
        shreded with chicken lard. Enjoy!
    </p>
    <Rating :start-rating="3" @saved="saved" />

    <h1>Tabasco soup.</h1>
    <p>
        Combine melon, strawberries and bagel. mix with puréed lime and serve
        shreded with chicken lard. Enjoy!
    </p>
    <Rating :star-count="10" />
</template>

<script>
import Rating from './components/Rating.vue';

export default {
    components: {
        Rating,
    },
    data() {
        return {};
    },
    methods: {
        saved(rating) {
            console.log(rating);
        },
    },
    created() {},
};
</script>

<style></style>
