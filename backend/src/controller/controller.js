const db = require('../config/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const contactoController = async (req, res) => {
  try {
    const { nombre, correo, mensaje, asunto, plan } = req.body;
    if (
      !nombre.length ||
      !correo.length ||
      !mensaje.length ||
      !asunto.length ||
      !plan
    ) {
      return res.status(400).json({
        msg: 'Todos los campos son requeridos',
      });
    }
    const query = `INSERT INTO contactos (nombre, email, asunto, mensaje, tipo_servicio) VALUES ('${nombre}', '${correo}', '${asunto}', '${mensaje}', '${plan}')`;
    const result = await db.awaitQuery(query);
    if (result.affectedRows) {
      res.status(200).json({
        msg: 'Mensaje enviado correctamente',
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: 'Error al enviar el mensaje',
    });
  }
};
const suscripcionController = async (req, res) => {
  const { email } = req.body;
  if (!email.length) {
    return res.status(400).json({
      msg: 'El email es requerido',
    });
  }
  const query = `INSERT INTO suscripciones (correo) VALUES ('${email}')`;
  try {
    const result = await db.awaitQuery(query);
    if (result.affectedRows) {
      res.status(200).json({
        msg: 'Suscripcion registrada correctamente',
      });
    }
  } catch (err) {
    res.status(500).json({
      msg: 'Error al suscribirse',
    });
  }
};

const registroControllrer = async (req, res) => {
  try {
    const { nombre, usuario, clave } = req.body;
    if (!nombre || !usuario || !clave)
      return res.status(400).json({ msg: 'Todos los campos son requeridos' });
    const queryUsuario = 'SELECT * FROM usuarios WHERE usuario = ? ';
    const usuarioDuplicado = await db.awaitQuery(queryUsuario, [usuario]);
    if (usuarioDuplicado.length) {
      return res
        .status(500)
        .json({ msg: 'El usuario ya se encuentra registrado' });
    }
    if (clave.length < 5) {
      return res
        .status(400)
        .json({ msg: 'La clave debe ser minima de 6 caracteres' });
    }
    const salt = await bcrypt.genSalt(10);
    const claveHash = await bcrypt.hash(clave, salt);
    const query = `INSERT INTO usuarios (nombre, usuario, clave) VALUES ('${nombre}', '${usuario}', '${claveHash}')`;
    const result = await db.awaitQuery(query);
    if (result.affectedRows) {
      res.status(200).json({
        msg: 'Usuario registrado correctamente',
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: 'Ocurrió un error registrando el usuario',
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { usuario, clave } = req.body;
    if (!usuario || !clave)
      return res.status(400).json({ msg: 'Todos los campos son requeridos' });
    const query = 'SELECT * FROM usuarios WHERE usuario = ?';
    const resultadoUsuario = await db.awaitQuery(query, [usuario]);
    if (resultadoUsuario.length) {
      const resultadoClave = await bcrypt.compare(
        clave,
        resultadoUsuario[0].clave
      );
      if (!resultadoClave) {
        return res.status(401).json({ msg: 'La clave es incorrecta' });
      }
      const token = jwt.sign(
        {
          id: resultadoUsuario[0].id,
          usuario: resultadoUsuario[0].usuario,
          nombre: resultadoUsuario[0].nombre,
        },
        process.env.SECRET
      );
      res.status(200).json({ msg: 'Usuario autenticado correctamente', token });
    } else {
      res.status(200).json({ msg: 'El usuario no se encuentra registrado' });
    }
  } catch (error) {
    res.status(500).json({ msg: 'Ocurrió un error autenticando al usuario' });
  }
};
module.exports = {
  contactoController,
  suscripcionController,
  registroControllrer,
  loginController,
};
