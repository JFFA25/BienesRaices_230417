import { check ,validationResult } from 'express-validator'
import Usuario from '../Models/Usuario.js'
import {generarId} from '../Helpers/tokens.js'
import {emailRegistro} from '../Helpers/emails.js'
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
        await check('repeat_password').custom((value, { req }) => value === req.body.password).withMessage('Las contraseñas no coinciden').run(req)

        
        let resultado = validationResult(req)
    
        //Verificar que el resulatado este vacio
        if(!resultado.isEmpty()){
            //Errores
            return res.render('auth/registro',{
                pagina : 'Crear Cuenta',
                errores: resultado.array(),
                usuario: {
                    nombre : req.body.nombre,
                    email : req.body.email
                }               
            })

        }
        //Extraer los datos
        const {nombre,email,password} = req.body

        //Verificar que el usuario no este duplicado
         const existeUsuario = await Usuario.findOne({where : {email}})
        console.log('Usuario Existente')
        if(existeUsuario){            
            return res.render('auth/registro',{
                pagina : 'Crear Cuenta',
                errores: [{msg : 'El usuario ya esta registrado'}],
                usuario: {
                    nombre : req.body.nombre,
                    email : req.body.email
                }               
            })

        }
        //Almacenar un usuario
       const  usuario = await Usuario.create({
            nombre,
            email,
            password,
            token : generarId()
        })
        
        // Enviar email de confirmacion 
        emailRegistro({
            nombre: usuario.nombre,
            email: usuario.email,
            token: usuario.token
        })

        //Confirmacion mensaje confirmado 
        res.render('templates/mensaje',{
            pagina : 'Cuenta Creada Correctamente',
            mensaje : 'Se envio un correo de confirmacion a tu correo , da clic en el enlace para confirmar'
        })
        

        

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