import Usuario from '../Models/Usuario.js'
const formularioLogin = (req,res) => {
    res.render('auth/login',{
         pagina : 'IniciarSesión'
    })
}
const formularioRegistro = (req,res) => {
    res.render('auth/registro',{
        pagina : 'Crear cuenta'
    })
}
const registrar = async (req,res) => {
   const usuario = await Usuario.create(req.body)

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