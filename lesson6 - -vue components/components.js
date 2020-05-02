Vue.component('comp-one', {
    template: `<div class="comp-one">1. lorem10</div>`
});

Vue.component('comp-two', {
    template: `<div class="comp-two">2. lorem20</div>`
});

Vue.component('comp-three', {
    template: `<div class="comp-three">3. lorem30</div>`
});

//глобальная регистрация
//Vue.component('el', {
//    props: ['title', 'counter'],
//    data(){
//        return {
//            prop: 123,
//        }
//    },
//    methods: {
//        increase() {
//            this.counter++
//        },
//    },
//    template: `<div class="somee">
//                    <h2>{{ title }}</h2> 
//                    <h2> {{counter}} </h2>
//                    <error></error>
//                    <button @click="$emit('increase', 123)">+</button>
//                    <button @click="$emit('decrease', 123)">-</button>
//                </div>`,
//});
//
//Vue.component('error', {
//    template: `<p>Error</p>`
//});

//Локальная регистрация

//const el = {
//    props: ['title', 'counter'],
//    data(){
//        return {
//            prop: 123,
//        }
//    },
//    methods: {
//        increase() {
//            this.counter++
//        },
//    },
//    template: `<div class="somee">
//                    <h2>{{ title }}</h2> 
//                    <h2> {{counter}} </h2>
//                    <error></error>
//                    <button @click="$emit('increase', 123)">+</button>
//                    <button @click="$emit('decrease', 123)">-</button>
//                </div>`,
//};
//
//const error = {
//    template: `<p>Error</p>`
//};