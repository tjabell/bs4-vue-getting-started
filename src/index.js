import 'bootstrap'
import style from './custom.scss'
import hero from './Hero.vue'
import Vue from 'vue'

var vm = new Vue({
    el: '#app',
    components: {
        'hero': hero
    }
})
