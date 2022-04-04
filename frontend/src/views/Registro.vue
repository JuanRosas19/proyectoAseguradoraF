<template>
  <div class="contenedor-registro">
    <div class="registro img-bg">
      <div class="contenedo-formulario">
        <form class="formulario" @submit.prevent="registroForm">
          <span class="formulario-titulo mb-5"> Registrate </span>
          <div class="input-contenedor">
            <input
              class="input-formulario"
              v-model.trim="registro.nombre"
              type="text"
              required
              placeholder="Nombre"
            />
          </div>
          <div class="input-contenedor">
            <input
              class="input-formulario"
              v-model.trim="registro.usuario"
              type="text"
              required
              placeholder="Usuario"
            />
          </div>
          <div class="input-contenedor">
            <input
              required
              class="input-formulario"
              v-model.trim="registro.clave"
              type="password"
              placeholder="Clave"
            />
          </div>
          <div class="contenedor-boton">
            <button class="formulario-btn">Registrarme</button>
          </div>
          <div class="text-center mt-5">
            <router-link to="/login" class="texto-login">
              ¿Ya tienes cuenta? Inicia sesión</router-link
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { registroUsuario } from "../servicios/main";
export default {
  name: "Registro",
  data() {
    return {
      registro: {
        nombre: "",
        usuario: "",
        clave: "",
      },
    };
  },
  methods: {
    async registroForm() {
      if (
        !this.registro.usuario ||
        !this.registro.clave ||
        !this.registro.nombre
      ) {
        this.$store.dispatch("toastAlerta", {
          mensaje: "Todos los campos son requeridos",
          icono: "info",
        });
        return;
      }
      if (this.registro.clave.length < 5) {
        return this.$store.dispatch("toastAlerta", {
          icono: "info",
          mensaje: "La clave debe tener al menos 5 caracteres",
        });
      }
      try {
        const { data } = await registroUsuario(this.registro);
        if (data.msg.includes("correctamente")) {
          this.$store.dispatch("toastAlerta", {
            mensaje: data.msg,
            icono: "success",
          });
          this.registro = {
            nombre: "",
            usuario: "",
            clave: "",
          };
          setTimeout(() => {
            this.$router.push("/login");
          }, 1200);
        }
      } catch (error) {
        this.$store.dispatch("toastAlerta", {
          mensaje: "Ocurrió un error registrando el usuario",
          icono: "error",
        });
      }
    },
  },
};
</script>

<style scoped>
.img-bg {
  background: url("../assets/img/bg-servicios.jpg");
  background-position: top center;
}
.mt-5 {
  margin-top: 3em;
}
a {
  font-size: 14px;
  line-height: 1.7;
  color: #666666;
  margin: 0px;
  transition: all 0.4s;
  -webkit-transition: all 0.4s;
}

a:focus {
  outline: none !important;
}

a:hover {
  text-decoration: none;
  color: #fff;
}
input {
  outline: none;
  border: none;
}
input:focus {
  border-color: transparent !important;
}
input:focus::-webkit-input-placeholder {
  color: transparent;
}
input::-webkit-input-placeholder {
  color: #fff;
}

label {
  margin: 0;
  display: block;
}

button {
  outline: none !important;
  border: none;
  background: transparent;
}

button:hover {
  cursor: pointer;
}

.texto-login {
  font-size: 13px;
  color: #e5e5e5;
  line-height: 1.5;
}

.contenedor-registro {
  width: 100%;
  margin: 0 auto;
}

.registro {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  z-index: 1;
}

.registro::before {
  content: "";
  display: block;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: var(--primario);
}

.contenedo-formulario {
  width: 500px;
  border-radius: 10px;
  overflow: hidden;
  padding: 55px 55px 37px 55px;

  background: var(--secundario);
}

.formulario {
  width: 100%;
}

.formulario-titulo {
  font-family: "Pacifico", cursive;
  font-size: 30px;
  color: #fff;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
  display: block;
}

.input-contenedor {
  width: 100%;
  position: relative;
  border-bottom: 2px solid rgba(255, 255, 255, 0.24);
  margin-bottom: 30px;
}

.input-formulario {
  font-size: 16px;
  color: #fff;
  line-height: 1.2;
  display: block;
  width: 100%;
  height: 45px;
  background: transparent;
  padding: 0 5px 0 38px;
}

.input-formulario:focus {
  padding-left: 5px;
}

.contenedor-boton {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.formulario-btn {
  font-family: "Pacifico", cursive;
  font-size: 16px;
  color: #555555;
  line-height: 1.2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  min-width: 120px;
  height: 50px;
  border-radius: 25px;
  background: var(--primario);
  position: relative;
  z-index: 1;
  transition: all 0.4s;
}

.formulario-btn::before {
  content: "";
  display: block;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  background-color: #fff;
  top: 0;
  left: 0;
  opacity: 1;
  transition: all 0.4s;
}

.formulario-btn:hover {
  color: #fff;
}

.formulario-btn:hover:before {
  opacity: 0;
}

@media (max-width: 576px) {
  .contenedo-formulario {
    padding: 55px 15px 37px 15px;
  }
}
</style>