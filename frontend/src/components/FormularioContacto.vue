<template>
  <section id="formulario-contacto" class="formulario-contacto">
    <div class="container" data-aos="zoom-in-left">
      <div class="titulo-seguro">
        <h2>
          {{ informacionContacto.titulo }}
          <strong class="texto-destacado">
            {{ informacionContacto.destacado }}
          </strong>
        </h2>
        <p class="text-muted fst-italic">
          {{ informacionContacto.texto }}
        </p>
      </div>

      <div class="row">
        <div class="col-lg-5 d-flex align-items-stretch">
          <div class="contacto-informacion">
            <div>
              <i class="fa-solid fa-location-dot"></i>
              <h4>Dirección:</h4>
              <p>
                {{ informacionContacto.direccion }}
              </p>
            </div>

            <div>
              <i class="fa-solid fa-envelope"></i>
              <h4>Correo electronico:</h4>
              <p>{{ informacionContacto.email }}</p>
            </div>

            <div>
              <i class="fa-solid fa-mobile-screen-button"></i>
              <h4>Número de contacto:</h4>
              <p>
                {{ informacionContacto.numero }}
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31414.162000217682!2d-64.70463411003716!3d10.199303983733174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2d736754808be5%3A0x2fe867b57d7d6659!2zTGVjaGVyw61hLCBBbnpvw6F0ZWd1aQ!5e0!3m2!1ses!2sve!4v1647910349995!5m2!1ses!2sve"
              style="border: 0; width: 100%; height: 290px"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
          <form
            @submit.prevent="submitFormulario"
            class="formulario-contenedor"
          >
            <div class="row">
              <div class="form-group col-md-6">
                <label for="nombre">Nombre</label>
                <input
                  type="text"
                  placeholder="Ingresa tu nombre"
                  class="form-control"
                  id="nombre"
                  v-model.trim="contacto.nombre"
                  required
                />
              </div>
              <div class="form-group col-md-6">
                <label for="correo">Correo electronico</label>
                <input
                  type="email"
                  placeholder="usuario@gmail.com"
                  class="form-control"
                  id="correo"
                  v-model.trim="contacto.correo"
                  required
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="asunto">Asunto</label>
                  <input
                    type="text"
                    class="form-control"
                    id="asunto"
                    placeholder="Ingresar asunto"
                    required
                    v-model.trim="contacto.asunto"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="select">Seleccionar plan</label>
                  <select v-model="contacto.plan" required class="form-control" id="select">
                    <option value="" selected disabled>Seleccionar plan</option>
                    <option
                      v-for="opcion in opcionesSelect"
                      :key="opcion.tipo"
                      :value="opcion.tipo"
                    >
                      {{ opcion.nombre }}
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label for="mensaje">Mensaje</label>
              <textarea
                placeholder="Dejanos tu mensaje..."
                class="form-control"
                id="mensaje"
                rows="10"
                v-model.trim="contacto.mensaje"
                required
              ></textarea>
            </div>
            <div class="text-center">
              <button type="submit">
                Enviar mensaje
                <i class="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AOS from 'aos'
import {enviarFormularioContacto} from "../servicios/main"
export default {
  name: "FormularioContacto",
  data() {
    return {
      contacto:{
        nombre:"",
        correo:"",
        asunto:"",
        mensaje:"",
        plan:""
      },
      opcionesSelect: [
        {
          nombre: "Plan Básico",
          tipo: 1,
        },
        {
          nombre: "Plan Premium",
          tipo: 2,
        },
        {
          nombre: "Otro",
          tipo: 1,
        },
      ],
    };
  },
  methods: {
    async submitFormulario() {
      if (this.contacto.nombre == "" || this.contacto.correo == "" || this.contacto.asunto == "" || !this.contacto.plan || this.contacto.mensaje == "") {
        this.$store.dispatch("toastAlerta", {
          mensaje:"Todos los campos son obligatorios",
          icono:"erorr"
        })
        return;
      }
      try {
        const respuesta = await enviarFormularioContacto(this.contacto);
        if (respuesta.data.msg.includes('correctamente')) {
          this.$store.dispatch("toastAlerta", {
            mensaje:"Mensaje enviado correctamente",
            icono:"success"
          })
          this.contacto = {
            nombre:"",
            correo:"",
            asunto:"",
            plan:""
          }
        } else {
          this.$store.dispatch("toastAlerta", {
            mensaje:"No se pudo enviar los datos",
            icono:"info"
          })
        }
      } catch (error) {
        this.$store.dispatch("toastAlerta", {
          mensaje:"Error al enviar el mensaje",
          icono:"error"
        })
      }
    },
  },
  props: {
    informacionContacto: {
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
.formulario-contacto .contacto-informacion {
  border-top: 3px solid var(--primario);
  border-bottom: 3px solid var(--primario);
  padding: 30px;
  background: #fff;
  width: 100%;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.1);
}
.formulario-contacto .contacto-informacion i {
  font-size: 20px;
  color: var(--primario);
  float: left;
  width: 44px;
  height: 44px;
  background: #e7f5fb;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
}
.formulario-contacto .contacto-informacion h4 {
  padding: 0 0 0 60px;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 5px;
  color: var(--secundario);
}
.formulario-contacto .contacto-informacion p {
  padding: 0 0 10px 60px;
  margin-bottom: 20px;
  font-size: 14px;
  color: #6182ba;
}

.formulario-contacto .formulario-contenedor {
  width: 100%;
  border-top: 3px solid var(--primario);
  border-bottom: 3px solid var(--primario);
  padding: 30px;
  background: #fff;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);
}

.formulario-contacto .formulario-contenedor .form-group {
  margin-bottom: 20px;
}
.formulario-contacto .formulario-contenedor input,
.formulario-contacto .formulario-contenedor textarea {
  box-shadow: none;
  font-size: 14px;
  border-radius: 1em;
}
input:focus,
textarea:focus {
  border-color: var(--primario);
}
input,
select {
  height: 44px;
  border-radius: 2em;
}
textarea {
  padding: 10px 12px;
}
button[type="submit"] {
  background: var(--primario);
  border: 0;
  padding: 12px 34px;
  color: #fff;
  transition: 0.4s;
  border-radius: 50px;
}
button[type="submit"]:hover {
  background: var(--secundario);
}
</style>