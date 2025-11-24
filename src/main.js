import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' // SEE MIS VIGA TEKITAS: (Impordime store.js faili)

import '@fortawesome/fontawesome-free/css/all.css'
import './assets/style.css'

createApp(App)
    .use(router)
    .use(store) // <SEE MIS VIGA TEKITAS (Ühendame store'i rakendusega)
    .mount('#app')