<template>
  <nav class="menu">
    <ul>
        <router-link tag="li" :to="{name: 'inicio'}" active-class="active" exact><a>Inicio</a></router-link>
        <router-link tag="li" :to="{name: 'usuario'}" active-class="active"><a>Usuario</a></router-link>
    </ul>
  </nav>
</template>

<script>

export default {

}
</script>

<style>

</style>