import express from 'express';
import usuarioRoutes from './Routes/usuarioRoutes.js'

//Crear la app
const app = express();

//Routing
app.use('/',usuarioRoutes)

// Definir un puerto y arrancar el proyecto
const port = 3000;
app.listen(port, () => {
    console.log(`La aplicación se ha iniciado en el puerto ${port}`);
});
