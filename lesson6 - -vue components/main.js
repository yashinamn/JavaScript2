const app = new Vue({
    el: '#app',
    data: {
        currentTab: 'one',
        tabs: ['one', 'two', 'three']
    },
    computed: {
        compCurrentTab(){
           return `comp-${this.currentTab}`;
        }
    }
})


//const app = new Vue ({
//    data: {
//        text: "Some string",
//            title: 'Hi!',
//            counter: 0
//    },
//    components: {
//        el: el,
//        error: error
//    },
//    methods: {
//        increase(some){
//            this.counter++;
//            console.log(some);
//            console.log(this);   
//        },
//        decrease(some){
//            this.counter--;
//            console.log(some);
//            console.log(this);   
//        },
//        any(){
//            console.log(this.$refs.some.prop);
//            
//        }
//    },
//    el: '#app',
//});