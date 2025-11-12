import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './pages/MainPage.vue'
import SignupPage from './pages/SignupPage.vue'
import AddPostPage from './pages/AddPostPage.vue'


const routes = [
  { path: '/add-post', component: AddPostPage },
  { path: '/', component: MainPage },
  { path: '/signup', component: SignupPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
