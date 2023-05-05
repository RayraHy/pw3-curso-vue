<template>
    <div class="citacoes">
        <span>
            <button @click="numero--">&lt;</button>
            <button @click="numero++">&gt;</button>
        </span>
        <!-- <div>{{ citacoes[indice].texto }}</div>
        <Citacao>
            <h2>Texto</h2>
        </Citacao>
        <Citacao></Citacao>
        <Citacao>
            <h1>{{ citacoes[indice].autor }}</h1>
            <P>{{ citacoes[indice].texto }}</P>
            <h6>{{ citacoes[indice].fonte }}</h6>
        </Citacao>-->
        <Citacao>
            <h1 slot="autor">{{ citacoes[indice].autor }}</h1>
            <P slot="texto">{{ citacoes[indice].texto }}</P>
            <h6 slot="fonte">{{ citacoes[indice].fonte }}</h6>
        </Citacao>
    </div>
</template>

<script>
import Citacao from '../components/Citacao.vue'

export default {
  components: { 
    Citacao 
},
    data() {
        return {
            numero: 0,
            citacoes: [{
                fonte: 'Jornal do Empreendedor',
                texto: 'Lembre-se sempre que você é absolutamente único. Assim como todos os outros.',
                autor: 'Margaret Mead'
            }, { 
                fonte: 'Frases de Mãe',
                texto: 'Isso não é um quarto, é um chiqueiro.',
                autor: 'Roberta'
            }, {
                fonte: 'Frases de Pai',
                texto: 'Vou contar até 3! 1, 2, 2...',
                autor: 'Gustavo'
            },
            {
                fonte: 'Preguisozo',
                texto: 'Preguisa',
                autor: 'Desmond'
            }]
        }
    },
    computed: {
        indice() {
            return Math.abs(this.numero % this.citacoes.length)
        }
    }
}
</script>

<style scoped>
    .citacoes {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
