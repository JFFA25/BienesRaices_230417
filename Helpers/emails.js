import nodemailer from 'nodemailer'

const emailRegistro = async (datos) => {

const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port:  process.env.EMAIL_PORT,
    auth: {
      user:  process.env.EMAIL_USER,
      pass:  process.env.EMAIL_PASS
    }
  });
  const  { email , nombre , token} = datos
  //Enviar emial
  await transport.sendMail({
      from : 'BienesRaices_230417.com',
      to : email,
      subject : 'Confirma tu cuenta en BienesRaices_230417.com',
      text : 'Confirma tu cuenta en BienesRaices_230417.com',
      html : `
          <p>Hola ${nombre} , comprueba tu cuenta en BienesRaices_230417</p>

           <p>Tu cuenta ya esta lista , solo debes confirmar en el siguiente enlace:
           <a href="">Confirmar Cuenta </a> </p>

          <p>Si tu no creaste esta cuenta , puedes ignorar el mensaje</p>

      `
  })
}


export {
    emailRegistro
}