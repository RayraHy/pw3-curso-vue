new Vue({
    el: '#app',
    data: {
        titulo: 'Teste',
        aula: 'Instacia Vue',
    },
    methods: {
        alterar() {
            this.titulo += '!';
        },
        alteraraula() {
            this.aula += '#';
        }
    }
});



/* Variavel global */
const inst = new Vue({
    //el: '#appe',
    data: {
        titulo: 'Teste',
    },
    methods: {
        alterar() {
            inst.titulo += '!';
        },
        
    }
});

inst.$mount('#appe');

const inst1 = new Vue({
    template: ' <div>{{titulo}}<button @click="alterar">Alterar</button></div> ',

    data: {
        titulo: 'Teste',
    },
    methods: {
        alterar() {
            this.titulo += '!';
        },
        
    }
});

inst1.$mount('#appa');