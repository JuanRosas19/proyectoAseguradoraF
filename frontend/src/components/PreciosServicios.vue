<template>
  <section id="servicio-precios" class="servicio-precios">
    <div class="container" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
      <div class="titulo-seguro">
        <h2>
          {{ informacionPrecios.titulo }}
          <strong class="texto-destacado">{{ informacionPrecios.destacado }}</strong>
        </h2>
        <p class="text-muted fst-italic">
          {{ informacionPrecios.subtitulo }}
        </p>
      </div>
      <div
        class="row justify-content-center"
        v-if="planesInformacion && planesInformacion.length"
      >
        <template v-for="(plan, index) in planesInformacion" :key="index">
          <div class="col-lg-5 mt-4 mt-lg-0">
            <div :class="['contenedor', {'plan-destacado':plan.esPremium}] ">
              <h3><strong>{{ plan.titulo }}</strong></h3>
              <h4><a>$</a>{{ plan.precio }}<span>Anualmente</span></h4>
              <ul v-if="plan.informacion && plan.informacion.length">
                <template
                  v-for="(info, index) in plan.informacion"
                  :key="index"
                >
                  <li
                    :class="
                      info.servicioDisponible ? '' : 'servicio-no-disponible'
                    "
                  >
                    <i
                      :class="
                        info.servicioDisponible ? 'fa-solid fa-check' : 'fa-solid fa-xmark'
                      "
                    ></i>
                    {{ info.titulo }}
                  </li>
                </template>
              </ul>
              <router-link to="/contacto" class="boton-accion"
                >Contáctanos
                <i class="fa-solid fa-angle-right"></i>
                </router-link
              >
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
  name: "PreciosServicios",
  props: {
    informacionPrecios: {
      type: Object,
      required: true,
    },
    planesInformacion: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    AOS.init({
      duration: 1000,
    })
  },
};
</script>

<style scoped>
.servicio-precios .row {
  padding-top: 40px;
}
.servicio-precios .contenedor {
  padding: 60px 40px;
  box-shadow: 0 3px 20px -2px rgba(20, 45, 100, 0.1);
  background: #fff;
  height: 100%;
  border-top: 4px solid #fff;
  border-radius: 5px;
}
.servicio-precios h3 {
  font-weight: 500;
  margin-bottom: 15px;
  font-size: 20px;
  color: var(--secundario);
}
.servicio-precios h4 {
  font-size: 48px;
  color: var(--secundario);
  font-weight: 400;
  font-family: "Jost", sans-serif;
  margin-bottom: 25px;
}
.servicio-precios h4 a {
  font-size: 28px;
}
.servicio-precios h4 span {
  color: var(--primario);
  font-size: 18px;
  display: block;
}
.servicio-precios ul {
  padding: 20px 0;
  list-style: none;
  color: #999;
  text-align: left;
  line-height: 20px;
}
.servicio-precios ul li {
  padding: 10px 0 10px 30px;
  position: relative;
}
.servicio-precios ul i {
  color: #28a745;
  font-size: 24px;
  position: absolute;
  left: 0;
  top: 6px;
}
.servicio-precios ul .servicio-no-disponible {
  color: #ccc;
  text-decoration: line-through;
}
.servicio-precios ul .servicio-no-disponible i {
  color: #ccc;
}
.servicio-precios .boton-accion {
  display: inline-block;
  padding: 12px 35px;
  border-radius: 50px;
  color: var(--primario);
  transition: none;
  font-size: 16px;
  font-weight: 500;
  font-family: "Jost", sans-serif;
  transition: 0.3s;
  border: 2px solid var(--primario);
}
.servicio-precios .boton-accion:hover {
  background: var(--primario);
  color: #fff;
}
.servicio-precios .plan-destacado {
  border-top-color: var(--primario);
}
.servicio-precios .plan-destacado .boton-accion {
  background: var(--primario);
  color: #fff;
}
.servicio-precios .plan-destacado .boton-accion:hover {
  background: #28a399;
}
@media (max-width: 992px) {
  .servicio-precios .contenedor {
    max-width: 60%;
    margin: 0 auto 30px auto;
  }
}
@media (max-width: 767px) {
  .servicio-precios .contenedor {
    max-width: 80%;
    margin: 0 auto 30px auto;
  }
}
@media (max-width: 420px) {
  .servicio-precios .contenedor {
    max-width: 100%;
    margin: 0 auto 30px auto;
  }
}
</style>