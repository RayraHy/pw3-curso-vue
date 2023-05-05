<template>
  <v-app>
    <v-navigation-drawer app>
      <Toolbar></Toolbar>

      <v-divider></v-divider>

      <List></List>
    </v-navigation-drawer>

    <Bar></Bar>

    <Carrosel></Carrosel>

    <Footer></Footer>
  </v-app>
</template>

<script>
import Carrosel from './componentes/Carrosel.vue'
import Footer from '../src/componentes/Footer.vue'
import Bar from '../src/componentes/Bar.vue'
import List from '../src/componentes/List.vue'
import Toolbar from '../src/componentes/Toolbar.vue'


export default {
  
  components: {
    Carrosel,
    Footer,
    Bar,
    List,
    Toolbar
  },
  
  
}
</script>
