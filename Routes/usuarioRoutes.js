import express from 'express'

const router = express.Router()

router.get("/",function(req,res){
    res.send("Hola Mundo en express")
})

router.post("/",function(req,res){
    res.json({msg: 'respuesta tipo POST'})
})
export default router