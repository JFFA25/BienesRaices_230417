import { check ,validationResult } from 'express-validator'
import Usuario from '../Models/Usuario.js'
const formularioLogin = (req,res) => {
    res.render('auth/login',{
         pagina : 'IniciarSesión'
    })
}
const formularioRegistro = (req,res) => {
    res.render('auth/registro',{
        pagina : 'Crear Cuenta'
    })
}
const registrar = async (req,res) => {
        //Validacion 
        await check('nombre').notEmpty().withMessage('El Nombre no puede ir vacio').run(req)
        await check('email').isEmail().withMessage('Eso no parece un email').run(req)
        await check('password').isLength({min:8}).withMessage('La contraseña debe de ser minimo 8 caracteres').run(req)
        await check('repeat_password').equals('password').withMessage('Las contraseñas no coinciden').run(req)
        
        let resultado = validationResult(req)
    
        //Verificar que el resulatado este vacio
        if(!resultado.isEmpty()){
            //Errores
            return res.render('auth/registro',{
                pagina : 'Crear Cuenta',
                errores: resultado.array()
            })

        }
        res.json()

        const usuario = await Usuario.create(req.body);
        res.json(usuario)
}
const formularioPassword = (req,res) => {
    res.render('auth/password',{
        pagina : 'Ruecupera Tu Contraseña'
    })
}
export {
    formularioLogin,
    formularioRegistro,
    registrar,
    formularioPassword
}