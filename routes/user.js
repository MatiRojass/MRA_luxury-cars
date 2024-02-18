const express = require('express');
const router = express.Router();
const multer = require("multer")
const userController = require('../controller/userControllers');
const usuario = require('../models/usuarios');
const path = require("path")


const storage = multer.diskStorage({ 
  destination: function (req, file, cb) { 
     cb(null, './public/images/autos'); 
  }, 
  filename: function (req, file, cb) { 
     cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
})
const uploadFile = multer({ storage });

// Ruta GET
router.get('/register', userController.register);

router.get('/login', userController.login);

router.post("/login", userController.enter);

// Ruta GET por ID

// Ruta PUT por ID
//router.put('/:id', userController.updateUserById);

// Ruta DELETE por ID
//router.delete('/:id', userController.deleteUserById);


// router.get('/', userController.login);

// Ruta PUT
// router.put('/', userController.updateUser);

// Ruta DELETE
// router.delete('/', userController.deleteUser);



/*const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/tmp/my-uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })*/

module.exports = router;
