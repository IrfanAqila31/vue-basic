import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './components/router'

// membuat komponen secara global
import MainButton from './components/MainButton.vue'
const app = createApp(App)

app.use(router)
app.provide('nameApp', 'Aplikasi Saya')
app.component('MainButton', MainButton)

app.mount('#app')
// membuat komponen secara global

// Default
// createApp(App).mount('#app')
