<template>
  <div id="app">
    <app-header/>
    <h1>{{ title }}</h1>
    <button @click="Saludar">Say Hello</button>
    <hr>
    <app-tarjeta-empleado v-bind:nombre="nombre" :tel="15658874" profesion="QA" correo="qacamiolo@gmail.com" :hobbies="['cantar', 'bailar']" :carro="carro"/>
    <app-tarjeta-empleado :nombre="name" tel="" profesion="DEV" correo="superdevjuan@gmail.com" :hobbies="['pintar', 'leer']"
    :carro="{marca:'MADZA'}"/>
    <app-footer/>
  </div>
</template>

<script>
import tarjetaEmpleado from './components/TarjetaEmpleado.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    'app-header': Header,
    'app-tarjeta-empleado': tarjetaEmpleado,
    'app-footer': Footer
  },
  data() {
    return {
      title: 'Welcome to Your Vue.js App',
      nombre:"JaIMe",
      name:"lucia",
      carro:{marca:"BMW"}
    }
  },
  methods:{
    Saludar(){
      alert('Hola Mundo')
      this.title = 'Hola Mundo'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  color: green;
}
</style>
