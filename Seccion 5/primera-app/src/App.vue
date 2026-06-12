<template>
  <div id="app">
    <app-header/>
    <h1>{{ title }}</h1>
    <button @click="Saludar">Say Hello</button>
    <hr>
    <div class="flex-container">
      <app-tarjeta-empleado v-for="(persona, i) in personas" :key="i" :nombre="persona.nombre" :tel="persona.tel" :correo="persona.correo"/>
    </div>
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
      personas:
        [
    {nombre:"Camila", tel:"245 54 54", correo:"camilo@vuecours.com"},
    {nombre:"José", tel:"422 23 23", correo:"jose@vuecours.com"},
    {nombre:"Francisco", tel:"278 93 54", correo:"pacho@vuecours.com"},
    {nombre:"Monica", tel:"255 55 55", correo:"mony@vuecours.com"},
    {nombre:"Guillermo", tel:"378 64 23", correo:"memo@vuecours.com"},
    {nombre:"Maria", tel:"123 46 87", correo:"mary@vuecours.com"},
]
      
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
.flex-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
