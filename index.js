import express from 'express';
import usuarioRoutes from './Routes/usuarioRoutes.js'

//Crear la app
const app = express();

//Routing
app.use('/auth',usuarioRoutes)

//Habilitar pug
app.set('view engine','pug')
app.set('Views','/.Views')
// Definir un puerto y arrancar el proyecto
const port = 3000;
app.listen(port, () => {
    console.log(`La aplicación se ha iniciado en el puerto ${port}`);
});
