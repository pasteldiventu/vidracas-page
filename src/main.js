import { createApp } from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import VueFeather from 'vue-feather'

import './assets/main.css'

const app = createApp(App)

app.component('VueFeather', VueFeather)

app.mount('#app')