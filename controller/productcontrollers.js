
// Importar Express
const express = require('express');

// Crear un enrutador
const router = express.Router();

// Ruta para redirigir a un app.js
const controllerP = {
    products: (req, res) => {
        res.render('products');
    },
    detail: (req, res) => {
        res.render('detalle');
    },
    create: (req, res) => {
        res.render('subirProducto');
    },
    edit: (req, res) => {
        res.render('editarProducto');
    },
    delete: (req, res) => {
        res.render('eliminarProducto');
    },
    cart: (req, res) => {
        res.render('carrito');
    },
    update : (req, res) => {
        res.render('subirProducto');
    }
}

// Exportar el enrutador
module.exports = controllerP;
