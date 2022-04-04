<template>
  <div class="contenedor-no-encontrado">
    <div class="no-encontrado">
      <div class="contenedor">
        <h3>Esta pagina no existe</h3>
        <h1><span>4</span><span>0</span><span>4</span></h1>
      </div>
      <h2>Pareces que has accedido a una pagina que no se encuentra registrada</h2>
      <button @click="$router.push('/')">Volver a home <i class="fa fas fa-home"></i> </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoEncontrado",
};
</script>

<style scoped>
.contenedor-no-encontrado {
  position: relative;
  height: 100vh;
  background: var(--primario);
}
button{
  color: var(--blanco);
  font-size: 1.2rem;
  padding: 1rem;
  border: none;
  margin-top: 3em;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  position: absolute;
  top:100%;
  transform: translate(-50%, -50%);
  
}
.contenedor-no-encontrado .no-encontrado {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.no-encontrado {
  max-width: 520px;
  width: 100%;
  line-height: 1.4;
  text-align: center;
}

.no-encontrado .contenedor {
  position: relative;
  height: 240px;
}

.no-encontrado .contenedor h1 {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 252px;
  font-weight: 900;
  margin: 0px;
  color: #262626;
  text-transform: uppercase;
  letter-spacing: -40px;
  margin-left: -20px;
}

.no-encontrado .contenedor h1 > span {
  text-shadow: -8px 0px 0px #fff;
}

.no-encontrado .contenedor h3 {
  font-family: "Cabin", sans-serif;
  position: relative;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  color: #262626;
  margin: 0px;
  letter-spacing: 3px;
  padding-left: 6px;
}

.no-encontrado h2 {
  font-family: "Cabin", sans-serif;
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  color: #000;
  margin-top: 0px;
  margin-bottom: 25px;
}

@media only screen and (max-width: 767px) {
  .no-encontrado .contenedor {
    height: 200px;
  }
  .no-encontrado .contenedor h1 {
    font-size: 200px;
  }
}

@media only screen and (max-width: 480px) {
  .no-encontrado .contenedor {
    height: 162px;
  }
  .no-encontrado .contenedor h1 {
    font-size: 162px;
    height: 150px;
    line-height: 162px;
  }
  .no-encontrado h2 {
    font-size: 16px;
  }
}
</style>