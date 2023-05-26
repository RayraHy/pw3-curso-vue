<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome: {{ nomeInvertido }}</p>
        <p>Idade: {{ idade }}</p>
        <button @click="trNome">Trocar Nome</button>
        <button @click="trNomeCall">Trocar Nome com Callback</button>
    </div>
</template>

<script>
import barramento from '../barramento'; 

export default {
    // props: ['nome']
    props: {
        //nome: String
        nome : {
            type: String, 
            /* ou
            type: String|Number|Object, 
            e
            required: true, ou */
            default: 'Algo para subistiuir'
            /* ou
            default: function () {
                return 'Beto'
            }
            */
        },
        trNomeCall: {
            type: Function,
            required: true,
        }

    },
    data() {
        return {
            idade: 0
        }
    },
    created() {
        barramento.quandoIdMu(idade => this.idade = idade);
    },
    computed: {
        nomeInvertido() {
            return this.nome.split('').reverse().join('');
        }
    },
    methods: {
        trNome() {
            this.$emit('nomeMudou', 'Sebastian');
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
