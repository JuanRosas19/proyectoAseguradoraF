import { createStore } from 'vuex'
import {obtenerToken} from "../servicios/main"
import Swal from 'sweetalert2'
export const TOKEN = 'token-usuario'
export default createStore({
  state: {
    usuarioLogueado:{},
    isLogged:false,
    token: localStorage.getItem(TOKEN) || '',
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
    setUsuario(state, payload) {
      state.usuarioLogueado = payload;
    },
    setIslogged(state, payload) {
      state.isLogged = payload;
    },
    setStore(state) {
      (state.token = null), (state.usuarioLogueado = {});
      state.isLogged = false;
    },
  },
  actions: {
    toastAlerta(context, payload) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: payload.icono,
        title: payload.mensaje,
      });
    },
    logout(context) {
      localStorage.removeItem(TOKEN);
      context.commit('setStore');
    },
    establecerDatos(context, payload) {
      const { id, nombre , usuario} = obtenerToken(payload);
      const usuarioLogueado = {
        id,
        usuario,
        nombre,
      };
      localStorage.setItem(TOKEN, payload);
      context.commit('setToken', payload);
      context.commit('setUsuario', usuarioLogueado);
      context.commit('setIslogged', true);
    },
    obtenerUsuario(context) {
      const token = localStorage.getItem(TOKEN);
      if (token) {
        return context.dispatch('establecerDatos', token);
      } else {
        context.commit('setStore');
      }
    },
  },
  getters: {
    nombreUsuario: (store) => {
      return store.usuarioLogueado.nombre;
    }
    },
})
