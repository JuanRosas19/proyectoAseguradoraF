<template>
  <div>
    <Hero
      :titulos="titulosNosotros"
      :layout="2"
      :imagen="require('@/assets/img/nosotros.jpg')"
    />
    <NosotrosComponent
      :layout="3"
      :informacionNosotrosLayout3="informacionNosotrosLayout3"
    />
    <NosotrosComponent
      :layout="1"
      :textosBenficios="textosBenficiosNosotros"
      :beneficiosNosotros="valoresNosotros"
    />
    <Equipo :equipoArray="equipoArray" :informacionEquipo="informacionEquipo" />
    <Accion :accion="accionInformacion" />
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
import NosotrosComponent from "../components/Nosotros.vue";
import Equipo from "../components/Equipo.vue";
import Accion from "../components/Accion.vue";
import {
  informacionNosotrosLayout3,
  titulosNosotros,
  textosBenficiosNosotros,
  valoresNosotros,
  accionInformacion,
  equipoArray,
  informacionEquipo,
} from "../constantes/main";
export default {
  name: "Nosotros",
  data() {
    return {
      informacionEquipo,
      informacionNosotrosLayout3,
      titulosNosotros,
      textosBenficiosNosotros,
      valoresNosotros,
      accionInformacion,
      equipoArray,
    };
  },
  components: { Hero, NosotrosComponent, Equipo, Accion },
  mounted() {
    document.title = "Seguros H&H | Conoce nuestra misión";
    window.top.scrollTo(0, 0);
  },
};
</script>

<style scoped>
#hero {
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      var(--gradiente-secundario),
      var(--gradiente-primario)
    ),
    url("../assets/img/bg-nosotros.jpg") fixed center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
.bg-img {
  background: url("../assets/img/bg-nosotros.jpg");
}
</style>