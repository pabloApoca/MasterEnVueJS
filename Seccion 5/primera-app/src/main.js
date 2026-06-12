import { createApp } from 'vue'
import App from './App.vue'
import BtnState from './components/BtnState.vue'

const app = createApp(App)
app.component('app-btn-state', BtnState)
app.mount('#app')
