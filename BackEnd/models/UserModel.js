import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Address from "./AddressModel.js";

const {DataTypes} = Sequelize;

const Users = db.define('users',{
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        validate: {
            len:[2,32]
        }
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate: {
            isEmail:true
        }
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[6,64]
        }
    },
    refresh_token:{
        type:DataTypes.TEXT,
    },
},{
    freezeTableName:true
});

Users.hasOne(Address,{
    foreignKey:"UserId"
});
export default Users;