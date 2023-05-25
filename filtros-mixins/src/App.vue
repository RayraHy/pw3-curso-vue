<template>
  <div id="app">
    <h1>Filtros e Mixins</h1>
    <hr>
    <p>{{ cpf | formataCpf | inverter }}</p>
    <hr>
    <h2>Frutas</h2>
    <ul>
      <li v-for="fruta in frutas" :key="fruta">
        {{ fruta }}
      </li>
    </ul>
    <input type="text" v-model="fruta" @keydown.enter="add" />
    <hr>
    <FutasV/>
  </div>
</template>

<script>
import FutasV from  './components/NewFutas.vue';
import Frutas from './mixins/Frutas';

export default {
  components: {
    FutasV
  },
  mixins: [Frutas],
  filters: {
    formataCpf(valor) {
      const array = valor.split('');
      array.splice(3, 0, '.');
      array.splice(7, 0, '.');
      array.splice(11, 0, '-');
      return array.join('');
    },
    inverter(valor) {
      return valor.split('').reverse().join('');
    },
  },
  data() {
    return {
      cpf: '12312315454',
    }
  },
  
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    font-size: 2.5rem;
  }
  input {
    font-size: 2.5rem;
  }
</style>