// Proyecto final curso Coderhouse - Backend - Primera entrega

// Configuración
require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const puerto = process.env.PORT || 8080;

const routes = require('./routes/index.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static(path.join(__dirname + '../public')));

// API
app.use('/api', routes);



app.listen(puerto, (error) => {
    if (!error) {
        console.log(`El servidor se inicio en el puerto ${puerto}`);
    } else {
        console.log(`Error al iniciar el servidor en el puerto ${puerto}. Error ${error}`);
    }
})