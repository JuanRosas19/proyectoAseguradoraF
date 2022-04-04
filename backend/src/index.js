const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const router = require('./router/router');
const app = express();
require('dotenv').config();
app.set('port', process.env.PORT || 5000);
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api', router);
app.use('/', express.static(path.join(__dirname, './public/dist')));

app.listen(app.get('port'), () => {
  console.log(`Servidor escuchando en el puerto: ${app.get('port')}`);
});
