
// Importar Express
const express = require('express');
const fs = require("fs");
const { json } = require('express');
// Crear un enrutador
const router = express.Router();
const path = require("path")


// Ruta para redirigir a un app.js
const controllerP = {
    products: (req, res) => {
        let product = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../data/MOCK_DATA.json")));
        res.render('products', { product: product })
    },

    detail: (req, res) => {
        let producto = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../data/MOCK_DATA.json")));
        const productId = req.params.id;
        const productoVehiculo = producto.find((producto) => producto.id == productId);
        res.render('detalle', { productoVehiculo: productoVehiculo });
    },
    cart: (req, res) => {
        res.render('carrito');
        
    },
    
    getUploadPage: (req, res) => {
        // Lógica para mostrar la página de subir producto
        res.render('productUpload');
      },

     create: (req, res) => (req, res, next) => {
        let product = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../data/MOCK_DATA.json")));
        let ultimoAuto= product.pop();
        //agregar objeto al array de objetos
        let nuevoAuto = {
            id: product.length + 1,
            nombre: req.body.nombre,
            modelo: req.body.modelo,
            anio: req.body.anio,
            precio: req.body.precio,
            //image:req.body.filename
        }
        product.push(nuevoAuto);
        let guardarAuto= JSON.stringify(product,null,2);
        fs.readFileSync(path.resolve(__dirname ,"../data/MOCK_DATA.json"));
          res.redirect("../");



    },
}
// Exportar el enrutador
module.exports = controllerP;
