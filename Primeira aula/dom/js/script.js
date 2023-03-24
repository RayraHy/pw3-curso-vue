new Vue({
    el: '#app',
    data: {
        nome: 'Rayra',
        sobrenome: 'Hyasmyn',
        link: 'https://www.google.com.br',
        linkHtml: '<a href="https://www.youtube.com">Yu</a>',
        pais: 'Argentina',

        contador: 0,
        contador1: 0,

        x: 0,
        y: 0,

    },
    methods: {
        nomeCompleto() {
            console.log(this);
            return `${this.nome} ${this.sobrenome}`
        },
        mudarPais() {
            this.pais = 'Brasil';
        },
        somar() {
            this.contador++
        },
        atualizarPoMouse(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        somaar(passo, bla) {
            this.contador1 = this.contador1 + passo;
            console.log(bla);
        },
        foiProGoo() {
            window.alert('Foi pro google');
            window.open(this.link, '_blank');
        },
        exibirAlerta() {
            window.alert()
        }
    }
});