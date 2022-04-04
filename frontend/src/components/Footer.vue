<template>
  <footer id="footer-contenedor">
    <div class="container footer">
      <div class="copyright text-center">
        &copy; {{new Date().getFullYear()}}  <strong><span>Seguros H&H C.A</span></strong
        >. RIF. J-00231211-0.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
#footer-contenedor {
  font-size: 14px;
  background: #22605b;
}
#footer-contenedor .footer {
  padding-top: 30px;
  padding-bottom: 30px;
  color: #fff;
  text-align: center;
}
@media (max-width: 768px) {
  #footer-contenedor .footer {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  #footer-contenedor .copyright{
    padding-top: 4px;
  }
}
</style>