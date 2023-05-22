import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Contrasena from '../views/Contrasena.vue';
import FormCartilla from '../views/FormCartilla.vue';
import Login from '../views/Login.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/contrasena',
    name: 'Contrasena',
    component: Contrasena
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/formcartilla',
    name: 'FormCartilla',
    component: FormCartilla
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
