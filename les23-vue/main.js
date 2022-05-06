Vue.createApp({
    data() {
        return {
            name: 'Korneel',
            count: 0,
            pId: 'first-p',
            disableBtn: true,
            names: { Korneel: 30, Ernest: 23, Willy: 55 },
        };
    },
    methods: {
        btnClicked(event) {
            this.count++;

            this.names.Korneel++;
        },
        toggleCount() {
            this.disableBtn = !this.disableBtn;
        },
    },
    computed: {
        pClasses() {
            console.log('pClasses');
            return {
                red: this.disableBtn,
                blue: !this.disableBtn,
            };
        },
    },
    beforeCreate() {
        console.log('beforeCreate');
        console.log(this.name);
    },
    created() {
        console.log('created');
        console.log(this.name);
    },
    beforeMount() {
        console.log('beforeMount');
    },
    mounted() {
        console.log('mounted');
    },
    beforeUpdate() {
        console.log('beforeUpdate');
    },
    updated() {
        console.log('updated');
    },
}).mount('#app');
