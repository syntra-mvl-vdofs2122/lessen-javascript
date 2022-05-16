<template>
    <div v-if="!saved">
        <select name="rating" id="rating" v-model="rating">
            <option value="empty" disabled>Rate me!</option>
            <option v-for="num in starCount + 1" :value="num - 1">
                {{ num - 1 }}
            </option>
        </select>
        <button @click="rate"><i class="eva eva-save"></i></button>
    </div>
    <div v-else>
        <span class="stars">
            <i
                v-for="num in starCount"
                class="eva"
                :class="num <= rating ? 'eva-star' : 'eva-star-outline'"
            ></i>
        </span>
        <button @click="unRate"><i class="eva eva-edit" /></button>
    </div>
</template>

<script>
export default {
    emits: ['saved'],
    props: {
        starCount: {
            type: Number,
            default: 5,
        },
        startRating: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            rating: this.startRating,
            saved: this.startRating > 0,
        };
    },
    methods: {
        rate() {
            if (this.rating === 'empty') {
                return;
            }
            this.saved = true;

            this.$emit('saved', this.rating);
        },
        unRate() {
            this.saved = false;
        },
    },
};
</script>

<style>
select {
    display: inline-block;
}

.stars {
    padding-right: 10px;
}

.stars i {
    font-size: 28px;
    position: relative;
    top: 7px;
}
</style>
