const { Router } = require('express');
const {
  contactoController,
  suscripcionController,
  registroControllrer,
  loginController,
} = require('../controller/controller');

const router = Router();

router.post('/contacto', contactoController);
router.post('/suscripcion', suscripcionController);
router.post('/registro', registroControllrer);
router.post('/login', loginController);

module.exports = router;
