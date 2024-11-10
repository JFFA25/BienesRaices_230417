import express from 'express';
import usuarioRoutes from './Routes/usuarioRoutes.js'
import db from './Config/db.js'
//Crear la app
const app = express();

//Routing
app.use('/auth',usuarioRoutes)

//Conexion a la bd
try{
    await db.authenticate();
    console.log('Conexion Correcta a la Base de datos')
}catch(error){
    console.log(error)
}

//Habilitar pug
app.set('view engine','pug')
app.set('Views','/.Views')

//Carpeta Publica
app.use(express.static('Public'))

// Definir un puerto y arrancar el proyecto
const port = 3000;
app.listen(port, () => {
    console.log(`La aplicación se ha iniciado en el puerto ${port}`);
});
