
const express = require('express');
const router = express.Router();
const productController = require('../controller/productcontrollers')

// Ruta GET para obtener todos los productos
router.get('/', productController.products);

// Ruta POST para crear un nuevo producto
 //router.post('/', productController.createProduct);

// Ruta DELETE para eliminar un producto por su ID
/*** GET ONE PRODUCT ***/
router.get('/subirProducto', productController.update)

router.get('/detalle', productController.detail);

router.get('/carrito', productController.cart);

// Ruta PUT para actualizar un producto por su ID
// router.put('/:id', productController.updateProduct);

module.exports = router;
