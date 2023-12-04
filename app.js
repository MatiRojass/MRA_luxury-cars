const express = require('express');
const app = express();
const router = express.Router();

app.set('view engine', 'ejs');

const mainControl = require('./routes/main');
const productControl = require('./routes/products');
const userControl = require('./routes/user');
// Define las rutas aquí

app.use('/', mainControl);

app.use('/products', productControl);
app.use('/products/subirProducto', productControl);
app.use('/products/detalle', productControl);
app.use('/products/carrito', productControl);

app.use('/', userControl);
app.use('/login', userControl);
app.use('/user', userControl);


app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3100, () => {
  console.log('Servidor escuchando en el puerto 3100');
});
