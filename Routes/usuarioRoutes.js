import express from 'express'

const router = express.Router()

router.get("/",function(req,res){
    res.send("Hola Mundo en express")
})

router.get("/quienEres",function(req,res){
    res.json(
        {
            "nombre" : "Jose Francisco Flores Amador",
            "carrera": "TI DSM",
            "grado": "4°",
            "grupo": "A"
        }
    )
})
export default router