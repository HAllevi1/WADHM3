import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'                 // <-- import store
import '@fortawesome/fontawesome-free/css/all.css'
import './assets/style.css'

createApp(App)
  .use(router)
  .use(store)                              // <-- register store
  .mount('#app')