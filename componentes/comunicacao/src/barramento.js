import Vue from 'vue';

export default new Vue({
    methods: {
        altId(idade){
            this.$emit('idadeMudou', idade);
        },
        quandoIdMu(callback) {
            this.$on('idadeMudou', callback);
        }
    }
})