<template>
  <div>
    <Hero :titulos="tituloContacto" :layout="1" />
    <Preguntas 
      :informacionPreguntas="informacionPreguntas"
      :preguntas="preguntas"
    />
    <FormularioContacto
      :informacionContacto="informacionContacto"
     />
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
import Preguntas from "../components/Preguntas.vue";
import FormularioContacto from "../components/FormularioContacto.vue";
import { tituloContacto, informacionContacto, informacionPreguntas, preguntas } from "../constantes/main";
export default {
  components: { Hero, FormularioContacto, Preguntas },
  name: "Contacto",
  data() {
    return {
      tituloContacto,
      informacionContacto,
      informacionPreguntas,
      preguntas
    };
  },
  mounted(){
    document.title = "Seguros H&H | Comunicate con nosotros";
    window.top.scrollTo(0, 0);
  }
};
</script>

<style scoped>
#hero {
  width: 100%;
  height: 80vh;
  background: linear-gradient(var(--gradiente-secundario), var(--gradiente-primario)),
    url("../assets/img/bg-contacto.jpg") fixed center center;
  background-attachment: fixed;
}
</style>