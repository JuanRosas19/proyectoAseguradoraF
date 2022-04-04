<template>
  <button
    @click="scrollToTop"
    :class="[
      'boton-volver',
      'd-flex',
      'align-items-center',
      'justify-content-center',
      { fade: !mostrarBotonVolver },
    ]"
  >
    <i class="bi bi-arrow-up-short"></i>
  </button>
</template>

<script>
export default {
  name: "BotonVolver",
  data() {
    return {
      mostrarBotonVolver: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    listenerBoton() {
      if (window.scrollY > 0) {
        this.mostrarBotonVolver = true;
      } else {
        this.mostrarBotonVolver = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.listenerBoton);
  },
};
</script>
<style scoped>
.fade {
  opacity: 0;
  transition: opacity 1s ease-out;
}
.active {
  opacity: 1;
}
</style>