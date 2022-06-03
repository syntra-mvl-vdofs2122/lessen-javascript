<template>
    <h1>Index.vue</h1>
</template>

<script>
export default {
    name: 'Index.vue',
    created() {
        console.log(this.$route);

        if (this.$route.query.test === 'test') {
            this.$router.push('/about');
        }
    },
};
</script>

<style scoped></style>
