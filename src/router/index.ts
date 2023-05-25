import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import Contrasena from "../views/Contrasena.vue";
import FormCartilla from "../views/FormCartilla.vue";
import HomeCartilla from "../views/HomeCartilla.vue";
import Login from "../views/Login.vue";
import Condiciones from "../views/todocartilla/Condiciones.vue";
import Actos from "../views/todocartilla/Actos.vue";
import Recursos from "../views/todocartilla/Recursos.vue";
import HomePage from "../views/HomePage.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: { name: "Login" },
  },
  {
    path: "/contrasena",
    name: "Contrasena",
    component: Contrasena,
  }, 
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/search",
    name: "Search",
    component: HomePage,
  },
 {
    path: "/formcartilla",
    name: "FormCartilla",
    component: FormCartilla,
  }, 
  {
    path: "/homecartillas",
    name: "Homecartillas",
    component: HomeCartilla,
  },
  {
    path: "/condiciones",
    name: "Condiciones",
    component: Condiciones,
  },
  {
    path: "/actos",
    name: "Actos",
    component: Actos,
  },
  {
    path: "/recursos",
    name: "Recursos",
    component: Recursos,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
