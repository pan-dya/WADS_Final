import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define('users',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        unique: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    hashedPassword:{
        type: DataTypes.STRING,
        allowNull: false
    },

},{
    freezeTableName:true
})

export default User;

(async ()=>{
    await db.sync();
})();