const fs = require('fs');

let auto = require("../models/autos");

// Ruta para redirigir a un app.js
const controller = {
    register: (req, res) => {
        res.render('register');
    },
    login: (req, res) => {
        res.render('login');
    
    },
    enter: (req, res) => {
        res.send("Usuario logueado");


    },
    admin: (req, res) => {
        res.render("subirProducto") 
    },
    comunidad: (req,res) => {
        res.render('comunidad', { perfil:usuarios });

    }  

};

module.exports= controller;
