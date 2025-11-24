import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' // <--- SELLES OLIGI PROBLEEM (Impordime store.js faili)

import '@fortawesome/fontawesome-free/css/all.css'
import './assets/style.css'

createApp(App)
    .use(router)
    .use(store) // <--- SELLES OLIGI PROBLEEM (Ühendame store'i rakendusega)
    .mount('#app')