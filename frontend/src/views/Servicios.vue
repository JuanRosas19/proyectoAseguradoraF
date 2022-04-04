<template>
  <div>
    <Hero :titulos="tituloServicios" :layout="1" />
    <ServiciosComponente
      :servicios="serviciosCompletos"
      :servicioTitulo="serviciosTitulo"
      :mostrarBoton="false"
      :seccionOscura="true"
    />
    <PreciosServicios
      :planesInformacion="planesInformacion"
      :informacionPrecios="informacionPrecios"
    />
    <Suscripcion :suscripcion="suscripcionInformacion" />
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
import ServiciosComponente from "../components/Servicios.vue";
import Suscripcion from "../components/Suscripcion.vue";
import PreciosServicios from "../components/PreciosServicios.vue";
import {
  tituloServicios,
  serviciosCompletos,
  serviciosTitulo,
  suscripcionInformacion,
  informacionPrecios,
  planesInformacion,
} from "../constantes/main";
export default {
  name: "Servicios",
  data() {
    return {
      serviciosCompletos,
      serviciosTitulo,
      suscripcionInformacion,
      informacionPrecios,
      planesInformacion,
      tituloServicios
    };
  },
  components: {
    Hero,
    ServiciosComponente,
    Suscripcion,
    PreciosServicios,
  },
  mounted() {
    document.title = "Seguros H&H | Nuestros servicios";
    window.top.scrollTo(0, 0);
  },
};
</script>
<style scoped>
#hero {
  width: 100%;
  height: 80vh;
  background: linear-gradient(
      var(--gradiente-secundario),
      var(--gradiente-primario)
    ),
    url("../assets/img/bg-servicios.jpg") fixed center bottom;
  background-attachment: fixed;
}
</style>