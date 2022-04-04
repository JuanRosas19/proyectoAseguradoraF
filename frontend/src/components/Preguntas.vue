<template>
  <section id="preguntas" class="preguntas bg-seccion">
    <div class="container" data-aos="flip-up">
      <div class="titulo-seguro">
        <h2>
          {{ informacionPreguntas.titulo }}
          <strong class="texto-destacado"
            >{{ informacionPreguntas.destacado }}
          </strong>
        </h2>
        <p class="text-muted fst-italic">
          {{ informacionPreguntas.subtitulo }}
        </p>
      </div>

      <div class="listado-preguntas">
        <ul v-if="preguntas && preguntas.length">
          <template v-for="(pregunta, index) in preguntas" :key="index">
            <li>
              <i class="fa-solid fa-circle-question icono-pregunta"></i>
              <a
                data-bs-toggle="collapse"
                :data-bs-target="`#listado-preguntas-${index + 1}`"
                class="collapse"
                >{{ index + 1 }}. {{ pregunta.titulo }}
                <i class="fa-solid fa-angle-down icono-abrir"></i
              ></a>
              <div
                :id="`listado-preguntas-${index + 1}`"
                :class="['collapse', { show: index + 1 === 1 }]"
                data-bs-parent=".listado-preguntas"
              >
                <p>
                  {{ pregunta.respuesta }}
                </p>
              </div>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import AOS from "aos";
export default {
  name: "Preguntas",
  props: {
    informacionPreguntas: {
      type: Object,
      required: true,
    },
    preguntas: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    AOS.init({
      duration: 1000,
      once: true,
    });
  },
};
</script>

<style scoped>
.preguntas .listado-preguntas {
  padding: 0 100px;
}
.preguntas .listado-preguntas ul {
  padding: 0;
  list-style: none;
}
.preguntas .listado-preguntas li + li {
  margin-top: 15px;
}
.preguntas .listado-preguntas li {
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  position: relative;
}
.preguntas .listado-preguntas a {
  display: block;
  position: relative;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  padding: 0 30px;
  outline: none;
  cursor: pointer;
}
.preguntas .listado-preguntas .icono-pregunta {
  font-size: 24px;
  position: absolute;
  right: 0;
  left: 20px;
  color: var(--primario);
}
.preguntas .listado-preguntas .icono-abrir {
  font-size: 24px;
  position: absolute;
  right: 0;
  top: 0;
}
.preguntas .listado-preguntas p {
  margin-bottom: 0;
  padding: 10px 0 0 0;
}

@media (max-width: 1200px) {
  .preguntas .listado-preguntas {
    padding: 0;
  }
}
</style>