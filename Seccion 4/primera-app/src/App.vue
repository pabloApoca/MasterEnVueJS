<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <button @click="Saludar">Say Hello</button>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
  data() {
    return {
      title: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    Saludar(){
      alert('Hello World')
      this.title = 'Hello World'
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
