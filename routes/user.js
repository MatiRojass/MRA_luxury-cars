const express = require('express');
const router = express.Router();
 
const userController = require('../controller/userControllers');

// Ruta GET
router.get('/register', userController.register);
router.post('/register', userController.create );
router.get('/login', userController.login);

// router.get('/', userController.login);

// Ruta PUT
// router.put('/', userController.updateUser);

// Ruta DELETE
// router.delete('/', userController.deleteUser);

// Ruta POST

module.exports = router;
