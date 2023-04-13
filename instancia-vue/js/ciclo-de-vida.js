new Vue({
    beforeCreate() {
        console.log('Antes de Criar')
    },
    data: {
        titulo: 'Ciclo de Vida',
    },
    created() {
        console.log('Criado')
    },
    el: '#app',
    template: `
    <div>
    <h1>{{titulo}}</h1>
    <button @click="titulo += '?'">Alterar</button>
    <button @click="$destroy()">Destruir</button>
    </div>
    `,
    beforeMount() {
        console.log('Antes de Montar (DOM)')
    },
    mounted() {
        console.log('Montado (DOM)')
    },
    beforeUpdate() {
        console.log('Antes de Atualizar')
    },
    updated() {
        console.log('Atualizado')
    },
    //methods: {

    //},
    beforeDestroy() {
        console.log('Antes de Destruir')
    },
    destroyed() {
        console.log('Destruido')
    },
})