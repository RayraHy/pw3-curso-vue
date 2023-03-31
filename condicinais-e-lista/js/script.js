new Vue({
    el: '#app', 
    data() {
        return {
            nome: 'jorge',
            logado: false,
            anonimo: false,
            cores: ['Vermelho','azul','Amarelo','Verde','Vai dormi'],
            pessoas: [
                {
                    nome: 'Ana',
                    idade: 10,
                    peso: 32
                },
                {
                    nome: 'Jaz',
                    idade: 9,
                    peso: 30
                },
                {
                    nome: 'Criz',
                    idade: 7,
                    peso: 32
                },
            ]
        }
    }
});