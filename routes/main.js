const express = require('express');
const router = express.Router();

const mainController = require('../controller/mainController');

// Ruta GET

router.get('/', mainController.index);

// Ruta POST
router.post('/', (req, res) => {
    // Lógica para manejar la solicitud POST
});

// Ruta PUT
router.put('/:id', (req, res) => {
    // Lógica para manejar la solicitud PUT
});

// Ruta DELETE
router.delete('/:id', (req, res) => {
    // Lógica para manejar la solicitud DELETE
});

module.exports = router;
