import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Address from "./AddressModel.js";
import Services from "./ServiceModels.js";

const {DataTypes} = Sequelize;

export const Users = db.define('users',{
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
    foreignKey:{
        name:"userId",
        
    },
    onDelete: "cascade"
});

Users.hasMany(Services,{
    foreignKey:{
        name:"userId",
        
    },
    onDelete: "cascade"
});
export default Users;