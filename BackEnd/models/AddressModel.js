import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const {DataTypes} = Sequelize;


const Address = db.define('address',{
    province:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    city:{
        type: DataTypes.STRING,
        allowNull:false
    },
    regency:{
        type: DataTypes.STRING,
        allowNull: false

    },
    details:{
        type: DataTypes.STRING,
        allowNull:false
    },
    postal_code:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    freezeTableName:true
});


export default Address;