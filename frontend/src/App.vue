<template>
  <div>
    <Navbar />
    <router-view v-slot="{ Component, route }">
      <transition name="fade">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
    <BotonVolver />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import BotonVolver from "./components/BotonVolver.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    BotonVolver,
  },
  methods: {},
  mounted() {},
};
</script>


<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.texto-destacado{
  font-family: 'Pacifico', cursive;
}
.boton-volver {
  position: fixed;
  right: 15px;
  bottom: 15px;
  z-index: 996;
  background: var(--primario);
  width: 40px;
  height: 40px;
  border-radius: 50px;
  transition: all 0.4s;
  border: none;
}
.boton-volver i {
  font-size: 24px;
  color: #fff;
  line-height: 0;
}
.boton-volver:hover {
  background: #6bc1e9;
  color: #fff;
}
.boton-volver.active {
  visibility: visible;
  opacity: 1;
}

.bg-seccion {
  background-color: #f3f5fa;
}
body {
  font-family: "Open Sans", sans-serif;
  color: #444444;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Jost", sans-serif;
}

#header {
  transition: all 0.5s;
  z-index: 997;
  padding: 15px 0;
}
#header.header-fijo {
  background: rgb(12 80 74);
}
#header .logo {
  font-size: 30px;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
}
#header .logo a {
  color: #fff;
}
#header .logo img {
  max-height: 40px;
}

section {
  padding: 60px 0;
  overflow: hidden;
}

.titulo-seguro {
  text-align: center;
  padding-bottom: 30px;
}
.titulo-seguro h2 {
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
  color: var(--secundario);
}
.titulo-seguro h2::before {
  content: "";
  position: absolute;
  display: block;
  width: 120px;
  height: 1px;
  background: #ddd;
  bottom: 1px;
  left: calc(50% - 60px);
}
.titulo-seguro h2::after {
  content: "";
  position: absolute;
  display: block;
  width: 40px;
  height: 3px;
  background: var(--primario);
  bottom: 0;
  left: calc(50% - 20px);
}
.titulo-seguro p {
  margin-bottom: 0;
}
</style>
