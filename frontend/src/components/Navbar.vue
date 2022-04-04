<template>
  <header ref="header" id="header" class="fixed-top">
    <div class="container d-flex align-items-center">
      <h1 class="logo me-auto">
        <router-link to="/">Seguros H&H</router-link>
      </h1>
      <nav id="navbar" ref="navbar" class="navbar">
        <ul>
          <template v-for="enlace in enlacesNavbar" :key="enlace.nombre">
            <li>
              <router-link
                :to="enlace.path"
                :class="[
                  { 'nav-link': !enlace.button },
                  { login: enlace.button },
                  { active: estaActivo(enlace.path) },
                ]"
                >{{ enlace.nombre }} <i :class="enlace.claseIcono"></i>
              </router-link>
            </li>
          </template>
            <li>
              <a
                v-if="autenticado"
                @click="cerrarSesion"
                :class="[
                  'nav-link', 'login', 'pointer',
                ]"
                >Cerrar sesión <i class="fa-solid fa-circle-xmark"></i>
              </a>
              
               <router-link
                v-if="!autenticado"
                to="/login"
                :class="[
                  'nav-link', 'login',
                  { active: estaActivo('/login') },
                ]"
                >Login <i class="fa fa-sign-in-alt"></i>
              </router-link>
            </li>
            <li>
              <a
                v-if="autenticado"
                :class="[
                  'nav-link', 'login', 'text-capitalize',
                ]"
                >{{usuarioNombre}} <i class="fa-solid fa-user"></i>
              </a>
            </li>
        </ul>
        <i
          @click="toggleNav"
          ref="button"
          class="bi bi-list navegacion-movil"
        ></i>
      </nav>
    </div>
  </header>
</template>

<script>
import { enlacesNavbar } from "../constantes/main";
export default {
  name: "Navbar",
  data() {
    return {
      enlacesNavbar,
    };
  },
  created(){
    this.$store.dispatch("obtenerUsuario")
  },
   computed: {
    autenticado() {
      return this.$store.state.isLogged;
    },
     usuarioNombre() {
      return this.$store.getters.nombreUsuario;
    },
  },
  methods: {
    estaActivo(ruta) {
      return this.$route.path === ruta;
    },
    toggleNav() {
      this.$refs.navbar.classList.toggle("contenedor-movil");
      this.$refs.button.classList.toggle("bi-list");
      this.$refs.button.classList.toggle("bi-x");
    },
    navbarFijo() {
      if (window.scrollY >= 100) {
        this.$refs.header.classList.add("header-fijo");
      } else {
        this.$refs.header.classList.remove("header-fijo");
      }
    },
    cerrarSesion() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
  mounted() {
    window.addEventListener("scroll", this.navbarFijo);
    window.addEventListener("load", this.navbarFijo);
  },
};
</script>

<style>
.pointer{
  cursor: pointer;
}
</style>