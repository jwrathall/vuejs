//https://www.sitepoint.com/up-and-running-vue-js-2-0/
//https://github.com/jackfranklin/vue2-demo-proj

import Vue from 'vue'

import AppComponent from './App/index.vue'

var vm = new Vue({
    el:'#app',
    components:{
        app:AppComponent,
    },
    render: h => h('app',)
})

