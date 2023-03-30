new Vue({
    el: '#desafio',
    data: {

        nome: 'Rayra Hyasmym',
        idade: 22,
        idamult: 22 * 3,
        ro: 0,
        img: 'https://images4.alphacoders.com/227/227926.jpg',
        valor: '',
        valor2: 0
    },
    watch: {
        resultado() {
            setTimeout()
        }
    },
    computed: {
        resultado(){
            return this.valor2 !== 37 ? "Valor diferente de 37" : ""
        }
    },
    methods: {
        rom(){
           this.ro = Math.random(0,1)
        },
        alert(){
            window.alert('sono')
        },
        armazena(){

        }

    },
});