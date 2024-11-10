import {DataTypes, STRING} from 'sequelize'
import db from '../Config/db.js'

const Usuario = db.define('usuarios',{
    nombre : {
        type : DataTypes.STRING,
        allowNull: false
    },
    email : {
        type : DataTypes.STRING,
        allowNull: false
    },
    password:{
        type : DataTypes.STRING,
        allowNull: false
    },
    token : {
        type : DataTypes.STRING,
        confirmado : DataTypes.BOOLEAN        
    }
})

export default Usuario