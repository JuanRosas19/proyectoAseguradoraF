<template>
  <section
  >
    <template v-if="layout === 1">
      <section id="nosotros" class="nosotros bg-seccion"  >
        <div class="container-fluid" data-aos="fade-up" >
          <div class="row">
            <div class="col-lg-5 align-items-stretch img bg-img">&nbsp;</div>
            <div
              class="
                col-lg-7
                d-flex
                flex-column
                justify-contenido-center
                align-items-stretch
              "
            >
              <div class="contenido">
                <h3>
                  {{ textosBenficios.titulo }}
                  <strong class="texto-destacado">{{ textosBenficios.tituloDestacado }}</strong>
                </h3>
                <p>
                  {{ textosBenficios.parrafo }}
                </p>
              </div>

              <div class="lista-acordeon">
                <ul v-if="beneficiosNosotros && beneficiosNosotros.length">
                  <template
                    v-for="(beneficio, index) in beneficiosNosotros"
                    :key="index"
                  >
                    <li>
                      <a
                        data-bs-toggle="collapse"
                        class="colapsar"
                        :data-bs-target="`#lista-acordeon-${index + 1}`"
                        ><span>{{ index + 1 }}</span> {{ beneficio.titulo }}
                        <i class="fa-solid fa-angle-down icono-cerrado"></i
                      ></a>
                      <div
                        :id="`lista-acordeon-${index + 1}`"
                        :class="['collapse', { show: index + 1 === 1 }]"
                        data-bs-parent=".lista-acordeon"
                      >
                        <p>
                          {{ beneficio.texto }}
                        </p>
                      </div>
                    </li>
                  </template>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>
    <template v-if="layout === 2">
      <section id="nosotros-layout-2" class="nosotros-layout-2">
        <div class="container" data-aos="fade-up">
          <div class="titulo-seguro">
            <h2>
              {{ textoNosotros.titulo }}
              <strong class="texto-destacado">{{ textoNosotros.destacado }} </strong>
            </h2>
          </div>

          <div class="row contenido">
            <div class="col-lg-6">
              <p>
                {{ textoNosotros.parrafo }}
              </p>
              <ul
                v-for="(info, index) in textoNosotros.informacion"
                :key="index"
              >
                <li><i :class="info.icono"></i> {{ info.texto }}</li>
              </ul>
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0">
              <p class="text-muted fst-italic">
                {{ textoNosotros.descripcion }}.
              </p>
              <router-link to="/nosotros" class="btn-nosotros"
                >Conoce más <i :class="textoNosotros.iconoBoton"></i>
              </router-link>
            </div>
          </div>
        </div>
      </section>
    </template>
    <template v-if="layout === 3">
      <section id="nosotros-layout-3" class="nosotros-layout-3">
        <div class="container" data-aos="fade-up-right">
          <div class="row">
            <div class="col-lg-6 d-flex align-items-center">
              <img
                :src="informacionNosotrosLayout3.imagen"
                class="img-fluid radius"
                alt="Imagen Nosotros"
              />
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0 contenido">
              <h3>
                {{informacionNosotrosLayout3.titulo}} <strong class="texto-destacado">{{informacionNosotrosLayout3.textoDestacado}} </strong>
              </h3>
              <p class="text-muted fst-italic">
               {{informacionNosotrosLayout3.subtitulo}}
              </p>
              <p class="text-muted fst-italic">
                {{informacionNosotrosLayout3.texto}}
              </p>
            </div>
          </div>
        </div>
      </section>
    </template>
  </section>
</template>

<script>
import AOS from "aos" 
export default {
  name: "Nosotros",
  props: {
    beneficiosNosotros: {
      type: Array,
      default: () => [],
    },
    layout: {
      type: Number,
      required: true,
    },
    textosBenficios: {
      type: Object,
      required: false,
      default: {
        titulo: "Nosotros",
        tituloDestacado: "Beneficios",
        parrafo:
          "Nuestra empresa cuenta con una amplia experiencia en el sector de la seguros, con el objetivo de brindarle un servicio de calidad y de excelencia, con una amplia gama de productos y servicios que le permiten ofrecerle una solución integral a sus necesidades de seguros.",
      },
    },
    textoNosotros: {
      type: Object,
      required: false,
      default: {
        titulp: "Nosotros",
        parrafo:
          "Nuestra empresa cuenta con una amplia experiencia en el sector de la seguros, con el objetivo de brindarle un servicio de calidad y de excelencia, con una amplia gama de productos y servicios que le permiten ofrecerle una solución integral a sus necesidades de seguros.",
        icono: "bx bx-map",
        iconoBoton: "bx bx-chevron-right",
      },
    },
    informacionNosotrosLayout3:{
      type:Object,
      required:false,
    }
  },
  mounted() {
    AOS.init({
      duration: 1000,
    });
  },
};
</script>

<style scoped>
.bg-img {
  background: url("../assets/img/bg-nosotros.jpg");
}
.nosotros .contenido {
  padding: 60px 100px 0 100px;
}
.nosotros .contenido h3 {
  font-weight: 400;
  font-size: 34px;
  color: var(--secundario);
}
.nosotros .contenido h4 {
  font-size: 20px;
  font-weight: 700;
  margin-top: 5px;
}
.nosotros .contenido p {
  font-size: 15px;
  color: #848484;
}
.nosotros .img {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}
.nosotros .lista-acordeon {
  padding: 0 100px 60px 100px;
}
.nosotros .lista-acordeon ul {
  padding: 0;
  list-style: none;
}
.nosotros .lista-acordeon li + li {
  margin-top: 15px;
}
.nosotros .lista-acordeon li {
  padding: 20px;
  background: #fff;
  border-radius: 4px;
}
.nosotros .lista-acordeon a {
  display: block;
  position: relative;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  padding-right: 30px;
  outline: none;
  cursor: pointer;
}
.nosotros .lista-acordeon span {
  color: var(--primario);
  font-weight: 600;
  font-size: 18px;
  padding-right: 10px;
}
.nosotros .lista-acordeon i {
  font-size: 24px;
  position: absolute;
  right: 0;
  top: 0;
}
.nosotros .lista-acordeon p {
  margin-bottom: 0;
  padding: 10px 0 0 0;
}
.nosotros .lista-acordeon a.colapsard {
  color: #343a40;
}
.nosotros .lista-acordeon a.colapsard:hover {
  color: var(--primario);
}
.nosotros .lista-acordeon a.colapsard .icono-cerrado {
  display: none;
}
@media (max-width: 1024px) {
  .nosotros .contenido,
  .nosotros .lista-acordeon {
    padding-left: 0;
    padding-right: 0;
  }
}
@media (max-width: 992px) {
  .nosotros .img {
    min-height: 400px;
  }
  .nosotros .contenido {
    padding-top: 30px;
  }
  .nosotros .lista-acordeon {
    padding-bottom: 30px;
  }
}
@media (max-width: 575px) {
  .nosotros .img {
    min-height: 200px;
  }
}

.nosotros-layout-2 .contenido h3 {
  font-weight: 600;
  font-size: 26px;
}
.nosotros-layout-2 .contenido ul {
  list-style: none;
  padding: 0;
}
.nosotros-layout-2 .contenido ul li {
  padding-left: 28px;
  position: relative;
}
.nosotros-layout-2 .contenido ul li + li {
  margin-top: 10px;
}
.nosotros-layout-2 .contenido ul i {
  position: absolute;
  left: 0;
  top: 2px;
  font-size: 20px;
  color: var(--primario);
  line-height: 1;
}
.nosotros-layout-2 .contenido p:last-child {
  margin-bottom: 0;
}
.nosotros-layout-2 .contenido .btn-nosotros {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 12px 32px;
  border-radius: 4px;
  transition: 0.3s;
  line-height: 1;
  color: var(--primario);
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s;
  margin-top: 6px;
  border: 2px solid var(--primario);
  border-radius: 4em;
}
.nosotros-layout-2 .contenido .btn-nosotros:hover {
  background: var(--primario);
  color: #fff;
  text-decoration: none;
}
.radius{
  border-radius: 3em;
}
.nosotros-layout-3 .contenido h3 {
  font-weight: 700;
  font-size: 32px;
  color: var(--secundario);
  font-family: "Poppins", sans-serif;
}
.nosotros-layout-3 .contenido ul {
  list-style: none;
  padding: 0;
}
.nosotros-layout-3 .contenido ul li {
  padding-bottom: 10px;
}
.nosotros-layout-3 .contenido ul i {
  font-size: 20px;
  padding-right: 4px;
  color: var(--primario);
}
.nosotros-layout-3 .contenido p:last-child {
  margin-bottom: 0;
}
</style>