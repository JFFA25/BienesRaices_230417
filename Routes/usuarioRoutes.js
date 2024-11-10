import express from "express";
import { formularioLogin,formularioRegistro,registrar,formularioPassword } from "../Controllers/usuarioController.js";

const router = express.Router();

router.get('/login',formularioLogin)
router.get('/registro',formularioRegistro)
router.post('/registro',registrar)
router.get('/password',formularioPassword)

export default router