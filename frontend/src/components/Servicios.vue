<template>
  <section id="servicios-seguros" :class="['servicios-seguros', {'bg-seccion':seccionOscura}] ">
    <div class="container" data-aos="zoom-in">
      <div class="titulo-seguro">
        <h2>
          {{ servicioTitulo.titulo }}
          <strong class="texto-destacado">{{ servicioTitulo.destacado }}</strong>
        </h2>
        <p class="text-muted fst-italic">
          {{ servicioTitulo.parrafo }}
        </p>
      </div>

      <div class="row" v-if="servicios && servicios.length">
        <template v-for="(servicio, index) in servicios" :key="index">
          <div class="col-xl-4 my-2 col-md-6 d-flex align-items-stretch">
            <div class="tarjeta-servicios">
              <div class="servicio-icono text-center"><i :class="servicio.icono"></i></div>
              <h4 class="text-center">{{ servicio.titulo }}</h4>
              <p class="text-muted text-center">
                {{ servicio.descripcion }}
              </p>
            </div>
          </div>
        </template>
      </div>
      <div class="text-center" v-if="mostrarBoton">
          <router-link to="/servicios"  class="text-center btn boton-servicios ">Núestros servicios <i class="fa-solid fa-lock"></i> </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import AOS from "aos" 
export default {
  name: "Servicios",
  props: {
    seccionOscura:{
      type:Boolean,
      required:false,
      default:false
    },
    mostrarBoton:{
      type: Boolean,
      required:false,
      default: true
    },
    servicioTitulo: {
      type: Object,
      required: true,
    },
    servicios: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    AOS.init({
      duration: 1000,
    });
  },
};
</script>

<style scoped>
.boton-servicios{
  background: var(--primario);
  border-radius: 2em;
  color:#fff;
  margin: 1em;
  padding: 10px;
  transition: all 0.4s;
}
.boton-servicios:hover{
  color:#fff;
  background: #23aca0e6
}
.servicios-seguros .tarjeta-servicios {
  box-shadow: 0px 0 25px 0 rgba(0, 0, 0, 0.1);
  padding: 50px 30px;
  transition: all ease-in-out 0.4s;
  background: #fff;
}
.servicios-seguros .tarjeta-servicios .servicio-icono {
  margin-bottom: 10px;
}
.servicios-seguros .tarjeta-servicios .servicio-icono i {
  color: var(--primario);
  font-size: 36px;
  transition: 0.3s;
}
.servicios-seguros .tarjeta-servicios h4 {
  font-weight: 500;
  margin-bottom: 15px;
  font-size: 24px;
}
.servicios-seguros .tarjeta-servicios h4 a {
  color: var(--secundario);
  transition: ease-in-out 0.3s;
}
.servicios-seguros .tarjeta-servicios p {
  line-height: 24px;
  font-size: 14px;
  margin-bottom: 0;
}
.servicios-seguros .tarjeta-servicios:hover {
  transform: translateY(-10px);
}
.servicios-seguros .tarjeta-servicios:hover h4 a {
  color: var(--primario);
}
</style>