import {DataTypes, STRING} from 'sequelize'
import bcrypt from 'bcrypt'
import db from '../Config/db.js'


const Usuario = db.define('usuarios',{
    nombre : {
        type : DataTypes.STRING,
        allowNull: false
    },
    fecha: { 
        type: DataTypes.DATE,
        allowNull: true 
    },
    email : {
        type : DataTypes.STRING,
        allowNull: false
    },
    password:{
        type : DataTypes.STRING,
        allowNull: false
    },
    token : DataTypes.STRING,
    confirmado : DataTypes.BOOLEAN        

},{
    hooks : {
        beforeCreate:  async  function (usuario){
            const salt  = await bcrypt.genSalt(10)
            usuario.password =  await bcrypt.hash(usuario.password , salt); 
        }
    }
})

// Metodos Personalizados
Usuario.prototype.verificarPassword = function(password){
    return bcrypt.compareSync(password,this.password)

}

export default Usuario