import Vue from 'vue';
import axios from 'axios';


Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: "https://api-vue-747ee-default-rtdb.firebaseio.com/",
        })
    }
})