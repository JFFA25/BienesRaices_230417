const express = require ('express')
//Crear la app
const app = express()
//Definir un puerto y arrancar el proyecto
const port = 3000;
//Routing - Enrutamiento para peticiones
app.get("/",function(req,res){
    res.send("Hola desde la Web en NodeJS")
})
app.listen(port,()=>{
    console.log(`La aplicacion se ha iniciado en el puerto ${port}`)
})
//Las peticiones solo pueden ser una por accion 
app.get("/quienEres",function(req,res){
    res.json(
        {
            "nombre" : "Jose Francisco Flores Amador",
            "carrera": "TI DSM",
            "grado": "4°",
            "grupo": "A"
        }
    )
})