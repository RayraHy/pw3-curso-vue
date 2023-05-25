<template>
  <div id="app">
    <h2>Frutas</h2>
    <ul>
      <li v-for="fruta in frutas" :key="fruta">
        {{ fruta }}
      </li>
    </ul>
    <input type="text" v-model="fruta" @keydown.enter="add" />
  </div>
</template>

<script>
import Frutas from '../mixins/Frutas.js'

export default {
  mixins: [Frutas],
}
</script>

<style>

</style>