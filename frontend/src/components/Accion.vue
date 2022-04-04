<template>
  <section id="seccion-accion" class="seccion-accion">
    <div class="container" data-aos="fade-up">
      <div class="row">
        <div class="col-lg-9 text-center text-lg-start">
          <h3>{{ accion.titulo }}</h3>
          <p>
            {{ accion.subtitulo }}
          </p>
        </div>
        <div class="col-lg-3 seccion-accion-btn-container text-center">
          <router-link
            class="seccion-accion-btn align-middle"
            :to="accion.path"
            >{{ accion.tituloBoton }}
              <i :class="accion.iconoBoton"></i>
            </router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AOS from "aos"
export default {
  name: "Accion",
  props: {
    accion: {
      type: Object,
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
.seccion-accion {
  background: linear-gradient( var(--gradiente-primario),var(--gradiente-secundario)),
    url("../assets/img/bg-accion.jpg") fixed top center;
  background-size: cover;
  padding: 120px 0;
}
.seccion-accion h3 {
  color: #fff;
  font-size: 28px;
  font-weight: 700;
}
.seccion-accion p {
  color: #fff;
}
.seccion-accion .seccion-accion-btn {
  font-family: "Jost", sans-serif;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 12px 40px;
  border-radius: 50px;
  transition: 0.5s;
  margin: 10px;
  border: 2px solid #fff;
  color: #fff;
}
.seccion-accion .seccion-accion-btn:hover {
  background: var(--primario);
  border: 2px solid var(--primario);
}
@media (max-width: 1024px) {
  .seccion-accion {
    background-attachment: scroll;
  }
}
@media (min-width: 769px) {
  .seccion-accion .seccion-accion-btn-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>