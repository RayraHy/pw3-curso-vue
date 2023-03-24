new Vue({
    el: '#desafio',
    data: {

        nome: 'Rayra Hyasmym',
        idade: 22,
        idamult: 22 * 3,
        ro: 0,
        img: 'https://images4.alphacoders.com/227/227926.jpg',


    },
    methods: {
        rom(){
           this.ro = Math.random(0,1)
        },
        alert(){
            window.alert('sono')
        }

    },
});