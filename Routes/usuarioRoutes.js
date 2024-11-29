import express from "express";
import { formularioLogin,formularioRegistro,registrar,confirmar,formularioPassword,resetPassword } from "../Controllers/usuarioController.js";

const router = express.Router();

router.get('/login',formularioLogin)
router.get('/registro',formularioRegistro)
router.post('/registro',registrar)
router.get('/confirmar/:token',confirmar)
router.get('/password',formularioPassword)
router.post('/password',resetPassword)
 
export default router