<template>
  <div>
    <Hero :titulos="titulos" :layout="1" :btnInfo="btnInfo" />
    <Nosotros :textoNosotros="textoNosotros" :layout="2" />
    <Nosotros :layout="1" :beneficiosNosotros="beneficiosNosotros" :textosBenficios="textosBenficiosInfo" />
    <Servicios :servicios="servicios" :servicioTitulo="serviciosTitulo" />
    <Accion :accion="accionInformacion" />
    <Suscripcion :suscripcion="suscripcionInformacion" />
  </div>
</template>

<script>
import AOS from "aos"
import Hero from "../components/Hero.vue";
import Nosotros from "../components/Nosotros.vue";
import Suscripcion from "../components/Suscripcion.vue";
import Servicios from "../components/Servicios.vue";
import Accion from "../components/Accion.vue";
import {
  beneficiosNosotros,
  textoNosotros,
  textosBenficiosInfo,
  titulos,
  btnInfo,
  servicios,
  serviciosTitulo,
  accionInformacion,
  suscripcionInformacion,
} from "../constantes/main";
export default {
  name: "Home",
  data() {
    return {
      beneficiosNosotros,
      textoNosotros,
      textosBenficiosInfo,
      titulos,
      btnInfo,
      servicios,
      serviciosTitulo,
      accionInformacion,
      suscripcionInformacion,
    };
  },
  components: {
    Hero,
    Suscripcion,
    Nosotros,
    Servicios,
    Accion,
  },
  mounted() {
    document.title = "Seguros H&H | Tu mejor aliado en seguros.";
    AOS.init()
    window.top.scrollTo(0, 0);
  },
};
</script>

<style scoped>
#hero {
  width: 100%;
  height: 80vh;
  background: linear-gradient(var(--gradiente-secundario), var(--gradiente-primario)),
    url("../assets/img/bg-hero.jpg") fixed center center;
  background-attachment: fixed;
}
</style>