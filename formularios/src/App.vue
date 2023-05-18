<template>
	<div id="app">
		<h1>Registrar Reclamação</h1>
		<div class="conteudo">
			<form class="painel">
				<div class="cabecalho">Formulário</div>
					<Rotulo nome="E-mail">
						<input type="text" v-model.lazy="form.email">
					</Rotulo>
					<Rotulo nome="Senha">
						<input type="password" v-model.trim="form.senha">
					</Rotulo>
					<Rotulo nome="Idade">
						<!--devolve um numero en vez de string como normalmente e devolvido pelo input-->
						<input type="number" v-model.number="form.idade"> 
					</Rotulo>
					<Rotulo nome="Mensagem">
						<textarea name="" cols="30" rows="5" v-model="form.mensage"></textarea>
					</Rotulo>
					<Rotulo nome="Características do Problema">
						<span class="mr-4"><input type="checkbox" value="reproduzivel" v-model="form.carac"> Reproduzível</span>
						<span><input type="checkbox" value="intermitente" v-model="form.carac"> Intermitente</span>
					</Rotulo>
					<Rotulo nome="Qual produto?">
						<span class="mr-4"><input type="radio" v-model="form.produto" :value="1"> Web</span>
						<span class="mr-4"><input type="radio" v-model="form.produto" :value="2"> Mobile</span>
						<span><input type="radio" v-model="form.produto" :value="3"> Outro</span>
					</Rotulo>
					<Rotulo nome="Prioridade">
						<select name="" id="">
							<option></option>
						</select>
					</Rotulo>
					<Rotulo nome="Primeira Reclamação?">
						<Escolha />
					</Rotulo>
				<hr>
				<button>Enviar</button>
			</form>
			<div class="painel">
				<div class="cabecalho">Resultado</div>
				<Rotulo nome="E-mail">
					<span>{{ form.email }}</span>
				</Rotulo>
				<Rotulo nome="Senha">
					<span>{{ form.senha }}</span>
				</Rotulo>
				<Rotulo nome="Idade">
					<span>{{ form.idade }}</span>
				</Rotulo>
				<Rotulo nome="Mensagem">
					<span style="white-space: pre;">{{ form.mensage }}</span>
				</Rotulo>
				<Rotulo nome="Marque as Opções">
					<span>
						<!--{{form.carac}}-->
						<ul>
							<li v-for="c in form.carac" :key="c">{{c}}</li>
						</ul>
					</span>
				</Rotulo>
				<Rotulo nome="Qual produto?">
					<span>{{ form.produto }} - {{ typeof form.produto}}</span>
				</Rotulo>
				<Rotulo nome="Prioridade">
					<span>???</span>
				</Rotulo>
				<Rotulo nome="Primeira Reclamação?">
					<span>???</span>
				</Rotulo>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import Escolha from './components/Escolha.vue'

export default {
	name: 'app',
	components: { Rotulo, Escolha },
	data() {
		return {
			form: {
				email: 'defaut@email.com',
				senha: '',
				//idade: 2,
				idade: '',
				mensage: '',
				carac: ["intermitente"],
				produto:'2',
			}
		}
	}
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
