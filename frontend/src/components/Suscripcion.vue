<template>
  <div class="suscripcion" data-aos="flip-right">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <h4>{{ suscripcion.titulo }}</h4>
          <p class="text-muted">
            {{ suscripcion.subtitulo }}
          </p>
          <form @submit.prevent="suscribirse">
            <input
              v-model.trim="email"
              type="email"
              placeholder="usuario@gmail.com"
              name="email"
            />
            <input type="submit" value="Suscribirse" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { enviarFormularioSuscripcion } from "../servicios/main";
import AOS from "aos";
export default {
  name: "Suscripcion",
  data() {
    return {
        email: "",
    };
  },
  methods: {
    async suscribirse() {
      if (!this.email.length) {
        return this.$store.dispatch('toastAlerta', {
          mensaje: 'El campo email es requerido',
          icono:"error"
        })
      } else {
        try {
          const { data } = await enviarFormularioSuscripcion({email:this.email});
          if (data.msg.includes("correctamente")) {
            this.email = "";
            this.$store.dispatch('toastAlerta', {
              icono:"success",
              mensaje: data.msg
            })
          }
        } catch (error) {
          this.$store.dispatch('toastAlerta', {
            mensaje:"Ocurrió un error registrando el usuario", icono:"info"
          })
        }
      }
    },
  },
  props: {
    suscripcion: {
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
.suscripcion {
  padding: 50px 0;
  background: #f3f5fa;
  text-align: center;
  font-size: 15px;
  color: #444444;
}
.suscripcion h4 {
  font-size: 24px;
  margin: 0 0 20px 0;
  padding: 0;
  line-height: 1;
  font-weight: 600;
  color: var(--secundario);
}
.suscripcion form {
  margin-top: 30px;
  background: #fff;
  padding: 6px 10px;
  position: relative;
  border-radius: 50px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.06);
  text-align: left;
}
.suscripcion form input[type="email"] {
  border: 0;
  padding: 4px 8px;
  width: calc(100% - 100px);
}
.suscripcion form input[type="submit"] {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  border: 0;
  background: none;
  font-size: 16px;
  padding: 0 20px;
  background: var(--primario);
  color: #fff;
  transition: 0.3s;
  border-radius: 50px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
}
.suscripcion form input[type="submit"]:hover {
  background: #0ea38f;
}
</style>