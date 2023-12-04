
// Importar Express
const express = require('express');

// Crear un enrutador
const router = express.Router();

// Ruta para redirigir a un app.js
const controller = {
    register: (req, res) => {
        res.render('register');
    },
    create : (req, res) => {
        res.send("Usuario creado");
    },
    login: (req, res) => {
        res.render('login');
    
    }
};

// Exportar el enrutador
module.exports = controller;
