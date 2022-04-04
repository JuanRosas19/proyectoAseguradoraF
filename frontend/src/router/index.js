import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Nosotros from '../views/Nosotros.vue';
import Servicios from '../views/Servicios.vue';
import Contacto from '../views/Contacto.vue';
import Registro from '../views/Registro.vue';
import Login from '../views/Login.vue';
import NoEncontrado from '../views/NoEncontrado.vue';
import {TOKEN}  from "../store/index"

export default createRouter({
  history: createWebHistory(),
   routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/nosotros',
      name: 'Nosotros',
      component: Nosotros,
    },
    {
      path: '/servicios',
      name: 'Servicios',
      component: Servicios,
    },
    {
      path: '/contacto',
      name: 'Contacto',
      component: Contacto,
    },
    {
      path: '/registro',
      name: 'Registro',
      component: Registro,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem(TOKEN)) {
          next('/');
        } else {
          next();
        }
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem(TOKEN)) {
          next('/');
        } else {
          next();
        }
      }
    },
    { path: '/:pathMatch(.*)*', component: NoEncontrado },
  ],
});

