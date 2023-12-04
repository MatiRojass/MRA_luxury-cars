
// Importar Express
const express = require('express');
const router = express.Router();

// Controlador para la ruta principal
const controller = {
    index: (req, res) => {
        // Lógica del controlador
        // ...
        
        // Renderizar la vista "index"
        res.render('index');
    }
};
    
// Exportar el controlador
module.exports = controller;
