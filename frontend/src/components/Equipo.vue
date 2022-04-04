<template>
  <section id="equipo-seguros" class="equipo-seguros">
    <div class="container"  data-aos="zoom-out-up">
      <div class="titulo-seguro">
        <h2>
          {{ informacionEquipo.titulo }}
          <strong class="texto-destacado">{{ informacionEquipo.destacado }}</strong>
        </h2>
        <p class="text-muted fst-italic">
          {{ informacionEquipo.texto }}
        </p>
      </div>
      <div class="row" v-if="equipoArray && equipoArray.length">
        <template v-for="(equipo, index) in equipoArray" :key="index">
          <div class="col-lg-6 mt-4 mt-lg-0">
            <div class="equipo d-flex align-items-start">
              <div class="imagen-equipo">
                <img
                  :src="equipo.foto"
                  class="img-fluid"
                  :alt="`Foto del miembro del equipo n° ${index + 1}.`"
                />
              </div>
              <div class="equipo-informacion">
                <h4>{{ equipo.nombre }}</h4>
                <span class="text-muted fst-italic">{{ equipo.rol }}</span>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import AOS from 'aos'
export default {
  name: "Equipo",
  props: {
    informacionEquipo: {
      type: Object,
      required: true,
    },
    equipoArray: {
      type: Array,
      required: true,
    },
  },
  mounted(){
    AOS.init({
      duration: 1000,
    })
  }
};
</script>

<style scoped>
.equipo-seguros .equipo {
  position: relative;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  padding: 30px;
  border-radius: 5px;
  background: #fff;
  transition: 0.5s;
}
.equipo-seguros .equipo .imagen-equipo {
  overflow: hidden;
  width: 180px;
  border-radius: 50%;
}
.equipo-seguros .equipo .imagen-equipo img {
  transition: ease-in-out 0.3s;
}
.equipo-seguros .equipo:hover {
  transform: translateY(-10px);
}
.equipo-seguros .equipo .equipo-informacion {
  padding-left: 30px;
}
.equipo-seguros .equipo h4 {
  font-weight: 700;
  margin-bottom: 5px;
  font-size: 20px;
  color: var(--secundario);
}
.equipo-seguros .equipo span {
  display: block;
  font-size: 15px;
  padding-bottom: 10px;
  position: relative;
  font-weight: 500;
}
.equipo-seguros .equipo span::after {
  content: "";
  position: absolute;
  display: block;
  width: 50px;
  height: 1px;
  background: #cbd6e9;
  bottom: 0;
  left: 0;
}
</style>