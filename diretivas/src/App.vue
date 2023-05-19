<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<p v-html="'Usando diretiva <strong>v-html</strong>'"></p>
		<p v-text="'Usando diretiva <strong>v-text</strong>'"></p>

		<p v-criadapormin="'purple'"> Deretiva personalizada </p>
		<p v-nome:arg.modifa.modifb.modifc="valor"> Argumentos </p>
		<p v-desta:fundo.atrasar="'ligthtblue'">Personalizada</p>
		<p v-desta.atrasar="'pink'">Personalizada</p>
		<p v-desta:fundo.atrasar.alterar="destaconf">Personalizada</p>

	</div>
</template>

<script>
export default {
	directives: {
		criadapormin: {
			bind(el, binding, vnode) {
				el.style.color = binding.value;
				// el.style.color = 'red' 
			},
		},
		desta: {
			bind(el, binding, vnode) {
				const aplicarCor = cor => {
					if(binding.arg === 'fundo') {
						el.style.backgroundColor = 'dark'
					}
					else {
						el.style.color = cor;
					}

					let atraso = 0;
					if(binding.modifiers['atrasar']) {
						atraso = binding.value.atraso;
					}

					const cor1 = binding.value.cor1;
					const cor2 = binding.value.cor2;
					let corAtual = cor1;

					setTime(() => {
						if (binding.modifiers['alterna']) {
							setInterval(() => {
								corAtual = corAtual === cor1 ? cor2 : cor1
								aplicarCor(corAtual);
							}, binding.value.intervalo)
						} else {
							aplicarCor(binding.value.cor1);
						}
					}, atraso)
				}

				}
			}
		},
	
	data() {
		return {
			destaconf: {
				cor1: 'green',
				cor2: 'red',
				atraso: 2000,
				intervalo: 200,
			}
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
