<template>
  <section id="hero" class="d-flex align-items-center">
    <div class="container">
      <template v-if="layout === 1">
        <div class="row justify-content-center">
          <div
            class="
              col-lg-6
              d-flex
              flex-column
              justify-content-center
              pt-4 pt-lg-0
            "
          >
            <h1 class="text-center">{{ titulos.titulo }}</h1>
            <h2 class="text-center fst-italic my-4">
              {{ titulos.subtitulo }}
            </h2>
            <div
              class="d-flex justify-content-center"
              v-if="btnInfo && Object.keys(btnInfo).length"
            >
              <router-link :to="btnInfo.accion.link" class="btn-accion">{{
                btnInfo.accion.titulo
              }}</router-link>
              <router-link :to="btnInfo.principal.link" class="btn-hero"
                ><i :class="btnInfo.principal.icono"></i
                ><span>{{ btnInfo.principal.titulo }} </span></router-link
              >
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="row">
          <div
            class="
              col-lg-6
              d-flex
              flex-column
              justify-content-center
              pt-4 pt-lg-0
            "
          >
            <h1>{{ titulos.titulo }}</h1>
            <h2>
              {{ titulos.subtitulo }}
            </h2>
            <div
              class="d-flex justify-content-center"
              v-if="btnInfo && Object.keys(btnInfo).length"
            >
              <router-link :to="btnInfo.accion.link" class="btn-accion">{{
                btnInfo.accion.titulo
              }}</router-link>
              <router-link :to="btnInfo.principal.link" class="btn-hero"
                ><i :class="btnInfo.principal.icono"></i
                ><span>{{ btnInfo.principal.titulo }} </span></router-link
              >
            </div>
          </div>
          <div v-if="imagen && imagen.length" class="col-lg-6 img-hero my-3">
            <img :src="imagen" class="img-fluid radius" alt="Imagen Hero" />
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
  props: {
    hero: {
      type: String,
      required: false,
    },
    layout: {
      type: Number,
      required: true,
    },
    titulos: {
      type: Object,
      required: true,
    },
    btnInfo: {
      type: Object,
      required: false,
    },
    imagen: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
.radius {
  border-radius: 3em;
}
#hero .container {
  padding-top: 72px;
}
#hero h1 {
  margin: 0 0 10px 0;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  color: #fff;
}
#hero h2 {
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 50px;
  font-size: 24px;
}
#hero .btn-accion {
  font-family: "Jost", sans-serif;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 1em;
  border-radius: 50px;
  transition: 0.5s;
  margin: 10px 0 0 0;
  color: #fff;
  background: var(--secundario);
}
#hero .btn-accion:hover {
  background: #1e7299;
}
#hero .btn-hero {
  font-size: 16px;
  display: flex;
  align-items: center;
  transition: 0.5s;
  margin: 10px 0 0 25px;
  color: #fff;
  line-height: 1;
  border: 3px solid #188ebde6;
  border-radius: 3em;
  padding: 1em;
}
#hero .btn-hero i {
  line-height: 0;
  color: #fff;
  font-size: 32px;
  transition: 0.3s;
  margin-right: 8px;
}
#hero .btn-hero:hover i {
  color: #47b2e4;
}

@media (max-width: 991px) {
  #hero {
    height: 100vh;
    text-align: center;
  }
  #hero .img-hero {
    text-align: center;
  }
  #hero .img-hero img {
    width: 50%;
  }
}
@media (max-width: 768px) {
  #hero h1 {
    font-size: 28px;
    line-height: 36px;
  }
  #hero h2 {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 30px;
  }
  #hero .img-hero img {
    width: 70%;
  }
}
@media (max-width: 575px) {
  #hero .img-hero img {
    width: 80%;
  }
  #hero .btn-accion {
    font-size: 16px;
    padding: 10px 24px 11px 24px;
  }
  #hero .btn-hero {
    font-size: 14px;
    padding: 10px;
  }
}
</style>