<template>
  <div class="contenedor-login">
    <div class="login img-bg">
      <div class="contenedo-formulario">
        <form class="formulario" @submit.prevent="loginForm">
          <span class="formulario-titulo mb-5"> Iniciar Sesión </span>
          <div class="input-contenedor">
            <input
              class="input-formulario"
              v-model.trim="login.usuario"
              type="text"
              required
              placeholder="Usuario"
            />
          </div>
          <div class="input-contenedor">
            <input
              required
              class="input-formulario"
              v-model.trim="login.clave"
              type="password"
              placeholder="Clave"
            />
          </div>
          <div class="contenedor-boton">
            <button class="formulario-btn">Iniciar</button>
          </div>
          <div class="text-center mt-5">
            <router-link to="/registro" class="texto-registro">
              ¿No tienes cuenta? Registrate aquí</router-link
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { loginUsuario } from "../servicios/main";
import {TOKEN} from "../store/index"
export default {
  name: "Login",
  data() {
    return {
      login: {
        usuario: "",
        clave: "",
      },
    };
  },
  methods: {
    async loginForm() {
      if (!this.login.usuario || !this.login.clave) {
        this.$store.dispatch('toastAlerta', {
          mensaje:"Todos los campos son requeridos",
          icono:"info"
        })
        return;
      }
      try {
        const { data } = await loginUsuario(this.login);
        if (data.msg.includes("correctamente")) {
          this.$store.dispatch('toastAlerta', {
            mensaje:data.msg,
            icono:"success"
          })
          localStorage.setItem(TOKEN, data.token);
          window.location.href = "/"
          this.login = {
            usuario: "",
            clave: "",
          };
        }else{
           this.$store.dispatch('toastAlerta', {
            mensaje:data.msg,
            icono:"info"
          })
        }
      } catch (error) {
        this.$store.dispatch('toastAlerta', {
          mensaje:"Ocurrió un error autenticando el usuario",
          icono:"error"
        })
      }
    },
  },
};
</script>

<style scoped>
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

.texto-registro {
  font-size: 13px;
  color: #e5e5e5;
  line-height: 1.5;
}

.contenedor-login {
  width: 100%;
  margin: 0 auto;
}

.login {
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
.img-bg {
  background: url("../assets/img/bg-hero.jpg");
}

.login::before {
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